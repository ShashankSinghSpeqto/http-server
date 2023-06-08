const mongoose = require("mongoose");
const app = require("./app.js");
const config = require("./config/config.js");

let server;
mongoose.connect(config.mongoose.url, config.mongoose.options).then(() => {
    server = app.listen(config.port, () => {
        console.log(`Listening to port ${config.port}`);
    });
});

// app.use("/v1/insert", insertRoute);
// app.use("/v1/post", postRoute);
// app.use("/v1/put", putRoute);
// app.use("/v1/delete", deleteRoute);
