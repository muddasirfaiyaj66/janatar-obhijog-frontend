// src/components/SignIn.jsx
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import { toast } from "sonner";

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    toast.success("Signed in successfully!");
  };

  return (
    <div className="flex flex-col  items-center justify-center min-h-screen bg-[#EDFAF9] p-4">
      <div className="mr-5 p-5 flex flex-col items-center justify-center gap-3">
        <p>
          <img
            src="../../../public/logoTransparent.png"
            alt="জনতার অভিযোগ"
            className="w-40"
          />{" "}
        </p>
        <h1 className="text-black font-semibold text-4xl">জনতার অভিযোগ</h1>
        <p className="text-gray-800">Digital Complaint Box</p>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Sign In
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Enter your credentials to access your account
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
            <div className="flex justify-between items-center">
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <a href="#" className="text-sm text-blue-500 hover:text-blue-700">
                Forgot Password?
              </a>
            </div>
            <input
              type="password"
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

          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Sign In
          </button>
        </form>

        <div className="mt-6 text-center text-sm">
          <p>
            Don't have an account?{" "}
            <Link
              to={"/signup"}
              className="font-medium text-blue-500 hover:text-blue-700"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
