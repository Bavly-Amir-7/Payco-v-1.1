import Aside from '../../aside/aside';
import { Link } from 'react-router-dom';
import "./verfi2.css";
import Calender from '../../calender/calender';
import React, { useState, useEffect } from 'react';


export default function AccountVerification2() {
    const [selectedAccount, setSelectedAccount] = useState('');
    const [activeLink, setActiveLink] = useState('overview');
    const [isPhoneVerfiVisible, setIsPhoneVerfiVisible] = useState(false);
    const [randomNumbers, setRandomNumbers] = useState([]);
    const [phoneCode, setPhoneCode] = useState('');


    const handleNavigation = (accountType) => {
        setSelectedAccount(accountType);
        console.log(`Selected account type: ${accountType}`);
    };

    const handleSave = () => {
        // Generate random numbers
        const numbers = Array.from({ length: 4 }, () => Math.floor(Math.random() * 10));
        setRandomNumbers(numbers);
        setIsPhoneVerfiVisible(true);
    };

    const handleClose = () => {
        setIsPhoneVerfiVisible(false);
    };


    const [isModalOpen, setIsModalOpen] = useState(false); // حالة لفتح وغلق المودال
    const [dateOfBirth, setDateOfBirth] = useState("1 / 31 / 1998"); // لتحديث التاريخ

    const handleDateChange = (newDate) => {
        setDateOfBirth(newDate); // تحديث التاريخ بعد اختياره من Calender
        setIsModalOpen(false); // إغلاق المودال
    };
    const [selectedCountry, setSelectedCountry] = useState('GB'); // Default to UK
    const [selectedPhoneCountry, setSelectedPhoneCountry] = useState('GB');

    const [countryCodes, setCountryCodes] = useState({});

    const [countries, setCountries] = useState([]);

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



    const handlePhoneCountryChange = (event) => {
        setSelectedPhoneCountry(event.target.value);
    };

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


    useEffect(() => {
        if (selectedPhoneCountry && countryCodes[selectedPhoneCountry]) {
            setPhoneCode(countryCodes[selectedPhoneCountry]); // ❌ خطأ: setPhoneCode غير معرّفة
        }
    }, [selectedPhoneCountry, countryCodes]);



    return (
        <>
            <div className="container-fluid">

                <div className="row">
                    <div className="asideComponent col-lg-3 col-md-2 " style={{ height: "100%" }}>
                        <Aside />
                    </div>

                    <div className="col-12 col-lg-9 col-md-12 " style={{ placeItems: "center" }}>
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
                                    </i> </div>
                                <div className="w-10 h-10 whiteColor redBg rounded-full flex items-center justify-center">2</div>
                                <div className="w-10 h-10 greyColor whiteBg rounded-full flex items-center justify-center">3</div>
                                <div className="w-10 h-10 greyColor whiteBg rounded-full flex items-center justify-center">4</div>
                            </div>
                        </div>
                        <div className="flex justify-between mb-6 w-100">
                            <p className="text-center flex-1">Account Type</p>
                            <p className="text-center flex-1">Personal Details</p>
                            <p className="text-center flex-1">Identity Verification</p>
                            <p className="text-center flex-1">Review and Additional <br /> Documents</p>
                        </div>
                        <div className='rightSection'>
                            <div className="bg-white p-8 rounded-lg shadow-md sm:flex flex-col">
                                <h2 className="text-2xl font-bold mb-6 text-center">Personal Details</h2>
                                <div  >
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

                                    <div className="grid  gap-1 ">
                                        <div>
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
                                    <div className="w-full  grid gap-1 mb-4">
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
                                                <input type="text" className="flex-1 outline-none placeholder:text-sm w-full" placeholder="Changable" />
                                            </div>
                                            <button className="verfBtn bg-gray-200 text-gray-700 px-4 py-2 rounded ml-2">Verify</button>
                                        </div>
                                        <p className='text-center text-sm'>Tap “Verify” to receive a code. Enter it below to confirm your phone number.</p>
                                    </div>


                                    <div className="w-full grid gap-1 mb-4">
                                        <label className="block mb-2 text-sm">Phone Number*</label>
                                        <div className="phone-input-container w-100 ">
                                            {/* Country Selector */}
                                            <div className="phone-input-item flex items-center borderInput rounded p-2">
                                                <i>{countries.length > 0 ? countries.find(country => country.code === selectedCountry)?.flag : ''}</i>
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
                                    </div>



                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                        <div className="w-full">
                                            <label className="block mb-2 text-sm">Address Line One*</label>
                                            <div className="flex iconGap items-center borderInput rounded p-2">
                                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M5.53188 3.64437C6.49162 2.71478 7.64764 2.25 9 2.25C10.3524 2.25 11.5029 2.7095 12.4518 3.62852C13.4006 4.54754 13.875 5.66197 13.875 6.97183C13.875 7.62676 13.706 8.37676 13.3679 9.22183C13.0298 10.0669 12.6208 10.8592 12.1409 11.5986C11.6611 12.338 11.1867 13.0299 10.7177 13.6743C10.2487 14.3187 9.85067 14.831 9.52349 15.2113L9 15.75C8.86913 15.6021 8.69463 15.4067 8.47651 15.1637C8.25839 14.9208 7.86577 14.4349 7.29866 13.706C6.73154 12.9771 6.23532 12.2694 5.80998 11.5827C5.38465 10.8961 4.99748 10.1197 4.64849 9.25352C4.29949 8.38732 4.125 7.62676 4.125 6.97183C4.125 5.66197 4.59396 4.55282 5.53188 3.64437Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M9.75 7.125C9.75 7.53921 9.41421 7.875 9 7.875C8.58579 7.875 8.25 7.53921 8.25 7.125C8.25 6.71079 8.58579 6.375 9 6.375C9.41421 6.375 9.75 6.71079 9.75 7.125Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                <span>|</span>
                                                <input type="text" className="flex-1 outline-none w-full placeholder:text-sm" placeholder="Changable" />
                                            </div>
                                        </div>

                                        <div className="w-full">
                                            <label className="block mb-2 text-sm whitespace-nowrap">Address Line Two (Optional)</label>
                                            <div className="flex iconGap items-center borderInput rounded p-2">
                                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M5.53188 3.64437C6.49162 2.71478 7.64764 2.25 9 2.25C10.3524 2.25 11.5029 2.7095 12.4518 3.62852C13.4006 4.54754 13.875 5.66197 13.875 6.97183C13.875 7.62676 13.706 8.37676 13.3679 9.22183C13.0298 10.0669 12.6208 10.8592 12.1409 11.5986C11.6611 12.338 11.1867 13.0299 10.7177 13.6743C10.2487 14.3187 9.85067 14.831 9.52349 15.2113L9 15.75C8.86913 15.6021 8.69463 15.4067 8.47651 15.1637C8.25839 14.9208 7.86577 14.4349 7.29866 13.706C6.73154 12.9771 6.23532 12.2694 5.80998 11.5827C5.38465 10.8961 4.99748 10.1197 4.64849 9.25352C4.29949 8.38732 4.125 7.62676 4.125 6.97183C4.125 5.66197 4.59396 4.55282 5.53188 3.64437Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M9.75 7.125C9.75 7.53921 9.41421 7.875 9 7.875C8.58579 7.875 8.25 7.53921 8.25 7.125C8.25 6.71079 8.58579 6.375 9 6.375C9.41421 6.375 9.75 6.71079 9.75 7.125Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                <span>|</span>
                                                <input type="text" className="flex-1 outline-none placeholder:text-sm w-full" placeholder="Changable" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                                        {/* Country Selector */}
                                        <div>
                                            <label className="block mb-2 text-sm">Country*</label>
                                            <div className="flex iconGap items-center borderInput rounded p-2">
                                                <i>
                                                    {countries.find((country) => country.code === selectedFirstCountry)?.flag}
                                                </i>
                                                <span>|</span>
                                                <select
                                                    value={selectedFirstCountry}
                                                    onChange={handleFirstCountryChange} // استخدم الدالة الجديدة
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


                                        <div className="w-full">
                                            <label className="block mb-2 text-sm">City/Town*</label>
                                            <div className="flex iconGap items-center borderInput rounded p-2">
                                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M8.04283 4.85915C9.32248 3.61971 10.8639 3 12.667 3C14.4701 3 16.0042 3.61267 17.2693 4.83803C18.5344 6.06339 19.167 7.54929 19.167 9.29577C19.167 10.169 18.9416 11.169 18.4908 12.2958C18.04 13.4225 17.4947 14.4789 16.8549 15.4648C16.2151 16.4507 15.5825 17.3732 14.9573 18.2324C14.332 19.0916 13.8012 19.7746 13.365 20.2817L12.667 21C12.4925 20.8028 12.2598 20.5423 11.969 20.2183C11.6782 19.8944 11.1547 19.2465 10.3985 18.2746C9.64238 17.3028 8.98075 16.3592 8.41364 15.4437C7.84652 14.5282 7.33031 13.493 6.86498 12.338C6.39965 11.1831 6.16699 10.169 6.16699 9.29577C6.16699 7.54929 6.79227 6.07043 8.04283 4.85915Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M13.667 9.5C13.667 10.0523 13.2193 10.5 12.667 10.5C12.1147 10.5 11.667 10.0523 11.667 9.5C11.667 8.94772 12.1147 8.5 12.667 8.5C13.2193 8.5 13.667 8.94772 13.667 9.5Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                <span>|</span>
                                                <input type="text" className="flex-1 outline-none placeholder:text-sm w-full" placeholder="London" />
                                            </div>
                                        </div>

                                        <div className="w-full">
                                            <label className="block mb-2 text-sm whitespace-nowrap">Postal Code*</label>
                                            <div className="flex iconGap items-center borderInput rounded p-2">
                                                <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M17.5149 4.50022H15.0292L15.8498 1.13335C15.9668 0.653641 15.7083 0.159594 15.2714 0.0308912C14.8346 -0.0978115 14.3853 0.187444 14.2692 0.667154L13.3357 4.50022H7.52483L8.34551 1.13335C8.46251 0.653641 8.20393 0.159594 7.76708 0.0308912C7.33007 -0.0968227 6.88183 0.187444 6.76557 0.667154L5.83118 4.50022H2.78756C2.33587 4.50022 1.96943 4.90248 1.96943 5.40015C1.96943 5.89799 2.33587 6.30025 2.78756 6.30025H5.39178L4.07536 11.7002H1.15114C0.699603 11.7002 0.333008 12.1024 0.333008 12.6001C0.333008 13.0978 0.699603 13.5 1.15114 13.5H3.63686L2.81617 16.8669C2.69917 17.3466 2.95775 17.8406 3.39461 17.9693C3.46502 17.9901 3.53618 18 3.60569 18C3.9666 18 4.29798 17.7353 4.39536 17.3331L5.3305 13.5H11.1412L10.3205 16.8669C10.2037 17.3466 10.4621 17.8406 10.8991 17.9693C10.9694 17.9901 11.0405 18 11.1109 18C11.4718 18 11.8031 17.7353 11.9004 17.3331L12.8348 13.5H15.8785C16.3301 13.5 16.6967 13.0978 16.6967 12.6001C16.6967 12.1024 16.3301 11.7002 15.8785 11.7002H13.2742L14.5907 6.30025H17.5149C17.9666 6.30025 18.333 5.89799 18.333 5.40015C18.333 4.90248 17.9666 4.50022 17.5149 4.50022ZM11.5797 11.7002H5.76901L7.08542 6.30025H12.8963L11.5797 11.7002Z" fill="black" />
                                                </svg>
                                                <span>|</span>
                                                <input type="text" className="flex-1 outline-none placeholder:text-sm w-full" placeholder="Changable" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                        {/* Nationality Selector */}
                                        <div>
                                            <label className="block mb-2 text-sm">Nationality*</label>
                                            <div className="flex iconGap items-center borderInput rounded p-2">
                                                <i>
                                                    {countries.find((country) => country.code === selectedSecondCountry)?.flag}
                                                </i>
                                                <span>|</span>
                                                <select
                                                    value={selectedSecondCountry}
                                                    onChange={handleSecondCountryChange} // استخدم الدالة الجديدة
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


                                        {/* Second Nationality */}
                                        <div>
                                            <label className="block mb-2 text-sm">Second Nationality if available*</label>
                                            <div className="flex iconGap items-center borderInput rounded p-2">
                                                <i>
                                                    {countries.find((country) => country.code === selectedThirdCountry)?.flag}
                                                </i>
                                                <span>|</span>
                                                <select
                                                    value={selectedThirdCountry}
                                                    onChange={handleThirdCountryChange} // استخدم الدالة الجديدة
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

                                    </div>

                                    <div className="grid  gap-4 mb-4">
                                        <div>
                                            <label className="block mb-2 text-sm">Social security number (Only for US People)</label>
                                            <div className="flex iconGap items-center borderInput rounded p-2">
                                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M17.1819 4.50022H14.6962L15.5168 1.13335C15.6338 0.653641 15.3753 0.159594 14.9384 0.0308912C14.5015 -0.0978115 14.0523 0.187444 13.9361 0.667154L13.0027 4.50022H7.19182L8.0125 1.13335C8.12951 0.653641 7.87093 0.159594 7.43407 0.0308912C6.99706 -0.0968227 6.54882 0.187444 6.43256 0.667154L5.49817 4.50022H2.45455C2.00286 4.50022 1.63642 4.90248 1.63642 5.40015C1.63642 5.89799 2.00286 6.30025 2.45455 6.30025H5.05877L3.74235 11.7002H0.818134C0.366595 11.7002 0 12.1024 0 12.6001C0 13.0978 0.366595 13.5 0.818134 13.5H3.30385L2.48317 16.8669C2.36616 17.3466 2.62474 17.8406 3.0616 17.9693C3.13201 17.9901 3.20317 18 3.27269 18C3.63359 18 3.96498 17.7353 4.06236 17.3331L4.99749 13.5H10.8082L9.9875 16.8669C9.87064 17.3466 10.1291 17.8406 10.5661 17.9693C10.6363 17.9901 10.7075 18 10.7779 18C11.1388 18 11.4701 17.7353 11.5674 17.3331L12.5018 13.5H15.5454C15.9971 13.5 16.3637 13.0978 16.3637 12.6001C16.3637 12.1024 15.9971 11.7002 15.5454 11.7002H12.9412L14.2576 6.30025H17.1819C17.6336 6.30025 18 5.89799 18 5.40015C18 4.90248 17.6336 4.50022 17.1819 4.50022ZM11.2467 11.7002H5.436L6.75242 6.30025H12.5633L11.2467 11.7002Z" fill="black" />
                                                </svg>
                                                <span>|</span>

                                                <input type="number" className="flex-1 outline-none placeholder:text-sm" placeholder="123456" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="flex justify-center">
                                <button className="save greyBtn greyBg bg-gray-700 text-white font-semibold px-4 py-2 rounded-lg hover:bg-red-600" onClick={handleSave}>Save & Next</button>
                            </div>
                            {isPhoneVerfiVisible && (
                                <div className="phoneNumberVerfi fixed inset-0 flex items-center justify-center">
                                    <div className="phoneMsg p-6 rounded-lg shadow-lg relative w-96 bg-white">
                                        <button className="closeBtn absolute top-2 right-2 rounded-md p-2 " onClick={handleClose}>
                                            <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M16.5669 1.82617L2.27568 18.1298" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                                <path d="M1.08691 1.82617L15.3781 18.1298" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                            </svg>
                                        </button>
                                        <br />
                                        <br />
                                        <div className="nums flex space-x-2 justify-center ">
                                            {randomNumbers.map((num, index) => (
                                                <div key={index} className="numBg w-16 h-16 flex items-center justify-center bg-white borderInput borderInput-gray-300 rounded-md" style={{ placeContent: "center" }}>
                                                    <span className="font-bold nums">{num}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <p className="text-center text-gray-700">Enter The Code Sent To Your Phone To <br /> Verify Your Number</p>
                                        <div className='text-center'>
                                            <Link to="/verfi3">
                                                <button className="w-full redBtn redBg text-white py-2 rounded-md">Verify</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
