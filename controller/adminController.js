const User = require("../model/User");

exports.getUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      where: {
        isDeleted: false,
      },
    });
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.searchUser = async (req, res) => {
  try {
    const { email, birthDate } = req.query;

    const whereClause = {};
    if (email) whereClause.email = email;
    if (birthDate) whereClause.birthDate = `${birthDate}T00:00:00.000Z`;

    const users = await User.findAll({ where: whereClause });
    res.json(users);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    user.isDeleted = true;
    await user.save();

    res.json({ message: "User deleted." });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};
