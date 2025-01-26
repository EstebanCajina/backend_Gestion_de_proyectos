const sql = require("mssql");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

async function getAllUsers() {
  const request = new sql.Request();
  const result = await request.query("SELECT * FROM Users ORDER BY is_active DESC");
  return result.recordset;
}

async function addUser(user) {
  const request = new sql.Request();
  const hashedPassword = crypto.createHash('sha256').update(user.password).digest('hex');
  const query = `
    INSERT INTO Users (username, password, role, profile_picture, is_active)
    VALUES (@username, @password, @role, @profile_picture, @is_active);
    SELECT SCOPE_IDENTITY() AS id;
  `;
  request.input("username", sql.NVarChar, user.username);
  request.input("password", sql.NVarChar, hashedPassword);
  request.input("role", sql.NVarChar, user.role);
  request.input("profile_picture", sql.NVarChar, user.profile_picture);
  request.input("is_active", sql.Bit, user.is_active);
  const result = await request.query(query);
  const userId = result.recordset[0].id;

  return userId;
}
async function getUserById(id) {
  const request = new sql.Request();
  const query = `
    SELECT * FROM Users
    WHERE id = @id
  `;
  request.input("id", sql.Int, id);
  const result = await request.query(query);
  return result.recordset[0];
}

async function updateUser(id, user) {
  const request = new sql.Request();
  const hashedPassword = crypto.createHash('sha256').update(user.password).digest('hex');
  const query = `
    UPDATE Users
    SET username = @username, password = @password, role = @role, is_active = @is_active
    WHERE id = @id
  `;
  request.input("id", sql.Int, id);
  request.input("username", sql.NVarChar, user.username);
  request.input("password", sql.NVarChar, hashedPassword);
  request.input("role", sql.NVarChar, user.role);
  request.input("is_active", sql.Bit, user.is_active);
  await request.query(query);
}

async function deleteUser(id) {
  const request = new sql.Request();
  const query = `
    UPDATE Users
    SET is_active = 0
    WHERE id = @id;
  `;
  request.input("id", sql.Int, id);
  await request.query(query);
}

async function loginUser(username, password) {
  const request = new sql.Request();
  const hashedPassword = crypto.createHash('sha256').update(password).digest('hex');
  const query = `
    SELECT * FROM Users
    WHERE username = @username AND password = @password AND is_active = 1
  `;
  request.input("username", sql.NVarChar, username);
  request.input("password", sql.NVarChar, hashedPassword);
  const result = await request.query(query);
  const user = result.recordset[0];

  if (user) {
    const session_token = crypto.randomBytes(64).toString('hex');
    const userPayload = {
      id: user.id,
      username: user.username,
      role: user.role,
      profile_picture: user.profile_picture,
      is_active: user.is_active
    };
    const token = jwt.sign({ user: userPayload, session_token }, process.env.ACCESS_TOKEN_SECRET);

    const updateTokenQuery = `
      UPDATE Users
      SET session_token = @session_token
      WHERE id = @id
    `;
    request.input("session_token", sql.NVarChar, token);
    request.input("id", sql.Int, user.id);
    await request.query(updateTokenQuery);

    return { token, user };
  } else {
    throw new Error('Nombre de usuario o contraseña incorrectos');
  }
}

async function logoutUser(id) {
  const request = new sql.Request();
  const query = `
    UPDATE Users
    SET session_token = NULL
    WHERE id = @id
  `;
  request.input("id", sql.Int, id);
  await request.query(query);
}

async function validUsername(username) {
  const request = new sql.Request();
  const query = `
    SELECT * FROM Users
    WHERE username = @username
  `;
  request.input("username", sql.NVarChar, username);
  const result = await request.query(query);
  return result.recordset.length > 0;
}

async function updateProfilePicture(id, profile_picture) {
  const request = new sql.Request();
  const query = `
    UPDATE Users
    SET profile_picture = @profile_picture
    WHERE id = @id
  `;
  request.input("profile_picture", sql.NVarChar, profile_picture);
  request.input("id", sql.Int, id);
  await request.query(query);
}


  

module.exports = { getAllUsers, addUser, getUserById, updateUser, deleteUser, loginUser,logoutUser, validUsername, updateProfilePicture };