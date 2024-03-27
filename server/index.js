import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import { errorHandler, routeNotFound } from "./middlewares/errorMiddlewaves.js";
import routes from "./routes/index.js";
import { dbConnection } from "./utils/index.js";
import multer from "multer";
import "./models/pdfDetails.js";
import mongoose from "mongoose";
import lawyers from "./routes/Lawyers.js";


dotenv.config();

dbConnection();

const PORT = process.env.PORT || 5000;

const app = express();

app.use("/files", express.static("files"));

app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
  })
);


//multer------------------------------------------------------------

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./files");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + file.originalname);
  },
});

const PdfSchema = mongoose.model("PdfDetails")
const upload = multer({ storage: storage });

app.post("/api/upload-files", upload.single("file"), async (req, res) => {
  console.log(req.file);
  const title = req.body.title;
  const fileName = req.file.filename;
  try {
    await PdfSchema.create({ title: title, pdf: fileName });
    res.send({ status: "ok" });
  } catch (error) {
    res.json({ status: error });
  }
});

app.get("/api/get-files", async (req, res) => {
  try {
    PdfSchema.find({}).then((data) => {
      res.send({ status: "ok", data: data });
    });
  } catch (error) {}
});

//-----------------------------------------------------------------------------
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use(morgan("dev"));
app.use("/api/lawyers", lawyers);
app.use("/api", routes);


app.use(routeNotFound);
app.use(errorHandler);
app.use((err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }

  if (err.name === "JsonWebTokenError") {
    return res.status(401).send("Invalid token.");
  }

  res.status(400).send("Something went wrong.");
});

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));