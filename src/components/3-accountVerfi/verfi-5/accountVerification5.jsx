import React, { useState, useEffect, useRef } from 'react';
import "./verfi5.css";
import Aside from '../../aside/aside';
import { Link } from 'react-router-dom';

import OnfidoVerification from "./OnfidoVerification";
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import axios from "axios";
import { Modal, Button } from "react-bootstrap";
import Calender from '../../calender/calender';


export default function AccountVerification5() {
    const [selectedAccount, setSelectedAccount] = useState('');
    const [activeLink, setActiveLink] = useState('');
    const [showQRCode, setShowQRCode] = useState(false);

    const handleNavigation = (accountType) => {
        setSelectedAccount(accountType);
        console.log(`Selected account type: ${accountType}`);
    };

    const handleGenerateQRCode = () => {
        setShowQRCode(true);
    };




    const [isModalOpen, setIsModalOpen] = useState(false);
    const [dateOfBirth, setDateOfBirth] = useState("1 / 31 / 1998");

    const handleDateChange = (newDate) => {
        setDateOfBirth(newDate);
        setIsModalOpen(false);
    };

    // const { user, fetchOnfidoData, getValidToken } = useAuth();
    // const navigate = useNavigate();
    // const location = useLocation();
    // const dataFetchedRef = useRef(false);

    // const [formData, setFormData] = useState({
    //     first_name: "",
    //     last_name: "",
    //     email: "",
    //     dob: "",
    //     phone_number: "",
    //     phone_number_consent_granted: false,
    //     nationality: "",
    //     address: {
    //         line1: "",
    //         line2: "",
    //         town: "",
    //         state: "",
    //         postcode: "",
    //         country: ""
    //     },
    //     location: { country_of_residence: "" },
    //     ssn: "",
    //     ssn_consent_granted: false
    // });

    // const [applicantId, setApplicantId] = useState(null);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState("");
    // const [showVerification, setShowVerification] = useState(false);

    // // Add loading state for initial data fetch
    // const [isLoading, setIsLoading] = useState(true);

    // // Add these helper functions at the top of your component
    // const getMaxDate = () => {
    //     const date = new Date();
    //     date.setFullYear(date.getFullYear() - 16);
    //     return date.toISOString().split('T')[0];
    // };

    // const getMinDate = () => {
    //     const date = new Date();
    //     date.setFullYear(date.getFullYear() - 120);
    //     return date.toISOString().split('T')[0];
    // };

    // // Update the formatDateForInput function to handle timezone correctly
    // const formatDateForInput = (dateString) => {
    //     if (!dateString) return "";

    //     // If it's already in YYYY-MM-DD format, return as is
    //     if (dateString.match(/^\d{4}-\d{2}-\d{2}$/)) {
    //         return dateString;
    //     }

    //     // Create date in local timezone to avoid UTC conversion
    //     const date = new Date(dateString);
    //     if (isNaN(date.getTime())) {
    //         return "";
    //     }

    //     // Format date in local timezone
    //     const year = date.getFullYear();
    //     const month = String(date.getMonth() + 1).padStart(2, '0');
    //     const day = String(date.getDate()).padStart(2, '0');
    //     return `${year}-${month}-${day}`;
    // };

    // // Add this helper function for SSN formatting
    // const formatSSN = (ssn) => {
    //     if (!ssn) return "";
    //     // Remove any non-digits
    //     const cleaned = ssn.replace(/[^\d]/g, '');
    //     // Format as XXX-XX-XXXX
    //     if (cleaned.length === 9) {
    //         return `${cleaned.slice(0, 3)}-${cleaned.slice(3, 5)}-${cleaned.slice(5)}`;
    //     }
    //     return cleaned;
    // };

    // // Update the authentication check
    // useEffect(() => {
    //     // Redirect if not logged in
    //     if (!user) {
    //         navigate('/login', { state: { from: location } });
    //         return;
    //     }
    // }, [user, navigate]);

    // // Update the axios instance creation
    // const createAxiosInstance = async () => {
    //     const token = await getValidToken();
    //     if (!token) {
    //         throw new Error('No valid token available');
    //     }

    //     console.log('Creating axios instance with token:', token.substring(0, 20) + '...');

    //     return axios.create({
    //         baseURL: 'http://localhost:5000',
    //         headers: {
    //             'Authorization': `Bearer ${token}`,
    //             'Content-Type': 'application/json'
    //         }
    //     });
    // };

    // // Update the handleUserData function
    // const handleUserData = (userData) => {
    //     if (userData.onfido_status === 'verified') {
    //         navigate('/dashboard');
    //         return;
    //     }

    //     setFormData(prev => ({
    //         ...prev,
    //         first_name: userData.first_name || user.firstName || "",
    //         last_name: userData.last_name || user.lastName || "",
    //         email: userData.email || user.email || "",
    //         phone_number: userData.phone_number || "",
    //         phone_number_consent_granted: userData.phone_number_consent_granted || false,
    //         nationality: userData.nationality || "",
    //         address: {
    //             line1: userData.address_line1 || "",
    //             line2: userData.address_line2 || "",
    //             town: userData.address_town || "",
    //             state: userData.address_state || "",
    //             postcode: userData.address_postcode || "",
    //             country: userData.address_country || ""
    //         },
    //         location: {
    //             country_of_residence: userData.country_of_residence || ""
    //         },
    //         ssn: formatSSN(userData.ssn) || "",
    //         ssn_consent_granted: userData.ssn_consent_granted || false,
    //         dob: formatDateForInput(userData.dob) || ""
    //     }));
    // };

    // // Fetch user data when component mounts
    // useEffect(() => {
    //     let isMounted = true;

    //     const fetchUserData = async () => {
    //         // Prevent multiple fetches in development mode and if data was already fetched
    //         if (dataFetchedRef.current) return;

    //         try {
    //             if (!user?.keycloakId) {
    //                 navigate('/login', { state: { from: location } });
    //                 return;
    //             }

    //             setLoading(true);
    //             setError("");

    //             // Get a fresh token before making the request
    //             const token = await getValidToken();
    //             if (!token) {
    //                 throw new Error('Unable to get valid authentication token');
    //             }

    //             const response = await fetch('http://localhost:5000/api/users/get-user-info', {
    //                 method: 'GET',
    //                 credentials: 'include',
    //                 headers: {
    //                     'Authorization': `Bearer ${token}`
    //                 }
    //             });

    //             if (!response.ok) {
    //                 if (response.status === 401) {
    //                     // Try to refresh token once
    //                     const newToken = await getValidToken(true);
    //                     if (!newToken) {
    //                         navigate('/login', { state: { from: location } });
    //                         return;
    //                     }

    //                     // Retry with new token
    //                     const retryResponse = await fetch('http://localhost:5000/api/users/get-user-info', {
    //                         method: 'GET',
    //                         credentials: 'include',
    //                         headers: {
    //                             'Authorization': `Bearer ${newToken}`
    //                         }
    //                     });

    //                     if (!retryResponse.ok) {
    //                         throw new Error('Failed to authenticate after token refresh');
    //                     }

    //                     const userData = await retryResponse.json();
    //                     if (isMounted) {
    //                         handleUserData(userData);
    //                         dataFetchedRef.current = true;
    //                     }
    //                 } else {
    //                     throw new Error('Failed to fetch user data');
    //                 }
    //             } else {
    //                 const userData = await response.json();
    //                 if (isMounted) {
    //                     handleUserData(userData);
    //                     dataFetchedRef.current = true;
    //                 }
    //             }
    //         } catch (error) {
    //             if (isMounted) {
    //                 console.error('Error fetching user data:', error);
    //                 setError(error.message);
    //             }
    //         } finally {
    //             if (isMounted) {
    //                 setLoading(false);
    //             }
    //         }
    //     };

    //     fetchUserData();

    //     // Cleanup function
    //     return () => {
    //         isMounted = false;
    //         dataFetchedRef.current = false;
    //     };
    // }, [user?.keycloakId]); // Only depend on keycloakId

    // // Update the country options to use only ISO 3166-1 alpha-3 codes
    // const countryOptions = {
    //     EGY: "Egypt",
    //     USA: "United States",
    //     GBR: "United Kingdom",
    //     FRA: "France",
    //     CAN: "Canada",
    //     IND: "India",
    //     // Add more as needed
    // };

    // // US States for US addresses
    // const usStates = {
    //     AL: 'Alabama', AK: 'Alaska', AZ: 'Arizona',
    //     // ... add all states
    //     WI: 'Wisconsin', WY: 'Wyoming'
    // };

    // // Update the handleSsnChange function
    // const handleSsnChange = (e) => {
    //     let value = e.target.value.replace(/[^\d]/g, ''); // Remove all non-digits

    //     // Limit to 9 digits
    //     value = value.slice(0, 9);

    //     // Format with dashes
    //     if (value.length > 5) {
    //         value = `${value.slice(0, 3)}-${value.slice(3, 5)}-${value.slice(5)}`;
    //     } else if (value.length > 3) {
    //         value = `${value.slice(0, 3)}-${value.slice(3)}`;
    //     }

    //     setFormData(prev => ({ ...prev, ssn: value }));
    // };

    // // Update the validation function
    // const isValidDate = (date) => {
    //     const inputDate = new Date(date);
    //     const maxDate = new Date(getMaxDate());
    //     const minDate = new Date(getMinDate());

    //     return inputDate <= maxDate && inputDate >= minDate;
    // };

    // // Update the handleChange function
    // const handleChange = (e) => {
    //     const { name, type } = e.target;
    //     const value = type === 'checkbox' ? e.target.checked : e.target.value;
    //     if (name === 'ssn') {
    //         return handleSsnChange(e);
    //     }
    //     if (name === 'dob') {
    //         if (!isValidDate(value)) {
    //             setError('Please enter a valid date of birth (past date only)');
    //             return;
    //         }
    //         setError('');
    //     }
    //     if (name.startsWith("address.")) {
    //         const field = name.split(".")[1];
    //         setFormData(prev => ({
    //             ...prev,
    //             address: { ...prev.address, [field]: value }
    //         }));
    //         return;
    //     }
    //     if (name.startsWith("location.")) {
    //         const field = name.split(".")[1];
    //         if (field === "country_of_residence") {
    //             setFormData(prev => ({
    //                 ...prev,
    //                 location: { ...prev.location, [field]: value },
    //                 address: { ...prev.address, country: value }  // auto-fill Address Country
    //             }));
    //         } else {
    //             setFormData(prev => ({
    //                 ...prev,
    //                 location: { ...prev.location, [field]: value }
    //             }));
    //         }
    //         return;
    //     }
    //     // For all other fields
    //     setFormData(prev => ({ ...prev, [name]: value }));
    // };

    // // Update the handleSubmit function
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     setLoading(true);
    //     setError("");

    //     // Show SSN fields if either nationality or residence is USA
    //     const isUSPerson = formData.nationality === "USA" || formData.location.country_of_residence === "USA";

    //     // Create payload matching exact database column names
    //     const payload = {
    //         first_name: formData.first_name,
    //         last_name: formData.last_name,
    //         email: formData.email,
    //         dob: formData.dob,
    //         phone_number: formData.phone_number,
    //         phone_number_consent_granted: formData.phone_number_consent_granted,
    //         nationality: formData.nationality,
    //         // Address fields are flattened in the database
    //         address_line1: formData.address.line1,
    //         address_line2: formData.address.line2,
    //         address_town: formData.address.town,
    //         address_state: formData.location.country_of_residence === "USA" ? formData.address.state : null,
    //         address_postcode: formData.address.postcode,
    //         address_country: formData.location.country_of_residence,
    //         country_of_residence: formData.location.country_of_residence,
    //         // Include SSN fields if person is US national or resident
    //         ssn: isUSPerson ? formData.ssn.replace(/[^\d]/g, '') : null,
    //         ssn_consent_granted: isUSPerson ? formData.ssn_consent_granted : false
    //     };

    //     // Create Onfido-specific payload for verification
    //     const onfidoPayload = {
    //         first_name: formData.first_name,
    //         last_name: formData.last_name,
    //         email: formData.email,
    //         dob: formData.dob, // Send the date as is, backend will format it
    //         address: {
    //             street: formData.address.line1,
    //             street2: formData.address.line2 || null,
    //             town: formData.address.town,
    //             state: formData.address.state || null,
    //             postcode: formData.address.postcode,
    //             country: formData.location.country_of_residence
    //         },
    //         location: {
    //             ip_address: null,
    //             country_of_residence: formData.location.country_of_residence
    //         }
    //     };

    //     try {
    //         const token = await getValidToken();
    //         const response = await fetch('http://localhost:5000/api/users/update-profile', {
    //             method: 'POST',
    //             credentials: 'include',
    //             headers: {
    //                 'Accept': 'application/json',
    //                 'Content-Type': 'application/json',
    //                 'Authorization': `Bearer ${token}`
    //             },
    //             body: JSON.stringify({
    //                 userProfile: payload,
    //                 onfidoData: onfidoPayload
    //             })
    //         });

    //         if (!response.ok) {
    //             throw new Error(`HTTP error! status: ${response.status}`);
    //         }

    //         const data = await response.json();

    //         if (data.success) {
    //             setApplicantId(data.user.onfido_applicant_id);
    //             setShowVerification(true);
    //         }
    //     } catch (err) {
    //         console.error("Update Error:", err);
    //         setError("Failed to update profile. Please try again.");
    //     } finally {
    //         setLoading(false);
    //     }
    // };

    // // Handle verification completion
    // const handleVerificationComplete = async (applicantId) => {
    //     try {
    //         const response = await axios.get(`http://localhost:5000/api/users/get-onfido-data/${applicantId}`, {
    //             withCredentials: true
    //         });

    //         const verifiedData = response.data;
    //         setFormData((prev) => ({
    //             ...prev,
    //             first_name: verifiedData.first_name || prev.first_name,
    //             last_name: verifiedData.last_name || prev.last_name,
    //             dob: verifiedData.dob || prev.dob,
    //         }));
    //     } catch (error) {
    //         console.error("Failed to fetch verified data:", error);
    //         setError("Failed to fetch verified data. Please try again.");
    //     }
    // };

    // // Determine if nationality is US
    // const isUSCitizen = formData.nationality === "USA";

    // // Add a new variable to determine if user has US residence (for state field display)
    // const isUSResidence = formData.location.country_of_residence === "USA";

    // // Add function to update user info in database
    // const updateUserInfo = async (updatedData) => {
    //     try {
    //         const response = await axiosInstance.put('/api/users/update-info', updatedData);
    //         if (response.data.success) {
    //             await fetchOnfidoData(response.data.onfido_applicant_id);
    //         }
    //     } catch (error) {
    //         console.error('Failed to update user info:', error);
    //         setError('Failed to update user information');
    //     }
    // };

    // // Show loading state with better message
    // if (loading) {
    //     return (
    //         <div className="loading-container">
    //             <div className="loading-spinner"></div>
    //             <p>Loading your profile information...</p>
    //             <small>This may take a few seconds</small>
    //         </div>
    //     );
    // }

    // // Show error state with more details
    // if (error) {
    //     return (
    //         <div className="error-container">
    //             <h2>Something went wrong</h2>
    //             <p>{error}</p>
    //             <div>
    //                 <button onClick={() => window.location.reload()} className="retry-button">
    //                     Try Again
    //                 </button>
    //                 <button onClick={() => navigate('/dashboard')} className="dashboard-button">
    //                     Go to Dashboard
    //                 </button>
    //             </div>
    //         </div>
    //     );
    // }




    return (
        <>
            <div className="container-fluid verfi5">
                <div className="row" style={{ height: "100vh" }}>
             {/* Sidebar */}
             <div className="asideComponent col-lg-3 col-md-2" style={{ height: "100%" }}>
                        <Aside />
                    </div>



                    <div className="col-12 col-lg-9 col-md-12">
                        <h1 className="text-2xl font-bold mb-6 text-center">Account Verification</h1>
                        <div className="relative mb-6 w-100">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="dashedLine border-t-2 border-dashed border-gray-300 " style={{ width: "80%" }}></div>
                            </div>
                            <div className="relative flex" style={{ justifyContent: "space-around" }}>
                                <div className="w-10 h-10 greyColor whiteBg rounded-full flex items-center justify-center">
                                    <i>
                                        <svg width="51" height="50" viewBox="0 0 51 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="0.90625" y="0.5" width="49" height="49" rx="24.5" fill="#FCFCFC" />
                                            <rect x="0.90625" y="0.5" width="49" height="49" rx="24.5" stroke="#CDCDCD" />
                                            <path d="M32.0726 21L22.9059 30.1667L18.7393 26" stroke="#C20101" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </i>
                                </div>
                                <div className="w-10 h-10 greyColor whiteBg rounded-full flex items-center justify-center">
                                    <i>
                                        <svg width="51" height="50" viewBox="0 0 51 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="0.90625" y="0.5" width="49" height="49" rx="24.5" fill="#FCFCFC" />
                                            <rect x="0.90625" y="0.5" width="49" height="49" rx="24.5" stroke="#CDCDCD" />
                                            <path d="M32.0726 21L22.9059 30.1667L18.7393 26" stroke="#C20101" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </i>
                                </div>
                                <div className="w-10 h-10 greyColor whiteBg rounded-full flex items-center justify-center">
                                    <i>
                                        <svg width="51" height="50" viewBox="0 0 51 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="0.90625" y="0.5" width="49" height="49" rx="24.5" fill="#FCFCFC" />
                                            <rect x="0.90625" y="0.5" width="49" height="49" rx="24.5" stroke="#CDCDCD" />
                                            <path d="M32.0726 21L22.9059 30.1667L18.7393 26" stroke="#C20101" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </i>
                                </div>
                                <div className="w-10 h-10 whiteColor redBg rounded-full flex items-center justify-center">4</div>
                            </div>
                        </div>

                        <div className="flex justify-between mb-6 w-100">
                            <div className="col text-center">Account Type</div>
                            <div className="col text-center">Personal Details</div>
                            <div className="col text-center">Identity Verification</div>
                            <div className="col text-center">Review and Additional Documents</div>
                        </div>

                        <div className="bg-light  rounded-lg shadow-md">
                            <div className="space-y-6">
                                <div className="signup-container">
                                    <h2>Complete Your Profile</h2>
                                    <p>Please provide additional information to verify your identity.</p>

                                    {/* {!showVerification ? ( */}
                                    <form /* onSubmit={handleSubmit} */>
                                        <div className="form-group">
                                            <label>First Name</label>
                                            <input
                                                type="text"
                                                name="first_name"
                                                /* value={formData.first_name}
                                                onChange={handleChange} */
                                                required
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label>Last Name</label>
                                            <input
                                                type="text"
                                                name="last_name"
                                                /* value={formData.last_name}
                                                onChange={handleChange} */
                                                required
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label>Email</label>
                                            <input
                                                type="email"
                                                name="email"
                                                /* value={formData.email}
                                                onChange={handleChange} */
                                                required
                                            />
                                        </div>


                                        {/********************** i changed this beause of the modal  *****************/}


                                        <div className="grid  gap-1 ">
                                            <div>
                                                <div className="grid gap-1 mb-4">
                                                    <div>
                                                        <label className="block mb-2 text-sm">Date of Birth*</label>
                                                        <div className="d-flex mail">
                                                            <div
                                                                className="iconGap flex items-center borderInput rounded p-2 cursor-pointer"
                                                                style={{ width: "100%" }}
                                                                onClick={() => setIsModalOpen(true)}
                                                            >
                                                                <input
                                                                    type="text"
                                                                    className="flex-1 outline-none placeholder:text-sm"
                                                                    placeholder={dateOfBirth}
                                                                    readOnly
                                                                />
                                                                <i className="fas fa-calendar-alt ml-2"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* مودال التقويم */}
                                                {isModalOpen && (
                                                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                                                        <div className="bg-white rounded-lg shadow-lg p-4 ">
                                                            <Calender
                                                                onDateSelect={handleDateChange} // تمرير الدالة لتحديث التاريخ
                                                            />
                                                            <button
                                                                className="mt-4 bg-gray-300 text-gray-700 py-2 px-4 rounded"
                                                                onClick={() => setIsModalOpen(false)}
                                                            >
                                                                Close
                                                            </button>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>



                                        <div className="form-group">
                                            <label>Phone Number</label>
                                            <input
                                                type="text"
                                                name="phone_number"
                                                /* value={formData.phone_number}
                                                onChange={handleChange} */
                                                placeholder="+14155552671"
                                                required
                                            />
                                        </div>

                                        <div className="form-group d-flex ">
                                            <div className="d-flex ">
                                                <div>
                                                    I consent to provide my phone number in international format.
                                                </div>
                                                <label className="mb-0 d-flex">
                                                    <input
                                                        type="checkbox"
                                                        name="phone_number_consent_granted"
                                                        required
                                                        className="ms-2"
                                                    />
                                                </label>
                                            </div>
                                        </div>



                                        <div className="form-group">
                                            <label>Nationality</label>
                                            <select
                                                name="nationality"
                                                /* value={formData.nationality}
                                                onChange={handleChange} */
                                                required
                                            >
                                                <option value="">Select Nationality</option>
                                                {/* {Object.entries(countryOptions).map(([code, name]) => (
                                <option key={code} value={code}>
                                    {name}
                                </option>
                            ))} */}
                                            </select>
                                        </div>

                                        <div className="form-group">
                                            <label>Country of Residence</label>
                                            <select
                                                name="location.country_of_residence"
                                                /* value={formData.location.country_of_residence}
                                                onChange={handleChange} */
                                                required
                                            >
                                                <option value="">Select Country of Residence</option>
                                                {/* {Object.entries(countryOptions).map(([code, name]) => (
                                <option key={code} value={code}>
                                    {name}
                                </option>
                            ))} */}
                                            </select>
                                        </div>

                                        <h3>Address</h3>
                                        <div className="form-group">
                                            <label>Address Line 1 (Building number and Street)</label>
                                            <input
                                                type="text"
                                                name="address.line1"
                                                /* value={formData.address.line1}
                                                onChange={handleChange} */
                                                required
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label>Address Line 2 (Optional)</label>
                                            <input
                                                type="text"
                                                name="address.line2"
                                            /* value={formData.address.line2}
                                            onChange={handleChange} */
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label>Town/City</label>
                                            <input
                                                type="text"
                                                name="address.town"
                                                /* value={formData.address.town}
                                                onChange={handleChange} */
                                                required
                                            />
                                        </div>

                                        {/* {isUSResidence && (
                        <div className="form-group">
                            <label>State</label>
                            <select
                                name="address.state"
                                value={formData.address.state}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select State</option>
                                {Object.entries(usStates).map(([code, name]) => (
                                    <option key={code} value={code}>
                                        {name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    )} */}

                                        <div className="form-group">
                                            <label>Postal Code</label>
                                            <input
                                                type="text"
                                                name="address.postcode"
                                                /* value={formData.address.postcode}
                                                onChange={handleChange} */
                                                required
                                            />
                                        </div>



                                        {/* {(isUSCitizen || formData.location.country_of_residence === "USA") && (
                        <>
                            <div className="form-group">
                                <label>Social Security Number (XXX-XX-XXXX)</label>
                                <input
                                    type="text"
                                    name="ssn"
                                    value={formData.ssn}
                                    onChange={handleSsnChange}
                                    maxLength="11"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>
                                    <input
                                        type="checkbox"
                                        name="ssn_consent_granted"
                                        checked={formData.ssn_consent_granted}
                                        onChange={handleChange}
                                        required
                                    />
                                    I consent to provide my SSN.
                                </label>
                            </div>
                        </>
                    )} */}

                                        <button type="submit" className='redBtn redBg text-white' /* disabled={loading} */>
                                            {/* {loading ? "Updating..." : "Update Profile"} */} Update Profile
                                        </button>
                                        <div className="flex justify-center gap-2 verfi5-new-btns">

                                            <Link to="/verfi3" className='saveNext'>
                                                <button className="backBtn   redClr font-semibold px-4 py-2 rounded-lg hover:bg-red-600">Back</button>
                                            </Link>
                                            <Link to="/business1" className='saveNext'>
                                                <button className=" redBtn redBg text-white font-semibold px-4 py-2 rounded-lg hover:bg-red-600">Finish</button>
                                            </Link>
                                        </div>
                                    </form>
                                    {/* ) : (
                <OnfidoVerification
                    applicantId={applicantId}
                    onVerificationComplete={handleVerificationComplete}
                />
            )} */}
                                </div>
                            </div>


                        </div>




                    </div>
                </div>
            </div>
        </>
    );
}
