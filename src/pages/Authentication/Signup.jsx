import { useForm } from 'react-hook-form';
import { Link } from 'react-router';
import { toast } from 'sonner';
import { useTranslation } from 'react-i18next';

export default function SignUp() {
  const { t } = useTranslation();
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const password = watch('password', '');

  const onSubmit = (data) => {
    console.log(data);
    toast.success('Account created successfully!');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 p-4 transition-colors duration-300">

      <div className='mr-5 p-5 flex flex-col items-center justify-center gap-3'>
        <p><img src="../../../public/logoTransparent.png" alt="জনতার অভিযোগ" className='w-36' /> </p>
        <h1 className='text-black dark:text-white font-semibold text-4xl'>{t("home.title")}</h1>
        <p className='text-gray-800 dark:text-gray-300'>{t("home.subtitle")}</p>
      </div>
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl w-full max-w-2xl transition-colors duration-300">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100 mb-2">{t("auth.signup.title")}</h2>
        <p className="text-center text-gray-500 dark:text-gray-400 mb-6">{t("auth.signup.subtitle")}</p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">{t("auth.signup.firstName")}</label>
              <input
                type="text"
                placeholder="Enter your full name"
                {...register('fullName', { required: 'Full Name is required' })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-green-500 focus:border-green-500 transition-colors duration-300"
              />
              {errors.fullName && <p className="mt-1 text-sm text-red-600">{errors.fullName.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Phone Number</label>
              <input
                type="tel"
                placeholder="+880 1XXX XXXXXX"
                {...register('phoneNumber', { required: 'Phone Number is required', pattern: { value: /^\+8801[0-9]{9}$/, message: 'Invalid phone number format' } })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-green-500 focus:border-green-500 transition-colors duration-300"
              />
              {errors.phoneNumber && <p className="mt-1 text-sm text-red-600">{errors.phoneNumber.message}</p>}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">{t("auth.signup.email")}</label>
            <input
              type="email"
              placeholder="your.email@example.com"
              {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' } })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-green-500 focus:border-green-500 transition-colors duration-300"
            />
            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">{t("auth.signup.password")}</label>
              <input
                type="password"
                placeholder="Minimum 6 characters"
                {...register('password', { required: 'Password is required', minLength: { value: 6, message: 'Password must be at least 6 characters' } })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-green-500 focus:border-green-500 transition-colors duration-300"
              />
              {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">{t("auth.signup.confirmPassword")}</label>
              <input
                type="password"
                placeholder="Repeat your password"
                {...register('confirmPassword', {
                  required: 'Please confirm your password',
                  validate: (value) => value === password || 'Passwords do not match'
                })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-green-500 focus:border-green-500 transition-colors duration-300"
              />
              {errors.confirmPassword && <p className="mt-1 text-sm text-red-600">{errors.confirmPassword.message}</p>}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Address</label>
            <input
              type="text"
              placeholder="Enter your full address"
              {...register('address', { required: 'Address is required' })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-green-500 focus:border-green-500 transition-colors duration-300"
            />
            {errors.address && <p className="mt-1 text-sm text-red-600">{errors.address.message}</p>}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">District</label>
              <input
                type="text"
                placeholder="e.g., Dhaka"
                {...register('district', { required: 'District is required' })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-green-500 focus:border-green-500 transition-colors duration-300"
              />
              {errors.district && <p className="mt-1 text-sm text-red-600">{errors.district.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Upazila/Thana</label>
              <input
                type="text"
                placeholder="e.g., Dhanmondi"
                {...register('upazila', { required: 'Upazila/Thana is required' })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-green-500 focus:border-green-500 transition-colors duration-300"
              />
              {errors.upazila && <p className="mt-1 text-sm text-red-600">{errors.upazila.message}</p>}
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-300"
          >
            {t("auth.signup.signUpButton")}
          </button>
        </form>

        <div className="mt-6 text-center text-sm">
          <p className="text-gray-600 dark:text-gray-400">{t("auth.signup.hasAccount")} <Link to={'/signin'} className="font-medium text-green-500 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300">{t("auth.signup.signInLink")}</Link></p>
        </div>
      </div>
    </div>
  );
}