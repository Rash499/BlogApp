import express from 'express'
import userRouter from './routes/user.route.js'
import postRouter from './routes/post.route.js'
import commentRouter from './routes/comment.route.js'
import webHookRouter from './routes/webhook.route.js'
import connectDB from './lib/connectDB.js'
import dotenv from 'dotenv';
dotenv.config();

const app = express()
app.use("/webhooks",webHookRouter); //can get confilict with json modules 
                                    //for webhook using body-parser
app.use(express.json());

/* app.get("/test",(req,res) => {
    res.status(200).send("it works!")
}) */

app.use("/users",userRouter);
app.use("/posts",postRouter);
app.use("/comments",commentRouter);


app.use((error,req,res,next) => {

    res.status(error.status || 500);

    res.json({
        message:error.message || "Something went wrong!",
        status:error.status,
        stack:error.stack,
    });
});

app.listen(3000,() => {
    console.log("Server is running")
    connectDB()
})