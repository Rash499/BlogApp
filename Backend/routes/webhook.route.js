import express from "express"
import { clerkWebHook } from "../controllers/webhook.controller"

const router = express.Router()

router.post("/clerk",bodyParser.raw({ type: 'application/jason'}), clerkWebHook);

export default router