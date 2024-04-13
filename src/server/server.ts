import express from 'express'
import os from "os"
import config, { PORT, SERVER_URL } from "./config"

console.log("port:", PORT);


const server = express();

server.use(express.static("dist"))

server.set("view engine", "ejs")
server.use("/", (req, res) => {
    res.render("index", {
        initialContent: "Loading..."
    })
})

server.listen(config.PORT, config.HOST, () => {
    console.info(
        `Server started at ${SERVER_URL}`  ,
        `Free Mem: ${os.freemem() / 1024 / 1024} mb `,
    )
})