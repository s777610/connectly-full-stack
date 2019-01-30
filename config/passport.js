const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");
const User = mongoose.model("users");
const keys = require("../config/keys");

// Setup options for JWT Strategy
const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: keys.secretOrKey
};

// Create JWT strategy, done is callback func
// passport extract jwt from incoming request
// and get jwt_payload from jwt
// find user form db
// add user to req obj as req.user
const authStrategy = new JwtStrategy(opts, (jwt_payload, done) => {
  User.findById(jwt_payload.id)
    .then(user => {
      if (user) {
        return done(null, user);
      }
      return done(null, false);
    })
    .catch(err => console.log(err));
});

// Tell passport to use this strategy
module.exports = passport => {
  passport.use(authStrategy);
};
