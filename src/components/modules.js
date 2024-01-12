import React,{useEffect, useState} from 'react'
import './modules.css'
import Navbar from './navbar'
import rzp from './images/newimages/razorpay.webp'
import left_img from './images/INDIAMUN/logo left.webp'
import right_img from './images/INDIAMUN/logo right.webp'
import Footer from './footer'
import {useAuthContext} from './hooks/useAuthContext'
import { useLogout } from './hooks/useLogout'
import Razorpay from 'razorpay'
import rzpqr from './images/newimages/rpqr.webp'
import rzpqr1 from './images/newimages/Untitled design.PNG'
import {saveAs} from 'file-saver'
import {useFirestore} from './hooks/useFirestore'
import CreatePlan from '../api/createPlan'
import MyComponent from '../api/createSubs'

const cors = require('cors')({ origin: true });



//  key_id: 'rzp_test_PMB2gNZwOxf6k7',
// key_secret: 'imS3TrFFPCEQizhgBmGkaZiZ',

// sajal



export default function Modules() {
    

   
    // const [paymentError, setPaymentError] = useState(null);

    // const handlePayment = async () => {
    //     const razorpay = new Razorpay({
    //       key_id: 'rzp_test_a7Khb1IXh1hjJH',
    //       key_secret: '86XaH14MecQFTtaSuwgzYHk1',
    //     });
    
    //     const options = {
    //         key:'rzp_test_a7Khb1IXh1hjJH',
    //         amount: '400000',
    //         currency: "INR",
    //         name: "INDIA MUN",
    //         description: "Tutorial of RazorPay",
    //         image: "http://localhost:3000/static/media/logo%20left.548aa3eb.webp",
    //         // order_id: order.id,
    //         callback_url: "http://localhost:3000/",
    //         prefill: {
    //             name: "Gaurav Kumar",
    //             email: "gaurav.kumar@example.com",
    //             contact: "9999999999"
    //         },
    //         notes: {
    //             "address": "Razorpay Corporate Office"
    //         },
    //         theme: {
    //             "color": "#121212"
    //         }
    //     };
    
    //     try {
    //         const response = await razorpay.createPaymentOrder(options);
    //         // Handle success
    //         console.log(response);
    //       } catch (error) {
    //         // Handle error
    //         console.log(error);
    //       }
    
    //       const razorpayCheckout = new window.Razorpay(options);
    //       razorpayCheckout.open();
    //   };

  
    // const razorpay = new Razorpay({
    //       key_id: 'rzp_test_a7Khb1IXh1hjJH',
    //        key_secret: '86XaH14MecQFTtaSuwgzYHk1',
    //    });
    //    razorpay.plans.fetch('plan_M17uq5wBnT2WMr')
    






    const {user} = useAuthContext()
    const { logout } = useLogout()



    const { addDocument, response } = useFirestore('payment_donors_data')



    const [name_donor, setnameDonor] = useState('')
    const [email_donor, setEmailDonor] = useState('')
    const [fund,setFund]=useState('')
    const [qrDonation,setqrDonation] = useState('')
    const [razorpayDonation,setzarorpayDonation] = useState('')

    const [checksubmit,setChecksubmit]=useState(false);

    const handlepaymentdonor=(e)=>{
        e.preventDefault()
        addDocument({
           Name:name_donor,
           Email_Id:email_donor,
           Total_fund_raised:fund,
           Donations_through_qr:qrDonation,
           Donations_through_razorpay_link:razorpayDonation,
           User_Id:user.uid
          })
          setChecksubmit(true);
          setnameDonor('')
          setEmailDonor('')
          setqrDonation('')
          setFund('')
          setzarorpayDonation('')

    }
  return (
    <div>
        <div className='top_comp'>
        <a href='/'><img className='left_img' src={left_img} alt="" /></a>
            <h2>INDIA’S YOUTH FOR CLIMATE ACTION</h2>
            <img className='right_img' src={right_img} alt=""/>
        </div>
        {/* <Navbar/> */}

        <div className='log-nav'>
        <div className='log-nav1'>
            <img src={user.photoURL}/>
            <h4>hello, {user.displayName}</h4>
        </div>
        <div className='log-nav2'>
            <button onClick={logout }>Logout</button>
        </div>
        </div>


        <p className='iyfa-head'>INDIA'S YOUNG FOREST AMBASSADOR</p>
            <p className='iya-next'>(PROGRAM MODULES)</p>
            <p className='iyfa-top'>Introduction Module: India's Young Forest Ambassador Program</p>
            <div className='am-iyfa'><p>We are thrilled to have you join us on this transformative journey of becoming environmental leaders and catalysts for change. This introduction module will provide you with an overview of the program, its objectives, and the incredible opportunities that lie ahead.</p></div>
            <p className='sub-head'>Sub Module 1: Embracing the Forests</p>
            <p className='am-cont'>In this module, we will dive deep into the captivating world of forests. Discover the awe-inspiring beauty and incredible biodiversity that these ecosystems hold. Learn about their vital role in climate regulation, the significance of healthy forest ecosystems, and the challenges they face in the wake of environmental degradation. Gain a profound understanding of the interconnectedness between forests, biodiversity, and human well-being.</p>
            <p className='what-eco'>What is ecosystem restoration?</p>
            <p className='mod-vid'><span>Module Video : </span> <a href=' https://youtu.be/XhjN8Xux2I4' target={'_blank'}> https://youtu.be/XhjN8Xux2I4</a></p>
            <div className='btn-div'><a href='https://docs.google.com/forms/d/1b9FQWCz1DV2rQ1QTF-jh3qR7atkXT6YN7jME4Sasiwk/viewform?edit_requested=true' target={'_blank'}><button>Module 1 Quiz</button></a></div>
            <p className='sub-head sub-2'>Sub Module 2: Regeneration and Conservation</p>
            <p className='am-cont'>Explore the concept of ecosystem regeneration and its pivotal role in combating climate change. Uncover innovative approaches to sustainable forestry practices, reforestation, and habitat preservation. Engage in discussions and activities that highlight the importance of conservation efforts and community involvement in nurturing and protecting our forests.</p>
            <p className='what-eco'>Snow leopards, gorillas and bears are making a comeback?
            </p>
            <p className='mod-vid'><span>Module Video 1: </span> <a href='  https://youtu.be/GqdXzNTNVvU' target={'_blank'}>  https://youtu.be/GqdXzNTNVvU</a></p>
            <p className='what-eco'>Restoration of Coastal and Marine Ecosystems in Abu Dhabi?
            </p>
            <p className='mod-vid'><span>Module Video 2: </span> <a href=' https://youtu.be/i07dZh2CwwQ' target={'_blank'}>  https://youtu.be/i07dZh2CwwQ</a></p>
            <div className='btn-div'><a href='https://docs.google.com/forms/d/10ucudGcZV4FIX2C_MlNGNbfFbYoqrNmd6mSn7Jguzxg/viewform?edit_requested=true' target={'_blank'}><button>Module 2 Quiz 1</button></a><a href='https://docs.google.com/forms/d/1OXZNRjqKcZZW_XJnzmD-zAVN5dkx6imoRGHRyP04tbg/viewform?edit_requested=true' target={'_blank'}><button>Module 2 Quiz 2</button></a></div>
            
            <p className='sub-head sub-2'>Sub Module 3: Taking Action</p>
            <p className='am-cont'>Equip yourself with the tools and knowledge to take effective action. Discover practical strategies for creating impactful projects and initiatives within your communities. Learn about successful case studies and inspiring stories of individuals who have made a tangible difference in forest conservation and regeneration. Develop your skills in project planning, resource mobilization, stakeholder engagement, and effective communication for driving positive change.</p>
            <p className='what-eco'>How can we #beatplasticpollution?
            </p>
            <p className='mod-vid'><span>Module Video:   </span> <a href='https://youtu.be/kET-l4DbohQ' target={'_blank'}>https://youtu.be/kET-l4DbohQ</a></p>
            <div className='btn-div'><a href='https://docs.google.com/forms/d/1WxFN1x-85AWFL51yMHPzlordr06-FW1zPCHrF8FP9dM/viewform?edit_requested=true' target={'_blank'}><button>Module 3 Quiz</button></a></div>

            <p className='sub-head sub-2'>Sub Module 4: Becoming a Young Forest Ambassador</p>
            <p className='am-cont'>In the final module, embrace the role of a Young Forest Ambassador. Explore the qualities and attributes that make an effective environmental leader. Discover the power of advocacy and communication in influencing others and creating a ripple effect of change. Gain insights from experts and mentors who will guide you on your path as you prepare to embark on your own environmental journey.</p>
            <p className='am-cont'>Get ready to unleash your potential, ignite your passion, and become a force to be reckoned with in the realm of environmental conservation. India's Young Forest Ambassador Program is your platform to create a lasting impact and shape a sustainable future.</p>
            <p className='am-cont'>Note: The Introduction Module will be followed by interactive workshops, field visits, and mentorship sessions to deepen your knowledge and empower you to make a tangible difference as a Young Forest Ambassador.</p>
            <p className='what-eco'>India is cleaning up the Ganga river. Here’s how.</p>
            <p className='mod-vid'><span>Module Video:   </span> <a href='https://youtu.be/H0BKaVbcC8I' target={'_blank'}>https://youtu.be/H0BKaVbcC8I</a></p>
            <div className='btn-div'><a href='https://docs.google.com/forms/d/1996fsbqCBGJZzvOVdYMffodKwanLC2RZBGpp2rXfBw0/viewform?edit_requested=true' target={'_blank'}><button>Module 4 Quiz</button></a></div>
            <div className='t-main'>
            <p className='t-note'>Note:</p>
            <p className='t-note'>The Introduction Module will be followed by interactive workshops, field visits, and mentorship sessions to deepen your knowledge and empower you to make a tangible difference as a Young Forest Ambassador.</p>
            </div>
            <p className='iyfa-top'>Activity Module: India's Young Forest Ambassador Program</p>
            <p className='sub-head sub-2'>Sub-Module 5: Fundraising for Forest Conservation</p>
            <p className='am-cont'>In Module 5, we will explore the crucial aspect of fundraising to support our collective efforts in forest conservation. As Young Forest Ambassadors, we understand that financial resources are essential to implement impactful projects and initiatives. This module will equip you with the necessary skills and strategies to raise funds effectively.</p>
            <p className='am-cont b-bottom'>Your invaluable contributions and the resulting funds raised will be utilized for developing forests and restoring ecosystems of nature as part of the national mission - Mission Prakriti to grow 1 million hectares of forest by 2030. </p>
            <div className='rzp'>
            {/* <button>FUNDRAISER FOR FOREST</button> */}
            {/* <img src={rzp}></img> */}
            </div>
                <div className='main-mod'>
                <p>After completing the introduction module, you will move to the Activity module and as a Young Forest Ambassador, you'll have the opportunity to fundraise for the 'Forest Regeneration' cause.</p>
                <p>You can raise as much as you can, however, to be eligible for the certificate you need to raise a minimum of INR 2000. </p>
                <p><span className='bold'></span> To collect donations</p>
                {/* <p>Use the QR code below or download the same <a onClick={()=>{saveAs(rzpqr,'qrCode.webp')}} className="hyperlinkhere">here</a> to receive the funds from your donors.</p> */}
                {/* <p><span className='bold'>QR Code-</span></p> */}
                {/* <div className='qr-div'>
                    <img style={{width:'80%',height:'auto'}}  className='rpqr'src={rzpqr1}></img>
                </div> */}
                {/* <div className='qr-div1'>
                    <img className='rpqr'src={rzpqr}></img>
                </div> */}
                {/* <h1> OR </h1> */}
                <p>Click <a href='https://rzp.io/l/2XUbBWT' target={'_blank'}>here </a> or share this Razorpay link- <a href='https://rzp.io/l/2XUbBWT' target={'_blank'}>https://rzp.io/l/2XUbBWT</a>  with your donor to process their donation.</p>
                {/* <p><span className='bold'>Step 2:</span> Fill the details in the box below to ensure these payments are linked to your student proflle.</p> */}


                {/* <div className="school-form">
                    <form onSubmit={handlepaymentdonor}>
                <p className='school-form-head'>FILL IN DETAILS</p>
                <div className='school-form-items'> 
                <div className='school-items'>Name: <input type='text' required id="name" value={name_donor} onChange={(e)=>setnameDonor(e.target.value)}></input></div>
                <div className='school-items'>Email-Id: <input type='text' required id="Email-id" value={email_donor} onChange={(e)=>setEmailDonor(e.target.value)}></input></div>
                <div className='school-items'>Total Fund Raised: <input type='number' required id="funds-raised" value={fund} onChange={(e)=>setFund(e.target.value)}></input></div>
                <div className='school-items'>Donations through <br></br> QR Code: <input type='text'  id="QrDonation" value={qrDonation} onChange={(e)=>setqrDonation(e.target.value)}></input></div>
                <p className='small'>Transaction Ids (Separated by commas if more than 1)</p>
                <div className='school-items'>Donations through <br></br>Razorpay link: <input type='text' id="RPDonation" value={razorpayDonation} onChange={(e)=>setzarorpayDonation(e.target.value)}></input></div>
                <p className='small'>Payment Ids (Separated by commas if more than 1)</p>
                </div>
                {!checksubmit && <div className='sub-btn'><button>Submit</button></div>}
                {checksubmit && <div className='sub-btn-end'><button>Form Submitted Successfully</button></div>}
                </form>
                </div> */}



                </div>
                {/* <CreatePlan/> */}
                {/* <MyComponent/> */}
            
            <Footer/>
    </div>
  )
}
