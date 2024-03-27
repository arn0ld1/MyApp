import mongoose, { Schema } from "mongoose";

const PdfDetailsSchema = new Schema(
  {
    pdf: String,
    title: String,
  },
  { collection: "PdfDetails" }
);

const pdfDetails = mongoose.model("PdfDetails", PdfDetailsSchema);

export default pdfDetails