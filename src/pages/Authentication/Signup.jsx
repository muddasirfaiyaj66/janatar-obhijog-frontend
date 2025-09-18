import { useForm } from 'react-hook-form';
import { Link } from 'react-router';
import { toast } from 'sonner';

export default function SignUp() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const password = watch('password', '');

  const onSubmit = (data) => {
    console.log(data);
    toast.success('Account created successfully!');
  };

  return (
    <div className="flex flex-col  items-center justify-center min-h-screen bg-[#EDFAF9] p-4">

      <div className='mr-5 p-5 flex flex-col items-center justify-center gap-3'>
        <p><img src="../../../public/logoTransparent.png" alt="জনতার অভিযোগ" className='w-36'/> </p>
        <h1 className='text-black font-semibold text-4xl'>জনতার অভিযোগ</h1>
        <p className='text-gray-800'>Digital Complaint Box</p>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-2xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Create Account</h2>
        <p className="text-center text-gray-500 mb-6">Join the digital complaint system to make your voice heard</p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                {...register('fullName', { required: 'Full Name is required' })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
              />
              {errors.fullName && <p className="mt-1 text-sm text-red-600">{errors.fullName.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input
                type="tel"
                placeholder="+880 1XXX XXXXXX"
                {...register('phoneNumber', { required: 'Phone Number is required', pattern: { value: /^\+8801[0-9]{9}$/, message: 'Invalid phone number format' } })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
              />
              {errors.phoneNumber && <p className="mt-1 text-sm text-red-600">{errors.phoneNumber.message}</p>}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="your.email@example.com"
              {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' } })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
            />
            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                placeholder="Minimum 6 characters"
                {...register('password', { required: 'Password is required', minLength: { value: 6, message: 'Password must be at least 6 characters' } })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
              />
              {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <input
                type="password"
                placeholder="Repeat your password"
                {...register('confirmPassword', {
                  required: 'Please confirm your password',
                  validate: (value) => value === password || 'Passwords do not match'
                })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
              />
              {errors.confirmPassword && <p className="mt-1 text-sm text-red-600">{errors.confirmPassword.message}</p>}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Address</label>
            <input
              type="text"
              placeholder="Enter your full address"
              {...register('address', { required: 'Address is required' })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
            />
            {errors.address && <p className="mt-1 text-sm text-red-600">{errors.address.message}</p>}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">District</label>
              <input
                type="text"
                placeholder="e.g., Dhaka"
                {...register('district', { required: 'District is required' })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
              />
              {errors.district && <p className="mt-1 text-sm text-red-600">{errors.district.message}</p>}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Upazila/Thana</label>
              <input
                type="text"
                placeholder="e.g., Dhanmondi"
                {...register('upazila', { required: 'Upazila/Thana is required' })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
              />
              {errors.upazila && <p className="mt-1 text-sm text-red-600">{errors.upazila.message}</p>}
            </div>
          </div>
          
          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Create Account
          </button>
        </form>
        
        <div className="mt-6 text-center text-sm">
          <p>Already have an account? <Link to={'/signin'}  className="font-medium text-green-500 hover:text-green-700">Sign in here</Link></p>
        </div>
      </div>
    </div>
  );
}