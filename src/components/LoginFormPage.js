import React, { useState } from 'react';
import ReactFlagsSelect from 'react-flags-select';
import '../styles/LoginFormPage.css';

const LoginFormPage = () => {
  const [showOTP, setShowOTP] = useState(false);
  const [countryCode, setCountryCode] = useState('KE');

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowOTP(true);
    // Here you would typically make an API call to send OTP
  };

  const verifyOTP = () => {
    // Here you would make an API call to verify OTP
    console.log('OTP verified');
  };

  return (
    <div className="login-form-page">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input type="text" placeholder="Full Name" required />
        <div className="phone-input-wrapper">
          <ReactFlagsSelect
            selected={countryCode}
            onSelect={code => setCountryCode(code)}
            searchable
          />
          <input type="tel" placeholder="Phone Number" required />
        </div>
        <input type="email" placeholder="Email" required />
        <button type="submit">Next</button>
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

export default LoginFormPage;