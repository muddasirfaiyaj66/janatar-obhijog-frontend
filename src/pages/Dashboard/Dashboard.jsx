import { useContext } from 'react';
import { AuthContext } from '../../Provider/authProvider';

const Dashboard = () => {
    const { user } = useContext(AuthContext);

    if (!user) {
        return (
            <div className="min-h-screen flex items-center justify-center ">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900">Access Denied</h1>
                    <p className="text-gray-600">Please sign in to access your dashboard.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    {/* Header */}
                    <div className="bg-green-600 px-6 py-4">
                        <h1 className="text-2xl font-bold text-white">
                            Welcome to your Dashboard
                        </h1>
                        <p className="text-green-100">
                            Manage your complaints and track their status
                        </p>
                    </div>

                    {/* User Info */}
                    <div className="px-6 py-4 border-b">
                        <div className="flex items-center space-x-4">
                            <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center">
                                <img
                                    src={user.profileImg || `https://ui-avatars.com/api/?name=${user.firstName}+${user.lastName}&background=059669&color=fff`}
                                    alt="Profile"
                                    className="w-16 h-16 rounded-full object-cover"
                                />
                            </div>
                            <div>
                                <h2 className="text-xl font-semibold text-gray-900">
                                    {user.firstName} {user.lastName}
                                </h2>
                                <p className="text-gray-600">{user.email}</p>
                                <p className="text-sm text-gray-500">
                                    {user.designation && `${user.designation} • `}
                                    {user.department && `${user.department} • `}
                                    {user.division}, {user.district}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Dashboard Content */}
                   
                </div>
            </div>
        </div>
    );
};

export default Dashboard;