const connection = require('../config/connection');
const { User } = require('../models');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
// insert code
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
