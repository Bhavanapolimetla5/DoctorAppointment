import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Myprofile = () => {
  const [userData, setUserData] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUserData(JSON.parse(storedUser));
    }
  }, []);

  const handleSave = () => {
    if (!userData) return;

    if (selectedImage) {
      const reader = new FileReader();
      reader.onload = () => {
        const updatedData = { ...userData, profilePic: reader.result };
        setUserData(updatedData);
        localStorage.setItem('user', JSON.stringify(updatedData));
      };
      reader.readAsDataURL(selectedImage);
    } else {
      localStorage.setItem('user', JSON.stringify(userData));
    }
    setIsEdit(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/signup');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-3xl">
        <div className="flex items-center space-x-6">
          <div className="relative">
            <img
              src={userData?.profilePic || '/default-profile.png'}
              alt=""
              className="w-32 h-32 rounded-full object-cover border-4 border-blue-500 shadow-md"
            />
            {isEdit && (
              <label className="absolute bottom-0 right-0 bg-blue-600 text-white p-2 rounded-full cursor-pointer shadow-md">
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => setSelectedImage(e.target.files[0])}
                />
                ✏️
              </label>
            )}
          </div>
          <div className="flex-1">
            {isEdit ? (
              <input
                type="text"
                value={userData?.name || ''}
                onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                className="text-2xl font-bold border-b-2 focus:outline-none focus:border-blue-500 w-full"
              />
            ) : (
              <h2 className="text-2xl font-bold text-gray-700">{userData?.name || 'No Name'}</h2>
            )}
            <p className="text-gray-500 mt-1">{userData?.email || 'No Email'}</p>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-bold text-gray-700">Contact Information</h3>
          <div className="mt-4 space-y-4">
            <div>
              <label className="font-bold text-gray-600">Phone:</label>
              {isEdit ? (
                <input
                  type="text"
                  value={userData?.phone || ''}
                  onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
                  className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full mt-1"
                />
              ) : (
                <p className="text-gray-700 mt-1">{userData?.phone || 'No Phone'}</p>
              )}
            </div>
            {/* Add other fields like Address, etc., here */}
          </div>
        </div>

        <div className="mt-6 flex justify-end space-x-4">
          {isEdit ? (
            <button
              onClick={handleSave}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md shadow-md"
            >
              Save
            </button>
          ) : (
            <button
              onClick={() => setIsEdit(true)}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md shadow-md"
            >
              Edit Profile
            </button>
          )}
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-md shadow-md"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Myprofile;
