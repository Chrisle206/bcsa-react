const { Schema, model } = require('mongoose');

// Schema to create User model
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      max_length: 50,
      trim:true,
      unique:true
    },
    password: {
      type: String,
      required: true,
      max_length: 50,
    },
    character: [
    attacks=[],
    idles=[],
    image='',
    Hp=0,
    Atk=0,
    Def=0
    ],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const User = model('user', userSchema);

module.exports = User;