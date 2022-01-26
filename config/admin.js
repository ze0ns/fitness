module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '539ba2d3a97d16277d4973ad9f0188ec'),
  },
});
