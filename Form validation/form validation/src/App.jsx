import { useState } from "react";
import "./App.css";

function App() {
  const initialData = {
    aadhaarNumber: "",
    aadhaarName: "",
    username: "",
    name: "",
    email: "",
    phone: "",
    newPassword: "",
    confirmPassword: "",
    address: "",
    permanentAddress: "",
    currentAddress: "",
    sameAddress: false,
    agree: false,
    photo: null,
  };

  const [formData, setFormData] = useState(initialData);
  const [errors, setErrors] = useState({});
  const [photoPreview, setPhotoPreview] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (name === "photo") {
      const file = files[0];

      if (!file) {
        return;
      }

      if (!file.type.startsWith("image/")) {
        setErrors({
          ...errors,
          photo: "Please upload a valid image file.",
        });
        return;
      }

      if (file.size > 2 * 1024 * 1024) {
        setErrors({
          ...errors,
          photo: "Photo size must be less than 2 MB.",
        });
        return;
      }

      setFormData({
        ...formData,
        photo: file,
      });

      setPhotoPreview(URL.createObjectURL(file));

      setErrors({
        ...errors,
        photo: "",
      });

      return;
    }

    if (name === "sameAddress") {
      setFormData({
        ...formData,
        sameAddress: checked,
        currentAddress: checked
          ? formData.permanentAddress
          : "",
      });

      setErrors({
        ...errors,
        currentAddress: "",
      });

      return;
    }

    if (name === "permanentAddress") {
      setFormData({
        ...formData,
        permanentAddress: value,
        currentAddress: formData.sameAddress
          ? value
          : formData.currentAddress,
      });

      setErrors({
        ...errors,
        permanentAddress: "",
        currentAddress: "",
      });

      return;
    }

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });

    setErrors({
      ...errors,
      [name]: "",
    });

    setSubmitted(false);
  };

  const validate = () => {
    const newErrors = {};

    if (!/^\d{12}$/.test(formData.aadhaarNumber)) {
      newErrors.aadhaarNumber =
        "Aadhaar number must contain exactly 12 digits.";
    }

    if (!/^[A-Za-z ]+$/.test(formData.aadhaarName.trim())) {
      newErrors.aadhaarName =
        "Aadhaar name should contain only letters.";
    }

    if (!/^[A-Za-z0-9_]{4,20}$/.test(formData.username)) {
      newErrors.username =
        "Username must be 4-20 characters using letters, numbers or _.";
    }

    if (!/^[A-Za-z ]+$/.test(formData.name.trim())) {
      newErrors.name =
        "Name should contain only letters.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email =
        "Enter a valid email address.";
    }

    if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone =
        "Phone number must contain exactly 10 digits.";
    }

    if (formData.newPassword.length < 8) {
      newErrors.newPassword =
        "Password must contain at least 8 characters.";
    }

    if (formData.confirmPassword !== formData.newPassword) {
      newErrors.confirmPassword =
        "Passwords do not match.";
    }

    if (formData.address.trim().length < 5) {
      newErrors.address =
        "Enter a valid address.";
    }

    if (formData.permanentAddress.trim().length < 5) {
      newErrors.permanentAddress =
        "Enter a valid permanent address.";
    }

    if (formData.currentAddress.trim().length < 5) {
      newErrors.currentAddress =
        "Enter a valid current address.";
    }

    if (!formData.agree) {
      newErrors.agree =
        "Please accept the terms and conditions.";
    }

    if (!formData.photo) {
      newErrors.photo =
        "Please upload your photo.";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitted(false);
      return;
    }

    setErrors({});
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData(initialData);
    setErrors({});
    setPhotoPreview(null);
    setSubmitted(false);
  };

  return (
    <div className="page">
      <div className="form-container">

        <div className="header">
          <div className="logo">FV</div>

          <div>
            <h1>Student Form Validation</h1>
            <p>Registration & Personal Information</p>
          </div>
        </div>

        {submitted && (
          <div className="success">
            ✓ Registration submitted successfully!
          </div>
        )}

        <form onSubmit={handleSubmit}>

          {/* PERSONAL INFORMATION */}

          <div className="section-title">
            <span>01</span>
            Personal Information
          </div>

          <div className="photo-section">

            <div className="photo-preview">
              {photoPreview ? (
                <img src={photoPreview} alt="Profile Preview" />
              ) : (
                <span>📷</span>
              )}
            </div>

            <div className="photo-input">
              <label>Profile Photo</label>

              <input
                type="file"
                name="photo"
                accept="image/*"
                onChange={handleChange}
              />

              <small>
                JPG, JPEG or PNG • Maximum 2 MB
              </small>

              {errors.photo && (
                <p className="error">{errors.photo}</p>
              )}
            </div>

          </div>

          <div className="form-grid">

            <div className="field">
              <label>Aadhaar Number</label>

              <input
                type="text"
                name="aadhaarNumber"
                value={formData.aadhaarNumber}
                onChange={handleChange}
                maxLength="12"
                placeholder="Enter 12 digit Aadhaar"
              />

              {errors.aadhaarNumber && (
                <p className="error">
                  {errors.aadhaarNumber}
                </p>
              )}
            </div>

            <div className="field">
              <label>Aadhaar Name</label>

              <input
                type="text"
                name="aadhaarName"
                value={formData.aadhaarName}
                onChange={handleChange}
                placeholder="Enter Aadhaar name"
              />

              {errors.aadhaarName && (
                <p className="error">
                  {errors.aadhaarName}
                </p>
              )}
            </div>

            <div className="field">
              <label>Username</label>

              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Enter username"
              />

              {errors.username && (
                <p className="error">
                  {errors.username}
                </p>
              )}
            </div>

            <div className="field">
              <label>Full Name</label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
              />

              {errors.name && (
                <p className="error">
                  {errors.name}
                </p>
              )}
            </div>

            <div className="field">
              <label>Email Address</label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@gmail.com"
              />

              {errors.email && (
                <p className="error">
                  {errors.email}
                </p>
              )}
            </div>

            <div className="field">
              <label>Phone Number</label>

              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                maxLength="10"
                placeholder="Enter 10 digit phone number"
              />

              {errors.phone && (
                <p className="error">
                  {errors.phone}
                </p>
              )}
            </div>

          </div>

          {/* PASSWORD */}

          <div className="section-title">
            <span>02</span>
            Password Information
          </div>

          <div className="form-grid">

            <div className="field">
              <label>New Password</label>

              <input
                type="password"
                name="newPassword"
                value={formData.newPassword}
                onChange={handleChange}
                placeholder="Enter new password"
              />

              {errors.newPassword && (
                <p className="error">
                  {errors.newPassword}
                </p>
              )}
            </div>

            <div className="field">
              <label>Confirm Password</label>

              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm password"
              />

              {errors.confirmPassword && (
                <p className="error">
                  {errors.confirmPassword}
                </p>
              )}
            </div>

          </div>

          {/* ADDRESS */}

          <div className="section-title">
            <span>03</span>
            Address Information
          </div>

          <div className="field full">
            <label>Address</label>

            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter your address"
              rows="3"
            />

            {errors.address && (
              <p className="error">
                {errors.address}
              </p>
            )}
          </div>

          <div className="address-grid">

            <div className="field">
              <label>Permanent Address</label>

              <textarea
                name="permanentAddress"
                value={formData.permanentAddress}
                onChange={handleChange}
                placeholder="Enter permanent address"
                rows="5"
              />

              {errors.permanentAddress && (
                <p className="error">
                  {errors.permanentAddress}
                </p>
              )}
            </div>

            <div className="field">
              <label>Current Address</label>

              <textarea
                name="currentAddress"
                value={formData.currentAddress}
                onChange={handleChange}
                placeholder="Enter current address"
                rows="5"
                disabled={formData.sameAddress}
              />

              {errors.currentAddress && (
                <p className="error">
                  {errors.currentAddress}
                </p>
              )}
            </div>

          </div>

          {/* SAME ADDRESS CHECKBOX */}

          <div className="same-address">

            <label>
              <input
                type="checkbox"
                name="sameAddress"
                checked={formData.sameAddress}
                onChange={handleChange}
              />

              <span>
                Same as Permanent Address
              </span>
            </label>

            <small>
              Click this checkbox to automatically copy the
              Permanent Address into Current Address.
            </small>

          </div>

          {/* TERMS */}

          <div className="checkbox-area">

            <label>
              <input
                type="checkbox"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
              />

              <span>
                I confirm that all the information provided above
                is correct and I agree to the terms and conditions.
              </span>
            </label>

            {errors.agree && (
              <p className="error">
                {errors.agree}
              </p>
            )}

          </div>

          {/* BUTTONS */}

          <div className="buttons">

            <button
              type="button"
              className="reset-btn"
              onClick={handleReset}
            >
              Reset
            </button>

            <button
              type="submit"
              className="submit-btn"
            >
              Submit Registration →
            </button>

          </div>

        </form>

      </div>
    </div>
  );
}

export default App;