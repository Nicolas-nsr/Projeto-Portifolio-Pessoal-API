const { generateToken } = require('../service/authService');
const { attendants } = require('../model/userModel');

exports.login = (req, res) => {
  const { username, password } = req.body;
  const attendant = attendants.find(u => u.username === username && u.password === password);
  if (!attendant) {
    return res.status(401).json({ error: 'Credenciais inválidas' });
  }
  const token = generateToken({ role: 'attendant', username });
  res.json({ token });
};
