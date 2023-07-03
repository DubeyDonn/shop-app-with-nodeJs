import fs from "fs";
import path from "path";
const data = JSON.parse(fs.readFileSync(path.resolve("data.json"), "utf-8"));
const users = data.users;

export const getallUsers = (req, res) => {
  res.json(users);
};

export const getSingleUser = (req, res) => {
  const user = users.find((p) => p.id === +req.params.id);
  res.json(user);
};

export const createUser = (req, res) => {
  users.push(req.body);
  res.json(req.body);
};

export const replaceUser = (req, res) => {
  const userIndex = users.findIndex((p) => p.id === +req.params.id);
  users[userIndex] = req.body;
  res.json(req.body);
};

export const updateUser = (req, res) => {
  const userIndex = users.findIndex((p) => p.id === +req.params.id);
  users[userIndex] = { ...users[userIndex], ...req.body };
  res.json(req.body);
};

export const deleteUser = (req, res) => {
  const userIndex = users.findIndex((p) => p.id === +req.params.id);
  users.splice(userIndex, 1);
  res.json({ message: "user deleted" });
};

// export default users;
