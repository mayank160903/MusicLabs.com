// import React from "react";
// import "./instructor.css";
// import { NavLink } from "react-router-dom";


// const Instructor = () => {
//   return (
//     <>
//       <div className="container-fluid">
//         <div className="row">
//           <div className="col-xs-12 banner_img">
//             <div className="our-team">
//               <h1 class="our-team-header">
//                 LEARN FROM THE
//                 <div className="text-animation" style={{ color: "aqua" }}>
//                   BEST GUITAR INSTRUCTORS
//                 </div>
//               </h1>
//               <p class="our-team-content">
//                 If you’re gonna take guitar lessons, why not learn from the
//                 best? At Masters Of Music, you can learn
//               </p>
//               <p class="our-team-content">
//                 guitar from the best players and the best instructors! Our
//                 roster includes a Grammy Award
//               </p>
//               <p class="our-team-content">
//                 winner, a Country Music Hall of Famer, the National Flatpicking
//                 Champion, dozens of
//               </p>
//               <p class="our-team-content">
//                 professional touring musicians and many more lifelong educators.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="card-bg">
//         <div class="course-heading">OUR MASTERS OF MUSIC</div>
//         <div
//           className="container text-center inst-grid grid-txt"
//           style={{ color: "aliceblue" }}
//         >
//           <div className="row" id="col1">
//             <div className="col">
//               <div className="card card-prop" style={{ width: "18rem" }}>
//                 <img
//                   src="marty-inst.jpg"
//                   className="card-img-top img-size"
//                   alt="..."
//                 />
//                 <div className="card-body">
//                   <h5 className="card-title">Marty Schwartz</h5>
//                   <p className="card-text">
//                     Hey whatsup you guys? Marty Schwartz here and I am here to
//                     help you with your music learning
//                   </p>
//                 </div>
//                 <ul className="list-group list-group-flush">
//                   <li className="list-group-item">Blues, Rock</li>
//                   <li className="list-group-item">@martyschwartz</li>
//                 </ul>
//                 <div className="card-body">
//                   <NavLink href="/teacher" className="card-link">
//                     View Profile
//                   </NavLink>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Instructor;








import React,{useEffect,useState} from "react";
import "./instructor.css";
import { NavLink } from "react-router-dom";
import axios from 'axios';



const Instructor = () => {

  const [instructordata,setInstructorData] = useState(null);

  const Instructor_Data = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/v1/user/instructorData", {
        headers: {
          // Accept: "application/json",
          "Content-Type": "application/json" 
        },
        // withCredentials: true 
      });
  
      const result = response.data;
      console.log(response);
      if (response.status !== 200) {
        alert("No data available");
      } else {
        setInstructorData(result);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle the error (e.g., show an error message to the user)
      // You might also want to use a state to keep track of loading/error states
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

      <div className="card-bg">
        <div className="course-heading">OUR MASTERS OF MUSIC</div>

          

         
        <div 
          className="container text-center inst-grid grid-txt"
          style={{ color: "aliceblue" }}
        >
        
          <div className="row" id="col1">
          {instructordata && instructordata!=null &&  instructordata.map((instructor,i) => (
            <div className="col">
            
              <div className="card card-prop" style={{ width: "18rem" }}>
                {/* <img
                  src={instructor.avatar}
                  className="card-img-top img-size"
                  alt="..."
                /> */}

                <img
                  src="marty-inst.jpg"
                  className="card-img-top img-size"
                  alt="..."
                />

                <div className="card-body">
                  <h5 className="card-title">{instructor.firstName + " " + instructor.lastName}</h5>
                  <p className="card-text">
                    {instructor.description}
                  </p>
                </div>
                <ul className="list-group list-group-flush">
                  {/* <li className="list-group-item">Blues, Rock</li> */}
                  <li className="list-group-item">{instructor.username}</li>
                </ul>
                <div className="card-body">
                  <NavLink to={`/teacher/${instructor._id}`} className="card-link">
                    View Profile
                  </NavLink>
                </div>
              </div>
            </div>
            ))}
          </div>
          
        </div>
        

      </div>
    </>
  );
};

export default Instructor;

