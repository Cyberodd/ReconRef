import React, { useState } from 'react';
import ReactFlagsSelect from 'react-flags-select';
import '../styles/FormPage.css';

const FormPage = ({ title, onSubmit }) => {
  const [showOTP, setShowOTP] = useState(false);
  const [countryCode, setCountryCode] = useState('KE');

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowOTP(true);
    // Here you would typically make an API call to send OTP
  };

  const verifyOTP = () => {
    // Here you would make an API call to verify OTP
    onSubmit();
  };

  return (
    <div className="form-page">
      <form onSubmit={handleSubmit}>
        <h2>{title}</h2>
        <input type="text" placeholder="First Name" required />
        <input type="text" placeholder="Middle Name" />
        <input type="text" placeholder="Last Name" required />
        <div className="phone-input-wrapper">
          <ReactFlagsSelect
            selected={countryCode}
            onSelect={code => setCountryCode(code)}
            searchable
          />
          <input type="tel" placeholder="Phone Number" required />
        </div>
        <input type="email" placeholder="Email" required />
        <button type="submit">Submit</button>
        {showOTP && (
          <div className="otp-section">
            <input type="text" placeholder="Enter OTP" />
            <button onClick={verifyOTP}>Verify OTP</button>
          </div>
        )}
      </form>
    </div>
  );
};

export default FormPage;