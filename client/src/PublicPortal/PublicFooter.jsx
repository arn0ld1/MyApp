import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const PublicFooter = () => {
  const Year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col gap-5">
            <h2 className="text-3xl text-pink-500">ABOUT WEBSITE</h2>
            <p>
              This is a public platform that seeks to provide a fair, accessible
              and responsive forum for dispute resolution.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-pink-500 uppercase mb-4">
              Creativity
            </h2>
            <ul className="text-sm">
              <li className="my-1">Website Guidelines & Ideas</li>
              <li className="my-1">Tips & Tricks</li>
              <li className="my-1">Photography</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-pink-500 uppercase mb-4">
              Headquarters
            </h2>
            <p className="text-sm">Nairobi, Kenya</p>
            <p className="text-sm">123 Justice Avenue</p>
            <p className="text-sm">Email: info@e-sheria.ke</p>
            <p className="text-sm">Phone: +254 123 456 789</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-pink-500 uppercase mb-4">
              Contact Us
            </h2>
            <p className="text-sm">Email: EsheriaCourt1@gmail.ac.ke</p>
            <p className="text-sm">Phone: +254 716 185524 </p>
            <div className="flex space-x-4 mt-2">
              <a
                href="https://github.com/"
                className="text-white hover:text-pink-500 transition-transform transform hover:scale-125"
              >
                <FaGithub className="text-2xl" />
              </a>
              <a
                href="https://www.linkedin.com/"
                className="text-white hover:text-pink-500 transition-transform transform hover:scale-125"
              >
                <FaLinkedinIn className="text-2xl" />
              </a>
              <a
                href="https://twitter.com/x"
                className="text-white hover:text-pink-500 transition-transform transform hover:scale-125"
              >
                <FaTwitter className="text-2xl" />
              </a>
              <a
                href="https://www.instagram.com/"
                className="text-white hover:text-pink-500 transition-transform transform hover:scale-125"
              >
                <FaInstagram className="text-2xl" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <div className="max-w-md mx-auto">
            <form>
              <div className="flex items-center">
                <input
                  type="email"
                  placeholder="Enter email for updates"
                  className="w-full text-gray-800 p-3 h-12 rounded-full focus:outline-none focus:border border-pink-800"
                />
                <button
                  type="submit"
                  className="bg-pink-500 px-6 py-3 rounded-full text-white ml-3 hover:bg-pink-600 transition-transform transform hover:scale-105"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>

        <h6 className="text-center mt-16">
          &copy; {Year} E-sheria. All Rights Reserved.
        </h6>
      </div>
    </footer>
  );
};

export default PublicFooter;
