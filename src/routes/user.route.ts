import { Router } from "express";
import { getUsers } from "../controllers/user.controller";

const router = Router();

router.get('/v1/users', getUsers);

export default router;