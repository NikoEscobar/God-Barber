module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'godbarber',
  define: {
    timestamp: true,
    underscored: true,
    underscoredAll: true,
  },
};
