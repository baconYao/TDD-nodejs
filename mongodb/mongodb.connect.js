const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect(
      "mongodb://SuperTestUser1:SuperTestUser1@ds361998.mlab.com:61998/express-tdd",
      { useNewUrlParser: true }
    );
  } catch(err) {
    console.error("Error connecting to mongodb");
    console.error(err);
  }
}

module.exports = { connect };