// import React, { Fragment } from "react";
// import "./TeacherEditProfile.css";
// import MailOutlineIcon from "@material-ui/icons/MailOutline";
// import FaceIcon from "@material-ui/icons/Face";
// import profileImage from "./teacher_Profile_image copy.png";
// import axios from 'axios';

// const TeacherEditProfile = () => {
  
//   return (
//     <Fragment>
          
//           <div className="updateProfileContainer">
//             <div className="updateProfileBox">
//               <h2 className="updateProfileHeading">Update Profile</h2>

//               <form
//                 className="updateProfileForm"
//                 encType="multipart/form-data"
                
//               >
//                 <div className="updateProfileName">
//                   <FaceIcon />
//                   <input
//                     type="text"
//                     placeholder="Name"
//                     required
//                     name="name"
                    
//                   />
//                 </div>
//                 <div className="updateProfileEmail">
//                   <MailOutlineIcon />
//                   <input
//                     type="email"
//                     placeholder="Email"
//                     required
//                     name="email"
                    
//                   />
//                 </div>
//                 <div id="updateProfileImage">
//                   <img src={profileImage} alt="Avatar Preview" />
//                   <input
//                     type="file"
//                     name="avatar"
                    
//                   />
//                 </div>
//                 <input
//                   type="submit"
//                   value="Update"
//                   className="updateProfileBtn"
//                 />
//               </form>
//             </div>
//           </div>
//         </Fragment>
//   );
// };
// export default TeacherEditProfile;






import React, { Fragment, useState } from "react";
import "./TeacherEditProfile.css";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import FaceIcon from "@material-ui/icons/Face";
import axios from 'axios';
import profileImage from "./teacher_Profile_image copy.png";

const TeacherEditProfile = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    avatar: null
  });

  const { name, email, avatar } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, avatar: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', name);
      formDataToSend.append('email', email);
      formDataToSend.append('avatar', avatar);

      const res = await axios.put(`/api/user/${userId}/profile-image`, formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(res.data);
    } catch (err) {
      if (err.response) {
        console.error(err.response.data);
      } else {
        console.error(err.message);
      }
    }
  };

  return (
    <Fragment>
      <div className="updateProfileContainer">
        <div className="updateProfileBox">
          <h2 className="updateProfileHeading">Update Profile</h2>
          <form className="updateProfileForm" onSubmit={handleSubmit} encType="multipart/form-data">
            <div className="updateProfileName">
              <FaceIcon />
              <input
                type="text"
                placeholder="Name"
                required
                name="name"
                value={name}
                onChange={handleChange}
              />
            </div>
            <div className="updateProfileEmail">
              <MailOutlineIcon />
              <input
                type="email"
                placeholder="Email"
                required
                name="email"
                value={email}
                onChange={handleChange}
              />
            </div>
            <div id="updateProfileImage">
              <img src={profileImage} alt="Avatar Preview" />
              <input
                type="file"
                name="avatar"
                onChange={handleFileChange}
              />
            </div>
            <input
              type="submit"
              value="Update"
              className="updateProfileBtn"
            />
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default TeacherEditProfile;

























































































































