import React, { useState, useEffect } from 'react';
import "./business3.css";
import { Link } from 'react-router-dom';
import Aside from '../../aside/aside';
import selectedImage from "../../images/Group 138.png";
import { FaRegCalendarAlt } from "react-icons/fa";


function Business3() {


    const [countries, setCountries] = useState([]);
    const [countryCodes, setCountryCodes] = useState({});

    const [selectedFirstCountry, setSelectedFirstCountry] = useState('GB');
    const [selectedSecondCountry, setSelectedSecondCountry] = useState('GB');
    const [selectedThirdCountry, setSelectedThirdCountry] = useState('GB');

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



    const [selectedAccount, setSelectedAccount] = useState('');
    const [activeLink, setActiveLink] = useState('overview');

    const handleNavigation = (accountType) => {
        setSelectedAccount(accountType);
        console.log(`Selected account type: ${accountType}`); // Logging selected account type
    };

    const [isChecked1, setIsChecked1] = React.useState(true);
    const [isChecked2, setIsChecked2] = React.useState(false);
    return (
        <>

            <div className="container-fluid lettersContainer flex-center">

                <div className="row">
                    <div className="asideComponent col-lg-3 col-md-2" style={{ height: "100%" }}>
                        <Aside />
                    </div>



                    <div className="col-12 col-lg-9 col-md-12 mt-5 text-center">
                        <h1 className="text-2xl font-bold mb-6 text-center">Business Verification(s)</h1>
                        <div className="relative mb-6 w-100">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="dashedLine border-t-2 border-dashed border-gray-300 " style={{ width: "80%" }}></div>
                            </div>
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
                                <div className="w-10 h-10 whiteColor redBg rounded-full flex items-center justify-center">3</div>

                                <div className="w-10 h-10 greyColor whiteBg rounded-full flex items-center justify-center">
                                    4
                                </div>


                            </div>
                        </div>


                        <div className="flex justify-between mb-6 w-100">
                            <div className="col text-center text-sm">Business Details</div>
                            <div className="col text-center text-sm greyColor">Business Beneficial Owners</div>
                            <div className="col text-center text-sm greyColor">Signatory Power</div>
                            <div className="col text-center text-sm greyColor">Review and Additional Documents</div>
                        </div>
                        <div className="bg-[rgb(252,252,252)] rounded-lg shadow-md business3Component custom-padding">
                            <h2 className="text-xl font-semibold mb-4 pt-4 text-center">Verify Signatory Power</h2>
                            <div className="account-type bg-[rgb(252,252,252)] p-6 rounded-lg mb-6">
                                <div className={`bg-[rgb(244,244,244)] p-4 rounded-lg border border-gray-300 ${selectedAccount === 'personal' ? 'bg-[rgb(230,230,230)]' : ''}`} style={{ marginBottom: '24px' }}>
                                    <label className="flex items-center">
                                        <input type="radio" name="accountType" className="form-radio h-5 w-5 text-red-500" onClick={() => handleNavigation('personal')} />
                                        <span className="bold ml-2 text-md font-medium">Single Signatory Power</span>
                                    </label>
                                    {selectedAccount === 'personal' && (
                                        <div className='inputsStyles mt-4'>
                                            <div className="grid grid-cols-1 md:grid-cols-1 gap-4 mb-4">
                                                <div className="w-100">
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
                                                        <input type="text" className="flex-1 outline-none placeholder:text-sm w-full" placeholder="Name" />
                                                    </div>
                                                </div>


                                            </div>

                                            <div className="grid gap-1 mb-4 w-full overflow-x-hidden mt-4">
                                                <div className="w-full">
                                                    <label className="block mb-2 text-sm">Residential address*</label>
                                                    <div className="flex iconGap items-center borderInput rounded p-2">
                                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M5.53188 3.64437C6.49162 2.71478 7.64764 2.25 9 2.25C10.3524 2.25 11.5029 2.7095 12.4518 3.62852C13.4006 4.54754 13.875 5.66197 13.875 6.97183C13.875 7.62676 13.706 8.37676 13.3679 9.22183C13.0298 10.0669 12.6208 10.8592 12.1409 11.5986C11.6611 12.338 11.1867 13.0299 10.7177 13.6743C10.2487 14.3187 9.85067 14.831 9.52349 15.2113L9 15.75C8.86913 15.6021 8.69463 15.4067 8.47651 15.1637C8.25839 14.9208 7.86577 14.4349 7.29866 13.706C6.73154 12.9771 6.23532 12.2694 5.80998 11.5827C5.38465 10.8961 4.99748 10.1197 4.64849 9.25352C4.29949 8.38732 4.125 7.62676 4.125 6.97183C4.125 5.66197 4.59396 4.55282 5.53188 3.64437Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M9.75 7.125C9.75 7.53921 9.41421 7.875 9 7.875C8.58579 7.875 8.25 7.53921 8.25 7.125C8.25 6.71079 8.58579 6.375 9 6.375C9.41421 6.375 9.75 6.71079 9.75 7.125Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                        <span>|</span>
                                                        <input type="text" className="flex-1 outline-none w-full placeholder:text-sm" placeholder="Changable" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="grid gap-1 mb-4 w-full overflow-x-hidden mt-4">
                                                <div className="w-full">
                                                    <label className="block mb-2 text-sm">Residential address*</label>
                                                    <div className="flex iconGap items-center borderInput rounded p-2">
                                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M5.53188 3.64437C6.49162 2.71478 7.64764 2.25 9 2.25C10.3524 2.25 11.5029 2.7095 12.4518 3.62852C13.4006 4.54754 13.875 5.66197 13.875 6.97183C13.875 7.62676 13.706 8.37676 13.3679 9.22183C13.0298 10.0669 12.6208 10.8592 12.1409 11.5986C11.6611 12.338 11.1867 13.0299 10.7177 13.6743C10.2487 14.3187 9.85067 14.831 9.52349 15.2113L9 15.75C8.86913 15.6021 8.69463 15.4067 8.47651 15.1637C8.25839 14.9208 7.86577 14.4349 7.29866 13.706C6.73154 12.9771 6.23532 12.2694 5.80998 11.5827C5.38465 10.8961 4.99748 10.1197 4.64849 9.25352C4.29949 8.38732 4.125 7.62676 4.125 6.97183C4.125 5.66197 4.59396 4.55282 5.53188 3.64437Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M9.75 7.125C9.75 7.53921 9.41421 7.875 9 7.875C8.58579 7.875 8.25 7.53921 8.25 7.125C8.25 6.71079 8.58579 6.375 9 6.375C9.41421 6.375 9.75 6.71079 9.75 7.125Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                        <span>|</span>
                                                        <input type="text" className="flex-1 outline-none w-full placeholder:text-sm" placeholder="Changable" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div>
                                                <label className="block mb-2 text-sm">Citizenship*</label>
                                                <div className="seven0 flex iconGap items-center borderInput rounded p-2">
                                                    <i>
                                                        {countries.find((country) => country.code === selectedSecondCountry)?.flag}
                                                    </i>
                                                    <span>|</span>
                                                    <select
                                                        value={selectedSecondCountry}
                                                        onChange={(e) => setSelectedSecondCountry(e.target.value)}
                                                        className="flex-1 outline-none text-sm w-full bg-transparent"
                                                    >
                                                        {countries.map((country) => (
                                                            <option
                                                                key={country.code}
                                                                value={country.code}
                                                            >
                                                                {country.name}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>


                                            <div className="w100 text-center mt-2">
                                                <button className="redBtn redBg whiteColor flex items-center justify-center gap-2 mx-auto">
                                                    <i>
                                                        <svg
                                                            width="22"
                                                            height="23"
                                                            viewBox="0 0 22 23"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M9.00781 22.18C8.71448 22.18 8.46115 22.0867 8.24781 21.9C8.06115 21.6867 7.96781 21.4333 7.96781 21.14V14.26H1.28781C0.994479 14.26 0.741146 14.1667 0.527813 13.98C0.341146 13.7667 0.247813 13.5133 0.247813 13.22V9.58C0.247813 9.28667 0.341146 9.04667 0.527813 8.86C0.741146 8.64667 0.994479 8.54 1.28781 8.54H7.96781V1.86C7.96781 1.56667 8.06115 1.32667 8.24781 1.14C8.46115 0.926666 8.71448 0.819999 9.00781 0.819999H13.0878C13.3811 0.819999 13.6211 0.926666 13.8078 1.14C14.0211 1.32667 14.1278 1.56667 14.1278 1.86V8.54H20.7278C21.0211 8.54 21.2611 8.64667 21.4478 8.86C21.6611 9.04667 21.7678 9.28667 21.7678 9.58V13.22C21.7678 13.5133 21.6611 13.7667 21.4478 13.98C21.2611 14.1667 21.0211 14.26 20.7278 14.26H14.1278V21.14C14.1278 21.4333 14.0211 21.6867 13.8078 21.9C13.6211 22.0867 13.3811 22.18 13.0878 22.18H9.00781Z"
                                                                fill="white"
                                                            />
                                                        </svg>
                                                    </i>
                                                    <div>
                                                        Add
                                                    </div>
                                                </button>


                                                <div className="flex items-center justify-center mt-4 lines">
                                                    <span className="">
                                                        <svg width="278" height="1" viewBox="0 0 278 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <line y1="0.5" x2="278" y2="0.5" stroke="black" />
                                                        </svg>

                                                    </span>
                                                    <span className="text-sm  mx-2">OR</span>
                                                    <span className="">
                                                        <svg width="278" height="1" viewBox="0 0 278 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <line y1="0.5" x2="278" y2="0.5" stroke="black" />
                                                        </svg>

                                                    </span>
                                                </div>



                                                <button className="importBtn   flex items-center justify-center gap-2 mx-auto">
                                                    <i>
                                                        <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M9.00781 22.18C8.71448 22.18 8.46115 22.0867 8.24781 21.9C8.06115 21.6867 7.96781 21.4333 7.96781 21.14V14.26H1.28781C0.994479 14.26 0.741146 14.1667 0.527813 13.98C0.341146 13.7667 0.247813 13.5133 0.247813 13.22V9.58C0.247813 9.28667 0.341146 9.04667 0.527813 8.86C0.741146 8.64667 0.994479 8.54 1.28781 8.54H7.96781V1.86C7.96781 1.56667 8.06115 1.32667 8.24781 1.14C8.46115 0.926666 8.71448 0.819999 9.00781 0.819999H13.0878C13.3811 0.819999 13.6211 0.926666 13.8078 1.14C14.0211 1.32667 14.1278 1.56667 14.1278 1.86V8.54H20.7278C21.0211 8.54 21.2611 8.64667 21.4478 8.86C21.6611 9.04667 21.7678 9.28667 21.7678 9.58V13.22C21.7678 13.5133 21.6611 13.7667 21.4478 13.98C21.2611 14.1667 21.0211 14.26 20.7278 14.26H14.1278V21.14C14.1278 21.4333 14.0211 21.6867 13.8078 21.9C13.6211 22.0867 13.3811 22.18 13.0878 22.18H9.00781Z" fill="#C20101" />
                                                        </svg>

                                                    </i>
                                                    <div>
                                                        Import from beneficial owners
                                                    </div>
                                                </button>
                                            </div>






                                        </div>
                                    )}
                                </div>

                                <div className={`bg-[rgb(244,244,244)] p-4 rounded-lg border border-gray-300 ${selectedAccount === 'business' ? 'bg-[rgb(230,230,230)]' : ''}`} style={{ marginBottom: '24px' }}>
                                    <label className="flex items-center">
                                        <input type="radio" name="accountType" className="form-radio h-5 w-5 text-red-500" onClick={() => handleNavigation('business')} />
                                        <span className="bold ml-2 text-md font-medium">Joint Signatory Power</span>
                                    </label>
                                    {selectedAccount === 'business' && (
                                        <div className='inputsStyles mt-4'>

                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                                                <div className="w-full">
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
                                                        <input type="text" className="flex-1 outline-none placeholder:text-sm w-full" placeholder="Changable" />
                                                    </div>
                                                </div>

                                                <div className="w-full">
                                                    <label className="block mb-2 whitespace-nowrap text-sm">Middle Name <span className="text-sm">(Optional)</span></label>
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
                                                        <input type="text" className="flex-1 outline-none placeholder:text-sm w-full" placeholder="Changable" />
                                                    </div>
                                                </div>

                                                <div className="w-full">
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
                                                        <input type="text" className="flex-1 outline-none placeholder:text-sm w-full" placeholder="Changable" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="grid gap-1 mb-4 w-full overflow-x-hidden mt-4">
                                                <div className="w-full">
                                                    <label className="block mb-2 whitespace-nowrap text-sm">Email</label>
                                                    <div className="iconGap flex items-center borderInput rounded p-2">
                                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M15.1461 14.0859H2.85364C2.45408 14.0854 2.07103 13.9265 1.78851 13.6439C1.506 13.3614 1.3471 12.9783 1.34668 12.5788V4.98708C1.3471 4.58753 1.506 4.20446 1.78851 3.92192C2.07103 3.63937 2.45408 3.48044 2.85364 3.47998H15.1461C15.5456 3.48044 15.9287 3.63937 16.2112 3.92192C16.4937 4.20446 16.6526 4.58753 16.653 4.98708V12.5788C16.6526 12.9783 16.4937 13.3614 16.2112 13.6439C15.9287 13.9265 15.5456 14.0854 15.1461 14.0859ZM2.85364 4.05598C2.60679 4.05625 2.37013 4.15444 2.1956 4.329C2.02106 4.50356 1.92291 4.74024 1.92268 4.98708V12.5788C1.92291 12.8256 2.02106 13.0623 2.1956 13.2369C2.37013 13.4114 2.60679 13.5096 2.85364 13.5099H15.1461C15.3929 13.5096 15.6296 13.4114 15.8041 13.2369C15.9786 13.0623 16.0768 12.8256 16.077 12.5788V4.98708C16.0768 4.74024 15.9786 4.50356 15.8041 4.329C15.6296 4.15444 15.3929 4.05625 15.1461 4.05598H2.85364Z" fill="black" />
                                                            <path d="M9.00011 10.4781C8.92991 10.4781 8.8621 10.4525 8.80945 10.4061L1.86865 4.27917L2.24982 3.84717L9.00011 9.80646L15.7507 3.84789L16.1319 4.27989L9.19105 10.4068C9.13826 10.4531 9.07033 10.4785 9.00011 10.4781Z" fill="black" />
                                                            <path d="M1.71191 13.1816L6.37467 7.86892L6.80782 8.24908L2.14507 13.5618L1.71191 13.1816Z" fill="black" />
                                                            <path d="M11.207 8.24365L11.6402 7.86349L16.303 13.1763L15.8699 13.5565L11.207 8.24365Z" fill="black" />
                                                        </svg>


                                                        <span>|</span>
                                                        <input type="text" className="flex-1 outline-none placeholder:text-sm w-full" placeholder="Email" />
                                                    </div>
                                                </div>


                                            </div>


                                            <div>
                                                <label className="block mb-2 text-sm">Country of Incorporation*</label>
                                                <div className="seven0 flex iconGap items-center borderInput rounded p-2">
                                                    <i>
                                                        {countries.find((country) => country.code === selectedFirstCountry)?.flag}
                                                    </i>
                                                    <span>|</span>
                                                    <select
                                                        value={selectedFirstCountry}
                                                        onChange={(e) => setSelectedFirstCountry(e.target.value)}
                                                        className="flex-1 outline-none text-sm w-full bg-transparent"
                                                    >
                                                        {countries.map((country) => (
                                                            <option
                                                                key={country.code}
                                                                value={country.code}
                                                            >
                                                                {country.name}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>










                                            <div className="w100 text-center mt-2">
                                                <button className="redBtn redBg whiteColor flex items-center justify-center gap-2 mx-auto">
                                                    <i>
                                                        <svg
                                                            width="22"
                                                            height="23"
                                                            viewBox="0 0 22 23"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M9.00781 22.18C8.71448 22.18 8.46115 22.0867 8.24781 21.9C8.06115 21.6867 7.96781 21.4333 7.96781 21.14V14.26H1.28781C0.994479 14.26 0.741146 14.1667 0.527813 13.98C0.341146 13.7667 0.247813 13.5133 0.247813 13.22V9.58C0.247813 9.28667 0.341146 9.04667 0.527813 8.86C0.741146 8.64667 0.994479 8.54 1.28781 8.54H7.96781V1.86C7.96781 1.56667 8.06115 1.32667 8.24781 1.14C8.46115 0.926666 8.71448 0.819999 9.00781 0.819999H13.0878C13.3811 0.819999 13.6211 0.926666 13.8078 1.14C14.0211 1.32667 14.1278 1.56667 14.1278 1.86V8.54H20.7278C21.0211 8.54 21.2611 8.64667 21.4478 8.86C21.6611 9.04667 21.7678 9.28667 21.7678 9.58V13.22C21.7678 13.5133 21.6611 13.7667 21.4478 13.98C21.2611 14.1667 21.0211 14.26 20.7278 14.26H14.1278V21.14C14.1278 21.4333 14.0211 21.6867 13.8078 21.9C13.6211 22.0867 13.3811 22.18 13.0878 22.18H9.00781Z"
                                                                fill="white"
                                                            />
                                                        </svg>
                                                    </i>
                                                    <div>
                                                        Add
                                                    </div>
                                                </button>


                                                <div className="flex items-center justify-center mt-4 lines">
                                                    <span className="">
                                                        <svg width="278" height="1" viewBox="0 0 278 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <line y1="0.5" x2="278" y2="0.5" stroke="black" />
                                                        </svg>

                                                    </span>
                                                    <span className="text-sm  mx-2">OR</span>
                                                    <span className="">
                                                        <svg width="278" height="1" viewBox="0 0 278 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <line y1="0.5" x2="278" y2="0.5" stroke="black" />
                                                        </svg>

                                                    </span>
                                                </div>



                                                <button className="importBtn   flex items-center justify-center gap-2 mx-auto">
                                                    <i>
                                                        <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M9.00781 22.18C8.71448 22.18 8.46115 22.0867 8.24781 21.9C8.06115 21.6867 7.96781 21.4333 7.96781 21.14V14.26H1.28781C0.994479 14.26 0.741146 14.1667 0.527813 13.98C0.341146 13.7667 0.247813 13.5133 0.247813 13.22V9.58C0.247813 9.28667 0.341146 9.04667 0.527813 8.86C0.741146 8.64667 0.994479 8.54 1.28781 8.54H7.96781V1.86C7.96781 1.56667 8.06115 1.32667 8.24781 1.14C8.46115 0.926666 8.71448 0.819999 9.00781 0.819999H13.0878C13.3811 0.819999 13.6211 0.926666 13.8078 1.14C14.0211 1.32667 14.1278 1.56667 14.1278 1.86V8.54H20.7278C21.0211 8.54 21.2611 8.64667 21.4478 8.86C21.6611 9.04667 21.7678 9.28667 21.7678 9.58V13.22C21.7678 13.5133 21.6611 13.7667 21.4478 13.98C21.2611 14.1667 21.0211 14.26 20.7278 14.26H14.1278V21.14C14.1278 21.4333 14.0211 21.6867 13.8078 21.9C13.6211 22.0867 13.3811 22.18 13.0878 22.18H9.00781Z" fill="#C20101" />
                                                        </svg>

                                                    </i>
                                                    <div>
                                                        Import from beneficial owners
                                                    </div>
                                                </button>
                                            </div>


                                        </div>
                                    )}
                                </div>
                            </div>





                            <div className='mt-10 text-2xl font-bold mb-6 text-center'><h2>Upload Mandatory Documents</h2></div>



                            <div className=" md:flex items-center justify-between p-4 bg-gray-100 rounded-lg shadow-md">
                                <div className='text-start'>
                                    <h2 className="text-md md:text-xl bold">Company Bylaws</h2>
                                    <p className="text-gray-500 pt-3">Company Bylaws: Rules governing how a corporation operates, outlining roles, procedures for meetings, and decision-making processes.</p>
                                    <p className="text-gray-500">26%</p>
                                </div>
                                <div className="flex md:flex-row flex-col md:space-x-2 space-y-2 md:space-y-0 mt-1">
                                    <button className="flex items-center px-4 py-2 border border-red-500 text-red-500 rounded-lg place-content-center md:w-auto">
                                        <span>Upload</span>
                                        <i className=" ml-2"><svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.5 13.5H10.5V7.5H14.5L7.5 0.5L0.5 7.5H4.5V13.5ZM0.5 15.5H14.5V17.5H0.5V15.5Z" fill="#C20101" />
                                        </svg>
                                        </i>
                                    </button>

                                </div>
                            </div>


                            <div className="authorized-signatories-container flex flex-col items-center justify-center mt-10 bg-white w-100">
                                <div className="authorized-signatories-header text-center mb-6">
                                    <h1 className="authorized-signatories-title text-lg font-bold text-black">
                                        Authorized signatories
                                    </h1>
                                    <p className="authorized-signatories-description text-gray-500">
                                        Enable toggle switch2 for the authorized applicant
                                    </p>
                                </div>
                                <div className="authorized-signatory-card bg-gray-100 p-4 rounded-lg shadow-md w-100 mb-4">
                                    <div className="authorized-signatory-content flex flex-col items-center">
                                        <div className="authorized-signatory-label text-gray-400 mb-2">
                                            (Authorized Applicant)
                                        </div>
                                        <div className="authorized-signatory-info flex justify-between items-center w-full">
                                            <div className="authorized-signatory-details">
                                                <p className="authorized-signatory-name font-bold text-black">
                                                    John Smith
                                                </p>
                                                <p className="authorized-signatory-role text-gray-500">
                                                    Beneficial Owner
                                                </p>
                                            </div>
                                            <div className="authorized-signatory-toggle">
                                                <label className="toggle-switch">
                                                    <input
                                                        type="checkbox"
                                                        checked={isChecked1}
                                                        onChange={() => setIsChecked1(!isChecked1)}
                                                    />
                                                    <span
                                                        className={`toggle-slider round ${isChecked1 ? 'bg-red-500' : 'bg-gray-500'
                                                            }`}
                                                    ></span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="authorized-signatory-card bg-gray-100 p-4 rounded-lg shadow-md w-100 mb-4">
                                    <div className="authorized-signatory-content flex flex-col items-center">
                                        <div className="authorized-signatory-label text-gray-400 mb-2">
                                            (Authorized Applicant)
                                        </div>
                                        <div className="authorized-signatory-info flex justify-between items-center w-full">
                                            <div className="authorized-signatory-details">
                                                <p className="authorized-signatory-name font-bold text-black">
                                                    John Smith
                                                </p>
                                                <p className="authorized-signatory-role text-gray-500">
                                                    Beneficial Owner
                                                </p>
                                            </div>
                                            <div className="authorized-signatory-toggle">
                                                <label className="toggle-switch">
                                                    <input
                                                        type="checkbox"
                                                        checked={isChecked2}
                                                        onChange={() => setIsChecked2(!isChecked2)}
                                                    />
                                                    <span
                                                        className={`toggle-slider round ${isChecked2 ? 'bg-red-500' : 'bg-gray-500'
                                                            }`}
                                                    ></span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>



                        </div>

                        <div className="flex justify-center gap-2">
                            
                            <Link to="/business2" className='saveNext'>
                                <button className="backBtn   redClr font-semibold px-4 py-2 rounded-lg hover:bg-red-600">Back</button>
                            </Link>
                            <Link to="/business5" className='saveNext'>
                                <button className=" redBtn redBg text-white font-semibold px-4 py-2 rounded-lg hover:bg-red-600">Save & Next</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Business3;