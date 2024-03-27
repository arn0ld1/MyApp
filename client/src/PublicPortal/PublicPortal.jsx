import PublicNavbar from "./PublicNavbar";
import PublicFooter from "./PublicFooter";
import { Link } from "react-router-dom";
import ContactLawyers from "../components/ContactLawyers";

const PublicPortal = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <PublicNavbar />
      <div className="bg-blue-900 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
              Welcome to the Public Portal
            </h1>
            <p className="mt-4 text-xl text-white">
              This is the home for the general public and shows how you can
              interact with the E-court Module.
              <br />
              Welcome we are happy to have you.
            </p>
            <Link
              to="/linkpage"
              className="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out"
            >
              Click here to go back to the Info Page
            </Link>
            <div className="mt-6"></div>
          </div>
        </div>
      </div>
      <div className="flex-grow">
        <div className="container mx-auto py-5">
          <div className="flex justify-center">
            <div className="w-full md:w-8/12">
              <div className="text-center mb-5">
                <p className="text-lg">
                  Click on any of the Buttons Below to be Taken to the
                  respective Destinations. <br />
                  You can Find Lawyers who are ready to be of service to you{" "}
                  <br />
                  You can also browse public court records and Download them as
                  you see fit <br />
                </p>
              </div>
              <div className="container mx-auto py-8">
                <div className="flex justify-between mb-8">
                  <div className="w-1/3">
                    <div className="bg-white shadow rounded-lg p-6 mb-4">
                      <h2 className="text-lg font-semibold mb-2">
                        Public Court Documents
                      </h2>
                      <p className="text-gray-700">
                        Browse through the available court documents that are
                        open to the public.
                      </p>
                      <Link
                        to="/records"
                        className="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out"
                      >
                        View Court Documents
                      </Link>
                    </div>
                  </div>
                  <div className="w-1/3">
                    {/* Browse Lawyers */}
                    <div className="bg-white shadow rounded-lg p-6 mb-4">
                      <h2 className="text-lg font-semibold mb-2">
                        Browse Lawyers
                      </h2>
                      <p className="text-gray-700">
                        Find qualified lawyers who can assist you with your
                        legal matters.
                      </p>
                      <Link
                        to="/lawyers"
                        className="mt-4 inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out"
                      >
                        Find Lawyers
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactLawyers />
      <PublicFooter />
    </div>
  );
};

export default PublicPortal;
