import express from "express";

const app = express();

app.use("/v1/insert", insertRoute);
app.use("/v1/post", postRoute);
app.use("/v1/put", putRoute);
app.use("/v1/delete", deleteRoute);

app.listen(() => {
    console.log("Server Started!!");
});
