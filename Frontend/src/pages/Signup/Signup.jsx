// import React, { useState } from 'react';
// import './Signup.css';

// const SignupForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     role: 'user',
//     phone: '',
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newErrors = {};

//     if (!formData.name) {
//       newErrors.name = 'Name is required';
//     }

//     if (!formData.email) {
//       newErrors.email = 'Email is required';
//     }

//     if (!formData.password) {
//       newErrors.password = 'Password is required';
//     }

//     if (!formData.role) {
//       newErrors.role = 'Role is required';
//     }

//     if (!formData.phone) {
//       newErrors.phone = 'Phone is required';
//     }

//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//     } else {
//       // Send the form data to your backend for processing
//       // Reset the form
//       setFormData({
//         name: '',
//         email: '',
//         password: '',
//         role: 'user',
//         phone: '',
//       });
//       setErrors({});
//     }
//   };

//   return (
//     <div>
//       <h2>Signup</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             placeholder="Name"
//           />
//           {errors.name && <span className="error">{errors.name}</span>}
//         </div>

//         <div>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="Email"
//           />
//           {errors.email && <span className="error">{errors.email}</span>}
//         </div>
      
//         <div>
//           <input
//             type="tel"
//             name="phone"
//             value={formData.phone}
//             onChange={handleChange}
//             placeholder="Phone"
//           />
//           {errors.phone && <span className="error">{errors.phone}</span>}
//         </div>
        

//         <div>
//           <select
//             name="role"
//             value={formData.role}
//             onChange={handleChange}
//           >
//             <option value="user">User</option>
//             <option value="teacher">Teacher</option>
//           </select>
//           {errors.role && <span className="error">{errors.role}</span>}
//         </div>



//         <div>
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             placeholder="Password"
//           />
//           {errors.password && <span className="error">{errors.password}</span>}
//         </div>

//         <button type="submit">Sign Up</button>
//       </form>
//     </div>
//   );
// };

// export default SignupForm;



// import React, { useState } from 'react';
// import './Signup.css';

// const SignupForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     role: 'user',
//     phone: '',
//     resume: '', // Add the 'resume' field
//   });

//   const [errors, setErrors] = useState({});
//   const [showResumeInput, setShowResumeInput] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });

//     if (name === 'role' && value === 'teacher') {
//       // Show the 'Resume' input if the role is 'teacher'
//       setShowResumeInput(true);
//     } else {
//       // Hide the 'Resume' input for other roles
//       setShowResumeInput(false);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newErrors = {};

//     if (!formData.name) {
//       newErrors.name = 'Name is required';
//     }

//     if (!formData.email) {
//       newErrors.email = 'Email is required';
//     }

//     if (!formData.password) {
//       newErrors.password = 'Password is required';
//     }

//     if (!formData.role) {
//       newErrors.role = 'Role is required';
//     }

//     if (!formData.phone) {
//       newErrors.phone = 'Phone is required';
//     }

//     // Check if the 'Resume' field should be required for teachers
//     if (formData.role === 'teacher' && !formData.resume) {
//       newErrors.resume = 'Resume is required for teachers';
//     }

//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//     } else {
//       // Send the form data to your backend for processing
//       // Reset the form
//       setFormData({
//         name: '',
//         email: '',
//         password: '',
//         role: 'user',
//         phone: '',
//         resume: '',
//       });
//       setErrors({});
//     }
//   };

//   return (
//     <div>
//       <h2>Signup</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             placeholder="Name"
//           />
//           {errors.name && <span className="error">{errors.name}</span>}
//         </div>

//         <div>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="Email"
//           />
//           {errors.email && <span className="error">{errors.email}</span>}
//         </div>
      
//         <div>
//           <input
//             type="tel"
//             name="phone"
//             value={formData.phone}
//             onChange={handleChange}
//             placeholder="Phone"
//           />
//           {errors.phone && <span className="error">{errors.phone}</span>}
//         </div>

//         <div>
//           <select
//             name="role"
//             value={formData.role}
//             onChange={handleChange}
//           >
//             <option value="user">User</option>
//             <option value="teacher">Teacher</option>
//           </select>
//           {errors.role && <span className="error">{errors.role}</span>}
//         </div>

//         {showResumeInput && ( // Show the 'Resume' input for teachers
//           <div>
//             <input
//               type="file"
//               name="resume"
//               value={formData.resume}
//               onChange={handleChange}
//               placeholder="Resume"
//             />
//             {errors.resume && <span className="error">{errors.resume}</span>}
//           </div>
//         )}

//         <div>
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             placeholder="Password"
//           />
//           {errors.password && <span className="error">{errors.password}</span>}
//         </div>

//         <button type="submit">Sign Up</button>
//       </form>
//     </div>
//   );
// };

// export default SignupForm;


import React, { useState } from 'react';
import './Signup.css';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'user',
    phone: '',
  });

  const [resume, setResume] = useState(null); // State to store the selected resume file
  const [errors, setErrors] = useState({});
  const [showResumeInput, setShowResumeInput] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === 'role' && value === 'teacher') {
      setShowResumeInput(true);
    } else {
      setShowResumeInput(false);
    }
  };

  // Handle the file input for the resume
  const handleResumeChange = (e) => {
    const file = e.target.files[0];
    setResume(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    if (!formData.role) {
      newErrors.role = 'Role is required';
    }

    if (!formData.phone) {
      newErrors.phone = 'Phone is required';
    }

    if (formData.role === 'teacher' && !resume) {
      newErrors.resume = 'Resume is required for teachers';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Send the form data and resume to your backend for processing
      // Reset the form and resume state
      setFormData({
        name: '',
        email: '',
        password: '',
        role: 'user',
        phone: '',
      });
      setResume(null);
      setErrors({});
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>

        <div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone"
          />
          {errors.phone && <span className="error">{errors.phone}</span>}
        </div>

        <div>
          <select name="role" value={formData.role} onChange={handleChange}>
            <option value="user">User</option>
            <option value="teacher">Teacher</option>
          </select>
          {errors.role && <span className="error">{errors.role}</span>}
        </div>

        {showResumeInput && (
          <div>
            <input
              type="file"
              name="resume"
              onChange={handleResumeChange}
            />
            {errors.resume && <span className="error">{errors.resume}</span>}
          </div>
        )}

        <div>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignupForm;



