import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faDownload, faUpload, faEye, faEdit, faLock, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Tooltip } from 'react-tooltip';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  registered: string;
  lastLogin: string;
  status: string;
}

const UsersComponent: React.FC = () => {
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: 'Aditya Sharma', email: 'aditya@example.com', role: 'Admin', registered: '2023-01-01', lastLogin: '2023-06-01', status: 'Active' },
    { id: 2, name: 'Priya Gupta', email: 'priya@example.com', role: 'Theater Operator', registered: '2022-05-15', lastLogin: '2023-05-30', status: 'Active' },
    { id: 3, name: 'Raj Patel', email: 'raj@example.com', role: 'Customer', registered: '2021-09-01', lastLogin: '2023-04-20', status: 'Suspended' },
    { id: 4, name: 'Neha Chopra', email: 'neha@example.com', role: 'Admin', registered: '2020-03-01', lastLogin: '2023-06-05', status: 'Active' },
    { id: 5, name: 'Aman Kapoor', email: 'aman@example.com', role: 'Theater Operator', registered: '2021-11-01', lastLogin: '2023-05-25', status: 'Active' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRole, setSelectedRole] = useState<string>('All Roles');
  const [selectedStatus, setSelectedStatus] = useState<string>('All Statuses');
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleAction = (action: string, userId: number) => {
    console.log(`${action} clicked for user with ID: ${userId}`);
  };

  // Filtering logic based on role, status, and search term
  const filteredUsers = users.filter((user) => {
    const searchLower = searchTerm.toLowerCase();
    const matchesSearch = (
      user.name.toLowerCase().includes(searchLower) ||
      user.email.toLowerCase().includes(searchLower) ||
      user.role.toLowerCase().includes(searchLower) ||
      user.status.toLowerCase().includes(searchLower)
    );

    const matchesRole = selectedRole === 'All Roles' || user.role === selectedRole;
    const matchesStatus = selectedStatus === 'All Statuses' || user.status === selectedStatus;

    const matchesDate = !selectedDate || new Date(user.registered).toLocaleDateString('en-GB') === selectedDate?.toLocaleDateString('en-GB');

    return matchesSearch && matchesRole && matchesStatus && matchesDate;
  });

  return (
    <div className="ml-64 p-8">
      {/* Header: Title + Subtext + Add User and Bulk Actions */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-semibold">Users Management</h2>
          <p className="text-gray-500">Manage all user accounts for your application.</p>
        </div>
        <div className="space-x-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Add User</button>
          <button className="bg-gray-300 px-4 py-2 rounded-md">Bulk Actions</button>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="flex justify-between items-center mb-4">
        {/* Search bar */}
        <div className="relative w-1/3">
          <input
            type="text"
            placeholder="Search users..."
            className="border rounded-md p-2 pl-10 pr-4 w-full" // Adjusted padding
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FontAwesomeIcon icon={faSearch} className="absolute left-3 top-3 text-gray-500" />
        </div>

        {/* Filters */}
        <div className="flex space-x-4 items-center">
          <select className="border rounded-md p-2" value={selectedRole} onChange={(e) => setSelectedRole(e.target.value)}>
            <option>All Roles</option>
            <option>Admin</option>
            <option>Theater Operator</option>
            <option>Customer</option>
          </select>
          <select className="border rounded-md p-2" value={selectedStatus} onChange={(e) => setSelectedStatus(e.target.value)}>
            <option>All Statuses</option>
            <option>Active</option>
            <option>Suspended</option>
          </select>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            className="border rounded-md p-2 w-32" // Reduced width of date picker
            placeholderText="Filter by Date"
            dateFormat="dd-MM-yyyy"
          />
        </div>

        {/* Export and Import Buttons */}
        <div className="flex space-x-4">
          <button className="bg-gray-300 px-4 py-2 rounded-md flex items-center">
            <FontAwesomeIcon icon={faDownload} className="mr-2" />
            Export
          </button>
          <button className="bg-gray-300 px-4 py-2 rounded-md flex items-center">
            <FontAwesomeIcon icon={faUpload} className="mr-2" />
            Import
          </button>
        </div>
      </div>

      {/* Users Table */}
      <table className="min-w-full bg-white border rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="border-b p-3 text-left">Name</th>
            <th className="border-b p-3 text-left">Email</th>
            <th className="border-b p-3 text-left">Role</th>
            <th className="border-b p-3 text-left">Registered</th>
            <th className="border-b p-3 text-left">Last Login</th>
            <th className="border-b p-3 text-left">Status</th>
            <th className="border-b p-3 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id} className="hover:bg-gray-50">
              <td className="border-b p-3">{user.name}</td>
              <td className="border-b p-3">{user.email}</td>
              <td className="border-b p-3">{user.role}</td>
              <td className="border-b p-3">{user.registered}</td>
              <td className="border-b p-3">{user.lastLogin}</td>
              <td className="border-b p-3">
                <span
                  className={`px-3 py-1 rounded-full text-white ${user.status === 'Active' ? 'bg-green-500' : 'bg-red-500'}`}
                >
                  {user.status}
                </span>
              </td>
              <td className="border-b p-3 flex space-x-2">
                <button
                  onClick={() => handleAction('View', user.id)}
                  className="bg-gray-200 px-2 py-1 rounded-md"
                  data-tooltip-id={`tooltip-view-${user.id}`}
                  data-tooltip-content="View User"
                >
                  <FontAwesomeIcon icon={faEye} />
                </button>
                <button
                  onClick={() => handleAction('Edit', user.id)}
                  className="bg-gray-200 px-2 py-1 rounded-md"
                  data-tooltip-id={`tooltip-edit-${user.id}`}
                  data-tooltip-content="Edit User"
                >
                  <FontAwesomeIcon icon={faEdit} />
                </button>
                <button
                  onClick={() => handleAction('Lock', user.id)}
                  className="bg-gray-200 px-2 py-1 rounded-md"
                  data-tooltip-id={`tooltip-lock-${user.id}`}
                  data-tooltip-content="Lock User"
                >
                  <FontAwesomeIcon icon={faLock} />
                </button>
                <button
                  onClick={() => handleAction('Delete', user.id)}
                  className="bg-gray-200 px-2 py-1 rounded-md"
                  data-tooltip-id={`tooltip-delete-${user.id}`}
                  data-tooltip-content="Delete User"
                >
                  <FontAwesomeIcon icon={faTrashAlt} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Tooltips */}
      {filteredUsers.map((user) => (
        <React.Fragment key={user.id}>
          <Tooltip id={`tooltip-view-${user.id}`} />
          <Tooltip id={`tooltip-edit-${user.id}`} />
          <Tooltip id={`tooltip-lock-${user.id}`} />
          <Tooltip id={`tooltip-delete-${user.id}`} />
        </React.Fragment>
      ))}
    </div>
  );
};

export default UsersComponent;
