const { generateToken } = require('../service/authService');
const { admins } = require('../model/userModel');


exports.register = (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ error: 'Usuário e senha obrigatórios' });
  }
  if (admins.find(u => u.username === username)) {
    return res.status(409).json({ error: 'Usuário já existe' });
  }
  admins.push({ username, password });
  res.status(201).json({ mensagem: 'Usuário criado com sucesso' });
};

exports.login = (req, res) => {
  const { username, password } = req.body;
  const admin = admins.find(u => u.username === username && u.password === password);
  if (!admin) {
    return res.status(401).json({ error: 'Credenciais inválidas' });
  }
  const token = generateToken({ role: 'admin', username });
  res.json({ token });
};
