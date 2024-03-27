import { useForm } from "react-hook-form";
import { useAddLawyerMutation } from "../redux/slices/api/lawyerApiSlice";
import { toast } from "sonner";

const AddLawyer = ({ setOpen, userData }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: userData ?? {},
  });

  const [addLawyer, { isLoading }] = useAddLawyerMutation();

  const onSubmit = async (data) => {
    try {
      await addLawyer(data).unwrap();
      toast.success(
        userData
          ? "Lawyer Updated Successfully"
          : "New Lawyer Added Successfully"
      );

      setTimeout(() => {
        setOpen(false);
      }, 1500);
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="bg-white overflow-hidden shadow rounded-lg">
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            {userData ? "Update Lawyer" : "Add New Lawyer"}
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                {...register("name", { required: "Name is required" })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              />
              {errors.name && (
                <span className="text-red-500">{errors.name.message}</span>
              )}
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                {...register("email", { required: "Email is required" })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              />
              {errors.email && (
                <span className="text-red-500">{errors.email.message}</span>
              )}
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone
              </label>
              <input
                id="phone"
                type="tel"
                {...register("phone", { required: "Phone is required" })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              />
              {errors.phone && (
                <span className="text-red-500">{errors.phone.message}</span>
              )}
            </div>
            <div>
              <label
                htmlFor="practiceArea"
                className="block text-sm font-medium text-gray-700"
              >
                Practice Area
              </label>
              <input
                id="practiceArea"
                type="text"
                {...register("practiceArea", {
                  required: "Practice Area is required",
                })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              />
              {errors.practiceArea && (
                <span className="text-red-500">
                  {errors.practiceArea.message}
                </span>
              )}
            </div>
            <div>
              <button
                type="submit"
                className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                {isLoading ? "Adding..." : "Add Lawyer"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddLawyer;
