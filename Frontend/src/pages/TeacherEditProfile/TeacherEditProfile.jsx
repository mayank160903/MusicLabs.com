// import React, { Fragment } from "react";
// import "./LadinhPage.css";
// // import "./LandingPage.js";

// const LadingPage = () => {
//   return (
//     <Fragment>
//       <div className="container">
//         <h2>Verify Your Account</h2>
//         <p>
//           We emailed you the six digit code to personal@email.com <br />
//           Enter the code below to confirm your email address
//         </p>
//         <div className="code-container">
//           <input
//             type="number"
//             className="code"
//             placeholder={0}
//             min={0}
//             max={9}
//             required
//           />
//           <input
//             type="number"
//             className="code"
//             placeholder={0}
//             min={0}
//             max={9}
//             required
//           />
//           <input
//             type="number"
//             className="code"
//             placeholder={0}
//             min={0}
//             max={9}
//             required
//           />
//           <input
//             type="number"
//             className="code"
//             placeholder={0}
//             min={0}
//             max={9}
//             required
//           />
//           <input
//             type="number"
//             className="code"
//             placeholder={0}
//             min={0}
//             max={9}
//             required
//           />
//           <input
//             type="number"
//             className="code"
//             placeholder={0}
//             min={0}
//             max={9}
//             required
//           />
//         </div>
//         <div>
//           <button type="button" className="btn btn-primary">
//             Verify
//           </button>
//         </div>
//         <small>
//           If you didn't receive a code !! <strong>RESEND</strong>
//         </small>
//       </div>
//     </Fragment>
//   );
// };

// export default LadingPage;









import React, { Fragment } from "react";
import "./TeacherEditProfile.css";

import MailOutlineIcon from "@material-ui/icons/MailOutline";
import FaceIcon from "@material-ui/icons/Face";
import profileImage from "./teacher_Profile_image copy.png"


const TeacherEditProfile = () => {
  


  return (
    <Fragment>
          
          <div className="updateProfileContainer">
            <div className="updateProfileBox">
              <h2 className="updateProfileHeading">Update Profile</h2>

              <form
                className="updateProfileForm"
                encType="multipart/form-data"
                
              >
                <div className="updateProfileName">
                  <FaceIcon />
                  <input
                    type="text"
                    placeholder="Name"
                    required
                    name="name"
                    
                  />
                </div>
                <div className="updateProfileEmail">
                  <MailOutlineIcon />
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    name="email"
                    
                  />
                </div>

                <div id="updateProfileImage">
                  <img src={profileImage} alt="Avatar Preview" />
                  <input
                    type="file"
                    name="avatar"
                    
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

