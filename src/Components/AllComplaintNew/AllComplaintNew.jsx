import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure"; // adjust path if needed

const AllComplaintNew = ({ user }) => {
  const [complaints, setComplaints] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    if (user?.email) {
      const fetchComplaints = async () => {
        try {
          const res = await axiosSecure.get(`/complaints`);
          console.log(res.data.data)
          setComplaints(res.data.data);
        } catch (error) {
          console.error("Error fetching complaints:", error);
        } finally {
          setLoading(false);
        }
      };
      fetchComplaints();
    }
  }, [user, axiosSecure]);
console.log(complaints)
  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-gray-500 animate-pulse">Loading complaints...</p>
      </div>
    );
  }

  if (!complaints.length) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-gray-500">No complaints found.</p>
      </div>
    );
  }

  return (
    <div className="p-4 md:p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        My Complaints
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {complaints.map((complaint) => (
          <div
            key={complaint._id}
            className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition duration-200"
          >
            <h3 className="font-semibold text-lg text-gray-700 mb-2">
              {complaint.title}
            </h3>
            <p className="text-gray-600 text-sm mb-3">{complaint.description}</p>
            <p className="text-xs text-gray-400">
              Status:{" "}
              <span
                className={`${
                  complaint.status === "resolved"
                    ? "text-green-600"
                    : "text-yellow-600"
                } font-medium`}
              >
                {complaint.status}
              </span>
            </p>
            <p className="text-xs text-gray-400 mt-1">
              Submitted: {new Date(complaint.createdAt).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllComplaintNew;
