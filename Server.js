const express = require("express");
const cors = require("cors");
const connectDB = require("./Connectdb");
const User = require("./UserScheme");

const app = express();
app.use(express.json());
app.use(cors());


connectDB();


app.post("/add-user", async (req, res) => {
    const user = new User(req.body);
    await user.save();
    res.json({ message: "User created", user });
});


app.get("/get-users", async (req, res) => {
    const users = await User.find();
    res.json(users);
});


app.put("/update-user/:id", async (req, res) => {
    const updated = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
});


app.delete("/delete-user/:id", async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: "User deleted" });
});

app.listen(3000, () => console.log("Server running on port 3000"));

