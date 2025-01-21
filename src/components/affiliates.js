import React, { useState, useEffect } from 'react';
import Razorpay from 'razorpay'
import Navbar from './navbar'
import left_img from './images/INDIAMUN/logo left.webp'
import right_img from './images/INDIAMUN/logo right.webp'
// import aff_left from './images/INDIAMUN/affi left.webp'
// import aff_right from './images/INDIAMUN/affi right.webp'
import buzzi from './images/logos strip/buzzon copy.webp'
import giaa from './images/logos strip/gaia copy.webp'
import './affiliate.css'
import { useFirestore } from './hooks/useFirestore'
// import firebase from 'firebase/app';
import 'firebase/firestore';
import { projectFirestore, projectStorage } from "./firebase/config";
import Footer from './footer';
import './partners.css'
import Aff1 from '../components/images/affiliate/Ovais Sarmad.png'
import Aff2 from '../components/images/affiliate/Suresh prabhu.png'
import Aff3 from '../components/images/affiliate/Ramananramnathan.png'
import Aff4 from '../components/images/affiliate/Jagdish seth.png'
// import img1 from './images/logos strip 2/2.png'
// import img2 from './images/logos strip 2/6.png'
// import img3 from './images/logos strip 2/7.png'
// import img4 from './images/logos strip 2/8.png'
// import img5 from './images/logos strip 2/9.png'
// import img6 from './images/logos strip 2/1.png'
// import img7 from './images/logos strip 2/12.png'
// import img8 from './images/logos strip 2/4.png'
// import img9 from './images/logos strip 2/11.png'
// import img10 from './images/logos strip 2/10.png'
// import img11 from './images/logos strip 2/3.png'
// import img12 from './images/logos strip 2/5.png'
import qr_code from './images/affiliate/QR.webp'
import Student1 from './images/INDIAMUN/students 1.webp'
import Student2 from './images/INDIAMUN/students 2.webp'
import Student3 from './images/INDIAMUN/students 3.webp'
import Student4 from './images/INDIAMUN/students 4.webp'
import ResumeOpportunities from '../components/images/affiliate/ResumeOpportunities.webp'
import CommunityImpact from '../components/images/affiliate/Community impact.webp'
import GlobalExposure from '../components/images/affiliate/Global exposure.webp'
import InterSchoolResourceSharing from '../components/images/affiliate/Inter school resource sharing.webp'
import EnhancedReputation from '../components/images/affiliate/Enhanced reputation.webp'
import GlobalPerspective from '../components/images/affiliate/Global perspective.webp'
import GreaterStudentEngagement from '../components/images/affiliate/Greater student engagement.webp'
import InnovativeTeaching from '../components/images/affiliate/Innovative teaching.webp'
import AffiliationCertificate from '../components/images/affiliate/Affiliation certificate.webp'
import ProfessionalDevelopment from '../components/images/affiliate/Professional development for educators.webp'
import CareerPathways from '../components/images/affiliate/Career pathways.webp'
import RecognitionAndAwards from '../components/images/affiliate/Recognition and awards.webp'
import EnhancedEducationalSupport from '../components/images/affiliate/Enhanced educational support.webp'
import Accreditation from '../components/images/affiliate/Accreditation.webp'
import IndustryRelevantSkills from '../components/images/affiliate/Industry relevant skills.webp'
import PeerLearning from '../components/images/affiliate/Peer learning.webp'
import NetworkingAndCollaboration from '../components/images/affiliate/Networking and collaboration.webp'
import AccessToSupportAndResources from '../components/images/affiliate/Access to support and resources.webp'
import car1 from '../components/images/affiliate/1.png'
import car2 from '../components/images/affiliate/2.png'
import car3 from '../components/images/affiliate/3.png'
import car4 from '../components/images/affiliate/4.png'
import car5 from '../components/images/affiliate/5.png'
import car6 from '../components/images/affiliate/6.png'
import car7 from '../components/images/affiliate/7.png'
import car8 from '../components/images/affiliate/8.png'
import indiaMunChapter from '../components/images/affiliate/india chapter logo.webp'
import indiaMunNewLogo from '../components/images/affiliate/india MUn new logo.webp'
import GSCAPlaque from '../components/images/affiliate/GSCA plaque.webp'
import PartnersLogo from '../components/images/affiliate/partners logos for desk.webp'
import axios from 'axios';
// import IMCC from '../components/images/affiliate/IMCC.webp'
// import council1 from './images/mun/council-1.webp'
import Collapsible from './Collapsible.js';
// import HoverInfoDiv from './HoverInfoDiv';
import Testimonial from './Testimonial';
import Carousel from 'react-grid-carousel';


const cors = require('cors')({ origin: true });
//  key_id: 'rzp_test_PMB2gNZwOxf6k7',
// key_secret: 'imS3TrFFPCEQizhgBmGkaZiZ',

export default function Affiliates() {

  const { addDocument, response } = useFirestore('affiliate_your_school')

  const [school_name, setSchool_name] = useState('')
  const [school_address, setSchoolAddress] = useState('')
  const [schoolWebsite, setSchoolWebsite] = useState('')
  const [contactPerson, setContactPerson] = useState('')
  const [contactEmail, setContactEmail] = useState('')
  const [contactphone, setContactPhone] = useState('')
  const [cityP, setCityP] = useState('')
  const [stateP, setStateP] = useState('')
  const [pinCode, setPinCode] = useState('')
  const [cordinator1_name, setCordinator1_name] = useState('')
  const [cordi1_conatctNo, setCordi1_contactNo] = useState('')
  const [cordi1_conatctEmail, setCordi1_contactEmail] = useState('')
  const [cordinator2_name, setCordinator2_name] = useState('')
  const [cordi2_conatctNo, setCordi2_contactNo] = useState('')
  const [cordi2_conatctEmail, setCordi2_contactEmail] = useState('')
  const [declaration_form, setDeclaration_form] = useState(null)
  const [declaration_form_url, setDeclaration_form_url] = useState(null)
  const [payment_screenshot, setPaymentscreenshot] = useState(null)
  const [payment_screenshot_url, setPayment_screenshot_url] = useState(null)
  const [doc_error, setDoc_error] = useState(null)

  const [isParagraphVisible, setIsParagraphVisible] = useState(false);
  const [isParagraphVisible1, setIsParagraphVisible1] = useState(false);
  const [isParagraphVisible2, setIsParagraphVisible2] = useState(false);
  const [isParagraphVisible3, setIsParagraphVisible3] = useState(false);
  const [isParagraphVisible4, setIsParagraphVisible4] = useState(false);
  const [isParagraphVisible5, setIsParagraphVisible5] = useState(false);
  const [isParagraphVisible6, setIsParagraphVisible6] = useState(false);
  const [isParagraphVisible7, setIsParagraphVisible7] = useState(false);
  const [isParagraphVisible8, setIsParagraphVisible8] = useState(false);
  const [isParagraphVisible9, setIsParagraphVisible9] = useState(false);
  const [isParagraphVisible10, setIsParagraphVisible10] = useState(false);
  const [isParagraphVisible11, setIsParagraphVisible11] = useState(false);
  const [isParagraphVisible12, setIsParagraphVisible12] = useState(false);
  const [isParagraphVisible13, setIsParagraphVisible13] = useState(false);
  const [isParagraphVisible14, setIsParagraphVisible14] = useState(false);
  const [isParagraphVisible15, setIsParagraphVisible15] = useState(false);
  const [isParagraphVisible16, setIsParagraphVisible16] = useState(false);
  const [isParagraphVisible17, setIsParagraphVisible17] = useState(false);

  const toggleParagraphVisibility = () => {
    setIsParagraphVisible(!isParagraphVisible);
  };

  const toggleParagraphVisibility1 = () => {
    setIsParagraphVisible1(prevState => !prevState);
  };
  
  const toggleParagraphVisibility2 = () => {
    setIsParagraphVisible2(prevState => !prevState);
  };
  
  const toggleParagraphVisibility3 = () => {
    setIsParagraphVisible3(prevState => !prevState);
  };
  
  const toggleParagraphVisibility4 = () => {
    setIsParagraphVisible4(prevState => !prevState);
  };
  
  const toggleParagraphVisibility5 = () => {
    setIsParagraphVisible5(prevState => !prevState);
  };
  
  const toggleParagraphVisibility6 = () => {
    setIsParagraphVisible6(prevState => !prevState);
  };
  
  const toggleParagraphVisibility7 = () => {
    setIsParagraphVisible7(prevState => !prevState);
  };
  
  const toggleParagraphVisibility8 = () => {
    setIsParagraphVisible8(prevState => !prevState);
  };
  
  const toggleParagraphVisibility9 = () => {
    setIsParagraphVisible9(prevState => !prevState);
  };
  
  const toggleParagraphVisibility10 = () => {
    setIsParagraphVisible10(prevState => !prevState);
  };
  
  const toggleParagraphVisibility11 = () => {
    setIsParagraphVisible11(prevState => !prevState);
  };
  
  const toggleParagraphVisibility12 = () => {
    setIsParagraphVisible12(prevState => !prevState);
  };
  
  const toggleParagraphVisibility13 = () => {
    setIsParagraphVisible13(prevState => !prevState);
  };
  
  const toggleParagraphVisibility14 = () => {
    setIsParagraphVisible14(prevState => !prevState);
  };
  
  const toggleParagraphVisibility15 = () => {
    setIsParagraphVisible15(prevState => !prevState);
  };
  
  const toggleParagraphVisibility16 = () => {
    setIsParagraphVisible16(prevState => !prevState);
  };
  
  const toggleParagraphVisibility17 = () => {
    setIsParagraphVisible17(prevState => !prevState);
  };
  

  const containerStyle = {
    height: isParagraphVisible ? 'auto' : '250px',
  };
  const containerStyle1 = {
    height: isParagraphVisible1 ? 'auto' : '250px',
  };
  const containerStyle2 = {
    height: isParagraphVisible2 ? 'auto' : '250px',
  };
  const containerStyle3 = {
    height: isParagraphVisible3 ? 'auto' : '250px',
  };
  const containerStyle4 = {
    height: isParagraphVisible4 ? 'auto' : '250px',
  };
  const containerStyle5 = {
    height: isParagraphVisible5 ? 'auto' : '250px',
  };
  const containerStyle6 = {
    height: isParagraphVisible6 ? 'auto' : '250px',
  };
  const containerStyle7 = {
    height: isParagraphVisible7 ? 'auto' : '250px',
  };
  const containerStyle8 = {
    height: isParagraphVisible8 ? 'auto' : '250px',
  };
  const containerStyle9 = {
    height: isParagraphVisible9 ? 'auto' : '250px',
  };
  const containerStyle10 = {
    height: isParagraphVisible10 ? 'auto' : '300px',
  };
  const containerStyle11 = {
    height: isParagraphVisible11 ? 'auto' : '300px',
  };
  const containerStyle12 = {
    height: isParagraphVisible12 ? 'auto' : '250px',
  };
  const containerStyle13 = {
    height: isParagraphVisible13 ? 'auto' : '250px',
  };
  const containerStyle14 = {
    height: isParagraphVisible14 ? 'auto' : '250px',
  };
  const containerStyle15 = {
    height: isParagraphVisible15 ? 'auto' : '250px',
  };
  const containerStyle16 = {
    height: isParagraphVisible16 ? 'auto' : '250px',
  };
  const containerStyle17 = {
    height: isParagraphVisible17 ? 'auto' : '250px',
  };

  const handleSendDetailsClick = () => {
    //window.open('https://forms.gle/GVsnHqJ4gKBzGf2H6', '_blank');
    window.open('https://forms.gle/5zKETUPNbzvpfezE9', '_blank');
  }

  const handleInvitationClick = () => {
    window.open('https://forms.gle/5zKETUPNbzvpfezE9', '_blank');
  }

  // const handleFilechange=(e)=>{
  //   setDeclaration_form(null)
  //   let selected = e.target.files[0]
  //   console.log(selected)


  // //uploading image to firebase 
  // const file = selected;
  // const storageRef = projectStorage.ref();
  // const fileRef = storageRef.child(file.name);



  // console.log(declaration_form)
  //   if(!selected){
  //     setDoc_error('Please select a file ')
  //     return
  //   }
  //   if(!selected.type.includes('pdf')){
  //     setDoc_error('Selected file must be a pdf')
  //     return
  //   }
  //   if(selected.size > 200000){
  //     setDoc_error('File size must be less than 200kb')
  //     return
  //   }


  //   const up =fileRef.put(file).then(function (snapshot) {
  //     console.log(fileRef.getDownloadURL());
  //     fileRef.getDownloadURL().then(function (url) {
  //       console.log("File URL:", url);
  //       setDeclaration_form_url(url)
  //       console.log(url)
  //     });
  //   });


  //   setDoc_error(null)
  //   setDeclaration_form(selected)
  //   console.log('file uploaded successfully')
  // }

  // const handleFilechange1 = (e) => {
  //   setPaymentscreenshot(null)
  //   let selected = e.target.files[0]
  //   console.log(selected)


  //   //uploading image to firebase 
  //   const file = selected;
  //   const storageRef = projectStorage.ref();
  //   const fileRef = storageRef.child(file.name);

  //   console.log(payment_screenshot)
  //   if (!selected) {
  //     setDoc_error('Please select a file ')
  //     return
  //   }
  //   if (!selected.type.includes('pdf')) {
  //     setDoc_error('Selected file must be a pdf')
  //     return
  //   }
  //   if (selected.size > 200000) {
  //     setDoc_error('File size must be less than 200kb')
  //     return
  //   }

  //   const up = fileRef.put(file).then(function (snapshot) {
  //     console.log(fileRef.getDownloadURL());
  //     fileRef.getDownloadURL().then(function (url) {
  //       console.log("File URL:", url);
  //       setPayment_screenshot_url(url)
  //       console.log(url)
  //     });
  //   });


  //   setDoc_error(null)
  //   setPaymentscreenshot(selected)
  //   console.log('file uploaded successfully')

  // }

  const handleFilechange1 = async (e) => {
    setPaymentscreenshot(null);
    setDoc_error(null); // Clear any previous error messages

    const selected = e.target.files[0];

    // Check if a file is selected
    if (!selected) {
      setDoc_error('Please select a file');
      return;
    }

    // Check file type (allow images and PDFs)
    if (!selected.type.includes('image/') && !selected.type.includes('application/pdf')) {
      setDoc_error('Selected file must be an image (JPEG, PNG) or a PDF');
      return;
    }

    // Check file size (must be less than 200KB)
    // if (selected.size > 200000) {
    //   setDoc_error('File size must be less than 200KB');
    //   return;
    // }

    try {
      // Upload the selected file to Firebase Storage
      const storageRef = projectStorage.ref();
      const fileRef = storageRef.child(selected.name);

      // Set up an event listener for progress updates
      const uploadTask = fileRef.put(selected);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          // Handle progress (you can display progress here)
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`Upload is ${progress}% done`);
        },
        (error) => {
          // Handle errors during the upload
          console.error('Error uploading file:', error);
          setDoc_error('Error uploading file. Please try again.');
        },
        () => {
          // Upload completed successfully
          console.log('File uploaded successfully');

          // Get the download URL for the uploaded file
          fileRef.getDownloadURL().then((url) => {
            console.log('File URL:', url);
            setPayment_screenshot_url(url);
          });
        }
      );
    } catch (error) {
      // Handle any other unexpected errors
      console.error('Error:', error);
      setDoc_error('An unexpected error occurred. Please try again.');
    }
  };




  useEffect(() => {
    if (response.success) {
      // setName('')
      // setAmount('')
    }
  }, [response.success])

  const handleSubmit = async (e) => {
    e.preventDefault();

    const db = projectFirestore;
    const collectionRef = db.collection('affiliate_your_school_form');

    // Create an object with the data to send to Firestore
    const data = {
      school_name,
      school_address,
      schoolWebsite,
      contactPerson,
      contactEmail,
      contactphone,
      cityP,
      stateP,
      pinCode,
      cordinator1_name,
      cordi1_conatctNo,
      cordi1_conatctEmail,
      cordinator2_name,
      cordi2_conatctNo,
      cordi2_conatctEmail,
      declaration_form_url,
      payment_screenshot_url,
    };

    try {
      // Add the document to the collection
      const docRef = await collectionRef.add(data);
      console.log('Document written with ID: ', docRef.id);

      // Reset form fields or perform any other actions you need
      setSchool_name('')
      setSchoolAddress('')
      setSchoolWebsite('')
      setContactPerson('')
      setContactEmail('')
      setContactPhone('')
      setCityP('')
      setPinCode('')
      setCordinator1_name('')
      setCordi1_contactNo('')
      setCordi1_contactEmail('')
      setCordinator2_name('')
      setCordi2_contactNo('')
      setCordi2_contactEmail('')
      setStateP('')
      setDeclaration_form(null)
      setPaymentscreenshot(null)

    } catch (error) {
      console.error('Error adding document to Firestore: ', error);
      // Handle the error as needed
    }


    let form_data = document.querySelector('.school-form');
    let submit_but = document.querySelector('.after-submit')
    form_data.style.display = "none";
    submit_but.style.display = "inline-block"
  }

  // const handleImccClick = () => {
  //   window.open('https://docs.google.com/document/d/1A7RgrMLhdHADVefDAlgRkNrvQKuKjccc-IscoPE5Nm8/edit?usp=sharing', '_blank');
  // }


  // const [orderId, setOrderId] = useState(null);
  // const [paymentId, setPaymentId] = useState(null);

  // const handlePayment1 = async () => {
  //   try {

  //     const razorpayKey = 'rzp_live_H30xpgmxzhTAaN';

  //     // Initialize Razorpay on the client side
  //     const options = {
  //       key: razorpayKey,
  //       amount: 100, // Amount in paise
  //       currency: 'INR',
  //       // order_id: orderId,
  //       name: 'INDIA MUN',
  //       callback_url: "https://indiamun.org/",
  //       description: 'IYFA Course',
  //       handler: function (response) {
  //         setPaymentId(response.razorpay_payment_id);
  //         // Handle payment success, update order status on your server, etc.
  //       },
  //       prefill: {},
  //       notes: {
  //         address: 'Customer Address',
  //       },
  //       theme: {
  //         color: '#F37254',
  //       },
  //     };

  //     const rzp = new window.Razorpay(options);
  //     rzp.open();
  //   } catch (error) {
  //     console.error('Error handling payment:', error);
  //   }
  // };

  // const [paymentError, setPaymentError] = useState(null);

  // const handlePayment = async () => {
  //   const razorpay = new Razorpay({
  //     key_id: 'rzp_live_H30xpgmxzhTAaN',  
  //     key_secret: 'RNg0ePo0yxJC42Gbk6LHGCZs',
  //   });

  //   const options = {
  //     key: 'rzp_live_H30xpgmxzhTAaN',
  //     amount: '100',
  //     currency: "INR",
  //     name: "INDIA MUN",
  //     description: "Tutorial of RazorPay",
  //     image: "https://indiamun.org/static/media/logo%20left.548aa3eb.webp",
  //     callback_url: "https://indiamun.org/",  // This URL is where Razorpay will redirect the user after the payment is completed or canceled. It's the endpoint where Razorpay will send the payment response.
  //     prefill: {
  //       name: "", 
  //       email: "",  
  //       contact: ""
  //     },
  //     order_id: "",
  //     notes: {
  //       "address": "Razorpay Corporate Office"
  //     },
  //     theme: {
  //       "color": "#121212"
  //     }
  //   };

  //   try {
  //     const response = await razorpay.createPaymentOrder(options);
  //     // Handle success
  //     console.log(response);
  //   } catch (error) {
  //     // Handle error
  //     console.log(error);
  //   }

  //   const razorpayCheckout = new window.Razorpay(options);
  //   razorpayCheckout.open();
  // };



  return (
    <div className='affliate-main-container'>
      {/* <button onClick={handlePayment1}>Pay Now</button>
      {paymentError && <p>{paymentError}</p>} */}
      {/* iyfa, ylp,  */}
      <div className='top_comp'>
        <a href='/'><img className='left_img' src={left_img} alt="" /></a>
        <h2>INDIA’S YOUTH FOR CLIMATE ACTION</h2>
        <img className='right_img' src={right_img} alt="" />
      </div>
      <Navbar />


      <h1 className='aff-h1'>Global Schools for Climate Action</h1>
      <div className="aff-p-1-container">
        <p className='aff-p-1'>Building India's largest youth network for climate action, leadership and innovation.</p>
      </div>

      <div className="aff-hero">
        <div className="aff-hero-left">
          <h3 className='aff-hero-subheading'>Registrations open for</h3>
          <div className="aff-hero-img">
            <img src={indiaMunChapter} alt="indiaMunChapter" />
          </div>
          <h3 className="aff-hero-subheading-2">Want to Affiliate Your School with India MUN?</h3>
          <button className='aff-hero-btn' onClick={handleSendDetailsClick}>Apply Now</button>
        </div>
        <div className="aff-hero-right">
          <div className="aff-hero-right-img">
            <img src={GSCAPlaque} alt="GSCAPlaque" />
          </div>
        </div>
      </div>

      {/* <img className='mobile_photo' src='GSCA mobile.webp' width='100%' alt='mobile_photo'></img>
      <div className='program_mun_content4'>
        <img src="GSCA.webp" width='100%' alt="" />
      </div> */}

      <div className='img_gallery'>
        {/* <img className='gallery' src={aff_left} alt="" />
        <img className='gallery' src={aff_right} alt="" /> */}
        <img className='gallery' src={Student1} alt="Student1" />
        <img className='gallery' src={Student2} alt="Student2" />
        <img className='gallery' src={Student3} alt="Student3" />
        <img className='gallery' src={Student4} alt="Student4" />
      </div>


      <div className="aff-unite">
        <h1 className="aff-unite-h1">Unite - Empower - Act</h1>
        <h1 className="aff-unite-subheading">Join India MUN for Climate Action, Leadership and Innovation.</h1>
        <p className='am-content'>India MUN is a distinguished institution in India, uniting and empowering youth for climate action, leadership and innovation. It provides a transformative platform for the students to help nurture their ideas into action, connecting them with a global community supported by global leaders, industry experts, UN Environment Program and UN Climate Change.</p>
        <p className='am-content'>By affiliating with India MUN, your school becomes part of a thriving network of <span style={{ color: 'rgb(55, 127, 200)' }}>top schools from India</span>, united in signing the climate pledge for "UN Decade on Climate Action". This prestigious alliance opens doors to participate in UN-based programs and events, fostering connections among young
          leaders who are passionately committed to shaping a greener and more resilient world.
        </p>
        <p className='am-content'>India MUN secretariat is committed to providing our affiliated schools with extensive support and resources, including trainings for teachers and
          students, and ongoing guidance throughout the program's journey. Our engaging, interactive, and impactful programs create a unique and
          transformative experience for students.</p>
        <p className='am-content'>Seize this unparalleled opportunity to empower your students, inspire communities, and lead the charge. Together, let's embark on a rewarding journey
          of climate action, leadership and innovation, crafting a world that thrives and prospers for generations to come.
        </p>
        <div className="space" />
        <div className="space" />
        <div className='perk-benefit'><a href='https://drive.google.com/file/d/1_kA23RmVVRLbnqns22LLZAC-b9PZwi7N/view?usp=sharing' target={'_blank'}><button>Download Brochure</button></a></div>
      </div>


      {/* <h1 className='aff1'>Unite, Empower, Act</h1>
      <div className="aff2">Join India MUN for Climate Action</div>
      <p className='am-content'>India MUN is a distinguished institution in India, uniting and empowering youth for climate action. It provides a transformative platform for the students to help nurture their ideas into action, connecting them with a global community supported by global leaders, industry experts, UN Environment Program and UN Climate Change.</p>
      <p className='am-content'>By affiliating with India MUN, your school becomes part of a thriving network of <span style={{ color: 'rgb(55, 127, 200)' }}>over 1000 schools from India</span>, united in signing the climate pledge for "UN Decade on Climate Action". This prestigious alliance opens doors to participate in UN-based programs and events, fostering connections among young leaders who are passionately committed to shaping a greener and more resilient world.
      </p>
      <p className='am-content'>India MUN secretariat is committed to providing our affiliated schools with extensive support and resources, including trainings for teachers and students, and ongoing guidance throughout the program's journey. Our engaging, interactive, and impactful programs create a unique and transformative experience for students.</p>
      <p className='am-content'>Seize this unparalleled opportunity to empower your students, inspire communities, and lead the charge. Together, let's embark on a rewarding journey of climate action, crafting a world that thrives and prospers for generations to come</p> */}


      

      {/* <div className='program_mun_content4'>
        <img src="partners des.webp" alt="" />
      </div> */}

      {/* <div className='img_main_div'>
      <div className='img_main_div1'>
        <img src={img1} />
        <img src={img2} />
        <img src={img3} />
        <img src={img4} />
        <img src={img5} />
      </div>
      <div className='img_main_div2'>
        <img src={img6} />
        <img src={img7} />
      </div>
      <div className='img_main_div3'>
        <img src={img8} />
        <img src={img9} />
        <img src={img10} />
        <img src={img11} />
        <img src={img12} />
      </div>
    </div> */}

    <div className="aff-partners-and-affiliates">
      <div className="aff-partners-and-affiliates-logo-img-container">
        <img src={indiaMunNewLogo} alt="indiaMunNewLogo" />
      </div>
      <h3 className="aff-partners-and-affiliates-heading">Partners and Affiliates</h3>
      <div className="aff-partners-and-affiliates-img-container">
        <img src={PartnersLogo} alt="PartnersLogo" />
      </div>
      <img className='mobile_photo' src="M2.jpg" width="100%" alt='mobile_photo' />
    </div>


    <div className='img-slide-car'>
      <Carousel cols={4} rows={1} gap={0} loop showDots={true} autoplay={2000}>
        <Carousel.Item>
          <img width="80%" src={car1} alt="car" />
        </Carousel.Item>
        <Carousel.Item>
          <img width="80%" src={car2} alt="car" />
        </Carousel.Item>
        <Carousel.Item>
          <img width="80%" src={car3} alt="car" />
        </Carousel.Item>
        <Carousel.Item>
          <img width="80%" src={car4} alt="car" />
        </Carousel.Item>
        <Carousel.Item>
          <img width="80%" src={car5} alt="car" />
        </Carousel.Item>
        <Carousel.Item>
          <img width="80%" src={car6} alt="car" />
        </Carousel.Item>
        <Carousel.Item>
          <img width="80%" src={car7} alt="car" />
        </Carousel.Item>
        <Carousel.Item>
          <img width="80%" src={car8} alt="car" />
        </Carousel.Item>
      </Carousel>
    </div>


    <h1 className='aff-partners-and-affiliates-heading'>Affiliation Benefits</h1>
    {/* <img className='mobile_photo' src="m1.webp" width="100%"></img> */}
    {/* <div className='program_mun_content4'>
      <img src="why affiliate.webp" alt="" />
    </div> */}
    {/* <div className="why-affiliate-container">
      <HoverInfoDiv mainHeading="A Powerful Platform for India's Youth" hoverTextContent="India MUN (Model United Nations) is a dynamic organization dedicated to uniting and empowering India's youth to take meaningful action against the pressing challenge of climate change. As an esteemed platform for students, we provide an unparalleled opportunity for young minds to engage, discuss, and shape the future of our planet." />
      <HoverInfoDiv mainHeading="Fostering Leadership and Diplomacy" hoverTextContent="By affiliating with India MUN, schools and colleges enable their students to develop vital leadership and diplomacy skills. Through MUN simulations, students learn the art of negotiation, critical thinking, public speaking, and problem-solving, all of which are essential traits for effective climate advocates and change-makers." />
      <HoverInfoDiv mainHeading="Real-World Problem Solving" hoverTextContent="India MUN moves beyond activism and emphasizes action. By participating in our conferences, students actively work on finding solutions to real-world climate issues. Through research, policy drafting, and debate, they gain a deeper understanding of climate challenges and develop innovative approaches to address them." />
      <HoverInfoDiv mainHeading="Empowering Young Voices" hoverTextContent="We believe in the power of youth voices in shaping climate policies and initiatives. India MUN provides a safe and inclusive platform where students from diverse backgrounds can express their ideas, share experiences, and collaborate to create a collective impact on the environment." />
      <HoverInfoDiv mainHeading="Connecting Students Nationally and Globally" hoverTextContent="Affiliation with India MUN opens doors to a vast network of like-minded students across the nation and beyond. By interacting with peers from different regions and cultures, students broaden their perspectives and develop a global mindset to tackle climate issues on an international scale." />
      <HoverInfoDiv mainHeading="Guest Speakers and Experts" hoverTextContent="Our conferences feature esteemed guest speakers and climate experts who share their insights and experiences, inspiring students to take informed actions. Through these interactions, students gain exposure to diverse perspectives and innovative solutions for a sustainable future." />
      <HoverInfoDiv mainHeading="Skill Enhancement Workshops" hoverTextContent="India MUN offers exclusive skill enhancement workshops to affiliated institutions. These workshops cover a wide range of topics, including sustainable development, environmental advocacy, communication strategies, and project management, equipping students with the tools they need to lead climate action initiatives." />
      <HoverInfoDiv mainHeading="Impactful Projects and Campaigns" hoverTextContent="As part of India MUN, students have the opportunity to c1ollaborate on impactful climate projects and campaigns. From tree-planting drives and waste reduction initiatives to awareness campaigns and policy recommendations, these projects foster a sense of responsibility and ownership for the environment." />
      <HoverInfoDiv mainHeading="Recognitions and Awards" hoverTextContent="Affiliated schools and colleges receive recognition for their commitment to climate action through India MUN. Outstanding participants and institutions are honored with awards, certificates, and media coverage, showcasing their dedication to creating a sustainable future." />
    </div> */}


    <div className="why-affiliate-container">
      <div className="aff-benifit-container" style={containerStyle}>
        <img src={AffiliationCertificate} alt="AffiliationCertificate" />
        <h4 className="aff-benifit-container-title">GSCA Affiliation Certificate:</h4>
        <button className='aff-benifit-container-button' onClick={toggleParagraphVisibility}>▼</button>
        {isParagraphVisible && (
          <p className="aff-benifit-container-p">
            India MUN Affiliation certificate is a prestigious recognition and serves as a testament to your commitment towards climate action.
          </p>
        )}
      </div>

      <div className="aff-benifit-container" style={containerStyle1}  >
        <img src={AccessToSupportAndResources} alt="AccessToSupportAndResources" />
        <h4 className="aff-benifit-container-title">Access to Support and Resources:</h4>
        
        <button className='aff-benifit-container-button' onClick={toggleParagraphVisibility1}>▼</button>
        {isParagraphVisible1 && (
          <p className="aff-benifit-container-p">Affiliated schools gain access to dedicated administrative support and curated learning content to host India MUNx at your school along with access to educational resources related to climate change and sustainability.</p>
        )}

      </div>

      <div className="aff-benifit-container" style={containerStyle2}  >
        <img src={EnhancedReputation} alt="EnhancedReputation" />
        <h4 className="aff-benifit-container-title">Enhanced Reputation:</h4>
        
        <button className='aff-benifit-container-button' onClick={toggleParagraphVisibility2}>▼</button>
        {isParagraphVisible2 && (
          <p className="aff-benifit-container-p">Affiliation with IndiaMUN enhances the school's reputation and demonstrates its dedication to holistic education, climate action and responsible citizenship.</p>
        )}
      </div>

      <div className="aff-benifit-container" style={containerStyle3}  >
        <img src={Accreditation} alt="Accreditation" />
        <h4 className="aff-benifit-container-title">GSCA Accreditation:</h4>
        
        <button className='aff-benifit-container-button' onClick={toggleParagraphVisibility3}>▼</button>
        {isParagraphVisible3 && (
          <p className="aff-benifit-container-p">Accreditation with Global Schools for Climate Action(GSCA) recognizes India’s Top schools leading climate action. Based on your performance score, your school is awarded a silver, gold or platinum rating.</p>
        )}
      </div>

      <div className="aff-benifit-container" style={containerStyle4}  >
        <img src={GreaterStudentEngagement} alt="GreaterStudentEngagement" />
        <h4 className="aff-benifit-container-title">Greater Student Engagement:</h4>
        
        <button className='aff-benifit-container-button' onClick={toggleParagraphVisibility4}>▼</button>
        {isParagraphVisible4 && (
          <p className="aff-benifit-container-p">IndiaMUN provides a unique platform for students to actively participate in climate action initiatives, fostering student engagement, promoting leadership skills, and encouraging a sense of responsibility.</p>
        )}
      </div>

      <div className="aff-benifit-container" style={containerStyle5}  >
        <img src={NetworkingAndCollaboration} alt="NetworkingAndCollaboration" />
        <h4 className="aff-benifit-container-title">Networking and Collaborations:</h4>
        
        <button className='aff-benifit-container-button' onClick={toggleParagraphVisibility5}>▼</button>
        {isParagraphVisible5 && (
          <p className="aff-benifit-container-p">Affiliation with IndiaMUN opens doors for networking and collaborations with esteemed institutions, policymakers, and corporate leaders in the field of climate action. </p>
        )}
      </div>

      <div className="aff-benifit-container" style={containerStyle6}  >
        <img src={EnhancedEducationalSupport} alt="EnhancedEducationalSupport" />
        <h4 className="aff-benifit-container-title">Enhanced Educational Support:</h4>
        
        <button className='aff-benifit-container-button' onClick={toggleParagraphVisibility6}>▼</button>
        {isParagraphVisible6 && (
          <p className="aff-benifit-container-p">Collaborating with higher education institutions provides schools access to research materials, academic expertise, and specialized facilities, enriching the quality of education and teaching materials available to students. </p>
        )}
      </div>

      <div className="aff-benifit-container" style={containerStyle7}  >
        <img src={ResumeOpportunities} alt="ResumeOpportunities" />
        <h4 className="aff-benifit-container-title">Resume Opportunities:</h4>
        
        <button className='aff-benifit-container-button' onClick={toggleParagraphVisibility7}>▼</button>
        {isParagraphVisible7 && (
          <p className="aff-benifit-container-p">IndiaMUN provides students access to international projects and fellowships, enabling them to develop real-world skills, gain exposure to diverse perspectives, and stand out in college application and future career endeavors. </p>
        )}
      </div>

      <div className="aff-benifit-container" style={containerStyle8}  >
        <img src={GlobalExposure} alt="GlobalExposure" />
        <h4 className="aff-benifit-container-title">Global Exposure:</h4>
        
        <button className='aff-benifit-container-button' onClick={toggleParagraphVisibility8}>▼</button>
        {isParagraphVisible8 && (
          <p className="aff-benifit-container-p">Affiliation with IndiaMUN connects your school to a global network of schools, youth activists and change-makers working with United Nations’ Decade of Climate Action and Ecosystem Restoration. Students gain the opportunity to participate in international conferences, interact with students from different countries, and contribute to global discussions on climate change and sustainability. </p>
        )}
      </div>

      <div className="aff-benifit-container" style={containerStyle9}  >
        <img src={RecognitionAndAwards} alt="RecognitionAndAwards" />
        <h4 className="aff-benifit-container-title">Recognition and Awards:</h4>
        
        <button className='aff-benifit-container-button' onClick={toggleParagraphVisibility9}>▼</button>
        {isParagraphVisible9 && (
          <p className="aff-benifit-container-p">IndiaMUN recognizes and awards affiliated schools for their outstanding contributions to climate action and environmental conservation. This recognition boosts the school's profile and highlights their commitment to sustainable practices. </p>
        )}
      </div>

      <div className="aff-benifit-container" style={containerStyle10}  >
        <img src={ProfessionalDevelopment} alt="ProfessionalDevelopment" />
        <h4 className="aff-benifit-container-title">Professional Development for Educators:</h4>
        
        <button className='aff-benifit-container-button' onClick={toggleParagraphVisibility10}>▼</button>
        {isParagraphVisible10 && (
          <p className="aff-benifit-container-p">Networking with higher education experts offers educators opportunities for professional growth, such as attending workshops, conferences, and training programs. This enables them to stay current with educational innovations and teaching methodologies. </p>
        )}
      </div>

      <div className="aff-benifit-container" style={containerStyle11}  >
        <img src={CareerPathways} alt="CareerPathways" />
        <h4 className="aff-benifit-container-title">Career Pathways, Internships and Experiential Learning:</h4>
        
        <button className='aff-benifit-container-button' onClick={toggleParagraphVisibility11}>▼</button>
        {isParagraphVisible11 && (
          <p className="aff-benifit-container-p">Collaboration with industry leaders and corporates enables schools to establish clear career pathways for students. This includes internships, apprenticeships, and mentorship programs that guide students toward successful careers. This real-world experience helps students bridge the gap between theory and practice. </p>
        )}
      </div>

      <div className="aff-benifit-container" style={containerStyle12}  >
        <img src={IndustryRelevantSkills} alt="IndustryRelevantSkills" />
        <h4 className="aff-benifit-container-title">Industry-Relevant Skills:</h4>
        
        <button className='aff-benifit-container-button' onClick={toggleParagraphVisibility12}>▼</button>
        {isParagraphVisible12 && (
          <p className="aff-benifit-container-p">Partnering with industry brings industry-specific knowledge and expertise into the classroom. This equips students with practical, job-ready skills that enhance their employability. </p>
        )}
      </div>

      <div className="aff-benifit-container" style={containerStyle13}  >
        <img src={GlobalPerspective} alt="GlobalPerspective" />
        <h4 className="aff-benifit-container-title">Global Perspective:</h4>
        
        <button className='aff-benifit-container-button' onClick={toggleParagraphVisibility13}>▼</button>
        {isParagraphVisible13 && (
          <p className="aff-benifit-container-p">Collaboration with United Nations bodies and international organizations broadens the global perspective of both students and educators. It exposes them to international issues, cross-cultural experiences, and global opportunities. </p>
        )}
      </div>

      <div className="aff-benifit-container" style={containerStyle14}  >
        <img src={CommunityImpact} alt="CommunityImpact" />
        <h4 className="aff-benifit-container-title">Community Impact:</h4>
        
        <button className='aff-benifit-container-button' onClick={toggleParagraphVisibility14}>▼</button>
        {isParagraphVisible14 && (
          <p className="aff-benifit-container-p">Schools engaged with United Nations bodies can extend their reach to address pressing global challenges within their local communities. This engagement empowers students to become active contributors to global solutions at the grassroots level. </p>
        )}
      </div>

      <div className="aff-benifit-container" style={containerStyle15}  >
        <img src={InnovativeTeaching} alt="InnovativeTeaching" />
        <h4 className="aff-benifit-container-title">Innovative Teaching:</h4>
        
        <button className='aff-benifit-container-button' onClick={toggleParagraphVisibility15}>▼</button>
        {isParagraphVisible15 && (
          <p className="aff-benifit-container-p">Networking and collaboration foster an environment of innovation in teaching. Schools can adopt new teaching methods, technologies, and interdisciplinary approaches that enhance the learning experience. </p>
        )}
      </div>

      <div className="aff-benifit-container" style={containerStyle16}  >
        <img src={InterSchoolResourceSharing} alt="InterSchoolResourceSharing" />
        <h4 className="aff-benifit-container-title">Inter-school Resource Sharing:</h4>
        
        <button className='aff-benifit-container-button' onClick={toggleParagraphVisibility16}>▼</button>
        {isParagraphVisible16 && (
          <p className="aff-benifit-container-p">Schools can share educational resources, lesson plans, and best practices with their partners, leading to resource efficiency and cost savings. This is especially valuable for schools with limited budgets. </p>
        )}
      </div>

      <div className="aff-benifit-container" style={containerStyle17}  >
        <img src={PeerLearning} alt="PeerLearning" />
        <h4 className="aff-benifit-container-title">Peer Learning:</h4>
        
        <button className='aff-benifit-container-button' onClick={toggleParagraphVisibility17}>▼</button>
        {isParagraphVisible17 && (
          <p className="aff-benifit-container-p">Collaboration encourages schools to learn from one another, exchanging insights, challenges, and successful strategies. This peer learning community can drive continuous improvement and excellence in education. </p>
        )}
      </div>
    </div>

    <div className="aff-youth-programs-container">
      <div className="aff-youth-program-1">
        <h3 className='aff-youth-program-heading'>Youth Programs</h3>
        <p className="aff-youth-program-1-bold-p">50% Discount for Affiliated schools students on on youth programs of India MUN</p>
        <p className="aff-youth-program-1-p">Youth Leadership Program India MUN climate Conference India’s Young Forest Ambassador Program <br /> X-earth Hackathon exclusive slot</p>
      </div>
      <div className="aff-youth-program-2">
        <h3 className='aff-youth-program-heading'>Host Your Own India MUN x</h3>
        <p className="aff-youth-program-2-p">Immerse Your Students in the art of diplomacy with complete guidance and support from India MUN and tapping into a wealth of resources on climate change and sustainability. Affiliated schools can also avail access to invite a senior executive delegation from India MUN.</p>
        <img src="" alt="" />
      </div>
      <div className="aff-youth-program-3">
        <h3 className='aff-youth-program-heading-3'>Exclusive Representation at</h3>
        <p className='aff-youth-program-3-big-text'>COP30</p>
        <p className="aff-youth-program-2-p">Your school will have the prestigious opportunity to represent India at COP30, showcasing your commitment to climate leadership on a global platform.</p>
      </div>
    </div>

    
    
    
        <h1 className='wasi-container'>Want To Affiliate Your School with India MUN ?</h1>
    
    {/* TODO: ADD VIDEO */}
    
    <div className="wasi-2-btns-container">
      <div className="wasi-2-btns">
        <button className='wasi-2-btns-btn' onClick={handleSendDetailsClick}>Apply Now</button>
      </div>
    </div>
    <p className='aff-wasi-p'>At India MUN, we firmly believe in moving beyond mere activism and encouraging tangible action to address pressing environmental challenges. Your affiliation with us signifies your dedication to fostering a culture of environmental consciousness within your campus and among your students.</p>

    {/* Collapible Component Goes Here */}
    <div className='collapse-buttons'>
      <Collapsible label="Click here for Eligibility Criteria">
        <div className='com-perk-eli'>
          <p><span className='perk-head'>Educational Institution Type:</span> <br></br>Only schools offering formal education, including primary, secondary, and higher secondary education, are eligible for affiliation with India MUN.</p>
          <p><span className='perk-head'>Environmental Commitment:</span> <br></br>The school should demonstrate a genuine commitment to climate action and environmental sustainability. This commitment can be showcased through existing initiatives, programs, or policies that promote environmental awareness, conservation, and sustainable practices within the school community.</p>
          <p><span className='perk-head'>Curriculum Alignment:</span> <br></br>The school's curriculum should have the flexibility to incorporate climate change and environmental issues as part of the educational content. This alignment can include online courses, projects, or activities that educate students about climate change, its impact, and potential solutions.</p>
          <p><span className='perk-head'>Student Involvement:</span> <br></br>The school should demonstrate a strong commitment to engaging its students in climate-related activities. This can involve creating platforms for student-led initiatives, clubs, or projects focused on climate action, sustainability, and environmental awareness.</p>
          <p><span className='perk-head'>Teacher Participation:</span> <br></br>The school should ensure active involvement of 2 coordinators to guide students' participation in India MUN events and programs.</p>
          <p><span className='perk-head'>Climate Pledge:</span> <br></br>The school should be willing to sign the climate pledge for COP28, indicating its dedication to climate action and aligning with the goals of India MUN's mission.</p>
          <p><span className='perk-head'>Administrative Support:</span> <br></br>The school administration should be willing to support and facilitate students' participation in India MUN events, activities, and training programs.</p>
          <p><span className='perk-head'>Commitment to Engagement:</span> <br></br>The school should be committed to actively participating in India MUN's programs, events, and initiatives. This involvement may include attending conferences, workshops, webinars, and collaborative projects related to climate action.</p>
          <p><span className='perk-head'>Long-Term Engagement:</span> <br></br>The school should express a genuine interest in maintaining a long-term affiliation with India MUN, as the program's impact on climate action is most effective when sustained over multiple years.</p>
          <p><span className='perk-head'>Adherence to Program Guidelines:</span> <br></br>The school should agree to follow the guidelines, codes of conduct, and rules established by India MUN for participation in its events and activities.</p>
        </div>
      </Collapsible>

      <Collapsible label="Click here for Certification Criteria">
        <h1 className='aff'>Certification Criteria for India MUN Affiliation:</h1>

        <div className='com-perk-eli'>
          <p><span className='perk-head'>Application Submission:</span> <br></br>Fill out the application form provided by India MUN.</p>
          <p><span className='perk-head'>Review and Evaluation:</span> <br></br>India MUN's team will review your application and assess its alignment with the eligibility criteria. They may reach out for additional information or clarification
            if needed.</p>
          <p><span className='perk-head'>Approval Notification:</span> <br></br>Once your application is reviewed, you will receive a notification from India MUN regarding the approval status. If approved, the notification will include details
            about the next steps and the affiliation process.</p>
          <p><span className='perk-head'>Climate Pledge Signing:</span> <br></br>As part of the affiliation process, your school will be required to sign the climate pledge for COP28. This demonstrates your commitment to climate action and
            aligns your institution with India MUN's mission.</p>
          <p><span className='perk-head'>Orientation and Training:</span> <br></br>India MUN will provide an orientation and training session for teachers and administrators to familiarize them with the program's goals, activities, and
            expectations. This training will help ensure effective integration of India MUN's initiatives within the school's environment.</p>
          <p><span className='perk-head'>Student Engagement Planning & Climate Club Formation:</span> <br></br>Collaborate with India MUN to plan how your students will be engaged in the India MUN programs. Encourage the formation of a India MUN Climate
            Club(IMCC) within the school. This club will serve as a platform for students to actively participate in climate-related projects, discussions, and awareness
            campaigns, both within the school and outside.</p>
          <p><span className='perk-head'>Participation in Programs and Events:</span> <br></br>Engage your students in India MUN's programs, workshops, conferences, and events related to climate action. Encourage their active involvement and
            participation in discussions, projects, and collaborative activities.</p>
          <p><span className='perk-head'>Ongoing Support and Guidance:</span> <br></br>Throughout the affiliation period, India MUN will provide ongoing support and guidance to ensure the success of your school's participation. This may include
            resource sharing, communication, and addressing any queries or challenges.</p>
          <p><span className='perk-head'>Submission of Reports and Documentation:</span> <br></br>As required by India MUN, submit reports on the progress of your school's participation, detailing activities, student engagement, and outcomes achieved.
            This helps demonstrate the impact of your affiliation.</p>
          <p><span className='perk-head'>Certificate Issuance:</span> <br></br>Upon successful completion of the affiliation period and participation requirements, India MUN will issue the Affiliation Certificate to your school. This
            certificate acknowledges your school's dedication to climate action and its active involvement in India MUN's initiatives.</p>
          <p><span className='perk-head'>Continued Engagement:</span> <br></br>After receiving the certificate, continue your school's engagement with India MUN by participating in subsequent events, programs, and initiatives to maintain
            your affiliation and contribute to the climate action movement.</p>
        </div>
      </Collapsible>

      <Collapsible label="Click here for IMCC Guidelines">
        <div className="icc-main">


          <h1 className='aff'>IMCC (India MUN Climate Club) Formation Guidelines</h1>

          <div className="imcc-content">
            <p>
              <b>Club Name: </b> School name_IMCC <br /><br />

              <b>Objective: </b> The IMCC aims to empower students to take meaningful action on climate change, engage in environmental initiatives, and support the goals of the UN Decade on Climate Action.<br /><br />

              <b>1) Leadership Structure:</b> <br /><br />

              President: 1<br />
              Vice President: 1<br />
              Treasurer: 1<br />
              Event Organizing Team<br />
              Outreach & Content Team<br /><br />

              Members:<br />
              Minimum: 5 students<br />
              Maximum- 50 students (for larger schools, you can consider expanding the membership)<br /><br />


              <b>2) Faculty Coordinators:</b><br />

              Each school should have two faculty coordinators who will provide guidance and support to the IMCC. These coordinators will play a crucial role in facilitating the club's activities and ensuring that it aligns with the school's values and environmental objectives.<br /><br />

              <b>3) Meetings:</b><br />
              Regular meetings should be held at least twice a month to ensure club activities run smoothly and members are actively engaged.<br /><br />

              <b>4) Club Activities:</b><br />
              The IMCC should undertake a variety of activities to promote climate action, including:<br /><br />

              - Educational Workshops and Seminars<br />
              - Clean-Up Drives<br />
              - Fundraising for Environmental Projects<br />
              - Awareness Campaigns<br />
              - Participation in India MUN's Climate Action Programs<br />
              - Collaboration with Other Schools and Environmental Organizations<br /><br />


              <b>5) Climate Pledge:</b><br />
              All IMCC members should sign the Climate Pledge for the "UN Decade on Climate Action."<br /><br />

              <b>6) Annual Reporting:</b><br />
              The club should create an annual report recording all activities and achievements and submit that to the faculty coordinators.<br /><br />

              <b>7) Communication:</b><br />
              Create a dedicated online platform or group for efficient communication among members, such as a group chat, email list, or social media page.<br /><br />

              <b>8) Community Engagement:</b><br />
              Encourage IMCC members to actively engage with the local community and look for opportunities to collaborate with other schools, environmental organizations, and community groups.<br /><br />

              <b>9) India MUN Support:</b><br />
              India MUN will provide support to all affiliated schools by providing access to <br />
              - Resources and toolkits<br />
              - India MUN programs <br />
              - Mentors<br />
              - Industry expertise <br /><br />

              <b>10) Monitoring and Recognition:</b><br />
              India MUN will monitor the progress and impact of IMCCs and recognize outstanding achievements through awards, certificates, and other forms of recognition like Accreditation.<br /></p>

          </div>
        </div>

      </Collapsible>

      {/* <button className='Aff-button imcc-btn' onClick={handleImccClick}>IMCC Guidelines</button> */}
    </div>


    <div className="aff-impc-container">
      <h2 className="aff-impc-heading">India MUN Principals' Conclave 2025</h2>
      <p className="aff-impc-ahp">with UN dignitaries</p>
      <div className="aff-impc-subcontainer">
        <div className="aff-impc-subcontainer-left">
          <h4 className="aff-impc-subcontainer-left-heading">Global Schools for Climate Action</h4>
          <h4 className="aff-impc-subcontainer-left-p">Network of top schools of India</h4>
        </div>
        <div className="aff-impc-subcontainer-right">
          <img src={indiaMunChapter} alt="indiaMunChapter" />
        </div>
      </div>
      <p className="aff-impc-p">Principals from the affiliated schools avail an exclusive invitation to participate in India MUN Principals' Conclave, 2025, with UN dignitaries.</p>
      <button className='aff-impc-btn' onClick={handleSendDetailsClick}>Affiliate your school</button>
    </div>

    {/* <p className='eli-criteria'>Eligibility Criteria</p>
<div className='com-perk-eli'>
<p><span className='eli-head'>Declaration:</span> The school should be recognized and accredited by India MUN.</p>
<p><span className='eli-head'>Minimum Number of students:</span> The school should have a minimum number of students who can actively participate in India MUN conferences and activities. The specific number will be determined by India MUN organizers.</p>
<ul>
<li>Ensure participation of students in the India's Young Forest Ambassador Program.</li>
<li>Ensure participation of students in the Youth Leadership Program.</li>
</ul>
<p><span className='eli-head'>Supportive administration:</span> The school's administration should be supportive of student involvement in India MUN activities, including granting necessary permissions and providing resources as needed.</p>
<ul>
<li>Support the formation of an India MUN student club in the institution.</li>
</ul>
<p><span className='eli-head'>Faculty Involvement:</span> The school should designate at least two faculty member who will serve as the coordinator or advisor for India MUN activities and facilitate student participation.</p>
</div> */}


    {/* <h1 className='aff'>AFFILIATE YOUR SCHOOL TODAY</h1>

    <div className="school-form">
      <form onSubmit={handleSubmit}>
        <p className='school-form-head'>FILL IN DETAILS</p>
        <div className='school-form-items'>
          <div className='school-items-form'>School Name: <input type='text' value={school_name} onChange={(e) => setSchool_name(e.target.value)} required id="school-name"></input></div>
          <div className='school-items-form'>School Address: <input type='text' value={school_address} onChange={(e) => setSchoolAddress(e.target.value)} required id="school-Address"></input></div>
          <div className='school-items-form'>School Website(if applicable): <input type='text' value={schoolWebsite} onChange={(e) => setSchoolWebsite(e.target.value)} id="school-website"></input></div>
          <div className='school-items-form'>Contact Person: <input type='text' value={contactPerson} onChange={(e) => setContactPerson(e.target.value)} required id="Contact-Person"></input></div>
          <div className='school-items-form'>Contact Email: <input type='text' value={contactEmail} onChange={(e) => setContactEmail(e.target.value)} required id="Contact-email"></input></div>
          <div className='school-items-form'>Contact Phone Number: <input type='text' value={contactphone} onChange={(e) => setContactPhone(e.target.value)} required id="Contact-Phone"></input></div>
          <div className='school-items-form'>City: <input type='text' value={cityP} onChange={(e) => setCityP(e.target.value)} required id="City"></input></div>
          <div className='school-items-form'>State: <input type='text' value={stateP} onChange={(e) => setStateP(e.target.value)} required id="State"></input></div>
          <div className='school-items-form'>Pincode: <input type='text' value={pinCode} onChange={(e) => setPinCode(e.target.value)} required id="Pincode"></input></div>
          <div className='school-items-form'>Coordinator 1 Name: <input type='text' value={cordinator1_name} onChange={(e) => setCordinator1_name(e.target.value)} required id="Coordinator 1 Name"></input></div>
          <div className='school-items-form'>Coordinator 2 Name: <input type='text' value={cordinator2_name} onChange={(e) => setCordinator2_name(e.target.value)} required id="Coordinator 2 Name"></input></div>
          <div className='school-items-form'>Coordinator 1 Contact Email Id: <input type='text' value={cordi1_conatctEmail} onChange={(e) => setCordi1_contactEmail(e.target.value)} required id="email-info-1"></input></div>
          <div className='school-items-form'>Coordinator 2 Contact Email Id: <input type='text' value={cordi2_conatctEmail} onChange={(e) => setCordi2_contactEmail(e.target.value)} required id="email-info-2"></input></div>
          <div className='school-items-form'>Coordinator 1 Contact Number: <input type='text' value={cordi1_conatctNo} onChange={(e) => setCordi1_contactNo(e.target.value)} required id="contact-info-1"></input></div>
          <div className='school-items-form'>Coordinator 2 Contact Number: <input type='text' value={cordi2_conatctNo} onChange={(e) => setCordi2_contactNo(e.target.value)} required id="contact-info-2"></input></div>
          <div className="additional-info-p">
            <p><i>Schools that affiliate before <span>Dec 15th, 2023</span> can avail an <span>40% off</span> on Affiliation Fee as Sponsorship from our Vision Partner- Amirta Vishwavidya Peetham.</i></p>
          </div>
          <div className="additional-info-div">
            <div className="left-text-payment">
              <p className='ltp-1'>Affiliation Fee - <i><strike>INR 15000</strike></i></p>
              <p className='ltp-2'><i>INR 9000</i></p>
              <p className='ltp-3'><i>Early Bird Discount</i></p>
            </div>
            <div className="right-img-qr">
              <img src={qr_code} alt="qr_code" />
            </div>
          </div>
          <div className="razorpay_pay">
            <p className="rp-1">Scan the QR code above</p>
            <p className="rp-2">or</p>
            <div className="razorpay-btn">
              <p className="rp-3">Pay Through</p>
              <a href='https://rzp.io/l/NXXx802YA' target={'_blank'}><button type="button" className='pay-btn'><i>Razorpay</i></button></a>
            </div>
          </div>


        </div> */}
        {/* <div className='school-form-ahead'>
  <div className='school-items'>Upload Declaration Form<input type="file" required onChange={handleFilechange}/></div>
  {doc_error && <div className="error">{doc_error}</div>}
  </div> */}
        {/* <div className='school-form-ahead'>
          <div className='school-items-form'>Upload Payment Screenshot<input type="file" required onChange={handleFilechange1} /></div>
        </div>

        <div className='last_check'>
          <div className='last_check_box'>
            <input type='checkbox' required />
          </div>
          <p>Declaration by the head of the institution, confirming participation in India's fight against climate change.<br />
            <div />
            I hereby declare our school's firm commitment to actively participate in India's fight against climate change by affiliating with India MUN. We understand the urgency and importance of addressing this global challenge and believe in the power of collective action to create a sustainable future.
          </p>
        </div>
        <div className='last_buttons'>
          <button type='submit' className='up-dec-button'>Submit</button>
        </div>
      </form>
    </div> */}


    {/* <div className='after-submit'>
      <span><h1>Form submitted Successfully 😃👍</h1> */}
        {/* <button>Download Receipt</button> */}
      {/* </span>
    </div> */}



    {/* <div className='aff-new-prog'>
      <p className='Aff-p'>Affiliation confirmation will be sent through email on provided Email Id in 6-8 working days.</p>
      <a href='/participate'><button className='Aff-button'>View India MUN Programs</button></a>
    </div> */}


    <h1 className='aff-impc-heading'>India MUN Accreditation</h1>
    {/* <div className="lower-text1">Going LIVE on 24 Oct, 2023 India MUN day</div> */}
    <p className='am-content'>Building upon the foundation of our affiliation process, this program aims to recognize and celebrate the exceptional climate action initiatives
      undertaken by schools and colleges. We understand that true change emerges from dedicated efforts, and we want to honor those who go above and
      beyond in championing environmental sustainability</p>
    <p className='am-content'> Once your institution becomes a part of our esteemed network through affiliation, you have the opportunity to participate in our Accreditation Program, . This program is designed to acknowledge the remarkable contributions made by schools and colleges towards creating a greener and more sustainable future. By engaging in a range of climate-related activities, integrating environmental education, and fostering student involvement, your Program. This program is designed to acknowledge the remarkable contributions made by schools and colleges towards creating a greener and more Once your institution becomes a part of our esteemed network through affiliation, you have the opportunity to participate in our Accreditation institution can earn accolades that mirror your commitment to positive change.</p>

    <img className='mobile_photo' src="m3.webp" alt='m3.webp' width="100%"></img>
    <div className='program_mun_content4'>
      <img src="gsca all.png" alt="" />
    </div>


    <p className='am-content'>The Accreditation Program operates on a merit-based scoring system, with institutions evaluated based on specific criteria tailored by India MUN.
      Schools and colleges that excel in their climate action initiatives will be honored with plaques, with varying tiers of recognition including Platinum, Gold,
      and Silver. These plaques not only symbolize your institution's dedication to climate action but also serve as a beacon of inspiration for others in the
      community.</p>
    <p className='am-content'>Our aim is to build a network of institutions that lead by example, inspiring a generation of young minds to be active stewards of our planet. Through the
      Accreditation Program, we celebrate your efforts, amplify your impact, and showcase the outstanding work you're doing in the realm of climate action.
      Join us on this journey towards a more sustainable future, where your institution's contributions will shine brightly as a testament to your commitment to
      positive change.</p>

    <h1 className='aff-impc-heading-blue'>India MUN Accreditation Criteria:</h1>
    <p className='am-content'>Global Schools For Climate Action(GSCA) is a holistic accreditation program that has been thoughtfully designed by educationists, researchers and
      environmental experts and administrators to assess the performance of educational institutions in a measurable manner, recognizing their dedication
      to climate action and sustainability.</p>

    <div className='com-perk-eli'>
      <p><span className='perk-head'>Affiliation Status:</span> <br></br>Schools must have successfully completed the affiliation process with India MUN to be eligible for participation in the Accreditation Program.</p>
      <p><span className='perk-head'>Evaluation Metrics: (100 credits)</span> <br></br>Note: Performance on these parameters will be assessed for a period of 12-24 months before the submission date.</p>

      <p><span className='perk-head'>Parameter 1: Climate Action Projects and Initiatives (30 credits)</span> <br></br>
        - Share with us the notable climate action projects and initiatives your institution has undertaken. <br></br>
        - Demonstrate the objective, impact, scale, and sustainability of these projects. <br></br>
        - Present details of your institution's community outreach programs related to climate action.<br></br>
        - Demonstrate the positive impact of these programs on the environment and local community.<br></br>
        - Share testimonials from community members or partner organizations about the effectiveness of your initiatives.</p><br></br>

      <p><span className='perk-head'>Parameter 2: Student Engagement and Participation (25 credits)</span> <br></br>
        - Tell us about the active involvement of your students in climate action-related activities and clubs. <br></br>
        - Showcase leadership roles and active participation in climate-related events and conferences. <br></br>
        - Let us know how your institution encourages and supports student engagement in climate initiatives.</p><br></br>

      <p><span className='perk-head'>Parameter 3: Integrating Guest Lectures and Pedagogy: (20 credits)</span> <br></br>
        - Share details about how climate change and sustainability are incorporated into your academic curriculum. <br></br>
        - Highlight dedicated courses, workshops, or seminars related to environmental issues. <br></br>
        - Emphasize the learning outcomes and benefits students gain from this curriculum integration.</p><br></br>

      <p><span className='perk-head'>Parameter 4: Sustainable Campus Practices (10 credits)</span> <br></br>
        - Participate in a sustainability audit to showcase your institution's campus practices. <br></br>
        - Demonstrate your institution's progress in reducing carbon footprint, energy consumption, waste generation, etc. <br></br>
        - Highlight any sustainable transportation options or green building initiatives you have undertaken.</p><br></br>

      <p><span className='perk-head'>Parameter 5: Long-term Vision and Commitment (15 credits)</span> <br></br>
        - Share your institution's long-term sustainability plans and climate action goals. <br></br>
        - Emphasize the feasibility and ambition of these plans. <br></br>
        - Highlight the institutional support and allocation of resources for climate action initiatives.</p><br></br>
    </div>

    {/* <div className="lower-text1">Going LIVE on 24 Oct, 2023 India MUN day</div> */}

    <h1 className='aff-impc-heading'>Testimonials</h1>
    <div className='testimonial-container'>
      <Testimonial videoSRC="https://www.youtube.com/embed/SmSo3SY_S1o?si=ANaFT09_Oco4hqMZ" videoTitle="Video 1" imageSRC={Aff1} imageTitle="council1" name="Mr Ovais Sarmad," position="Former Deputy Executive Secretary" authority="United Nations Framework Convention on Climate Change" mainSource="(UNFCCC)" />

      <Testimonial videoSRC="https://www.youtube.com/embed/iuQaLltyGvw?si=KOazN7bfoU0aBcii" videoTitle="Video 2" imageSRC={Aff2} imageTitle="council1" name="Mr Suresh Prabhu," position="Parliamentarian, Minister and Chancellor" authority="Prime Minister’s Sherpa for G20 Summit (2014 - 2015)" mainSource="" />

      <Testimonial videoSRC="https://www.youtube.com/embed/dYVbuY-rpE4?si=bftb6cnl3OcJxO9_" videoTitle="Video 2" imageSRC={Aff3} imageTitle="council1" name="Mr. Ramanan Ramanathan," position="Former ( First ) Mission Director" authority="Atal Innovation Mission" mainSource="(AIM)" />

      <Testimonial videoSRC="https://www.youtube.com/embed/Od42_mD5Kv8?si=1yfKI-9GInU74gP2" videoTitle="Video 2" imageSRC={Aff4} imageTitle="council1" name="Dr. Jagdish N. Seth," position="Padma Bhushan Awardee 2020" authority="Charles H. Kellstadt Professor of Marketing" mainSource="" />
    </div>


    <div className="wtayswim">
      <p className="wtayswim-p">Get your school affiliated</p>
      <button className="wtayswimi-btn" onClick={handleSendDetailsClick}>Apply Now</button>
    </div>


    <p className='aff-impc-heading'>FOUNDING PARTNERS</p>
    <p>India MUN is a joint initiative of <b ><a style={{ color: '#0076ba', textDecoration: 'none' }} href='https://buzzonearth.com/'>BuzzOnEarth</a></b>  and <b><a style={{ color: '#0076ba', textDecoration: 'none' }} href='https://gaiatheearthfoundation.org/'>Gaia The Earth Foundation</a></b>, the organizations that are committed to<br></br> sustainability and regeneration</p>

    {/* <img className="founding_p" src={end_logos}  alt=""/> */}
    <div className='img_end' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px', margin: 'auto' }}>
      <a href='https://gaiatheearthfoundation.org/' target={'_blank'}><img src={giaa} alt="" /></a>
      <a href='https://buzzonearth.com/' target={'_blank'}><img src={buzzi} alt="" /></a>
    </div>
    {/* <div className='footer'>
      <h3 style={{textAlign:'center',color:'white'}}>INDIA MUN</h3>
      <div className='footer_flex'>
          <div className='footer_flex_item'>
              <p className='footer_flex_item_p'><a href='/' style={{textDecoration:'none',color:'white'}}>HOME</a></p>
              <p className='footer_flex_item_p'><a href='/contact' style={{textDecoration:'none',color:'white'}}>CONTACT</a></p>
              <p className='footer_flex_item_p'><a href='/about' style={{textDecoration:'none',color:'white'}}>ABOUT US</a></p>
          </div>
          <div className='footer_flex_item'>
              <p className='copy_footer'> ©2002</p>
          </div>
          <div className='footer_flex_item'>
          <a href='https://www.instagram.com/buzzonearth/' target={'_blank'}><i className="fa-brands fa-instagram"></i></a>
          <a href='https://twitter.com/BuzzOnEarth' target={'_blank'}><i className="fa-brands fa-twitter"></i></a>
          <a href='https://www.facebook.com/buzzonearth/' target={'_blank'}><i className="fa-brands fa-facebook"></i></a>
          <a href='https://www.youtube.com/@buzzonearth2959' target={'_blank'}><i className="fa-brands fa-youtube"></i></a>
          </div>
      </div>
  </div> */}
    <Footer />







    </div>
  )
}
