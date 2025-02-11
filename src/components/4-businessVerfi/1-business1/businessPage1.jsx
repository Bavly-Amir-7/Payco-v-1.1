import React, { useState, useEffect } from 'react';
import "./business1.css";

import { Link } from 'react-router-dom';
import Aside from '../../aside/aside';
import selectedImage from "../../images/Group 138.png"
import Calender from '../../calender/calender';

export default function Business1() {

    const [isModalOpen, setIsModalOpen] = useState(false); 
    const [dateOfBirth, setDateOfBirth] = useState("1 / 31 / 1998"); 

    const handleDateChange = (newDate) => {
        setDateOfBirth(newDate); 
        setIsModalOpen(false);
    };







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


    const handleDeleteCountry = (code) => {
        setCountries(countries.filter(country => country.code !== code));
    };

    return (
        <>
            <div className="container-fluid">
                <div className="row" style={{ height: "100vh" }}>
                    {/* Sidebar */}
                    <div className="asideComponent col-lg-3 col-md-2 d-none d-md-block">
                        <Aside />
                    </div>



                    <div className="col-12 col-lg-9 col-md-12">
                        <h1 className="text-2xl font-bold mb-6 text-center">Business Verification</h1>
                        <div className="relative mb-6 w-100">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="dashedLine border-t-2 border-dashed border-gray-300 " style={{ width: "80%" }}></div>
                            </div>
                            <div className="relative flex" style={{ justifyContent: "space-around" }}>
                                <div className="w-10 h-10 whiteColor redBg rounded-full flex items-center justify-center">1</div>

                                <div className="w-10 h-10 greyColor whiteBg rounded-full flex items-center justify-center">
                                    2
                                </div>
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
                        <div className='businessForm1' >

                            <div className=" p-6 bg-white shadow-md rounded-md mt-10 ">
                                <h1 className="text-2xl font-bold mb-6 text-center">Add Business Details</h1>
                                <form>
                                    <div>
                                        <label className="block mb-2">Business Legal Name*</label>
                                        <div className="flex iconGap items-center borderInput rounded p-2">
                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17.1819 9.81836C16.9364 9.81836 16.7728 9.98201 16.7728 10.2274V15.5456C16.7728 15.7911 16.6091 15.9547 16.3637 15.9547H1.63641C1.39095 15.9547 1.22734 15.7911 1.22734 15.5456V10.2274C1.22734 9.98198 1.06368 9.81836 0.818258 9.81836C0.572832 9.81836 0.40918 9.98201 0.40918 10.2274V15.5456C0.40918 16.2411 0.940988 16.7729 1.63645 16.7729H16.3637C17.0592 16.7729 17.591 16.2411 17.591 15.5456V10.2274C17.591 9.98198 17.4273 9.81836 17.1819 9.81836Z" fill="black" />
                                                <path d="M16.7727 4.09082H1.22727C0.531809 4.09082 0 4.62263 0 5.31809V7.93628C0 8.50898 0.409078 8.9999 0.940922 9.12263L7.36365 10.5544V11.8635C7.36365 12.109 7.5273 12.2726 7.77273 12.2726H10.2273C10.4727 12.2726 10.6363 12.1089 10.6363 11.8635V10.5544L17.0591 9.12263C17.5909 8.9999 18 8.50898 18 7.93625V5.31806C18 4.62263 17.4682 4.09082 16.7727 4.09082ZM9.81819 11.4544H8.18184V9.81809H9.81819V11.4544ZM17.1818 7.93625C17.1818 8.14079 17.0591 8.30444 16.8545 8.34532L10.6363 9.73625V9.40898C10.6363 9.16352 10.4727 8.9999 10.2273 8.9999H7.77273C7.52727 8.9999 7.36365 9.16355 7.36365 9.40898V9.73625L1.14546 8.34536C0.940922 8.30444 0.818191 8.14082 0.818191 7.93628V5.31809C0.818191 5.07263 0.981844 4.90901 1.22727 4.90901H16.7727C17.0182 4.90901 17.1818 5.07266 17.1818 5.31809V7.93625Z" fill="black" />
                                                <path d="M11.0457 1.22705H6.95481C6.25935 1.22705 5.72754 1.75886 5.72754 2.45432V2.8634C5.72754 3.10886 5.89119 3.27248 6.13662 3.27248C6.38204 3.27248 6.5457 3.10882 6.5457 2.8634V2.45432C6.5457 2.20886 6.70935 2.04524 6.95477 2.04524H11.0457C11.2912 2.04524 11.4548 2.20889 11.4548 2.45432V2.8634C11.4548 3.10886 11.6184 3.27248 11.8639 3.27248C12.1093 3.27248 12.2729 3.10882 12.2729 2.8634V2.45432C12.273 1.75886 11.7412 1.22705 11.0457 1.22705Z" fill="black" />
                                            </svg>

                                            <span>|</span>

                                            <input type="text" className="flex-1 outline-none" placeholder="PAYCO" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block mb-2">Doing Business As (Optional)</label>
                                        <div className="flex iconGap items-center borderInput rounded p-2">
                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17.1819 9.81836C16.9364 9.81836 16.7728 9.98201 16.7728 10.2274V15.5456C16.7728 15.7911 16.6091 15.9547 16.3637 15.9547H1.63641C1.39095 15.9547 1.22734 15.7911 1.22734 15.5456V10.2274C1.22734 9.98198 1.06368 9.81836 0.818258 9.81836C0.572832 9.81836 0.40918 9.98201 0.40918 10.2274V15.5456C0.40918 16.2411 0.940988 16.7729 1.63645 16.7729H16.3637C17.0592 16.7729 17.591 16.2411 17.591 15.5456V10.2274C17.591 9.98198 17.4273 9.81836 17.1819 9.81836Z" fill="black" />
                                                <path d="M16.7727 4.09082H1.22727C0.531809 4.09082 0 4.62263 0 5.31809V7.93628C0 8.50898 0.409078 8.9999 0.940922 9.12263L7.36365 10.5544V11.8635C7.36365 12.109 7.5273 12.2726 7.77273 12.2726H10.2273C10.4727 12.2726 10.6363 12.1089 10.6363 11.8635V10.5544L17.0591 9.12263C17.5909 8.9999 18 8.50898 18 7.93625V5.31806C18 4.62263 17.4682 4.09082 16.7727 4.09082ZM9.81819 11.4544H8.18184V9.81809H9.81819V11.4544ZM17.1818 7.93625C17.1818 8.14079 17.0591 8.30444 16.8545 8.34532L10.6363 9.73625V9.40898C10.6363 9.16352 10.4727 8.9999 10.2273 8.9999H7.77273C7.52727 8.9999 7.36365 9.16355 7.36365 9.40898V9.73625L1.14546 8.34536C0.940922 8.30444 0.818191 8.14082 0.818191 7.93628V5.31809C0.818191 5.07263 0.981844 4.90901 1.22727 4.90901H16.7727C17.0182 4.90901 17.1818 5.07266 17.1818 5.31809V7.93625Z" fill="black" />
                                                <path d="M11.0457 1.22705H6.95481C6.25935 1.22705 5.72754 1.75886 5.72754 2.45432V2.8634C5.72754 3.10886 5.89119 3.27248 6.13662 3.27248C6.38204 3.27248 6.5457 3.10882 6.5457 2.8634V2.45432C6.5457 2.20886 6.70935 2.04524 6.95477 2.04524H11.0457C11.2912 2.04524 11.4548 2.20889 11.4548 2.45432V2.8634C11.4548 3.10886 11.6184 3.27248 11.8639 3.27248C12.1093 3.27248 12.2729 3.10882 12.2729 2.8634V2.45432C12.273 1.75886 11.7412 1.22705 11.0457 1.22705Z" fill="black" />
                                            </svg>

                                            <span>|</span>

                                            <input type="text" className="flex-1 outline-none" placeholder="PAYCO" />
                                        </div>
                                    </div>



                                    <div>
                                        <div className="grid gap-1 mb-4">
                                            <div>
                                                <label className="block mb-2">Date of Incorporation*</label>
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
                                    <div>
                                        <label className="block mb-2">Business Address*</label>
                                        <div className="flex iconGap items-center borderInput rounded p-2">
                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M5.53188 3.64437C6.49162 2.71478 7.64764 2.25 9 2.25C10.3524 2.25 11.5029 2.7095 12.4518 3.62852C13.4006 4.54754 13.875 5.66197 13.875 6.97183C13.875 7.62676 13.706 8.37676 13.3679 9.22183C13.0298 10.0669 12.6208 10.8592 12.1409 11.5986C11.6611 12.338 11.1867 13.0299 10.7177 13.6743C10.2487 14.3187 9.85067 14.831 9.52349 15.2113L9 15.75C8.86913 15.6021 8.69463 15.4067 8.47651 15.1637C8.25839 14.9208 7.86577 14.4349 7.29866 13.706C6.73154 12.9771 6.23532 12.2694 5.80998 11.5827C5.38465 10.8961 4.99748 10.1197 4.64849 9.25352C4.29949 8.38732 4.125 7.62676 4.125 6.97183C4.125 5.66197 4.59396 4.55282 5.53188 3.64437Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M9.75 7.125C9.75 7.53921 9.41421 7.875 9 7.875C8.58579 7.875 8.25 7.53921 8.25 7.125C8.25 6.71079 8.58579 6.375 9 6.375C9.41421 6.375 9.75 6.71079 9.75 7.125Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>

                                            <span>|</span>

                                            <input type="text" className="flex-1 outline-none" placeholder="Changable" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block mb-2">Business Industry*</label>
                                        <div className="flex iconGap items-center borderInput rounded p-2">
                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17.1819 9.81836C16.9364 9.81836 16.7728 9.98201 16.7728 10.2274V15.5456C16.7728 15.7911 16.6091 15.9547 16.3637 15.9547H1.63641C1.39095 15.9547 1.22734 15.7911 1.22734 15.5456V10.2274C1.22734 9.98198 1.06368 9.81836 0.818258 9.81836C0.572832 9.81836 0.40918 9.98201 0.40918 10.2274V15.5456C0.40918 16.2411 0.940988 16.7729 1.63645 16.7729H16.3637C17.0592 16.7729 17.591 16.2411 17.591 15.5456V10.2274C17.591 9.98198 17.4273 9.81836 17.1819 9.81836Z" fill="black" />
                                                <path d="M16.7727 4.09082H1.22727C0.531809 4.09082 0 4.62263 0 5.31809V7.93628C0 8.50898 0.409078 8.9999 0.940922 9.12263L7.36365 10.5544V11.8635C7.36365 12.109 7.5273 12.2726 7.77273 12.2726H10.2273C10.4727 12.2726 10.6363 12.1089 10.6363 11.8635V10.5544L17.0591 9.12263C17.5909 8.9999 18 8.50898 18 7.93625V5.31806C18 4.62263 17.4682 4.09082 16.7727 4.09082ZM9.81819 11.4544H8.18184V9.81809H9.81819V11.4544ZM17.1818 7.93625C17.1818 8.14079 17.0591 8.30444 16.8545 8.34532L10.6363 9.73625V9.40898C10.6363 9.16352 10.4727 8.9999 10.2273 8.9999H7.77273C7.52727 8.9999 7.36365 9.16355 7.36365 9.40898V9.73625L1.14546 8.34536C0.940922 8.30444 0.818191 8.14082 0.818191 7.93628V5.31809C0.818191 5.07263 0.981844 4.90901 1.22727 4.90901H16.7727C17.0182 4.90901 17.1818 5.07266 17.1818 5.31809V7.93625Z" fill="black" />
                                                <path d="M11.0457 1.22705H6.95481C6.25935 1.22705 5.72754 1.75886 5.72754 2.45432V2.8634C5.72754 3.10886 5.89119 3.27248 6.13662 3.27248C6.38204 3.27248 6.5457 3.10882 6.5457 2.8634V2.45432C6.5457 2.20886 6.70935 2.04524 6.95477 2.04524H11.0457C11.2912 2.04524 11.4548 2.20889 11.4548 2.45432V2.8634C11.4548 3.10886 11.6184 3.27248 11.8639 3.27248C12.1093 3.27248 12.2729 3.10882 12.2729 2.8634V2.45432C12.273 1.75886 11.7412 1.22705 11.0457 1.22705Z" fill="black" />
                                            </svg>


                                            <span>|</span>

                                            <input type="text" className="flex-1 outline-none" placeholder="Changable" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block mb-2">Entity Type*</label>
                                        <div className="flex iconGap items-center borderInput rounded p-2">
                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17.1819 9.81836C16.9364 9.81836 16.7728 9.98201 16.7728 10.2274V15.5456C16.7728 15.7911 16.6091 15.9547 16.3637 15.9547H1.63641C1.39095 15.9547 1.22734 15.7911 1.22734 15.5456V10.2274C1.22734 9.98198 1.06368 9.81836 0.818258 9.81836C0.572832 9.81836 0.40918 9.98201 0.40918 10.2274V15.5456C0.40918 16.2411 0.940988 16.7729 1.63645 16.7729H16.3637C17.0592 16.7729 17.591 16.2411 17.591 15.5456V10.2274C17.591 9.98198 17.4273 9.81836 17.1819 9.81836Z" fill="black" />
                                                <path d="M16.7727 4.09082H1.22727C0.531809 4.09082 0 4.62263 0 5.31809V7.93628C0 8.50898 0.409078 8.9999 0.940922 9.12263L7.36365 10.5544V11.8635C7.36365 12.109 7.5273 12.2726 7.77273 12.2726H10.2273C10.4727 12.2726 10.6363 12.1089 10.6363 11.8635V10.5544L17.0591 9.12263C17.5909 8.9999 18 8.50898 18 7.93625V5.31806C18 4.62263 17.4682 4.09082 16.7727 4.09082ZM9.81819 11.4544H8.18184V9.81809H9.81819V11.4544ZM17.1818 7.93625C17.1818 8.14079 17.0591 8.30444 16.8545 8.34532L10.6363 9.73625V9.40898C10.6363 9.16352 10.4727 8.9999 10.2273 8.9999H7.77273C7.52727 8.9999 7.36365 9.16355 7.36365 9.40898V9.73625L1.14546 8.34536C0.940922 8.30444 0.818191 8.14082 0.818191 7.93628V5.31809C0.818191 5.07263 0.981844 4.90901 1.22727 4.90901H16.7727C17.0182 4.90901 17.1818 5.07266 17.1818 5.31809V7.93625Z" fill="black" />
                                                <path d="M11.0457 1.22705H6.95481C6.25935 1.22705 5.72754 1.75886 5.72754 2.45432V2.8634C5.72754 3.10886 5.89119 3.27248 6.13662 3.27248C6.38204 3.27248 6.5457 3.10882 6.5457 2.8634V2.45432C6.5457 2.20886 6.70935 2.04524 6.95477 2.04524H11.0457C11.2912 2.04524 11.4548 2.20889 11.4548 2.45432V2.8634C11.4548 3.10886 11.6184 3.27248 11.8639 3.27248C12.1093 3.27248 12.2729 3.10882 12.2729 2.8634V2.45432C12.273 1.75886 11.7412 1.22705 11.0457 1.22705Z" fill="black" />
                                            </svg>

                                            <span>|</span>

                                            <input type="text" className="flex-1 outline-none" placeholder="Changable" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block mb-2">Tax ID number*</label>
                                        <div className="flex iconGap items-center borderInput rounded p-2">
                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17.1819 4.50022H14.6962L15.5168 1.13335C15.6338 0.653641 15.3753 0.159594 14.9384 0.0308912C14.5015 -0.0978115 14.0523 0.187444 13.9361 0.667154L13.0027 4.50022H7.19182L8.0125 1.13335C8.12951 0.653641 7.87093 0.159594 7.43407 0.0308912C6.99706 -0.0968227 6.54882 0.187444 6.43256 0.667154L5.49817 4.50022H2.45455C2.00286 4.50022 1.63642 4.90248 1.63642 5.40015C1.63642 5.89799 2.00286 6.30025 2.45455 6.30025H5.05877L3.74235 11.7002H0.818134C0.366595 11.7002 0 12.1024 0 12.6001C0 13.0978 0.366595 13.5 0.818134 13.5H3.30385L2.48317 16.8669C2.36616 17.3466 2.62474 17.8406 3.0616 17.9693C3.13201 17.9901 3.20317 18 3.27269 18C3.63359 18 3.96498 17.7353 4.06236 17.3331L4.99749 13.5H10.8082L9.9875 16.8669C9.87064 17.3466 10.1291 17.8406 10.5661 17.9693C10.6363 17.9901 10.7075 18 10.7779 18C11.1388 18 11.4701 17.7353 11.5674 17.3331L12.5018 13.5H15.5454C15.9971 13.5 16.3637 13.0978 16.3637 12.6001C16.3637 12.1024 15.9971 11.7002 15.5454 11.7002H12.9412L14.2576 6.30025H17.1819C17.6336 6.30025 18 5.89799 18 5.40015C18 4.90248 17.6336 4.50022 17.1819 4.50022ZM11.2467 11.7002H5.436L6.75242 6.30025H12.5633L11.2467 11.7002Z" fill="black" />
                                            </svg>
                                            <span>|</span>

                                            <input type="number" className="flex-1 outline-none" placeholder="Changable" />
                                        </div>
                                    </div>
                                    <div className=" flex-col md:flex-row mb-4">
                                        <div>
                                            <label className="block mb-2">Country*</label>
                                            <div className="flex iconGap items-center borderInput rounded p-2">
                                                <i>{countries.find((country) => country.code === selectedFirstCountry)?.flag}</i>
                                                <span>|</span>
                                                <select
                                                    value={selectedFirstCountry}
                                                    onChange={(e) => setSelectedFirstCountry(e.target.value)}
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
                                        <div>
                                            <label className="block mb-2">City/Town</label>
                                            <div className="seven0 flex iconGap items-center borderInput rounded p-2" style={{ width: "50%" }}>
                                                <i>
                                                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M7.87584 4.85915C9.15549 3.61971 10.6969 3 12.5 3C14.3031 3 15.8372 3.61267 17.1023 4.83803C18.3675 6.06339 19 7.54929 19 9.29577C19 10.169 18.7746 11.169 18.3238 12.2958C17.873 13.4225 17.3277 14.4789 16.6879 15.4648C16.0481 16.4507 15.4156 17.3732 14.7903 18.2324C14.165 19.0916 13.6342 19.7746 13.198 20.2817L12.5 21C12.3255 20.8028 12.0928 20.5423 11.802 20.2183C11.5112 19.8944 10.9877 19.2465 10.2315 18.2746C9.47539 17.3028 8.81376 16.3592 8.24664 15.4437C7.67953 14.5282 7.16331 13.493 6.69799 12.338C6.23266 11.1831 6 10.169 6 9.29577C6 7.54929 6.62527 6.07043 7.87584 4.85915Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M13.5 9.5C13.5 10.0523 13.0523 10.5 12.5 10.5C11.9477 10.5 11.5 10.0523 11.5 9.5C11.5 8.94772 11.9477 8.5 12.5 8.5C13.0523 8.5 13.5 8.94772 13.5 9.5Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </i>
                                                <span>|</span>
                                                <select className="flex-1 outline-none">
                                                    <option>London</option>
                                                    <option>Canberra</option>
                                                    <option>Ottawa</option>
                                                    <option>Cairo</option>
                                                    <option>Paris</option>
                                                    <option>Berlin</option>
                                                    <option>Washington D.C.</option>
                                                    <option>Other</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col md:flex-row mb-4">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                            <div>
                                                <label className="block mb-2">Address Line One*</label>
                                                <div className="flex iconGap items-center borderInput rounded p-2">
                                                    <i>{countries.find((country) => country.code === selectedSecondCountry)?.flag}</i>
                                                    <span>|</span>
                                                    <select
                                                        value={selectedSecondCountry}
                                                        onChange={(e) => setSelectedSecondCountry(e.target.value)}
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

                                            <div className="md:ml-32">
                                                <label className="block mb-2">Currency</label>
                                                <div className="flex iconGap items-center borderInput rounded p-2">
                                                    <i>{countries.find((country) => country.code === selectedThirdCountry)?.flag}</i>
                                                    <span>|</span>
                                                    <select
                                                        value={selectedThirdCountry}
                                                        onChange={(e) => setSelectedThirdCountry(e.target.value)}
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
                                    </div>

                                    <div className="flex mb-4" >

                                    </div>



                                    <div className="mb-4">
                                        <label className="block text-gray-700 font-medium mb-2">
                                            Which countries do you expect to work with the most?
                                        </label>
                                        <div className="selectedCountries flex flex-wrap gap-2">
                                            {countries
                                                .filter((country) =>
                                                    ["GB", "EG", "FR", "US", "DE"].includes(country.code)
                                                )
                                                .map((country) => (
                                                    <div
                                                        key={country.code}
                                                        className="flex items-center gap-2 bg-gray-200 px-2 py-1 rounded shadow-sm"
                                                    >
                                                        <span>{country.flag}</span>
                                                        <span className="text-sm font-medium">{country.name}</span>
                                                        <button
                                                            onClick={() => handleDeleteCountry(country.code)}
                                                            className="text-black hover:text-red-600"
                                                            aria-label="Remove country"
                                                        >
                                                            <i className="cursor-pointer w-100 flex justify-end">
                                                                <svg
                                                                    width="18"
                                                                    height="19"
                                                                    viewBox="0 0 18 19"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <line
                                                                        x1="1.17976"
                                                                        y1="0.749436"
                                                                        x2="17.1798"
                                                                        y2="16.7494"
                                                                        stroke="black"
                                                                        strokeWidth="1.5"
                                                                    />
                                                                    <line
                                                                        x1="17.1798"
                                                                        y1="2.16365"
                                                                        x2="1.17976"
                                                                        y2="18.1636"
                                                                        stroke="black"
                                                                        strokeWidth="1.5"
                                                                    />
                                                                </svg>
                                                            </i>
                                                        </button>
                                                    </div>
                                                ))}
                                        </div>
                                    </div>




                                    <div className="mb-4 flex gap-2">
                                        <i><svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="0.25" y="0.89502" width="24.5" height="24.5" rx="12.25" fill="#656565" stroke="white" strokeWidth="0.5" />
                                            <path d="M13.4647 8.07944L13.2887 16.0794H12.0727L11.8967 8.07944H13.4647ZM12.7447 19.3274C12.4674 19.3274 12.2327 19.2314 12.0407 19.0394C11.8487 18.8474 11.7527 18.6128 11.7527 18.3354C11.7527 18.0581 11.8487 17.8234 12.0407 17.6314C12.2327 17.4394 12.4674 17.3434 12.7447 17.3434C13.0114 17.3434 13.2354 17.4394 13.4167 17.6314C13.6087 17.8234 13.7047 18.0581 13.7047 18.3354C13.7047 18.6128 13.6087 18.8474 13.4167 19.0394C13.2354 19.2314 13.0114 19.3274 12.7447 19.3274Z" fill="#FCFCFC" />
                                        </svg>
                                        </i>
                                        <p className="text-gray-600 text-sm">
                                            For some countries, additional verification might be required to comply with regulations. We'll <br />notify you if that applies.
                                        </p>
                                    </div>
                                    <div className="mb-4">
                                        <h2 className="font-bold mb-2 text-center" style={{ fontSize: "20px" }}>Upload Mandatory Documents</h2>

                                        <div className="mb-4 p-4 rounded-md articleArea">
                                            <h2 className="MediumTitle font-bold mb-2">1. Articles of incorporation</h2>
                                            <div className='flex flex-col md:flex-row md:justify-between'>
                                                <p className="text-gray-600 text-sm mb-2">
                                                    Legal document filed with the government to establish a corporation, <br /> including information about the company's name, purpose, <br /> structure, and initial shareholders.
                                                </p>
                                                <div className="upload mt-4 md:mt-0">
                                                    <button className="upLoadBtn1 redClr whiteBg py-2 flex rounded-md">UPLOAD
                                                        <span>
                                                            <i>
                                                                <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M4.5 13.145H10.5V7.14502H14.5L7.5 0.14502L0.5 7.14502H4.5V13.145ZM0.5 15.145H14.5V17.145H0.5V15.145Z" fill="#C20101" />
                                                                </svg>
                                                            </i>
                                                        </span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mb-4 p-4 articleArea">
                                            <h2 className="MediumTitle font-bold mb-2">2. Commercial Register Extract</h2>
                                            <p className="text-gray-600 text-sm mb-2">
                                                Legal document filed with the government to establish a corporation, <br /> including information about the company's name, purpose, <br /> structure, and initial shareholders.
                                            </p>
                                            <div className="flex flex-col md:flex-row md:justify-between items-center">
                                                <div className="flex items-center mb-4 md:mb-0">
                                                    <img src={selectedImage} alt="Document thumbnail" className="mr-2" />
                                                </div>
                                                <div className="flex items-center">
                                                    <button className="py-2 px-4 redBg text-white rounded-md mr-2">DELETE</button>
                                                    <button className="py-2 px-4 redBg text-white rounded-md">REPLACE</button>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mb-4 p-4 rounded-md articleArea">
                                            <h2 className="mb-2 ein">3. EIN (Federal Tax ID) <span className='vat'>or VAT Number</span></h2>
                                            <div className="flex flex-col md:flex-row md:justify-between">
                                                <p className="text-gray-600 text-sm mb-2">
                                                    Company-issued tax ID number for tax reporting purposes, outlining the procedures for invoicing, and decision-making processes.
                                                </p>
                                                <div className="upload mt-4 md:mt-0">
                                                    <button className="upLoadBtn2 py-2 flex rounded-md">UPLOAD
                                                        <span>
                                                            <i>
                                                                <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M4.5 13.4487H10.5V7.44873H14.5L7.5 0.44873L0.5 7.44873H4.5V13.4487ZM0.5 15.4487H14.5V17.4487H0.5V15.4487Z" fill="#FCFCFC" />
                                                                </svg>
                                                            </i>
                                                        </span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </form>
                            </div>
                            <div className='w-100 text-center'>
                                <Link to="/business2">

                                    <button className='save'>Save & Next</button>
                                </Link>
                            </div>
                        </div>

                    </div >
                </div >
            </div >
        </>
    );
}