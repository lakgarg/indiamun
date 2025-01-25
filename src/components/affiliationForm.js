import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import left_img from "./images/INDIAMUN/logo left.webp";
import right_img from "./images/INDIAMUN/logo right.webp";
import "./affiliationForm.css";
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
import { Helmet } from "react-helmet";


export default function Affiliation() {
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

  const [formData, setFormData] = useState({
    schoolName: "",
    schoolAddress: "",
    state: "",
    city: "",
    contactPerson: "",
    contactEmail: "",
    contactPhone: "",
    declaration: false,
    principalsConclave: "",
    cop: "",
    paymentMethod: "",
    declarationText: "",
  });
  const backendBaseURI = process.env.REACT_APP_BACKEND_URI;

  const initiatePayment = async () => {
    try {
      const response = await fetch(`${backendBaseURI}/affiliation/verifyotp`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          otp: otp,
          email: formData.contactEmail,
          schoolName: formData.schoolName,
          schoolAddress: formData.schoolAddress,
          state: formData.state,
          city: formData.city,
          contactPersonPrincipalName: formData.contactPerson || "",
          contactPhoneNumber: formData.contactPhone,
          declaration: formData.declaration ? formData.declarationText : "",
          PrincipalsConclave: formData.principalsConclave === "yes",
          representIndiaAtCOP: formData.cop === "yes",
        }),
      });
      const { order, paymentState, otpV ,message} = await response.json();
      const msg = message;
      if(otpV===false){
        setOtpError(true);
        setTimeout(() => {
          setOtpError(false);
        }, 5000);
      }
      if (paymentState) {
        // load the the json string named feesData from local storage
        // load razor pay key from the env
        const RAZORPAY_KEY_ID = process.env.REACT_APP_RAZORPAY_KEY_ID;
        const COMPANY_NAME = process.env.REACT_APP_COMPANY_NAME;
        //const storedFeesData = localStorage.getItem('feesData');
        const options = {

          key: RAZORPAY_KEY_ID, // Enter the Key ID generated from the Dashboard
          amount: order.amount,
          currency: order.currency,
          name: COMPANY_NAME,
          description: 'Affiliation Fees',
          order_id: order.id,
          handler: async function (response) {
            try {
              // Handle successful payment here
              const paymentResponse = await fetch(`${backendBaseURI}/affiliation/verify_payment`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  razorpay_payment_id: response.razorpay_payment_id,
                  razorpay_order_id: response.razorpay_order_id,
                  razorpay_signature: response.razorpay_signature,
                }),
              });

              const paymentResult = await paymentResponse.json();
              if (paymentResult.success) {

                alert('Payment successful!, Check your certificate at https://indiamun.org/affiliation_certificate');
                // redirect to the certificate page
                window.location.href = '/affiliation_certificate';
                // Perform any additional actions here, such as updating the UI or saving payment details
              } else {
                alert('Payment verification failed. Please contact support.');
              }
            } catch (error) {
              console.error('Error verifying payment:', error);
              alert('Error verifying payment. Please contact support.');
            }
          },
          prefill: {
            name: formData.contactPerson,
            email: formData.contactEmail,
            contact: formData.contactPhone,
          },
          notes: {
            address: formData.schoolAddress,
          },
          theme: {
            color: '#0078e1',
          },
        };

        const rzp1 = new window.Razorpay(options);
        rzp1.open();
      } else {
        console.log(order, paymentState, msg);
        if(order==null && paymentState==false){
          
          try{
            if(msg == 'Payment already done'){
              alert('Payment already done, Check your certificate at https://indiamun.org/affiliation_certificate');
              // redirect to the certificate page
              window.location.href = '/affiliation_certificate';
            }else{
              alert('Payment initiation failed. Contact us');
            }
          }catch(e){
            alert('Payment initiation failed. Contact us');
          }
          alert('Payment initiation failed, Contact us');
          
        }
      }
    } catch (error) {
      setOtpError(true);
      setTimeout(() => {
        setOtpError(false);
      }, 5000);
  
      console.error('Error initiating payment:', error);
    }
  };


  const [feesData, setFeesData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showOtpSection, setShowOtpSection] = useState(false);
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(60);
  const [resendDisabled, setResendDisabled] = useState(true);
  const [intervalId, setIntervalId] = useState(null);
  const [otpSentSuccess, setOtpSentSuccess] = useState(false);
  const [otpError, setOtpError] = useState(false);

  useEffect(() => {
    const fetchFeesData = async () => {
      try {
          console.log("Fetching fees data from:", `${backendBaseURI}/affiliation/getfees`);
          const response = await fetch(`${backendBaseURI}/affiliation/getfees`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({}), // Include any necessary data in the body
          });
          console.log("Response received:", response);
          const text = await response.text();
          console.log("Response text:", text);
          const data = JSON.parse(text);
          console.log("Data parsed:", data);
          const fetchedData = {
            affiliationFees: parseFloat(data.fees),
            gstPercentage: parseFloat(data.gst),
          };
          console.log("Fetched data:", fetchedData);
          localStorage.setItem('feesData', JSON.stringify(fetchedData));
          setFeesData(fetchedData);
          setLoading(false);

      } catch (error) {
        console.error("Error fetching fees data:", error);
        setLoading(false);
      }
    };

    fetchFeesData();
  }, [backendBaseURI]);
  const startTimer = () => {
    setResendDisabled(true);
    setTimer(6);

    // Clear any existing interval
    if (intervalId) {
      clearInterval(intervalId);
    }

    const newIntervalId = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer === 1) {
          clearInterval(newIntervalId);
          setResendDisabled(false);
        }
        return prevTimer - 1;
      });
    }, 1000);

    // Store the new interval ID
    setIntervalId(newIntervalId);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === "declaration" && checked) {
      const declarationText = document.getElementById("declaration-text").textContent;
      setFormData({ ...formData, [name]: checked, declarationText });
    } else {
      setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
    }
  };
  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };
  const handleResendOtp = async () => {
    // Logic to resend OTP
    startTimer();
    try {
      const response = await fetch(`${backendBaseURI}/affiliation/sendotp`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: formData.contactEmail, type: "aff" }), // Adjust the body as needed
      });

      if (response.ok) {
        setOtpSentSuccess(true);
        setTimeout(() => {
          setOtpSentSuccess(false);
        }, 3000);
      } else {
        console.error("Error resending OTP");
      }
    }
    catch (error) {
      setOtpError(true)
      setTimeout(() => {
        setOtpError(false);
      }, 5000);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    localStorage.setItem("formData", JSON.stringify(formData));
    setShowOtpSection(true);
    startTimer();
    try {
      const response = await fetch(`${backendBaseURI}/affiliation/sendotp`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: formData.contactEmail, type: "aff" }), // Adjust the body as needed
      });
      if (response.ok) {

        console.log(formData);
      } else {
        setOtpError(true)
        setTimeout(() => {
          setOtpError(false);
        }, 5000);
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
    }
  };

  const handleSubmitOtp = async (e) => {
    e.preventDefault();
    try {
      console.log("Submitting OTP:", otp);
      await initiatePayment();
    }
    catch (error) {
      console.error("Error submitting OTP:", error);
    }
  };
  const handleBackToForm = () => {
    setShowOtpSection(false);
  };


  if (showOtpSection) {
    return (
      <>
        <Helmet>
          <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
        </Helmet>
        <div className="top_comp">
          <a href="/">
            <img className="left_img" src={left_img} alt="" />
          </a>
          <h2>INDIA’S YOUTH FOR CLIMATE ACTION</h2>
          <img className="right_img" src={right_img} alt="" />
        </div>
        <Navbar />

        <h2 className="ab">Affiliation</h2>
        <div className="container">
          <div className="left-part">
            <div className="otp-section">
              <p>OTP has been sent to {formData.contactEmail}</p>
              {otpSentSuccess && <p className="success-message">OTP has been sent successfully!</p>}
              {otpError && <p className="error-message">Incorrect OTP. Please try again.</p>}
              <input
                type="text"
                value={otp}
                onChange={handleOtpChange}
                placeholder="Enter OTP"
              />
              <div className="otp_input">
                <button className="otp-continue" onClick={handleSubmitOtp}>Continue</button>
                <button onClick={handleResendOtp} disabled={resendDisabled}>
                  Resend OTP ({timer}s)
                </button>
                <button onClick={handleBackToForm}>Back to Edit Form</button>
              </div>
            </div>
          </div>
          <div className="right-part">
            <h3>Form Details</h3>
            <div className="user-inputs">
              <p><strong>School Name:</strong> {formData.schoolName}</p>
              <p><strong>School Address:</strong> {formData.schoolAddress}</p>
              <p><strong>State:</strong> {formData.state}</p>
              <p><strong>City:</strong> {formData.city}</p>
              <p><strong>Contact Person:</strong> {formData.contactPerson}</p>
              <p><strong>Contact Email:</strong> {formData.contactEmail}</p>
              <p><strong>Contact Phone:</strong> {formData.contactPhone}</p>
              <p><strong>Declaration:</strong> {formData.declaration ? "Yes" : "No"}</p>
              <p><strong>Principals' Conclave:</strong> {formData.principalsConclave}</p>
              <p><strong>COP30:</strong> {formData.cop}</p>
            </div>
          </div>
        </div>

        <Footer />
      </>
    );
  }
  else {
    return (
      <>
        <div className="top_comp">
          <a href="/">
            <img className="left_img" src={left_img} alt="" />
          </a>
          <h2>INDIA’S YOUTH FOR CLIMATE ACTION</h2>
          <img className="right_img" src={right_img} alt="" />
        </div>
        <Navbar />

        <h2 className="ab">Affiliation</h2>
        <div className="container">
          <div className="left-part">
            <form onSubmit={handleSubmit} className="affiliation-form">
              <div className="form-group">
                <label htmlFor="schoolName">School Name: *</label>
                <input
                  type="text"
                  id="schoolName"
                  name="schoolName"
                  value={formData.schoolName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="schoolAddress">School Address (with pin code):</label>
                <input
                  type="text"
                  id="schoolAddress"
                  name="schoolAddress"
                  value={formData.schoolAddress}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="state">State: *</label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="city">City: *</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="contactPerson">Contact Person/Principal Name:</label>
                <input
                  type="text"
                  id="contactPerson"
                  name="contactPerson"
                  value={formData.contactPerson}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="contactEmail">Contact Email: *</label>
                <input
                  type="email"
                  id="contactEmail"
                  name="contactEmail"
                  value={formData.contactEmail}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="contactPhone">Contact Phone Number: *</label>
                <input
                  type="tel"
                  id="contactPhone"
                  name="contactPhone"
                  value={formData.contactPhone}
                  onChange={handleChange}
                  required
                />
              </div>
              <br />
              <div className="form-group checkbox-group inline-flex-container">
                <input
                  type="checkbox"
                  id="declaration"
                  name="declaration"
                  checked={formData.declaration}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="declaration">
                  Declaration by the head of the institution, confirming
                  participation in India's fight against climate change: *
                </label>
              </div>
              <span id="declaration-text">
                I hereby declare our school's firm commitment to actively
                participate in India's fight against climate change by affiliating
                with India MUN. We understand the urgency and importance of
                addressing this global challenge and believe in the power of
                collective action to create a sustainable future.
              </span>

              <br />
              <div className="form-group radio-group">
                <label>Would you like to be invited to the Principals' Conclave 2025 with UN dignitaries?</label>
                <div className="inline-flex-container">
                  <input
                    type="radio"
                    id="principalsConclaveYes"
                    name="principalsConclave"
                    value="yes"
                    checked={formData.principalsConclave === "yes"}
                    onChange={handleChange}
                  />
                  <label htmlFor="principalsConclaveYes">Yes</label>
                </div>
                <div className="inline-flex-container">
                  <input
                    type="radio"
                    id="principalsConclaveNo"
                    name="principalsConclave"
                    value="no"
                    checked={formData.principalsConclave === "no"}
                    onChange={handleChange}
                  />
                  <label htmlFor="principalsConclaveNo">No</label>
                </div>
              </div>
              <br />
              <div className="form-group radio-group">
                <label>Would you like to avail the opportunity to represent India at COP-30 in Azerbaijan, contributing to international discussions on climate change and sustainability?</label>
                <div className="inline-flex-container">
                  <input
                    type="radio"
                    id="copYes"
                    name="cop"
                    value="yes"
                    checked={formData.cop === "yes"}
                    onChange={handleChange}
                  />
                  <label htmlFor="copYes">Yes</label>
                </div>
                <div className="inline-flex-container">
                  <input
                    type="radio"
                    id="copNo"
                    name="cop"
                    value="no"
                    checked={formData.cop === "no"}
                    onChange={handleChange}
                  />
                  <label htmlFor="copNo">No</label>
                </div>
              </div>
              <br />
              <div className="fees-container">
                {loading ? (
                  <div className="loading">Loading...</div>
                ) : (
                  feesData && (
                    <div>
                      <p>Affiliation Fees: ₹ {feesData.affiliationFees}</p>
                      <p>GST ({feesData.gstPercentage}%): ₹ {(feesData.affiliationFees * feesData.gstPercentage) / 100}</p>
                      <p>Total: ₹ {((feesData.affiliationFees * feesData.gstPercentage) / 100) + feesData.affiliationFees}</p>
                    </div>
                  )
                )}
              </div>
              <button type="submit" className="submit-button">
                Submit
              </button>
            </form>
          </div>
          <div className="right-part">
            <h3><b> Benefits of Affiliation</b></h3>
            <div className="scroll-right">

              <div className="ben-container">
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

              </div>


              <div className="ben-container">
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

              </div>



              <div className="ben-container">
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
              </div>




              <div className="ben-container">
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
              </div>



              <div className="ben-container">
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
              </div>

              <div className="ben-container">
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
              </div>

              <div className="ben-container">
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
              </div>

              <div className="ben-container">
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
              </div>


              <div className="ben-container">
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

            </div>


          </div>
        </div>

        <Footer />
      </>
    );
  }
}