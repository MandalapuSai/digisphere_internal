import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import axios from "axios"; // Import axios for API calls
import "./Cart.css"; // Ensure this CSS file contains your styles

const Cart = () => {
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  const api = "http://localhost:8080";
  
  // State for form fields and errors
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    phone: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });

  const [formError, setFormError] = useState(""); // For displaying form-wide error message

  const [productCategory, setProductCategory] = useState("QR");  // To track QR or NFC+QR
  const [product, setProduct] = useState({
    name: "LinkStand Lite", // Default product
    amount: 1299, // Default amount for LinkStand Lite
  });

  // Effect for animating the section elements
  useEffect(() => {
    gsap.fromTo(
      sectionRef.current.children,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.3, ease: "easeOutQuad" }
    );

    gsap.fromTo(
      ".liquid-parallax", 
      { opacity: 0, x: -30 }, 
      { opacity: 1, x: 0, duration: 1, delay: 0.5, ease: "easeOutQuad" }
    );

    gsap.fromTo(
      ".title", 
      { opacity: 0, y: 50, filter: "blur(20px)" }, 
      { opacity: 1, y: 0, filter: "blur(0)", duration: 0.6, ease: "easeOutQuad" }
    );

    gsap.fromTo(
      ".cart-text", 
      { opacity: 0, x: -30 }, 
      { opacity: 1, x: 0, duration: 0.6, delay: 0.7, ease: "easeOutQuad" }
    );
  }, []);

  const validateForm = () => {
    const newErrors = {};
    let isFormValid = true;

    // Email validation
    if (!formData.email) {
      newErrors.email = "Email is required";
      isFormValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
      isFormValid = false;
    }

    // Phone validation
    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
      isFormValid = false;
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
      isFormValid = false;
    }

    // Validate other fields (check for empty fields)
    const fields = [
      "firstName",
      "lastName",
      "address",
      "city",
      "state",
      "zip",
    ];

    fields.forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = `${field.replace(/([A-Z])/g, ' $1')} is required`;
        isFormValid = false;
      } else {
        newErrors[field] = "";
      }
    });

    setErrors(newErrors);
    return isFormValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle product category change
  const handleCategoryChange = (e) => {
    setProductCategory(e.target.value);
    // Reset product to default for the new category
    setProduct({
      name: "LinkStand Lite", // Default to LinkStand Lite
      amount: 1299, // Default price for LinkStand Lite
    });
  };

  // Handle product selection based on category
  const handleProductChange = (e) => {
    const { value } = e.target;

    // Handle QR products
    if (productCategory === "QR") {
      if (value === "LinkStand Lite : 1299/-") {
        setProduct({ name: "LinkStand Lite", amount: 2 });
      } else if (value === "LinkStand Pro : 1499/-") {
        setProduct({ name: "LinkStand Pro", amount: 1499 });
      }
    }

    // Handle NFC+QR products
    else if (productCategory === "NFC+QR") {
      if (value === "LinkStand Lite : 1999/-") {
        setProduct({ name: "LinkStand NFC+QR Lite", amount: 1999 });
      } else if (value === "LinkStand Pro : 2499/-") {
        setProduct({ name: "LinkStand NFC+QR Pro", amount: 2499 });
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset the form-wide error message
    setFormError("");

    const isFormValid = validateForm();

    if (!isFormValid) {
      setFormError("Please fill in all required fields correctly.");
      return; // Prevent form submission if validation fails
    }

    if (product.amount <= 0) {
      setFormError("Please select a product.");
      return; // Prevent form submission if no product is selected
    }

    // Prepare the payload to be sent to the backend
    const payload = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      address: formData.address,
      city: formData.city,
      state: formData.state,
      zipCode: formData.zip,
      amount: product.amount,
      productName: product.name,
    };

    try {
      // Make the POST request to the /payment/pay API
      const response = await axios.post(`${api}/payment/pay`, payload);

      // Check if the response contains a result and code
      if (response.data && response.data.result && response.data.code === 200) {
        // Open the result URL in a new tab
        window.open(response.data.result, "_blank");
      } else {
        console.error("Invalid response or failed payment.");
        setFormError("There was an issue with the payment.");
      }
    } catch (error) {
      console.error("Payment API call failed:", error);
      setFormError("Payment failed. Please try again.");
    }
  };

  return (
    <section ref={sectionRef} className="p-0 top-space-margin position-relative overflow-hidden">
      <div className="container-fluid p-0 h-100 position-relative">
        <div className="row g-0">
          <div className="col-xl-4 col-lg-5 d-flex justify-content-center align-items-center ps-10 order-2 order-lg-1">
            <div className="vertical-title-center align-items-center justify-content-center flex-shrink-0 w-75px">
              <h1 className="title fs-15 alt-font text-dark-gray fw-700 text-uppercase">LinkStand</h1>
            </div>
            <div className="border-start border-color-extra-medium-gray ps-40px">
              <h2 className="cart-text text-dark-gray fw-600 alt-font">Cart</h2>
            </div>
          </div>

          <div className="col-xl-8 col-lg-7 position-relative one-half-screen order-1 order-lg-2">
            <div className="overflow-hidden position-relative">
              <img src="assets/img/cart_banner.jpg" alt="Cart Banner" className="w-100 liquid-parallax" />
            </div>
          </div>
        </div>
      </div>

      {/* Form content */}
      <div className="container Emailwarpper">
        {/* Form-wide Error Message */}
        {formError && <div className="form-error">{formError}</div>}

        {/* Product Category Selection */}
        <span className="fs-30 alt-font fw-700 text-dark-gray">Select Product Category</span>
        <div className="First_warpper">
          <label>Product Category</label>
          <select value={productCategory} onChange={handleCategoryChange}>
            <option value="QR">QR Products</option>
            <option value="NFC+QR">NFC+QR Products</option>
          </select>
        </div>

        {/* Product Selection */}
        <span className="fs-30 alt-font fw-700 text-dark-gray">Select Product</span>
        <div className="First_warpper">
          <label>{productCategory === "QR" ? "QR Products" : "NFC+QR Products"}</label>
          <select onChange={handleProductChange}>
            {productCategory === "QR" ? (
              <>
                <option>LinkStand Lite : 1299/-</option>
                <option>LinkStand Pro : 1499/-</option>
              </>
            ) : (
              <>
                <option>LinkStand Lite : 1999/-</option>
                <option>LinkStand Pro : 2499/-</option>
              </>
            )}
          </select>
        </div>

        {/* Contact Information */}
        <span className="fs-30 alt-font fw-700 text-dark-gray">Contact</span>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className={`input-lg round form-control ${errors.email ? 'error' : ''}`}
        />
        {errors.email && <div className="error-message">{errors.email}</div>}
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          className={`input-lg round form-control ${errors.phone ? 'error' : ''}`}
        />
        {errors.phone && <div className="error-message">{errors.phone}</div>}

        {/* Delivery Details */}
        <span className="fs-30 alt-font fw-700 text-dark-gray">Delivery</span>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="First Name"
          className={`input-lg round form-control ${errors.firstName ? 'error' : ''}`}
        />
        {errors.firstName && <div className="error-message">{errors.firstName}</div>}
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Last Name"
          className={`input-lg round form-control ${errors.lastName ? 'error' : ''}`}
        />
        {errors.lastName && <div className="error-message">{errors.lastName}</div>}
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Address"
          className={`input-lg round form-control ${errors.address ? 'error' : ''}`}
        />
        {errors.address && <div className="error-message">{errors.address}</div>}
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          placeholder="City"
          className={`input-lg round form-control ${errors.city ? 'error' : ''}`}
        />
        {errors.city && <div className="error-message">{errors.city}</div>}
        <input
          type="text"
          name="state"
          value={formData.state}
          onChange={handleChange}
          placeholder="State"
          className={`input-lg round form-control ${errors.state ? 'error' : ''}`}
        />
        {errors.state && <div className="error-message">{errors.state}</div>}
        <input
          type="text"
          name="zip"
          value={formData.zip}
          onChange={handleChange}
          placeholder="ZIP Code"
          className={`input-lg round form-control ${errors.zip ? 'error' : ''}`}
        />
        {errors.zip && <div className="error-message">{errors.zip}</div>}

        {/* Pay Now Button */}
        <div className="primary_btn_1_warpper buttonAlign">
          <button style={{textAlign: "center !important"}} className="primary_btn_Paynow1 paynow-button " onClick={handleSubmit}>
            Pay Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cart;
