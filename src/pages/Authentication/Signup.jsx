import { useForm } from "react-hook-form";
import { Link } from "react-router";
import { toast } from "sonner";
import Divisions from "../../../public/locals/division.json";
import { useEffect, useState } from "react";

export default function SignUp() {
  const [division, setDivision] = useState("");
  const [district, setDistrict] = useState("");
  const [upazila, setUpazila] = useState("");

  const [districts, setDistricts] = useState([]);
  const [upazilas, setUpazilas] = useState([]);
  //
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const divisions = Divisions;
  console.log(divisions);

  const password = watch("password", "");

  const onSubmit = (data) => {
    // setSelectedDivision(data.division);
    console.log(data);
    toast.success("Account created successfully!");
  };

  // working with api
  // fetch districts when division changes
  useEffect(() => {
    if (division) {
      fetch(`https://bdapis.com/api/v1.2/division/${division}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setDistricts(data?.data || []);
          setDistrict(""); // reset district
          setUpazilas([]); // reset upazilas
          setUpazila(""); // reset upazila
        });
    }
  }, [division]);

  // set upazilas when district changes
  useEffect(() => {
    if (district) {
      const districtData = districts.find((d) => d.district === district);
      if (districtData) {
        setUpazilas([districtData.district, ...districtData.upazilla]);
        setUpazila(""); // reset upazila when district changes
      }
    }
  }, [district, districts]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#EDFAF9] p-4">
      {/* Logo + Title */}
      <div className="mr-5 p-5 flex flex-col items-center justify-center gap-3">
        <p>
          <img
            src="../../../public/logoTransparent.png"
            alt="জনতার অভিযোগ"
            className="w-36"
          />
        </p>
        <h1 className="text-black font-semibold text-4xl">জনতার অভিযোগ</h1>
        <p className="text-gray-800">Digital Complaint Box</p>
      </div>

      {/* Sign Up Card */}
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-2xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Create Account
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Join the digital complaint system to make your voice heard
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* First / Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                First Name
              </label>
              <input
                type="text"
                placeholder="Enter your first name"
                {...register("firstName", {
                  required: "First Name is required",
                })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
              />
              {errors.firstName && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.firstName.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Enter your last name"
                {...register("lastName", { required: "Last Name is required" })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
              />
              {errors.lastName && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </div>

          {/* Email / Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                placeholder="your.email@example.com"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="+8801XXXXXXXXX"
                {...register("phone", {
                  required: "Phone Number is required",
                  pattern: {
                    value: /^\+8801[0-9]{9}$/,
                    message: "Invalid phone number format",
                  },
                })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.phone.message}
                </p>
              )}
            </div>
          </div>

          {/* Passwords */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                placeholder="Minimum 6 characters"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
              />
              {errors.password && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="Repeat your password"
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                  validate: (value) =>
                    value === password || "Passwords do not match",
                })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-green-500 focus:border-green-500 transition-colors duration-300"
              />
              {errors.confirmPassword && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Address
            </label>
            <input
              type="text"
              placeholder="Enter your full address"
              {...register("address", { required: "Address is required" })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
            />
            {errors.address && (
              <p className="mt-1 text-sm text-red-600">
                {errors.address.message}
              </p>
            )}
          </div>

          {/* District / Division */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* division */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Division
              </label>
              <select
                {...register("division", { required: "Division is required" })}
                onChange={(e) => setDivision(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
              >
                <option value="">Select Division</option>
                {divisions.map((div) => (
                  <option key={div.coordinates} value={div.division}>
                    {div.division}
                  </option>
                ))}
              </select>
              {errors.division && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.division.message}
                </p>
              )}
            </div>
            {/* district */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                District
              </label>
              <select
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                disabled={!districts.length}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
              >
                <option value="">Select District</option>
                {districts.map((dist) => (
                  <option key={dist.district} value={dist.district}>
                    {dist.district}
                  </option>
                ))}
              </select>
              {errors.district && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.district.message}
                </p>
              )}
            </div>
          </div>

          {/* Thana / PostCode */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Thana/Upazila
              </label>
              <select
                value={upazila}
                onChange={(e) => setUpazila(e.target.value)}
                disabled={!upazilas.length}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
              >
                <option value="">Select Upazila</option>
                {upazilas.map((upa) => (
                  <option key={upa} value={upa}>
                    {upa}
                  </option>
                ))}
              </select>
              {errors.thana && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.thana.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Post Code
              </label>
              <input
                type="text"
                placeholder="e.g., 1205"
                {...register("postCode", { required: "Post Code is required" })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
              />
              {errors.postCode && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.postCode.message}
                </p>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-300"
          >
            {t("auth.signup.signUpButton")}
          </button>
        </form>

        <div className="mt-6 text-center text-sm">
          <p>
            Already have an account?{" "}
            <Link
              to={"/signin"}
              className="font-medium text-green-500 hover:text-green-700"
            >
              Sign in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
