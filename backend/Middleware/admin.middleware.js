const adminMiddleware = (req, res, next) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({
      message: 'Access denied. Admins only.',
    });
  }

  // If user is admin, allow next step
  next();
};

module.exports = adminMiddleware;
