const User = require("../model/User");
const bcrypt = require("bcryptjs");
const signup = async (req, res, next) => {
  const { name, email, password } = req.body;

  //checking if user email already exist ,if we dont check ths=is we get error
  let existingUser;
  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    console.log(err);
  }
  if (existingUser) {
    return res.status(400).json({ message: "user already exist" });
  }
  //hasing password before saving to db
  const hashedPassword = bcrypt.hashSync(password);
  const user = new User({
    name, /// name: name
    email,
    password: hashedPassword,
  });

  try {
    await user.save();
  } catch (err) {
    console.log(err);
  }
  return res.status(201).json({ message: user });
};

const login = async (req, res, next) => {
  const { email, password } = req.body;

  let existingUser;

  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    return new Error(err);
  }
  const isPaswordCorrect = bcrypt.compareSync(password, existingUser.password);
  if (existingUser && isPaswordCorrect) {
    res.send("login success");
  } else {
    return res.status(400).json({ message: "user not found" });
  }
};
exports.signup = signup;
exports.login = login;
