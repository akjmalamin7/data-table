const express = require("express");
const app = new express();
const path = require("path");
const bodyParser = require("body-parser")
/* secuirity middleware */
const rateLimit = require("express-rate-limit");
const helmet = require("helmet")
const mongoSanitize = require("express-mongo-sanitize")
const xss = require("xss-clean")
const hpp = require("hpp")
const cors = require("cors")
const router = require("./src/routes/api")
/* cors */
const corsOptions = {
    origin: process.env.CORS_ALLOW_ORIGIN || 'http://localhost:5173', // Explicitly allow React app's origin
    methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
};
app.use(cors(corsOptions))

/* security */
app.use(helmet())
app.use(mongoSanitize())
app.use(xss())
app.use(hpp())

/* body parser */
app.use(bodyParser.json({ limit: "50mb" }))
app.use(bodyParser.urlencoded({ limit: "50md", extended: true }))

/* request rate limit */
const limiter = rateLimit({ windowMs: 15 * 60 * 100, max: 300 })
app.use(limiter)
app.use('/src/assets/uploads/images', express.static(path.join(__dirname, 'src/assets/uploads/images')));
/* router */
app.use("/api/v1", router);
app.get("/", (req, res) => {
    res.status(200).json({ message: "welcome here" })
})
app.get("/", (req, res) => {
    res.status(404).json({ status: "failed", data: "Not Found" })
})
module.exports = app