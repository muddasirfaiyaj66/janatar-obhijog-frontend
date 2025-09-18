// src/components/SignIn.jsx
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";

export default function SignIn() {
  const { t } = useTranslation();
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 p-4 transition-colors duration-300">
      <div className="mr-5 p-5 flex flex-col items-center justify-center gap-3">
        <p>
          <img
            src="../../../public/logoTransparent.png"
            alt="জনতার অভিযোগ"
            className="w-40"
          />
        </p>
        <h1 className="text-black dark:text-white font-semibold text-4xl">{t("home.title")}</h1>
        <p className="text-gray-800 dark:text-gray-300">{t("home.subtitle")}</p>
      </div>

      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl w-full max-w-md transition-colors duration-300">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100 mb-2">
          {t("auth.signin.title")}
        </h2>
        <p className="text-center text-gray-500 dark:text-gray-400 mb-6">
          {t("auth.signin.subtitle")}
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              {t("auth.signin.email")}
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
              className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-green-500 focus:border-green-500 transition-colors duration-300"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <div className="flex justify-between items-center">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                {t("auth.signin.password")}
              </label>
              <a href="#" className="text-sm text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                {t("auth.signin.forgotPassword")}
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
              className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-green-500 focus:border-green-500 transition-colors duration-300"
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-600">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-300"
          >
            {t("auth.signin.signInButton")}
          </button>
        </form>

        <div className="mt-6 text-center text-sm">
          <p className="text-gray-600 dark:text-gray-400">
            {t("auth.signin.noAccount")}{" "}
            <Link
              to={"/signup"}
              className="font-medium text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
            >
              {t("auth.signin.signUpLink")}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
