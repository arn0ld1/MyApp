import React from "react";
import { useGetLawyersQuery } from "../../redux/slices/api/lawyerApiSlice";
import { toast } from "sonner";
import PublicNavbar from "../PublicNavbar";
import PublicFooter from "../PublicFooter";

const LawyersList = () => {
  const { data: lawyers, isLoading, isError } = useGetLawyersQuery();

  const groupedLawyers = React.useMemo(() => {
    if (!lawyers) return {};

    return lawyers.reduce((acc, lawyer) => {
      const practiceArea = lawyer.practiceArea;
      if (!acc[practiceArea]) {
        acc[practiceArea] = [];
      }
      acc[practiceArea].push(lawyer);
      return acc;
    }, {});
  }, [lawyers]);

  return (
    <>
      <PublicNavbar />
      <div className="container mx-auto py-8">
        {isError && <div>Error fetching lawyers data.</div>}
        {isLoading && <div>Loading...</div>}
        {Object.keys(groupedLawyers).map((practiceArea, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-2xl font-bold mb-4">{practiceArea}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {groupedLawyers[practiceArea].map((lawyer) => (
                <div
                  key={lawyer._id}
                  className="p-6 border border-gray-200 rounded-md shadow-md"
                >
                  <h3 className="text-lg font-semibold mb-2">{lawyer.name}</h3>
                  <p className="text-gray-500 mb-2">{lawyer.email}</p>
                  <p className="text-gray-500">{lawyer.phone}</p>
                  {/* Add more lawyer details as needed */}
                </div>
              ))}
            </div>
          </div>
        ))}
        {/* Example lawyers */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Example Practice Area 1</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 border border-gray-200 rounded-md shadow-md">
              <h3 className="text-lg font-semibold mb-2">Example Lawyer 1</h3>
              <p className="text-gray-500 mb-2">example1@example.com</p>
              <p className="text-gray-500">123-456-7890</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-md shadow-md">
              <h3 className="text-lg font-semibold mb-2">Example Lawyer 2</h3>
              <p className="text-gray-500 mb-2">example2@example.com</p>
              <p className="text-gray-500">987-654-3210</p>
            </div>
          </div>
        </div>
      </div>
      <PublicFooter />
    </>
  );
};

export default LawyersList;
