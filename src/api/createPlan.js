import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import { createPlan } from './api1';


const CreatePlan = () => {
  const [data,setdata]=useState('');
  useEffect(() => {
    const fetchPlan = async () => {
      try {
        const response = await createPlan();
        console.log('Plan created:', response.data);
        // Handle the response or perform any necessary actions
        setdata(response)
      } catch (error) {
        console.error('Error creating plan:', error);
        // Handle the error appropriately
      }
    };

    fetchPlan();
  }, []);

  return (
    <div>
      <h1>Create Plan</h1>
      <p>Creating plan...</p>
    </div>
  );
};

export default CreatePlan;
