const mongoose = require('mongoose')



const UserSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            unique: true, // Make the email unique
          },
        password: String,
    },
    {timestamps: true}
);

const User = mongoose.model('User', UserSchema);

module.exports = User;