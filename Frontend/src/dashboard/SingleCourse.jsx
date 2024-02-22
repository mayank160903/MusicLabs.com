import react, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import course1 from "../images/beginnerpic.jpg";
const SingleCourse = () => {
  const { courseId } = useParams();
  
  const [courseData, setCourseData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/course/singlecourse/:${courseId}`
        );

        setCourseData(response.data.course);
        console.log(response.data.course);
        console.log(courseData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="flex justify-center items-center my-4 mx-3">
        <div className="mr-4">
          <img src={course1} alt="course image"  className="transform transition-transform hover:translate-x-4 hover:translate-y-2"/>
        </div>
        <div className="flex-grow">
          {/* <div className="flex mx-3 items-start">
            <h1 className="mr-2">Title &nbsp; :</h1>
            <p>{courseData.title}</p>
          </div> */}
          <div className="flex mx-3 items-start align-items-center">
            <h1 className="mr-2 font-bold text-3xl text-gray">Title &nbsp; :</h1>
            <p className="font-thin">{courseData.title}</p>
        </div>

          <div className="flex mx-3 items-start align-items-center">
            <h1 className="mr-2 font-bold text-3xl text-gray">Description :</h1>
            <p className="font-thin">{courseData.description}</p>
          </div>
          <div className="flex mx-3 items-start align-items-center">
            <h1 className="mr-2 font-bold text-3xl text-gray">Price :</h1>
            <p className="font-thin">{courseData.price}</p>
          </div>
          <div className="flex mx-3 items-start align-items-center">
            <h1 className="mr-2 font-bold text-3xl text-gray">Students Purchase :</h1>
            <p className="font-thin">{courseData.purchases}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleCourse;
