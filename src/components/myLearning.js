// import React, { useState, useEffect } from 'react';
// import Navbar from './navbar'
// import left_img from './images/INDIAMUN/logo left.webp'
// import right_img from './images/INDIAMUN/logo right.webp'
// import './myLearning.css';

// // Importing course images
// import IYFA from './images/iyfa/IYFA image .webp';
// import YLP from './images/ylp/YLP image 1 desk.webp';
// import axios from 'axios'
// import Footer from './footer';

// const MyLearning = () => {
//   const [enrolledCourses, setEnrolledCourses] = useState([]);

//   // Fetch enrolled courses from database
//   useEffect(() => {
//     const fetchEnrolledCourses = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         const headers = {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${token}`,
//         };
//         const response = await axios.post('http://localhost:5010/api/v1/user/my-learning', { token }, { headers });
//         console.log('MY LEARNING Response: ', response);

//         if (response.data.success) {
//           setEnrolledCourses(response.data.data);
//         } else {
//           console.error('Error fetching enrolled courses:', response.data.message);
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     fetchEnrolledCourses()
//   }, []);

//   // Map course titles to their respective images
//   const courseImages = {
//     'IYFA': IYFA,
//     'YLP': YLP,
//   };

//   return (
//     <>
//       <div className='top_comp'>
//         <img className='left_img' src={left_img} alt="" />
//         <h2>INDIA’S YOUTH FOR CLIMATE ACTION</h2>
//         <img className='right_img' src={right_img} alt="" />
//       </div>

//       <Navbar />

//       <div className='myLearning-main-container'>
//         <h2 className="myLearning-enrolled-courses-heading">Enrolled Courses</h2>
//         <div className="myLearning-enrolled-courses">
//           {enrolledearthgeeks.length === 0 ? (
//             <p>No enrolled courses</p>
//           ) : (
//             <ul>
//               {enrolledearthgeeks.map(course => (
//                 <li key={course.id}>
//                   <img className='ml-main-course-img' src={courseImages[course.title]} alt={course.title} />
//                   <div className='ml-main-course-info'>
//                     <h3 className='ml-main-course-heading'>{course.title}</h3>
//                     <p className='ml-main-course-p'>{course.description}</p>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// };

// export default MyLearning;