const jwt = require('jsonwebtoken');
const SECRET = 'supersecret';

exports.generateToken = (payload) => {
  return jwt.sign(payload, SECRET, { expiresIn: '1h' });
};

exports.authMiddleware = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader) return res.status(401).json({ error: 'Token não fornecido' });
  const token = authHeader.split(' ')[1];
  jwt.verify(token, SECRET, (err, user) => {
    if (err) return res.status(403).json({ error: 'Token inválido' });
    req.user = user;
    next();
  });
};