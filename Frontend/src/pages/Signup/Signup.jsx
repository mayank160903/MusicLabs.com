import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify'; // Import toast from toastify-js
import './Signup.css';
import 'react-toastify/dist/ReactToastify.css';
import signup from '../../images/signup1.jpg';
import { Input } from '@mui/base';

const RegistrationForm = () => {

const navigate = useNavigate(); // Initialize useNavigate

const [formData, setFormData] = useState({
  firstName: '',
  lastName: '',
  email: '',
  role: 'User',
  password: '',
  resume: null,
});


const handleResumeChange = (e) => {
  const file = e.target.files[0];

  // Update only the 'resume' field in the formData state
  setFormData((prevData) => ({
    ...prevData,
    resume: file,
  }));
};
const handleChange = (e) => {
  const { name, value } = e.target;
  // console.log(name);
  // console.log(value);
  setFormData((prevData) => ({
    ...prevData,
    [name]: value,
  }));
};

const handleRegister = async () => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (
    formData.firstName === '' ||
    formData.lastName === '' ||
    !emailPattern.test(formData.email) ||
    formData.password === '' ||
    formData.password.length < 6
  ) {
    console.log("here comes");
    alert('Please fill in all fields and ensure the password is at least 6 characters.');
    return;
  }

  try {
    console.log("Here is coming");
    console.log(formData);
    const response = await axios.post('http://localhost:8000/api/v1/user/register', formData);
    console.log(response.message);
    
    if (response.status === 200) {
      alert('Registration successful!');
      navigate('/login'); // Use navigate to redirect to the login page
    }
    else if(response.status === 400){
      alert('User is already registered please login');
    }
     else {
      alert('Registration failed. Please try again.');
    }
  } catch (error) {
    console.error('Error during registration:', error);
    alert('An error occurred during registration. Please try again.');
  }
};

  return (
    <div className="min-w-screen min-h-screen flex items-center justify-center px-5 py-5">
      <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden" style={{ maxWidth: '1000px' }}>
        <div className="md:flex w-full">
          <div className="hidden md:block w-1/2  py-10 px-10">
            <img
              src={signup}
              alt="Side Image"
              className="object-cover object-center w-full h-full rounded-full"
            />
          </div>
          <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
            <div className="text-center mb-10">
              <h1 className="font-bold text-3xl ">REGISTER</h1>
              <p>Enter your information to register</p>
            </div>
            <div className="flex -mx-3">
              <div className="w-1/2 px-3 mb-5">
                <label htmlFor="firstName" className="text-xs font-semibold px-1">
                  First name
                </label>
                <div className="flex">
                
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="w-full pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                    placeholder="John"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="w-1/2 px-3 mb-5">
                <label htmlFor="lastName" className="text-xs font-semibold px-1">
                  Last name
                </label>
                <div className="flex">
                
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="w-full pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                    placeholder="Smith"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="flex -mx-3">
              <div className="w-full px-3 mb-5">
                <label htmlFor="email" className="text-xs font-semibold px-1">
                  Email
                </label>
                <div className="flex">
                 
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                    placeholder="johnsmith@example.com"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="flex -mx-3">
              <div className="w-full px-3 mb-5">
                <label htmlFor="role" className="text-xs font-semibold px-1">
                  Role
                </label>
                <div className="flex">
                  
                  <select
                    id="role"
                    name="role"
                    onChange={handleChange}
                    className="w-full pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                  >
                    <option value="User">User</option>
                    <option value="teacher">Teacher</option>
                  </select>
                </div>
              </div>
            </div>
            {formData.role === 'teacher' && (
        <div className="flex -mx-3">
          <div className="w-full px-3 mb-5">
            <label htmlFor="adminData" className="text-xs font-semibold px-1">
              Resume
            </label>
            <div className="flex">
              
              <input
                type="file"
                id="adminData"
                accept="image/*"
                name="resume"
                className="w-full pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                placeholder="Select your Resume"
                onChange={handleResumeChange}
              />
            </div>
          </div>
        </div>
      )}
            <div className="flex -mx-3">
              <div className="w-full px-3 mb-12">
                <label htmlFor="password" className="text-xs font-semibold px-1">
                  Password
                </label>
                <div className="flex">
                  
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="w-full pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                    placeholder="******"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="flex -mx-3">
              <div className="w-full px-3 mb-5">
                <button
                  className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"
                  type="submit"
                  onClick={handleRegister}
                >
                  REGISTER NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;


// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const RegistrationForm = () => {
//   const navigate = useNavigate(); // Initialize useNavigate

//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     role: 'user',
//     password: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleRegister = async () => {
//     if (
//       formData.firstName === '' ||
//       formData.lastName === '' ||
//       formData.email === '' ||
//       formData.password === '' ||
//       formData.password.length < 6
//     ) {
//       alert('Please fill in all fields and ensure password is at least 6 characters.');
//       return;
//     }

//     try {
//       const response = await axios.post('https://your-api-endpoint.com/register', formData);

//       if (response.status === 200) {
//         alert('Registration successful!');
//         navigate('/login'); // Use navigate to redirect to the login page
//       } else {
//         alert('Registration failed. Please try again.');
//       }
//     } catch (error) {
//       console.error('Error during registration:', error);
//       alert('An error occurred during registration. Please try again.');
//     }
//   };

//   return (
//     <div className="min-w-screen min-h-screen bg-gray-900 flex items-center justify-center px-5 py-5">
//       <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden" style={{ maxWidth: '1000px' }}>
//         <div className="md:flex w-full">
//           <div className="hidden md:block w-1/2 bg-indigo-500 py-10 px-10">
//             {/* ... (rest of the code remains unchanged) */}
//           </div>
//           <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
//             {/* ... (rest of the code remains unchanged) */}
//             <input
//               type="text"
//               id="firstName"
//               name="firstName"
//               value={formData.firstName}
//               onChange={handleChange}
//               className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
//               placeholder="John"
//             />
//             {/* ... (similar modifications for other input fields) */}
//             <button
//               onClick={handleRegister}
//               className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"
//               type="button"
//             >
//               REGISTER NOW
//             </button>
//             {/* ... (rest of the code remains unchanged) */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RegistrationForm;


