import express from "express";

const router = express.Router();

router.delete("/", deleteController);

export default router;
