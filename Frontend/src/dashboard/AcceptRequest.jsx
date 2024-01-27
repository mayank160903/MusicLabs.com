import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AcceptRequest = () => {
  const [requestData, setRequestData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/v1/teacher/lsitofteachersrequest');
        setRequestData(response.data.teachers);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleAccept = async (id) => {
    try {
      // Make API call to accept the request
      await axios.put(`http://localhost:8000/api/v1/teacher/acceptrequest/${id}`);
      
      // Update the request data after a successful acceptance
      const updatedData = requestData.filter(request => request._id !== id);

      setRequestData(updatedData);
      console.log(requestData);
      console.log(`Accepted request with id: ${id}`);
    } catch (error) {
      console.error('Error accepting request:', error);
    }
  };

  const handleIgnore = async (id) => {
    try {
      // Make API call to delete/ignore the request
      await axios.delete(`http://localhost:8000/api/v1/teacher/ignorerequest/${id}`);
      
      // Update the request data after a successful deletion/ignoring
      const updatedData = requestData.filter(request => request._id !== id);
      setRequestData(updatedData);

      console.log(`Ignored request with id: ${id}`);
    } catch (error) {
      console.error('Error ignoring request:', error);
    }
  };


  return (
    <>
      <h1>Accept Request</h1>
      <div className="mt-4">
        {/* <div className="overflow-y-auto h-screen"> */}
        {requestData.map((request) => (
          <div key={request.id} className="mb-4 p-4 border rounded">
            <p>{request.firstName}</p>
            <p>{request.lastName}</p>
            <p>{request.email}</p>
            <p>{request.master}</p>
            <p>{request.experience}</p>
            <p>{request.achievement}</p>
            <div className="mt-2">
              <button
                onClick={() => handleAccept(request._id)}
                className="bg-green-500 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded mr-2"
              >
                Accept
              </button>
              <button
                onClick={() => handleIgnore(request._id)}
                className="bg-red-500 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded"
              >
                Ignore
              </button>
            </div>
          </div>
        ))}
        {/* </div> */}
      </div>
    </>
  );
};

export default AcceptRequest;



