const db = require('../config/connection');
const { Profile } = require('../models');
const jsSeed = require('./accountSeed.json');

db.once('open', async () => {
  try {
    await Profile.deleteMany({});
    await Profile.create(jsSeed);

    console.log('JS data done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
