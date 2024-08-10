import React, { useState } from 'react';
import '../../css/PersonalDetails.css'; // Import custom styles

const PersonalDetails: React.FC = () => {
  // State to manage whether the form is in editing mode
  const [isEditing, setIsEditing] = useState(false);

  // State to manage form data
  const [formData, setFormData] = useState({
    FullName: 'Mohana Sundar',
    Email: 'mohanasundar717@gmail.com',
    Phone: '9150201369',
    DateOfBirth: '1990-01-01', 
  });

  // Function to enter editing mode
  const handleEditDetails = () => {
    setIsEditing(true);
  };

  // Function to save changes and exit editing mode
  const handleSaveDetails = () => {
    setIsEditing(false);
    // Here, you would typically also save the data to a server
  };

  // Function to handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="p-4 personal-details-container">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="flex justify-between items-center flex-wrap">
          <h2 className="text-xl font-bold">Contact Information</h2>
          {isEditing ? (
            <button onClick={handleSaveDetails} className="text-blue-500 mt-2 sm:mt-0">
              Save
            </button>
          ) : (
            <button onClick={handleEditDetails} className="text-blue-500 mt-2 sm:mt-0">
              Edit Details
            </button>
          )}
        </div>
        <hr className="my-4" />
        <div className="grid grid-cols-1 sm:grid-rows-3 gap-4">
          {Object.entries(formData).map(([key, value]) => (
            <div key={key} className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
              {/* Display label */}
              <span className="font-semibold sm:w-1/3">{key.split(/(?=[A-Z])/).join(' ')}</span>
              {/* Display input or text based on editing mode */}
              {isEditing ? (
                key === 'DateOfBirth' ? (
                  <input
                    type="date"
                    name={key}
                    value={value}
                    onChange={handleChange}
                    className="border rounded p-1 sm:w-2/3 mt-2 sm:mt-0"
                  />
                ) : (
                  <input
                    type="text"
                    name={key}
                    value={value as string}
                    onChange={handleChange}
                    className="border rounded p-1 sm:w-2/3 mt-2 sm:mt-0"
                  />
                )
              ) : (
                <span className="sm:w-2/3 mt-2 sm:mt-0">
                  {key === 'DateOfBirth' ? new Date(value).toLocaleDateString() : value}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
