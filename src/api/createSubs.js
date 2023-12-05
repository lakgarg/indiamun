import React, { useState } from 'react';
import {useAuthContext} from '../components/hooks/useAuthContext'
import { useFirestore } from '../components/hooks/useFirestore';
// import Razorpay from 'razorpay'


const MyComponent = () => {
    const {user} = useAuthContext()
    const planId = 'plan_M0gzPP0j8etXFH';
    const customerId = user.uid;
    const [payurl,setPayurl]=useState('')
    const { addDocument } = useFirestore('subscription_payment')


    const [subsexist,setSubsExist]=useState(false);
    



    const handleCreateSubscription = async () => {

    try {
      const response = await fetch('/create-subscription', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ planId, customerId }),
      });

      if (response.ok) {
        const subscription = await response.json();
        console.log('Subscription created:', subscription);
        // Handle the subscription response
        setPayurl(subscription.short_url)
        console.log(subscription.short_url)
        console.log(subscription.customerId)
        window.location.href = subscription.short_url;
        
        addDocument({
          uid:user.uid,
          subscription_id:subscription.id,
          payment_url:subscription.short_url,
        })
      } else {
        const newurl= await response.json();
        console.error('Error creating subscription:', response.status);
        // Handle the error appropriately
        setPayurl(newurl.res);
        setSubsExist(true);
        alert('user subscription already exits')
      }
    } catch (error) {
      console.error('Error creating subscription:', error);
      // Handle the error appropriately
    }
  };

  return (
    <div>
      <button onClick={handleCreateSubscription}>Create Subscription</button>
     {subsexist && <a href={payurl}>Your Subscription Link</a>} 
    </div>
  );
};

export default MyComponent;
