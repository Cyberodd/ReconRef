import React, { useState } from 'react';
import ReactFlagsSelect from 'react-flags-select';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/FormPage.css';

const FormPage = ({ title, onSubmit }) => {
  const [showOTP, setShowOTP] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [countryCode, setCountryCode] = useState('KE');

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowOTP(true);
    if (termsAccepted && privacyAccepted) {
      setShowOTP(true);
      // Here you would typically make an API call to send OTP
    } else {
      alert("Please accept both Terms and Conditions and Privacy Policy");
    }
  };
    // Here you would typically make an API call to send OTP
  };

  const handleBack = () => {
    // Add your back navigation logic here
    console.log("Back button clicked");
  };

  const verifyOTP = () => {
    // Here you would make an API call to verify OTP
    onSubmit();
  };

export default FormPage = () => {
  return (
    <div className="form-page">
      <div className="back-button-container">
        <Button
          variant="outline-secondary"
          className="back-button"
          onClick={handleBack}
        >
          Back
        </Button>
      </div>
      <form onSubmit={handleSubmit}>
        <h2>{title}</h2>
        <input type="text" placeholder="First Name" required />
        <input type="text" placeholder="Middle Name" />
        <input type="text" placeholder="Last Name" required />
        <div className="id-input-wrapper">
          <Form.Select className="id-type-select">
            <option>Select ID Type</option>
            <option value="national">National ID</option>
            <option value="passport">Passport</option>
            <option value="drivers">Driver's License</option>
            <option value="military">Military ID</option>
          </Form.Select>
          <Form.Control type="text" placeholder="Enter ID Number" className="id-number-input" />
        </div>
        <div className="phone-input-wrapper">
          <ReactFlagsSelect
            selected={countryCode}
            onSelect={code => setCountryCode(code)}
            searchable
          />
          <input type="tel" placeholder="Phone Number" required />
        </div>
        <input type="email" placeholder="Email" required />
        <Form.Group className="mb-3">
          <Form.Check
            type="checkbox"
            id="termsCheckbox"
            label={
              <span>
                I accept the <a href="#terms">Terms and Conditions</a>
              </span>
            }
            checked={termsAccepted}
            onChange={(e) => setTermsAccepted(e.target.checked)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Check
            type="checkbox"
            id="privacyCheckbox"
            label={
              <span>
                I accept the <a href="#privacy">Privacy Policy</a>
              </span>
            }
            checked={privacyAccepted}
            onChange={(e) => setPrivacyAccepted(e.target.checked)}
            required
          />
        </Form.Group>
        <button type="submit">Submit</button>
        {showOTP && (
          <div className="otp-section">
            <input type="text" placeholder="Enter OTP" />
            <button onClick={verifyOTP}>Verify OTP</button>
          </div>
        )}
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

