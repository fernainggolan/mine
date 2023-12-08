const { User } = require("../models");
const { comparePassword } = require("../helpers/bcrypt");
const { encodeToken } = require("../helpers/jwt");
const { sendEmail } = require("../helpers/nodemailer");
const { OAuth2Client } = require("google-auth-library");

GOOGLE_CLIENT_ID =
  "23338795543-5lr19iet2b681tun5mf7kgj8tc36ice1.apps.googleusercontent.com";

class UserController {
  static async handleRegister(req, res, next) {
    try {
      const { email, password, phoneNumber, address } = req.body;

      const newUser = await User.create({
        email,
        password,
        phoneNumber,
        address,
      });
      sendEmail(email);
      res.status(201).json({ id: newUser.id, email: newUser.email });
    } catch (err) {
      next(err);
    }
  }
  static async handleLogin(req, res, next) {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        throw { name: "BAD_REQUEST" };
      }

      const foundUser = await User.findOne({ where: { email } });
      if (!foundUser) {
        throw { name: "INVALID_CREDENTIALS" };
      }

      const isValid = comparePassword(password, foundUser.password);
      if (!isValid) {
        throw { name: "INVALID_CREDENTIALS" };
      }

      const payload = { id: foundUser.id };
      const access_token = encodeToken(payload);

      res.status(200).json({
        access_token,
        user: {
          id: foundUser.id,
          email: foundUser.email,
        },
      });
    } catch (err) {
      next(err);
    }
  }
  static async handleGoogleLogin(req, res, next) {
    try {
      const token = req.headers.google_token;
      const CLIENT_ID = GOOGLE_CLIENT_ID;

      const client = new OAuth2Client(CLIENT_ID);
      const ticket = await client.verifyIdToken({
        idToken: token,
        audience: CLIENT_ID,
      });
      const googlePayload = ticket.getPayload();

      const [user, created] = await User.findOrCreate({
        where: { email: googlePayload.email },
        defaults: {
          email: googlePayload.email,
          password: String(Math.random()),
        },
        hooks: false,
      });

      let payload = { id: user.id };
      const access_token = encodeToken(payload);

      res.status(200).json({
        access_token,
        user: {
          id: user.id,
          email: user.email,
        },
      });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = UserController;
