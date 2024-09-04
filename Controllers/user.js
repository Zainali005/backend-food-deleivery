export const loggedIn = async (req, res) => {
    const { username, password } = req.body;
    try {
      const user = await User.findOne({ username });
      if (!user) {
        return res.status(404).send({ status: false, message: "User not found" });
      }
      if (user.password !== password) {
        return res.status(401).send({
          status: false,
          message: "Incorrect Password",
        });
      }
      return res.status(200).send({
        status: true,
        message: "Logged in Successfully!",
        redirectUrl: "/dashboard",
      });
    } catch (error) {
      return res.status(500).send({
        status: false,
        message: "An error occurred during login",
        error: error.message,
      });
    }
  }

  export const Register = async (req, res) => {
    const { name, username, password } = req.body;
    const usernamedb = await User.find({ username });
    if (usernamedb.length > 0) {
      return res.status(200).json({
        status: false,
        message: "Username already exists",
      });
    }
    const newUser = new User({ name, username, password });
    await newUser.save();
    res.status(201).json({
      status: true,
      message: "User registered successfully",
    });
  }

  export const getAllUsers = async (req, res) => {
    try {
      const users = await User.find();
      res.status(200).json({ users });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Error fetching users" });
    }
  }