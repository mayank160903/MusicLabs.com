import React, { useEffect, useState } from "react";
import "./instructor.css";
import { NavLink } from "react-router-dom";
import axios from "axios";

const Instructor = () => {
  const [instructordata, setInstructorData] = useState(null);

  const Instructor_Data = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/v1/user/instructorData",
        {
          headers: {
            // Accept: "application/json",
            "Content-Type": "application/json",
          },
          // withCredentials: true
        }
      );

      const result = response.data;
      console.log(response);
      if (response.status !== 200) {
        alert("No data available");
      } else {
        setInstructorData(result);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    Instructor_Data();
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12 banner_img">
            <div className="our-team">
              <h1 className="our-team-header">
                LEARN FROM THE
                <div className="text-animation" style={{ color: "aqua" }}>
                  BEST GUITAR INSTRUCTORS
                </div>
              </h1>
              <p className="our-team-content">
                If you’re gonna take guitar lessons, why not learn from the
                best? At Masters Of Music, you can learn
              </p>
              <p className="our-team-content">
                guitar from the best players and the best instructors! Our
                roster includes a Grammy Award
              </p>
              <p className="our-team-content">
                winner, a Country Music Hall of Famer, the National Flatpicking
                Champion, dozens of
              </p>
              <p className="our-team-content">
                professional touring musicians and many more lifelong educators.
              </p>
            </div>
          </div>
        </div>
      </div>

      
      <div className="box-div">


      <div className="card-section" style={{ color: "aliceblue" }}>
        <div className="course">OUR MASTERS OF MUSIC</div>

        <div
          className="text-center card-section2"
          
        >
          <div className="row ml-3" id="col1">
            {instructordata &&
              instructordata != null &&
              instructordata.map((instructor, i) => (
                <div className="col">
                  <div
                    className="bg-white border border-gray-300 rounded-md p-4 shadow-md"
                    style={{ width: "18rem" }}
                  >
                    {/* <img
                  src={instructor.avatar}
                  className="card-img-top img-size"
                  alt="..."
                /> */}

                    <img
                      // src="marty-inst.jpg"
                      src={instructordata.avatar ? instructordata.avatar : "marty-inst.jpg"}
                      className="object-contain w-full h-auto rounded-t-md "
                      alt="..."
                    />

                    <div className="card-body">
                      <h5 className="card-title text-black mt-3  text-xl">
                        {instructor.firstName + " " + instructor.lastName}
                      </h5>
                      <p className="card-text text-black mt-2 text-base">
                        {instructor.description}
                      </p>
                    </div>
                    <hr class="border-t border-black my-1 mt-2"></hr>
                    <ul className="list-group list-group-flush text-black px-auto">
                      {/* <li className="list-group-item">Blues, Rock</li> */}
                      <li className="list-group-item mb-2 ">
                        {instructor.username}
                      </li>
                    </ul>
                    <hr class="border-t border-black -my-1 "></hr>
                    <div className="text-blue-500 underline mt-3">
                      <NavLink
                        to={`/teacher/${instructor._id}`}
                        className="card-link"
                      >
                        View Profile
                      </NavLink>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      </div>


    </>
  );
};

export default Instructor;
