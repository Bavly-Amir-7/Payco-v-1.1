import React, { useState, useEffect } from 'react';
import "./business2.css";
import { Link } from 'react-router-dom';
import Aside from '../../aside/aside';
import selectedImage from "../../images/Group 138.png";
import { FaRegCalendarAlt } from "react-icons/fa";
import Calender from '../../calender/calender';


function Business2() {

    const [isModalOpen, setIsModalOpen] = useState(false); // حالة لفتح وغلق المودال
    const [isModalOpen2, setIsModalOpen2] = useState(false); // حالة لفتح وغلق المودال
    const [dateOfBirth, setDateOfBirth] = useState("1 / 31 / 1998"); // لتحديث التاريخ

    const handleDateChange = (newDate) => {
        setDateOfBirth(newDate); // تحديث التاريخ بعد اختياره من Calender
        setIsModalOpen(false); // إغلاق المودال
    };



    const handleCountryChange = (event) => {
        setSelectedCountry(event.target.value);
    };

    const handlePhoneCountryChange = (event) => {
        setSelectedPhoneCountry(event.target.value);
    };





    // 🔹 تخزين الدول التي يتم جلبها من API
    const [countries, setCountries] = useState([]);
    const [countryCodes, setCountryCodes] = useState({});

    // 🔹 تخزين الدول المختارة
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
                                </div>                                <div className="w-10 h-10 whiteColor redBg rounded-full flex items-center justify-center">2</div>

                                <div className="w-10 h-10 greyColor whiteBg rounded-full flex items-center justify-center">
                                    3
                                </div>
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
                        <div className="bg-[rgb(252,252,252)] rounded-lg shadow-md verfi2Component custom-padding">
                            <h2 className="text-xl font-semibold mb-4 pt-4 text-center">Add Business Beneficial Owner(s)</h2>
                            <div className="account-type bg-[rgb(252,252,252)] p-6 rounded-lg mb-6">
                                <div className={`bg-[rgb(244,244,244)] p-4 rounded-lg border border-gray-300 ${selectedAccount === 'personal' ? 'bg-[rgb(230,230,230)]' : ''}`} style={{ marginBottom: '24px' }}>
                                    <label className="flex items-center">
                                        <input type="radio" name="accountType" className="form-radio h-5 w-5 text-red-500" onClick={() => handleNavigation('personal')} />
                                        <span className="bold ml-2 text-md font-medium">Personal Account</span>
                                    </label>
                                    {selectedAccount === 'personal' && (
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


                                            <div>
                                                <label className="block mb-2 text-sm">Citizenship*</label>
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

                                            <div className="grid gap-1 mb-4 w-full overflow-x-hidden mt-4">
                                                <div className="grid gap-1 mb-4">
                                                    <div>
                                                        <label className="block mb-2 text-sm">Date of Birth*</label>
                                                        <div className="d-flex mail">
                                                            <div
                                                                className="iconGap flex items-center borderInput rounded p-2 cursor-pointer"
                                                                style={{ width: "100%" }}
                                                                onClick={() => setIsModalOpen(true)} // فتح المودال عند الضغط على الأيقونة
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
                                                    <label className="block mb-2 text-sm">Ownership Percentage*</label>
                                                    <div className="flex iconGap items-center borderInput rounded p-2">
                                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <g clipPath="url(#clip0_3759_280)">
                                                                <path d="M10.5001 18C10.3378 18 10.1799 17.9474 10.0501 17.85L7.05011 15.6C6.95696 15.5301 6.88136 15.4396 6.82929 15.3354C6.77722 15.2313 6.75011 15.1164 6.75011 15V10.785L1.48811 4.86525C1.1144 4.44366 0.870392 3.92311 0.785417 3.36618C0.700443 2.80924 0.778116 2.23961 1.0091 1.72576C1.24008 1.21191 1.61455 0.775694 2.08749 0.469549C2.56043 0.163405 3.11173 0.000355814 3.67511 0L14.3251 0C14.8884 0.000660788 15.4396 0.163979 15.9123 0.47033C16.3851 0.776681 16.7593 1.21303 16.9901 1.72694C17.2208 2.24085 17.2982 2.81046 17.213 3.36731C17.1279 3.92416 16.8837 4.44457 16.5099 4.866L11.2501 10.785V17.25C11.2501 17.4489 11.1711 17.6397 11.0304 17.7803C10.8898 17.921 10.699 18 10.5001 18ZM8.25011 14.625L9.75011 15.75V10.5C9.75026 10.3164 9.81777 10.1392 9.93986 10.002L15.3909 3.86925C15.5726 3.66381 15.6912 3.41028 15.7324 3.13909C15.7736 2.8679 15.7357 2.59058 15.6232 2.34042C15.5107 2.09026 15.3283 1.87789 15.0981 1.72882C14.8678 1.57974 14.5994 1.50029 14.3251 1.5H3.67511C3.40095 1.50042 3.13272 1.57991 2.90261 1.72895C2.6725 1.87799 2.49026 2.09025 2.37776 2.34026C2.26526 2.59028 2.22727 2.86744 2.26835 3.13851C2.30943 3.40958 2.42783 3.66304 2.60936 3.8685L8.06111 10.002C8.18292 10.1393 8.25016 10.3165 8.25011 10.5V14.625Z" fill="#2D2D2D" />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_3759_280">
                                                                    <rect width="18" height="18" fill="white" />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>

                                                        <span>|</span>
                                                        <input type="text" className="flex-1 outline-none w-full placeholder:text-sm" placeholder="Changable" />
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
                                                                Add user
                                                            </div>
                                                        </button>
                                                    </div>


                                                </div>
                                            </div>






                                        </div>
                                    )}
                                </div>

                                <div className={`bg-[rgb(244,244,244)] p-4 rounded-lg border border-gray-300 ${selectedAccount === 'business' ? 'bg-[rgb(230,230,230)]' : ''}`} style={{ marginBottom: '24px' }}>
                                    <label className="flex items-center">
                                        <input type="radio" name="accountType" className="form-radio h-5 w-5 text-red-500" onClick={() => handleNavigation('business')} />
                                        <span className="bold ml-2 text-md font-medium">Business Account</span>
                                    </label>
                                    {selectedAccount === 'business' && (
                                        <div className='inputsStyles mt-4'>
                                            <div className="grid gap-1 mb-4 w-full overflow-x-hidden mt-4">
                                                <div className="w-full">
                                                    <label className="block mb-2 whitespace-nowrap text-sm">Company legal name*</label>
                                                    <div className="iconGap flex items-center borderInput rounded p-2">
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M22.909 13.0908C22.5817 13.0908 22.3636 13.309 22.3636 13.6363V20.7272C22.3636 21.0545 22.1454 21.2726 21.8181 21.2726H2.18172C1.85444 21.2726 1.63629 21.0544 1.63629 20.7272V13.6363C1.63629 13.309 1.41808 13.0908 1.09085 13.0908C0.763613 13.0908 0.54541 13.309 0.54541 13.6363V20.7272C0.54541 21.6545 1.25449 22.3635 2.18177 22.3635H21.8181C22.7454 22.3635 23.4545 21.6545 23.4545 20.7272V13.6363C23.4545 13.309 23.2363 13.0908 22.909 13.0908Z" fill="black" />
                                                            <path d="M22.3636 5.45459H1.63636C0.709078 5.45459 0 6.16367 0 7.09095V10.5819C0 11.3455 0.545437 12 1.25456 12.1637L9.8182 14.0727V15.8182C9.8182 16.1455 10.0364 16.3636 10.3636 16.3636H13.6364C13.9636 16.3636 14.1818 16.1454 14.1818 15.8182V14.0727L22.7454 12.1637C23.4546 12 24 11.3455 24 10.5818V7.0909C24 6.16367 23.2909 5.45459 22.3636 5.45459ZM13.0909 15.2727H10.9091V13.091H13.0909V15.2727ZM22.9091 10.5818C22.9091 10.8545 22.7454 11.0727 22.4727 11.1273L14.1818 12.9818V12.5455C14.1818 12.2182 13.9636 12 13.6364 12H10.3636C10.0364 12 9.8182 12.2182 9.8182 12.5455V12.9818L1.52728 11.1273C1.25456 11.0727 1.09092 10.8546 1.09092 10.5819V7.09095C1.09092 6.76367 1.30913 6.54551 1.63636 6.54551H22.3636C22.6909 6.54551 22.9091 6.76371 22.9091 7.09095V10.5818Z" fill="black" />
                                                            <path d="M14.7272 1.63623H9.27259C8.34531 1.63623 7.63623 2.34531 7.63623 3.27259V3.81803C7.63623 4.14531 7.85443 4.36346 8.18167 4.36346C8.5089 4.36346 8.72711 4.14526 8.72711 3.81803V3.27259C8.72711 2.94531 8.94531 2.72715 9.27254 2.72715H14.7271C15.0544 2.72715 15.2725 2.94536 15.2725 3.27259V3.81803C15.2725 4.14531 15.4907 4.36346 15.818 4.36346C16.1453 4.36346 16.3634 4.14526 16.3634 3.81803V3.27259C16.3635 2.34531 15.6544 1.63623 14.7272 1.63623Z" fill="black" />
                                                        </svg>

                                                        <span>|</span>
                                                        <input type="text" className="flex-1 outline-none placeholder:text-sm w-full" placeholder="Company Name" />
                                                    </div>
                                                </div>


                                            </div>


                                            <div>
                                                <label className="block mb-2 text-sm">Country of Incorporation*</label>
                                                <div className="seven0 flex iconGap items-center borderInput rounded p-2">
                                                    <i>
                                                        {countries.find((country) => country.code === selectedThirdCountry)?.flag}
                                                    </i>
                                                    <span>|</span>
                                                    <select
                                                        value={selectedThirdCountry}
                                                        onChange={(e) => setSelectedThirdCountry(e.target.value)}
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

                                            <div className="grid gap-1 mb-4 w-full overflow-x-hidden mt-4">
                                                <div className="w-full">
                                                    <label className="block mb-2 text-sm">Registration Number*</label>
                                                    <div className="flex iconGap items-center borderInput rounded p-2">
                                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M11.4365 0L11.7127 0.00231094C12.6828 0.0194593 13.1985 0.134254 13.7327 0.419965C14.2631 0.703647 14.683 1.12352 14.9667 1.65396C15.2654 2.21248 15.3773 2.75072 15.3861 3.8091L15.3867 10.7333C15.3867 11.0647 15.118 11.3333 14.7867 11.3333C14.4553 11.3333 14.1867 11.0647 14.1867 10.7333V3.95014C14.1867 2.97864 14.1145 2.60507 13.9085 2.21988C13.7367 1.89857 13.4881 1.64998 13.1668 1.47814C12.7983 1.2811 12.4405 1.20653 11.5599 1.20041L3.95014 1.2C2.97864 1.2 2.60507 1.27214 2.21988 1.47814C1.89857 1.64998 1.64998 1.89857 1.47814 2.21988L1.4274 2.3205C1.2681 2.6577 1.20597 3.02619 1.20041 3.82677L1.2 14.0499C1.2 15.0214 1.27214 15.3949 1.47814 15.7801C1.64998 16.1014 1.89857 16.35 2.21988 16.5219L2.3205 16.5726C2.67456 16.7399 3.06312 16.8 3.95014 16.8H8.17333C8.5047 16.8 8.77333 17.0686 8.77333 17.4C8.77333 17.7314 8.5047 18 8.17333 18H3.95014L3.67396 17.9977C2.70388 17.9805 2.1882 17.8657 1.65396 17.58C1.12352 17.2964 0.703647 16.8765 0.419965 16.346C0.10828 15.7632 0 15.2025 0 14.0499V3.95014L0.00231094 3.67396C0.0194593 2.70388 0.134254 2.1882 0.419965 1.65396C0.703647 1.12352 1.12352 0.703647 1.65396 0.419965C2.23676 0.10828 2.79748 0 3.95014 0H11.4365ZM17.0616 11.7337C17.3044 11.9591 17.3185 12.3388 17.093 12.5816L12.2397 17.8083C12.0083 18.0575 11.6162 18.0647 11.3757 17.8243L8.7624 15.2109C8.52809 14.9766 8.52809 14.5967 8.7624 14.3624C8.99672 14.1281 9.37662 14.1281 9.61093 14.3624L11.7835 16.5353L16.2137 11.7651C16.4391 11.5222 16.8188 11.5082 17.0616 11.7337ZM7.8 10C8.13137 10 8.4 10.2686 8.4 10.6C8.4 10.9314 8.13137 11.2 7.8 11.2H5C4.66863 11.2 4.4 10.9314 4.4 10.6C4.4 10.2686 4.66863 10 5 10H7.8ZM10.6 6C10.9314 6 11.2 6.26863 11.2 6.6C11.2 6.93137 10.9314 7.2 10.6 7.2H5C4.66863 7.2 4.4 6.93137 4.4 6.6C4.4 6.26863 4.66863 6 5 6H10.6Z" fill="black" />
                                                        </svg>

                                                        <span>|</span>
                                                        <input type="text" className="flex-1 outline-none w-full placeholder:text-sm" placeholder="Registration Number*" />
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="grid gap-1 mb-4 w-full overflow-x-hidden mt-4">
                                                <div className="w-full">
                                                    <label className="block mb-2 text-sm">Ownership Percentage*</label>
                                                    <div className="flex iconGap items-center borderInput rounded p-2">
                                                        <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M2.97755 1.97727C2.1295 1.97727 1.44202 2.66476 1.44202 3.51281C1.44202 4.36086 2.1295 5.04834 2.97755 5.04834C3.82564 5.04834 4.51312 4.36086 4.51312 3.51281C4.51312 2.66476 3.82564 1.97727 2.97755 1.97727ZM0 3.51281C0 1.86837 1.33311 0.535251 2.97755 0.535251C4.62203 0.535251 5.95514 1.86837 5.95514 3.51281C5.95514 5.15729 4.62203 6.49036 2.97755 6.49036C1.33311 6.49036 0 5.15729 0 3.51281ZM11.7994 0.732881C12.1244 0.962991 12.2013 1.41297 11.9712 1.73797L3.03177 14.3648C2.8017 14.69 2.35172 14.7668 2.02672 14.5368C1.70173 14.3068 1.62476 13.8568 1.85487 13.5317L10.7943 0.904733C11.0244 0.579738 11.4744 0.502807 11.7994 0.732881ZM10.9963 10.4868C10.1482 10.4868 9.46072 11.1743 9.46072 12.0222C9.46072 12.8705 10.1482 13.558 10.9963 13.558C11.8443 13.558 12.5318 12.8705 12.5318 12.0222C12.5318 11.1743 11.8443 10.4868 10.9963 10.4868ZM8.01871 12.0222C8.01871 10.3779 9.35178 9.04479 10.9963 9.04479C12.6407 9.04479 13.9738 10.3779 13.9738 12.0222C13.9738 13.6669 12.6407 15 10.9963 15C9.35178 15 8.01871 13.6669 8.01871 12.0222Z" fill="black" />
                                                        </svg>

                                                        <span>|</span>
                                                        <input type="text" className="flex-1 outline-none w-full placeholder:text-sm" placeholder="Ownership Percentage*" />
                                                    </div>


                                                </div>
                                            </div>

                                            <div className="flex gap-2">
                                                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect x="0.25" y="0.25" width="24.5" height="24.5" rx="12.25" fill="#D9D9D9" stroke="white" strokeWidth="0.5" />
                                                    <path d="M13.4647 7.43443L13.2887 15.4344H12.0727L11.8967 7.43443H13.4647ZM12.7447 18.6824C12.4674 18.6824 12.2327 18.5864 12.0407 18.3944C11.8487 18.2024 11.7527 17.9678 11.7527 17.6904C11.7527 17.4131 11.8487 17.1784 12.0407 16.9864C12.2327 16.7944 12.4674 16.6984 12.7447 16.6984C13.0114 16.6984 13.2354 16.7944 13.4167 16.9864C13.6087 17.1784 13.7047 17.4131 13.7047 17.6904C13.7047 17.9678 13.6087 18.2024 13.4167 18.3944C13.2354 18.5864 13.0114 18.6824 12.7447 18.6824Z" fill="black" />
                                                </svg>

                                                <p className='greyColor'>Minimum Ownership percentage is 25%</p>

                                            </div>


                                            <h2 className="bold mt-9 text-start text-xl md:text-3xl">
                                                Authorized Representative Details
                                            </h2>




                                            <div className="grid gap-1 mb-4 w-full overflow-x-hidden mt-4">
                                                <div className="w-full">
                                                    <label className="block mb-2 text-sm">Full Name</label>
                                                    <div className="flex iconGap items-center borderInput rounded p-2">
                                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <g clipPath="url(#clip0_3759_9345)">
                                                                <path d="M9 9C9.89002 9 10.76 8.73608 11.5001 8.24162C12.2401 7.74715 12.8169 7.04434 13.1575 6.22208C13.4981 5.39981 13.5872 4.49501 13.4135 3.6221C13.2399 2.74918 12.8113 1.94736 12.182 1.31802C11.5526 0.688685 10.7508 0.260102 9.87791 0.0864683C9.00499 -0.0871652 8.10019 0.00194979 7.27792 0.342544C6.45566 0.683138 5.75285 1.25991 5.25839 1.99994C4.76392 2.73996 4.5 3.60999 4.5 4.5C4.50119 5.69311 4.97568 6.83701 5.81934 7.68067C6.66299 8.52432 7.80689 8.99881 9 9ZM9 1.5C9.59334 1.5 10.1734 1.67595 10.6667 2.00559C11.1601 2.33524 11.5446 2.80377 11.7716 3.35195C11.9987 3.90013 12.0581 4.50333 11.9424 5.08527C11.8266 5.66722 11.5409 6.20177 11.1213 6.62132C10.7018 7.04088 10.1672 7.3266 9.58527 7.44236C9.00333 7.55811 8.40013 7.4987 7.85195 7.27164C7.30377 7.04458 6.83524 6.66006 6.50559 6.16671C6.17595 5.67337 6 5.09335 6 4.5C6 3.70435 6.31607 2.94129 6.87868 2.37868C7.44129 1.81607 8.20435 1.5 9 1.5Z" fill="#374957" />
                                                                <path d="M9 10.5005C7.2104 10.5025 5.49466 11.2143 4.22922 12.4797C2.96378 13.7452 2.25199 15.4609 2.25 17.2505C2.25 17.4494 2.32902 17.6402 2.46967 17.7808C2.61032 17.9215 2.80109 18.0005 3 18.0005C3.19891 18.0005 3.38968 17.9215 3.53033 17.7808C3.67098 17.6402 3.75 17.4494 3.75 17.2505C3.75 15.8581 4.30312 14.5227 5.28769 13.5382C6.27226 12.5536 7.60761 12.0005 9 12.0005C10.3924 12.0005 11.7277 12.5536 12.7123 13.5382C13.6969 14.5227 14.25 15.8581 14.25 17.2505C14.25 17.4494 14.329 17.6402 14.4697 17.7808C14.6103 17.9215 14.8011 18.0005 15 18.0005C15.1989 18.0005 15.3897 17.9215 15.5303 17.7808C15.671 17.6402 15.75 17.4494 15.75 17.2505C15.748 15.4609 15.0362 13.7452 13.7708 12.4797C12.5053 11.2143 10.7896 10.5025 9 10.5005Z" fill="#374957" />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_3759_9345">
                                                                    <rect width="18" height="18" fill="white" />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>


                                                        <span>|</span>
                                                        <input type="text" className="flex-1 outline-none w-full placeholder:text-sm" placeholder="John Smith" />
                                                    </div>



                                                    <div className="grid gap-1 mb-4 w-full overflow-x-hidden mt-4">
                                                        <div className="w-full">
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
                                                    </div>



                                                    <div className="grid gap-1 mb-4 w-full overflow-x-hidden mt-4">
                                                        <div>
                                                            <label className="block mb-2 text-sm">Date of Birth*</label>
                                                            <div className="d-flex mail">
                                                                <div
                                                                    className="iconGap flex items-center borderInput rounded p-2 cursor-pointer"
                                                                    style={{ width: "100%" }}
                                                                    onClick={() => setIsModalOpen2(true)} // فتح المودال عند الضغط على الأيقونة
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


                                                        {isModalOpen2 && (
                                                            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                                                                <div className="bg-white rounded-lg shadow-lg p-4 ">
                                                                    <Calender
                                                                        onDateSelect={handleDateChange} // تمرير الدالة لتحديث التاريخ
                                                                    />
                                                                    <button
                                                                        className="mt-4 bg-gray-300 text-gray-700 py-2 px-4 rounded"
                                                                        onClick={() => setIsModalOpen2(false)}
                                                                    >
                                                                        Close
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>




                                                    <div className="grid gap-1 mb-4 w-full overflow-x-hidden mt-4">
                                                        <div className="w-full">
                                                            <label className="block mb-2 text-sm">Residence address</label>
                                                            <div className="flex iconGap items-center borderInput rounded p-2">
                                                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path fillRule="evenodd" clipRule="evenodd" d="M5.53188 3.64437C6.49162 2.71478 7.64764 2.25 9 2.25C10.3524 2.25 11.5029 2.7095 12.4518 3.62852C13.4006 4.54754 13.875 5.66197 13.875 6.97183C13.875 7.62676 13.706 8.37676 13.3679 9.22183C13.0298 10.0669 12.6208 10.8592 12.1409 11.5986C11.6611 12.338 11.1867 13.0299 10.7177 13.6743C10.2487 14.3187 9.85067 14.831 9.52349 15.2113L9 15.75C8.86913 15.6021 8.69463 15.4067 8.47651 15.1637C8.25839 14.9208 7.86577 14.4349 7.29866 13.706C6.73154 12.9771 6.23532 12.2694 5.80998 11.5827C5.38465 10.8961 4.99748 10.1197 4.64849 9.25352C4.29949 8.38732 4.125 7.62676 4.125 6.97183C4.125 5.66197 4.59396 4.55282 5.53188 3.64437Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                                    <path d="M9.75 7.125C9.75 7.53921 9.41421 7.875 9 7.875C8.58579 7.875 8.25 7.53921 8.25 7.125C8.25 6.71079 8.58579 6.375 9 6.375C9.41421 6.375 9.75 6.71079 9.75 7.125Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                                </svg>
                                                                <span>|</span>
                                                                <input type="text" className="flex-1 outline-none w-full placeholder:text-sm" placeholder="Residence address" />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="w-100 text-center mt-2 md:flex">
                                                        <button className="singleBtn redBg whiteColor flex items-center justify-center gap-2 mx-auto">
                                                            <i>
                                                                <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <g clipPath="url(#clip0_2795_56993)">
                                                                        <path d="M18.4338 4.17519C18.3405 3.80938 18.0807 3.50414 17.7401 3.34769L17.8006 3.20894C17.8813 3.02224 17.8839 2.81539 17.8057 2.62619C17.7502 2.48743 17.6568 2.37139 17.5383 2.28812L17.8561 1.5338C17.8561 1.5338 17.8561 1.5338 17.8561 1.53128C18.0882 0.973758 17.8233 0.325372 17.2683 0.0882693C16.7133 -0.148883 16.0624 0.108471 15.8202 0.660923V0.663436V0.665949L15.5048 1.40766C15.1668 1.34961 14.8187 1.52877 14.6773 1.85925L9.22064 14.5843C9.1929 14.6473 9.18279 14.7154 9.18782 14.7836L9.31396 16.5041C9.06927 16.1736 8.81443 15.8406 8.51426 15.5505C8.11312 15.1644 7.49253 14.6725 6.74328 14.8441C6.2059 14.9677 5.84517 15.4495 5.52475 15.8759C5.42384 16.0096 5.32795 16.1383 5.23966 16.2341C4.70987 16.8118 4.32135 16.7664 4.07158 16.6832C3.85212 16.6075 3.62758 16.4814 3.41566 16.3174C3.75624 16.0777 4.08922 15.828 4.41216 15.5631C4.71992 15.3108 5.07311 14.998 5.35318 14.6019C5.53988 14.337 5.75431 13.9813 5.74924 13.5726C5.74673 13.1664 5.555 12.7552 5.23966 12.4752C4.667 11.9681 3.93791 11.8697 3.18861 12.1951C2.37122 12.5483 1.79605 13.3027 1.69006 14.1629C1.60679 14.8365 1.8364 15.5782 2.32076 16.2064C1.78339 16.5571 1.23596 16.8926 0.696073 17.2205C0.529579 17.3214 0.476611 17.5384 0.577522 17.7049C0.678434 17.8714 0.895384 17.9243 1.06188 17.8234C1.64212 17.4702 2.22995 17.112 2.80763 16.731C3.128 17.0136 3.48376 17.228 3.84197 17.3516C4.51554 17.5812 5.16141 17.3642 5.75929 16.7108C5.8703 16.5897 5.97624 16.4485 6.08725 16.3022C6.33451 15.9742 6.61453 15.6008 6.89957 15.5352C7.21995 15.4621 7.5656 15.6235 8.0197 16.0625C8.32495 16.3551 8.5823 16.7083 8.85725 17.0817C9.05148 17.3491 9.25587 17.6241 9.47784 17.8789C9.5485 17.9596 9.64434 18 9.74273 18C9.81083 18 9.87646 17.9798 9.93697 17.942C9.98994 17.9268 10.0404 17.8991 10.0858 17.8638L12.2529 16.1003L12.2554 16.0978C12.2655 16.0902 12.2756 16.0802 12.2832 16.0726C12.2832 16.0726 12.2832 16.0726 12.2857 16.0701C12.2958 16.06 12.3033 16.0499 12.3134 16.0398C12.3159 16.0373 12.3184 16.0348 12.3184 16.0322C12.3235 16.0247 12.3285 16.0171 12.3361 16.0095C12.3386 16.0045 12.3411 16.0019 12.3437 15.9969C12.3487 15.9893 12.3513 15.9818 12.3563 15.9742C12.3588 15.9692 12.3613 15.9666 12.3639 15.9616C12.3689 15.9515 12.374 15.9414 12.379 15.9313V15.9288V15.9263L17.4651 3.99608C17.6063 4.06674 17.7123 4.1979 17.7527 4.35178C17.7956 4.51576 17.7577 4.69236 17.6543 4.82609C17.6518 4.8286 17.6493 4.83111 17.6493 4.83367C17.6468 4.83619 17.6442 4.8387 17.6417 4.84126C17.0135 5.74947 16.6401 6.5744 16.4711 7.43722C16.403 7.78282 16.3652 8.15119 16.35 8.5977C16.345 8.79194 16.4963 8.95592 16.6906 8.961C16.6956 8.961 16.6981 8.961 16.7032 8.961C16.8924 8.961 17.0488 8.80963 17.0564 8.61791C17.069 8.20923 17.1043 7.8762 17.1649 7.57095C17.3137 6.80652 17.6518 6.06738 18.2219 5.23988C18.449 4.94212 18.5297 4.54355 18.4338 4.17519ZM2.38639 14.2512C2.46207 13.6382 2.87582 13.0983 3.46616 12.8435C3.62512 12.7754 3.82187 12.7173 4.03128 12.7173C4.27094 12.7173 4.52574 12.7905 4.77048 13.0075C4.93697 13.1538 5.04039 13.3733 5.04296 13.5801C5.04547 13.7895 4.90169 14.0191 4.77555 14.1982C4.54347 14.5262 4.23566 14.7961 3.96323 15.0206C3.62266 15.2981 3.26947 15.563 2.90617 15.8153C2.51002 15.3209 2.32332 14.7533 2.38639 14.2512ZM10.1818 16.6756L10.1061 15.6438C10.3786 15.8128 10.6763 15.9415 10.9866 16.0222L10.1818 16.6756ZM11.6652 15.4142C11.0749 15.384 10.5123 15.1443 10.0835 14.7381L13.5397 6.67777L15.1013 7.34631L11.6652 15.4142ZM15.3788 6.70054L13.8171 6.032L15.4241 2.28566L16.9731 2.95922L15.3788 6.70054ZM17.0665 1.20086L16.7613 1.92744L16.2996 1.72562L16.6073 1.0016C16.6603 0.877971 16.8066 0.819977 16.9328 0.875458C17.0589 0.928378 17.117 1.07472 17.0665 1.20086Z" fill="white" />
                                                                    </g>
                                                                    <defs>
                                                                        <clipPath id="clip0_2795_56993">
                                                                            <rect width="18" height="18" fill="white" transform="translate(0.5)" />
                                                                        </clipPath>
                                                                    </defs>
                                                                </svg>

                                                            </i>
                                                            <span>|</span>
                                                            <div>
                                                                Single
                                                            </div>
                                                        </button>
                                                        <button className="jointBtn  flex items-center justify-center gap-2 mx-auto">
                                                            <i>
                                                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <g clipPath="url(#clip0_2795_57000)">
                                                                        <path d="M17.9338 4.17519C17.8405 3.80938 17.5807 3.50414 17.2401 3.34769L17.3006 3.20894C17.3813 3.02224 17.3839 2.81539 17.3057 2.62619C17.2502 2.48743 17.1568 2.37139 17.0383 2.28812L17.3561 1.5338C17.3561 1.5338 17.3561 1.5338 17.3561 1.53128C17.5882 0.973758 17.3233 0.325372 16.7683 0.0882693C16.2133 -0.148883 15.5624 0.108471 15.3202 0.660923V0.663436V0.665949L15.0048 1.40766C14.6668 1.34961 14.3187 1.52877 14.1773 1.85925L8.72064 14.5843C8.6929 14.6473 8.68279 14.7154 8.68782 14.7836L8.81396 16.5041C8.56927 16.1736 8.31443 15.8406 8.01426 15.5505C7.61312 15.1644 6.99253 14.6725 6.24328 14.8441C5.7059 14.9677 5.34517 15.4495 5.02475 15.8759C4.92384 16.0096 4.82795 16.1383 4.73966 16.2341C4.20987 16.8118 3.82135 16.7664 3.57158 16.6832C3.35212 16.6075 3.12758 16.4814 2.91566 16.3174C3.25624 16.0777 3.58922 15.828 3.91216 15.5631C4.21992 15.3108 4.57311 14.998 4.85318 14.6019C5.03988 14.337 5.25431 13.9813 5.24924 13.5726C5.24673 13.1664 5.055 12.7552 4.73966 12.4752C4.167 11.9681 3.43791 11.8697 2.68861 12.1951C1.87122 12.5483 1.29605 13.3027 1.19006 14.1629C1.10679 14.8365 1.3364 15.5782 1.82076 16.2064C1.28339 16.5571 0.73596 16.8926 0.196073 17.2205C0.0295793 17.3214 -0.0233894 17.5384 0.0775221 17.7049C0.178434 17.8714 0.395384 17.9243 0.561878 17.8234C1.14212 17.4702 1.72995 17.112 2.30763 16.731C2.628 17.0136 2.98376 17.228 3.34197 17.3516C4.01554 17.5812 4.66141 17.3642 5.25929 16.7108C5.3703 16.5897 5.47624 16.4485 5.58725 16.3022C5.83451 15.9742 6.11453 15.6008 6.39957 15.5352C6.71995 15.4621 7.0656 15.6235 7.5197 16.0625C7.82495 16.3551 8.0823 16.7083 8.35725 17.0817C8.55148 17.3491 8.75587 17.6241 8.97784 17.8789C9.0485 17.9596 9.14434 18 9.24273 18C9.31083 18 9.37646 17.9798 9.43697 17.942C9.48994 17.9268 9.54039 17.8991 9.58582 17.8638L11.7529 16.1003L11.7554 16.0978C11.7655 16.0902 11.7756 16.0802 11.7832 16.0726C11.7832 16.0726 11.7832 16.0726 11.7857 16.0701C11.7958 16.06 11.8033 16.0499 11.8134 16.0398C11.8159 16.0373 11.8184 16.0348 11.8184 16.0322C11.8235 16.0247 11.8285 16.0171 11.8361 16.0095C11.8386 16.0045 11.8411 16.0019 11.8437 15.9969C11.8487 15.9893 11.8513 15.9818 11.8563 15.9742C11.8588 15.9692 11.8613 15.9666 11.8639 15.9616C11.8689 15.9515 11.874 15.9414 11.879 15.9313V15.9288V15.9263L16.9651 3.99608C17.1063 4.06674 17.2123 4.1979 17.2527 4.35178C17.2956 4.51576 17.2577 4.69236 17.1543 4.82609C17.1518 4.8286 17.1493 4.83111 17.1493 4.83367C17.1468 4.83619 17.1442 4.8387 17.1417 4.84126C16.5135 5.74947 16.1401 6.5744 15.9711 7.43722C15.903 7.78282 15.8652 8.15119 15.85 8.5977C15.845 8.79194 15.9963 8.95592 16.1906 8.961C16.1956 8.961 16.1981 8.961 16.2032 8.961C16.3924 8.961 16.5488 8.80963 16.5564 8.61791C16.569 8.20923 16.6043 7.8762 16.6649 7.57095C16.8137 6.80652 17.1518 6.06738 17.7219 5.23988C17.949 4.94212 18.0297 4.54355 17.9338 4.17519ZM1.88639 14.2512C1.96207 13.6382 2.37582 13.0983 2.96616 12.8435C3.12512 12.7754 3.32187 12.7173 3.53128 12.7173C3.77094 12.7173 4.02574 12.7905 4.27048 13.0075C4.43697 13.1538 4.54039 13.3733 4.54296 13.5801C4.54547 13.7895 4.40169 14.0191 4.27555 14.1982C4.04347 14.5262 3.73566 14.7961 3.46323 15.0206C3.12266 15.2981 2.76947 15.563 2.40617 15.8153C2.01002 15.3209 1.82332 14.7533 1.88639 14.2512ZM9.68181 16.6756L9.60612 15.6438C9.87861 15.8128 10.1763 15.9415 10.4866 16.0222L9.68181 16.6756ZM11.1652 15.4142C10.5749 15.384 10.0123 15.1443 9.58346 14.7381L13.0397 6.67777L14.6013 7.34631L11.1652 15.4142ZM14.8788 6.70054L13.3171 6.032L14.9241 2.28566L16.4731 2.95922L14.8788 6.70054ZM16.5665 1.20086L16.2613 1.92744L15.7996 1.72562L16.1073 1.0016C16.1603 0.877971 16.3066 0.819977 16.4328 0.875458C16.5589 0.928378 16.617 1.07472 16.5665 1.20086Z" fill="#656565" />
                                                                    </g>
                                                                    <defs>
                                                                        <clipPath id="clip0_2795_57000">
                                                                            <rect width="18" height="18" fill="white" />
                                                                        </clipPath>
                                                                    </defs>
                                                                </svg>

                                                            </i>
                                                            <span>|</span>
                                                            <div>
                                                                Joint
                                                            </div>
                                                        </button>
                                                    </div>



                                                </div>
                                            </div>






                                        </div>
                                    )}
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

                            <div className='mt-10 text-2xl font-bold mb-6 text-center'><h2>Beneficial Owner(s)</h2></div>



                            <div className=" md:flex items-center justify-between p-4 bg-gray-100 rounded-lg shadow-md">
                                <div>
                                    <p className="text-gray-700">John Smith</p>
                                    <p className="text-gray-500">United Kingdom</p>
                                    <p className="text-gray-500">26%</p>
                                </div>
                                <div className="flex md:flex-row flex-col md:space-x-2 space-y-2 md:space-y-0 mt-1">
                                    <button className="flex items-center px-4 py-2 border border-red-500 text-red-500 rounded-lg place-content-center md:w-auto">
                                        <span>DELETE</span>
                                        <i className="fas fa-trash-alt ml-2"></i>
                                    </button>
                                    <button className="flex items-center px-4 py-2 border border-red-500 text-red-500 rounded-lg place-content-center md:w-auto">
                                        <span>EDIT</span>
                                        <i className="fas fa-pen ml-2"></i>
                                    </button>
                                </div>
                            </div>


                        </div>

                        <div className="flex justify-center gap-2">

                            <Link to="/business1" className='saveNext'>
                                <button className="backBtn   redClr font-semibold px-4 py-2 rounded-lg hover:bg-red-600">Back</button>
                            </Link>
                            <Link to="/business3" className='saveNext'>
                                <button className=" redBtn redBg text-white font-semibold px-4 py-2 rounded-lg hover:bg-red-600">Save & Next</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Business2;