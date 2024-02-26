import React, { useState, useEffect } from 'react';

// Importing course images
import IYFA from './images/iyfa/IYFA image .webp';
import YLP from './images/ylp/YLP image 1 desk.webp';

const MyLearning = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  // Fetch enrolled courses from database
  useEffect(() => {
    // const fetchEnrolledCourses = async () => {
    //   try {
    //     const response = await fetch('localhost:5010/api/v1/user/my-learning');
    //     if (response.ok) {
    //       const data = await response.json();
    //       setEnrolledCourses(data.enrolledCourses);
    //     } else {
    //       throw new Error('Failed to fetch enrolled courses');
    //     }
    //   } catch (error) {
    //     console.error(error);
    //   }
    // };

    // fetchEnrolledCourses();
    const fetchEnrolledCourses = async () => {
      try {
        const response = await fetch('http://localhost:5010/api/v1/user/my-learning');
        console.log(response)
      } catch (error) {
        console.error(error);
      }
    };
    fetchEnrolledCourses()
  }, []);

  // Map course titles to their respective images
  const courseImages = {
    'IYFA': IYFA,
    'YLP': YLP,
  };

  return (
    <div className='myLearning-main-container'>
      <h2>My Enrolled Courses</h2>
      <div className="myLearning-enrolled-courses">
        {enrolledCourses.length === 0 ? (
          <p>No enrolled courses</p>
        ) : (
          <ul>
            {enrolledCourses.map(course => (
              <li key={course.id}>
                <img src={courseImages[course.title]} alt={course.title} />
                <div>
                  <h3>{course.title}</h3>
                  <p>{course.description}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default MyLearning;