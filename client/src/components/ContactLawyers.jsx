import { Link } from "react-router-dom";

const ContactLawyers = () => {
  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="bg-white overflow-hidden shadow-xl sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg font-semibold text-gray-900">
              Are you a Litigant interested in Filling a case?
            </h3>
            <div className="mt-2 text-gray-600">
              <p>
                Please contact our case admin at{" "}
                <a
                  href="mailto:ecourtCaseAdmin@gmail.com"
                  className="text-blue-500 hover:underline"
                >
                  ecourtCaseAdmin@gmail.com
                </a>{" "}
                for inquiries. We welcome open communication with litigants
                seeking justice that is a right to all!!
              </p>
            </div>
          </div>

          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg font-semibold text-gray-900">
              Are you a lawyer interested in being listed on our platform?
            </h3>
            <div className="mt-2 text-gray-600">
              <p>
                Please contact our admin at{" "}
                <a
                  href="mailto:ecourtAdmin@gmail.com"
                  className="text-blue-500 hover:underline"
                >
                  ecourtAdmin@gmail.com
                </a>{" "}
                for inquiries. We welcome open communication with potential
                lawyers to be added to our Lawyers List for public access to
                their contact information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactLawyers;
