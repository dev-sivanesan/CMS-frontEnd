import express from "express";
import registerController from "../controller/registerController.js";
import loginController from "../controller/loginController.js";
import checkToken from "../middleware/JwtMiddleware.js";
import { createUserController, getUserController,getallUserController,updateUserController,deleteUserController} from "../controller/userController.js";
const router = express.Router();

router.post("/register", registerController);
router.post("/login", loginController);
router.post("/user/createUser", checkToken, createUserController);
router.get("/user/getAllUsers", checkToken, getallUserController);
router.get("/user/getUser", checkToken, getUserController);
router.put("/user/updateUser", checkToken, updateUserController);
router.delete("/user/deleteUser", checkToken, deleteUserController);

export default router;

