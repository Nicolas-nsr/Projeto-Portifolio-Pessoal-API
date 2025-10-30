const { generateToken } = require('../service/authService');
const { admins } = require('../model/userModel');

exports.login = (req, res) => {
  const { username, password } = req.body;
  const admin = admins.find(u => u.username === username && u.password === password);
  if (!admin) {
    return res.status(401).json({ error: 'Credenciais inválidas' });
  }
  const token = generateToken({ role: 'admin', username });
  res.json({ token });
};
