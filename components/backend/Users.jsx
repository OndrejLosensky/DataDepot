import React, { useState, useEffect } from 'react';
import { HiDownload } from "react-icons/hi";
import { db } from  '../../src/app/firebaseConfig';
import SearchInput from '../backend/SearchInput';
const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersCollection = db.collection('profiles');
        const snapshot = await usersCollection.get();
        const fetchedUsers = snapshot.docs.map(doc => ({
          id: doc.id,
          username: doc.data().username,
          email: doc.data().email
        }));
        setUsers(fetchedUsers);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
  
    fetchData();
  }, []);
  

  return (
    <div className='w-full h-full'>
      {/* Navbar */}
      <div className='flex flex-row justify-between mb-4'>
        <div>
          <SearchInput placeholder="Search for user"/>
        </div>
        <div className='space-x-2 flex flex-row'>
          <button className='px-4 py-2 rounded-md bg-purple-500 hover:bg-purple-600 duration-300 shadow-md text-gray-200'> + Add User</button>
          <button className='px-4 py-2 rounded-md border border-gray-300 flex flex-row items-center '>  <HiDownload className='w-5 h-5 mr-2'/> Export to CSV</button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse">
          <thead>
            <tr className="text-gray-300 border-[0.5px] border-gray-500">
              <th className="px-4 py-2 text-center">No.</th>
              <th className="px-4 py-2 text-center">Username</th>
              <th className="px-4 py-2 text-center">Created In</th>
              <th className="px-4 py-2 text-center">Status</th>
              <th className="px-4 py-2 text-center">Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id} className="hover:bg-gray-700 text-center">
                <td className="border-b-[0.5px] border-gray-500 px-4 py-2">{index + 1}</td>
                <td className="border-b-[0.5px] border-gray-500 px-4 py-2">{user.username}</td>
                {/* 
                <td className="border-b-[0.5px] border-gray-500 px-4 py-2">{user.createdIn}</td>
      
                <td className="border-b-[0.5px] border-gray-500 px-4 py-2">
                  <div className={`bg-${user.status === 'Active' ? 'green' : 'red'}-500 w-20 mx-auto rounded-md text-gray-200`}>{user.status}</div>
                </td>
                <td className="border-b-[0.5px] border-gray-500 px-4 py-2">{user.role}</td>
                */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
