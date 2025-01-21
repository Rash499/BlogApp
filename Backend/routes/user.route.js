import express from 'express';

const router = express.Router();

router.get("/routertest",(req,res) => {
    res.status(200).send("router test");
})

export default router
