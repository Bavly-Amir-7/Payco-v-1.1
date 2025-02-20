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



    const [selectedCountry, setSelectedCountry] = useState('GB'); // Default to UK
    const [selectedPhoneCountry, setSelectedPhoneCountry] = useState('GB');

    const [countryCodes, setCountryCodes] = useState({});

    const [countries, setCountries] = useState([]);

    const [isPhoneVerfiVisible, setIsPhoneVerfiVisible] = useState(false);
    const [randomNumbers, setRandomNumbers] = useState([]);
    const [phoneCode, setPhoneCode] = useState('');



    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await fetch('https://restcountries.com/v3.1/all');
                const data = await response.json();
                const countryList = data.map(country => ({
                    code: country.cca2,
                    name: country.name.common,
                    flag: <img src={country.flags.svg} alt={country.name.common} className="w-6 h-4" />,
                    callingCode: country.idd?.root ? `${country.idd.root}${country.idd.suffixes ? country.idd.suffixes[0] : ''}` : 'N/A'
                })).sort((a, b) => a.name.localeCompare(b.name));

                const countryCodeMap = {};
                countryList.forEach(country => {
                    countryCodeMap[country.code] = country.callingCode || 'N/A';
                });

                setCountries(countryList);
                setCountryCodes(countryCodeMap);
            } catch (error) {
                console.error('Error fetching countries:', error);
            }
        };

        fetchCountries();
    }, []);


    useEffect(() => {
        if (selectedPhoneCountry && countryCodes[selectedPhoneCountry]) {
            setPhoneCode(countryCodes[selectedPhoneCountry]); // ❌ 
        }
    }, [selectedPhoneCountry, countryCodes]);


    
        const handleFirstCountryChange = (event) => {
            setSelectedFirstCountry(event.target.value);
        };

        const handleSecondCountryChange = (event) => {
            if (event.target.value !== selectedFirstCountry) {
                setSelectedSecondCountry(event.target.value);
            }
        };
        const handleThirdCountryChange = (event) => {
            if (event.target.value !== selectedFirstCountry) {
                setSelectedThirdCountry(event.target.value);
            }
        };
    const [selectedFirstCountry, setSelectedFirstCountry] = useState('GB');
    const [selectedSecondCountry, setSelectedSecondCountry] = useState('GB');
    const [selectedThirdCountry, setSelectedThirdCountry] = useState('GB');    


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
                                        <div className="w-full">
                                            {/* First Name Input Field */}
                                            <label className="block mb-2 whitespace-nowrap text-sm">First Name*</label>
                                            <div className="iconGap flex items-center borderInput rounded p-2">
                                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clipPath="url(#clip0_3373_226)">
                                                        <path d="M9 9C9.89002 9 10.76 8.73608 11.5001 8.24162C12.2401 7.74715 12.8169 7.04434 13.1575 6.22208C13.4981 5.39981 13.5872 4.49501 13.4135 3.6221C13.2399 2.74918 12.8113 1.94736 12.182 1.31802C11.5526 0.688685 10.7508 0.260102 9.87791 0.0864683C9.00499 -0.0871652 8.10019 0.00194979 7.27792 0.342544C6.45566 0.683138 5.75285 1.25991 5.25839 1.99994C4.76392 2.73996 4.5 3.60999 4.5 4.5C4.50119 5.69311 4.97568 6.83701 5.81934 7.68067C6.66299 8.52432 7.80689 8.99881 9 9ZM9 1.5C9.59334 1.5 10.1734 1.67595 10.6667 2.00559C11.1601 2.33524 11.5446 2.80377 11.7716 3.35195C11.9987 3.90013 12.0581 4.50333 11.9424 5.08527C11.8266 5.66722 11.5409 6.20177 11.1213 6.62132C10.7018 7.04088 10.1672 7.3266 9.58527 7.44236C9.00333 7.55811 8.40013 7.4987 7.85195 7.27164C7.30377 7.04458 6.83524 6.66006 6.50559 6.16671C6.17595 5.67337 6 5.09335 6 4.5C6 3.70435 6.31607 2.94129 6.87868 2.37868C7.44129 1.81607 8.20435 1.5 9 1.5Z" fill="#2D2D2D" />
                                                        <path d="M9 10.5C7.2104 10.502 5.49466 11.2138 4.22922 12.4792C2.96378 13.7447 2.25199 15.4604 2.25 17.25C2.25 17.4489 2.32902 17.6397 2.46967 17.7803C2.61032 17.921 2.80109 18 3 18C3.19891 18 3.38968 17.921 3.53033 17.7803C3.67098 17.6397 3.75 17.4489 3.75 17.25C3.75 15.8576 4.30312 14.5223 5.28769 13.5377C6.27226 12.5531 7.60761 12 9 12C10.3924 12 11.7277 12.5531 12.7123 13.5377C13.6969 14.5223 14.25 15.8576 14.25 17.25C14.25 17.4489 14.329 17.6397 14.4697 17.7803C14.6103 17.921 14.8011 18 15 18C15.1989 18 15.3897 17.921 15.5303 17.7803C15.671 17.6397 15.75 17.4489 15.75 17.25C15.748 15.4604 15.0362 13.7447 13.7708 12.4792C12.5053 11.2138 10.7896 10.502 9 10.5Z" fill="#2D2D2D" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_3373_226">
                                                            <rect width="18" height="18" fill="white" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                <span>|</span>

                                                {/* Backend First Name Input */}
                                                <input
                                                    type="text"
                                                    name="first_name"
                                                    className="flex-1 outline-none placeholder:text-sm w-full"
                                                    placeholder="Changable"
                                                    /* value={formData.first_name}
                                                    onChange={handleChange} */
                                                    required
                                                />
                                            </div>
                                        </div>


                                        <div className="w-full">
                                            {/* Last Name Input Field */}
                                            <label className="block mb-2 whitespace-nowrap text-sm">Last Name*</label>
                                            <div className="iconGap flex items-center borderInput rounded p-2">
                                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clipPath="url(#clip0_3373_226)">
                                                        <path d="M9 9C9.89002 9 10.76 8.73608 11.5001 8.24162C12.2401 7.74715 12.8169 7.04434 13.1575 6.22208C13.4981 5.39981 13.5872 4.49501 13.4135 3.6221C13.2399 2.74918 12.8113 1.94736 12.182 1.31802C11.5526 0.688685 10.7508 0.260102 9.87791 0.0864683C9.00499 -0.0871652 8.10019 0.00194979 7.27792 0.342544C6.45566 0.683138 5.75285 1.25991 5.25839 1.99994C4.76392 2.73996 4.5 3.60999 4.5 4.5C4.50119 5.69311 4.97568 6.83701 5.81934 7.68067C6.66299 8.52432 7.80689 8.99881 9 9ZM9 1.5C9.59334 1.5 10.1734 1.67595 10.6667 2.00559C11.1601 2.33524 11.5446 2.80377 11.7716 3.35195C11.9987 3.90013 12.0581 4.50333 11.9424 5.08527C11.8266 5.66722 11.5409 6.20177 11.1213 6.62132C10.7018 7.04088 10.1672 7.3266 9.58527 7.44236C9.00333 7.55811 8.40013 7.4987 7.85195 7.27164C7.30377 7.04458 6.83524 6.66006 6.50559 6.16671C6.17595 5.67337 6 5.09335 6 4.5C6 3.70435 6.31607 2.94129 6.87868 2.37868C7.44129 1.81607 8.20435 1.5 9 1.5Z" fill="#2D2D2D" />
                                                        <path d="M9 10.5C7.2104 10.502 5.49466 11.2138 4.22922 12.4792C2.96378 13.7447 2.25199 15.4604 2.25 17.25C2.25 17.4489 2.32902 17.6397 2.46967 17.7803C2.61032 17.921 2.80109 18 3 18C3.19891 18 3.38968 17.921 3.53033 17.7803C3.67098 17.6397 3.75 17.4489 3.75 17.25C3.75 15.8576 4.30312 14.5223 5.28769 13.5377C6.27226 12.5531 7.60761 12 9 12C10.3924 12 11.7277 12.5531 12.7123 13.5377C13.6969 14.5223 14.25 15.8576 14.25 17.25C14.25 17.4489 14.329 17.6397 14.4697 17.7803C14.6103 17.921 14.8011 18 15 18C15.1989 18 15.3897 17.921 15.5303 17.7803C15.671 17.6397 15.75 17.4489 15.75 17.25C15.748 15.4604 15.0362 13.7447 13.7708 12.4792C12.5053 11.2138 10.7896 10.502 9 10.5Z" fill="#2D2D2D" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_3373_226">
                                                            <rect width="18" height="18" fill="white" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                <span>|</span>

                                                {/* Backend Last Name Input */}
                                                <input
                                                    type="text"
                                                    name="last_name"
                                                    className="flex-1 outline-none placeholder:text-sm w-full"
                                                    placeholder="Changable"
                                                    /* value={formData.last_name}
                                                    onChange={handleChange} */
                                                    required
                                                />
                                            </div>
                                        </div>


                                        <div className="w-full grid gap-1 mb-4">
                                            {/* Email Input Field */}
                                            <label className="block mb-2 text-sm">Email*</label>
                                            <div className="d-flex mail">
                                                <div className="mailArea labelStyles iconGap flex items-center borderInput rounded p-2 w-full">
                                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clipPath="url(#clip0_3373_5338)">
                                                            <path d="M16.8442 6.07484L11.6512 1.09784C10.9475 0.401465 9.99799 0.00992606 9.00793 0.00782103C8.01787 0.00571601 7.06672 0.393214 6.36 1.08659L1.155 6.07484C0.790961 6.42547 0.501122 6.84569 0.302707 7.31055C0.104292 7.77541 0.00135017 8.27541 0 8.78084L0 14.2498C0.00119089 15.244 0.396661 16.1972 1.09966 16.9002C1.80267 17.6032 2.7558 17.9987 3.75 17.9998H14.25C15.2442 17.9987 16.1973 17.6032 16.9003 16.9002C17.6033 16.1972 17.9988 15.244 18 14.2498V8.78084C17.9987 8.27534 17.8957 7.77527 17.6971 7.31039C17.4986 6.84551 17.2085 6.42532 16.8442 6.07484ZM7.40925 2.15834C7.83453 1.73684 8.40971 1.50135 9.00848 1.5036C9.60725 1.50585 10.1806 1.74565 10.6027 2.17034L15.663 7.01834L10.5907 12.0913C10.162 12.5001 9.59236 12.7281 9 12.7281C8.40764 12.7281 7.83801 12.5001 7.40925 12.0913L2.33625 7.01834L7.40925 2.15834ZM16.5 14.2498C16.5 14.8466 16.2629 15.4189 15.841 15.8408C15.419 16.2628 14.8467 16.4998 14.25 16.4998H3.75C3.15326 16.4998 2.58097 16.2628 2.15901 15.8408C1.73705 15.4189 1.5 14.8466 1.5 14.2498V8.78084C1.50076 8.63525 1.51557 8.49008 1.54425 8.34734L6.34875 13.1518C7.05429 13.8505 8.00708 14.2424 9 14.2424C9.99292 14.2424 10.9457 13.8505 11.6512 13.1518L16.4557 8.34734C16.4844 8.49008 16.4992 8.63525 16.5 8.78084V14.2498Z" fill="#2D2D2D" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_3373_5338">
                                                                <rect width="18" height="18" fill="white" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                    <span>|</span>

                                                    {/* Backend Email Input - Disabled for now */}
                                                    {/* <input
                type="email"
                name="email"
                className="flex-1 outline-none placeholder:text-sm w-full"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
            /> */}
                                                </div>
                                                <button
                                                    className="verfBtn bg-gray-200 text-gray-700 px-4 py-2 rounded ml-2"
                                                // onClick={handleVerifyEmail}
                                                >
                                                    Verify
                                                </button>
                                            </div>

                                            {/* Email Verification Input */}
                                            {/* <input
        type="text"
        className="flex-1 outline-none placeholder:text-sm w-full mt-2 p-2 border rounded"
        placeholder="Enter verification token"
        value={verificationToken}
        onChange={(e) => setVerificationToken(e.target.value)}
    /> */}

                                            {/* Display backend message if exists */}
                                            {/* {message && <p className="text-center text-sm mt-2">{message}</p>} */}
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



                                        <div className="w-full grid gap-1 mb-4">
                                            <label className="block mb-2 text-sm">Phone Number*</label>
                                            <div className="phone-input-container w-100 ">
                                                {/* Country Selector */}
                                                <div className="phone-input-item flex items-center borderInput rounded p-2">
                                                    <i>
                                                        {countries.length > 0 ? countries.find(country => country.code === selectedPhoneCountry)?.flag : ''}
                                                    </i>
                                                    <span>|</span>
                                                    <select
                                                        value={selectedPhoneCountry}
                                                        onChange={(e) => setSelectedPhoneCountry(e.target.value)}
                                                        className="flex-1 outline-none text-sm w-full bg-transparent"
                                                    >
                                                        {countries.map(country => (
                                                            <option key={country.code} value={country.code}>
                                                                {country.name} ({country.callingCode})
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>

                                                {/* Phone Number Input */}
                                                <div className="phone-input-item flex items-center borderInput rounded p-2">
                                                    <span className="text-sm text-gray-700 pr-2">
                                                        {countryCodes[selectedPhoneCountry]}
                                                    </span>
                                                    <input
                                                        type="number"
                                                        className="flex-1 outline-none text-sm w-full"
                                                        placeholder="Enter your phone number"
                                                        style={{ borderLeft: '1px solid #ddd', paddingLeft: '8px' }}
                                                    />
                                                </div>

                                                {/* Verify Button */}
                                                <button className="verify-btn">Verify</button>
                                            </div>
                                            <p className="text-center text-sm">
                                                Tap “Verify” to receive a code. Enter it below to confirm your phone number.
                                            </p>

                                            {/* Backend Code - Commented Out */}
                                            {/* 
    <div className="form-group">
        <label>Phone Number</label>
        <input
            type="text"
            name="phone_number"
            // value={formData.phone_number}
            // onChange={handleChange}
            placeholder="+14155552671"
            required
        />
    </div>
    */}
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



                                        <div>
                                            <label className="block mb-2 text-sm">Nationality*</label>
                                            <div className="flex iconGap items-center borderInput rounded p-2">
                                                <i>
                                                    {countries.find((country) => country.code === selectedSecondCountry)?.flag}
                                                </i>
                                                <span>|</span>
                                                <select
                                                    value={selectedSecondCountry}
                                                    onChange={handleSecondCountryChange}
                                                    className="flex-1 outline-none text-sm w-full bg-transparent"
                                                >
                                                    {countries.map((country) => (
                                                        <option key={country.code} value={country.code}>
                                                            {country.name}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
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
