import express from "express";

import {
    getallUsers,
    getSingleUser,
    createUser,
    replaceUser,
    updateUser,
    deleteUser,
} from "../controller/user.js";

const router = express.Router();

export default router
    .get("/", getallUsers)
    .get("/:id", getSingleUser)
    .post("/", createUser)
    .put("/:id", replaceUser)
    .patch("/:id", updateUser)
    .delete("/:id", deleteUser);
    
