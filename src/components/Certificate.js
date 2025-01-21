import React, { useState, useEffect } from 'react';
import './Certificate.css';
import logo from '../components/images/INDIAMUN/india mun blue logo.png';

const Certificate = () => {
  const [certificateCode, setCertificateCode] = useState('');
  const [email, setEmail] = useState('');
  const [isEmailVerification, setIsEmailVerification] = useState(false);
  const [error, setError] = useState('');
  const [emailError, setEmailError] = useState(''); // New state for email error
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.body.classList.add('certificate-body');
    return () => {
      document.body.classList.remove('certificate-body');
    };
  }, []);

  const addHyphen = (element) => {
    let ele = element.target.value.split("-").join("");
    if (ele.length > 0) {
      let finalVal = ele.match(/.{1,3}/g).join("-");
      element.target.value = finalVal;
    } else {
      element.target.value = "";
    }
  };

  const addHyphen2 = (code) => {
    let ele = code.split("-").join("");
    if (ele.length > 0) {
      return ele.match(/.{1,3}/g).join("-");
    } else {
      return "";
    }
  };

  const removeSpace = (element) => {
    let rmsp = element.target.value.split(" ").join("");
    element.target.value = rmsp;
  };

  const handleCertificateCodeChange = (e) => {
    setCertificateCode(e.target.value);
    setError('');
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError('');
    setEmailError(''); // Clear email error when email changes
  };

  const handleToggleChange = () => {
    setIsEmailVerification(!isEmailVerification);
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formattedCode = addHyphen2(certificateCode);

    if (!isEmailVerification && !formattedCode.match(/^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}$/i)) {
      setError('Invalid certificate code format.');
      setCertificateCode(formattedCode); // Update the state with the formatted code
      return;
    }

    setLoading(true);

    try {
      const backendBaseURI = process.env.REACT_APP_BACKEND_URI;
      const response = await fetch(`${backendBaseURI}/affiliation/verify_certificate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          certificateCode: formattedCode,
          email,
          isEmailVerification,
        }),
      });

      if (!response.ok) {
        setError('Invalid Code.');
        setEmailError('Something is not right with the email.'); // Set email error
        setCertificateCode(formattedCode); // Update the state with the formatted code
        setLoading(false);
        return;
      }

      const data = await response.json();

      // Set the submitted data to state
      setSubmittedData(data.affiliation);
      setIsSubmitted(true);
    } catch (error) {
      setError('Something went wrong, contact us.');
    } finally {
      setLoading(false);
    }
  };

  const handleCheckAgain = () => {
    setCertificateCode('');
    setEmail('');
    setIsEmailVerification(false);
    setError('');
    setEmailError(''); // Clear email error
    setIsSubmitted(false);
    setSubmittedData(null);
  };

  if (isSubmitted) {
    return (
      <div className="certificate-page">
        <header>
          <div className="headerContainer">
            <ul>
              <li>
                <a href="https://www.indiamun.org/" target="_blank" rel="noopener noreferrer">
                  <img
                    id="logoNavBar"
                    src={logo}
                    alt="Fail to load..."
                    width="100px"
                  />
                </a>
              </li>
              <li>
                <h1 id="headText"><strong>IndiaMUN</strong></h1>
              </li>
              <li>
                <h1 id="textNormal">
                  <a
                    className="btn btn-primary btn-lg"
                    href="#"
                    role="button"
                    onClick={handleCheckAgain}
                  >VERIFY ANOTHER CERTIFICATE</a>
                </h1>
              </li>
            </ul>
          </div>
        </header>
        <br />
        <div className="table-certificate">
          <table className="table table-dark table-striped tb">
            <tbody>
              {submittedData.school_name && (
                <tr>
                  <th scope="row" style={{ textAlign: 'left' }}>School</th>
                  <td style={{ textAlign: 'left' }}>{submittedData.school_name}</td>
                </tr>
              )}


              <tr>
                <th scope="row" style={{ textAlign: 'left' }}>School Name</th>
                <td style={{ textAlign: 'left' }}>{submittedData.schoolName}</td>
              </tr>
              <tr>
                <th scope="row" style={{ textAlign: 'left' }}>School Address</th>
                <td style={{ textAlign: 'left' }}>{submittedData.schoolAddress}</td>
              </tr>
              <tr>
                <th scope="row" style={{ textAlign: 'left' }}>City</th>
                <td style={{ textAlign: 'left' }}>{submittedData.city}</td>
              </tr>
              <tr>
                <th scope="row" style={{ textAlign: 'left' }}>State</th>
                <td style={{ textAlign: 'left' }}>{submittedData.state}</td>
              </tr>

              <tr>
                <th scope="row" style={{ textAlign: 'left' }}>Principal's Name</th>
                <td style={{ textAlign: 'left' }}>{submittedData.contactPersonPrincipalName}</td>
              </tr>
              <tr>
                <th scope="row" style={{ textAlign: 'left' }}>Principal's Conclave</th>
                <td style={{ textAlign: 'left' }}>{submittedData.PrincipalsConclave ? 'Yes' : 'No'}</td>
              </tr>
              <tr>
                <th scope="row" style={{ textAlign: 'left' }}>Represent India at COP</th>
                <td style={{ textAlign: 'left' }}>{submittedData.representIndiaAtCOP ? 'Yes' : 'No'}</td>
              </tr>
              <tr>
                <th scope="row" style={{ textAlign: 'left' }}>Contact Email</th>
                <td style={{ textAlign: 'left' }}>{submittedData.email}</td>
              </tr>
              <tr>
                <th scope="row" style={{ textAlign: 'left' }}>Issue Date</th>
                <td style={{ textAlign: 'left' }}>{submittedData.issue_date}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <br />
        <div className="disp" id="disp">
          <h1><strong>DECLARATION:</strong></h1>
          <p>
            {submittedData.declaration}
          </p>
        </div>
        <br /><br />
        <div className="disp" id="disp" style={{ textAlign: 'center' }}>
        <a
            className="btn btn-primary"
            href={`${submittedData.imageUrl}`}
            target="_blank"
            role="button"
            download="certificate.png"
          >DOWNLOAD CERTIFICATE</a>
          <br /><br />
          <img
            src={`${submittedData.imageUrl}`}
            width="100%"
          ></img>
        </div>
        <br /><br /><br /><br /><br />
      </div>
    );
  }

  return (
    <div className="certificate-page">
      <header>
        <div className="headerContainer">
          <ul>
            <li>
              <a href="https://www.indiamun.org/" target="_blank" rel="noopener noreferrer">
                <img
                  id="logoNavBar"
                  src={logo}
                  alt="Fail to load..."
                  width="100px"
                />
              </a>
            </li>
            <li>
              <h1 id="headText"><strong>IndiaMUN</strong></h1>
            </li>
            <li><h1 id="textNormal">CERTIFICATE VERIFICATION</h1></li>
          </ul>
        </div>
      </header>
      <br /><br /><br />
      <div id="inputBox" className="inputBox">
        <form method="POST" autoComplete="off" action="" id="inputCodeBox" onSubmit={handleSubmit}>
          <input type="hidden" name="hidden_tag" value="hidden_value" />
          <div className="formgroup">
            <div className="form-group">
              {!isEmailVerification ? (
                <>
                  <label htmlFor="takeCertificateCode" className="form-label">Certificate Code</label>
                  <input
                    type="text"
                    name="takeCertificateCode"
                    className={`form-control form-control-lg ${error ? 'is-invalid' : ''}`}
                    id="black"
                    placeholder='XXX-XXX-XXX'
                    value={certificateCode}
                    onChange={handleCertificateCodeChange}
                    onKeyUp={(e) => { addHyphen(e); removeSpace(e); }}
                    style={{ textTransform: "uppercase" }}
                  />
                  {error && (
                    <div className="invalid-feedback">
                      <span>{error}</span><br />
                    </div>
                  )}
                </>
              ) : (
                <>
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className={`form-control form-control-lg ${emailError ? 'is-invalid' : ''}`}
                    id="email"
                    placeholder='registerd@mail.com'
                    value={email}
                    onChange={handleEmailChange}
                  />
                  {emailError && (
                    <div className="invalid-feedback">
                      <span>{emailError}</span><br />
                    </div>
                  )}
                </>
              )}
            </div>
            <br />
            <div className="d-flex align-items-center">
              <button type="submit" className="btn btn-primary btn-lg me-3 custom-btn-width">
                {loading ? (
                  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                ) : (
                  'Check Certification'
                )}
              </button>
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="toggleSwitch"
                  checked={isEmailVerification}
                  onChange={handleToggleChange}
                />
                <label className="form-check-label text-white" htmlFor="toggleSwitch">Verify by Email</label>
              </div>
            </div>
          </div>
        </form>
      </div>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </div>
  );
};

export default Certificate;