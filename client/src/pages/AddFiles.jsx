import { useEffect, useState } from "react";
import axios from "axios";
import { pdfjs } from "react-pdf";
import PdfComp from "../components/files/PdfComp";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

function App() {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState("");
  const [allImage, setAllImage] = useState([]);
  const [pdfFile, setPdfFile] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getPdf();
  }, []);

  const getPdf = async () => {
    const result = await axios.get("http://localhost:8800/api/get-files");
    console.log(result.data.data);
    setAllImage(result.data.data);
  };

  const submitImage = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("file", file);
    console.log(title, file);

    const result = await axios.post(
      "http://localhost:8800/api/upload-files",
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    console.log(result);
    if (result.data.status === "ok") {
      alert("Uploaded Successfully!!!");
      getPdf();
    }
  };

  const showPdf = (pdf) => {
    setPdfFile(`http://localhost:8800/files/${pdf}`);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredImages = allImage.filter((image) =>
    image.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <form
        className="bg-white shadow-md rounded-lg p-6 mb-4"
        onSubmit={submitImage}
      >
        <h4 className="text-xl font-semibold mb-4">
          Upload Public Court Records as PDF's for public Viewing
        </h4>
        <div className="mb-4">
          <input
            type="text"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none"
            placeholder="Title"
            required
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <input
            type="file"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none"
            accept="application/pdf"
            required
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
        <button
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none"
          type="submit"
        >
          Submit
        </button>
      </form>

      <div className="mb-8">
        <h4 className="text-xl font-semibold mb-4">Uploaded PDF:</h4>
        <input
          type="text"
          placeholder="Search by title..."
          className="w-full px-3 py-2 border rounded-lg focus:outline-none mb-4"
          value={searchTerm}
          onChange={handleSearch}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {filteredImages.map((data) => (
            <div key={data.pdf} className="bg-white shadow-md rounded-lg p-4">
              <h6 className="text-lg font-semibold mb-2">
                Title: {data.title}
              </h6>
              <div className="flex justify-between">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none"
                  onClick={() => showPdf(data.pdf)}
                >
                  Show Pdf
                </button>
                <a
                  href={`http://localhost:8800/files/${data.pdf}`}
                  download
                  className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 focus:outline-none"
                >
                  Download
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
