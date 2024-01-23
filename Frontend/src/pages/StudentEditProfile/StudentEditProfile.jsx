import React, { Fragment } from "react";
import "./StudentEditProfile.css";

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