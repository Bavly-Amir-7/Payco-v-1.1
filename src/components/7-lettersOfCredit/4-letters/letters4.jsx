import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Aside from '../../aside/aside';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPlus, faChevronDown, faChevronUp, faCalendarAlt, faTimes } from '@fortawesome/free-solid-svg-icons';
import "./letters4.css";
import inovices from "./Frame.svg"

export default function Letters4() {


    const [account, setAccount] = useState("USDT - wallet");

    // تعديل: تعريف حالة للتحكم في ظهور وإخفاء القائمة
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    // تعديل: تعريف حالة لتتبع العنصر النشط
    const [activeLink, setActiveLink] = useState('overview');

    // تعديل: دالة لفتح وإغلاق القائمة
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen); // هذه السطر يقوم بتغيير الحالة بين true و false
    };
    // تعديل: دالة لتحديد العنصر النشط وإغلاق القائمة
    const handleLinkClick = (link) => {
        setActiveLink(link); // تحديث العنصر النشط
        setIsSidebarOpen(false); // إغلاق القائمة
    };


    return (
        <>
            <div className="container-fluid lettersContainer flex-center">
                <div className="row">
                    <div className="col-lg-3 col-md-2 asideComponent " style={{ height: "100%" }}>
                        {/* تعديل: تمرير props للـ Aside للتحكم في حالته */}
                        <Aside
                            isSidebarOpen={isSidebarOpen}  // حالة فتح أو إغلاق الـ Sidebar
                            toggleSidebar={toggleSidebar}  // دالة لفتح أو إغلاق الـ Sidebar
                            activeLink={activeLink}        // العنصر النشط في القائمة
                            handleLinkClick={handleLinkClick}  // دالة لتغيير العنصر النشط
                        />
                    </div>

                    {/* 
                    <button
                        onClick={toggleSidebar}  // عند الضغط عليه، تقوم الدالة `toggleSidebar` بتغيير حالة القائمة
                        className="text-white bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded  top-4 left-4 lg:hidden"
                    >
                        <i className="fas fa-bars"></i>
                    </button> */}



                    <div className="col-12 col-lg-9 col-md-10  text-center">



                        <div className="flex flex-col md:flex-row justify-between items-center mb-6 w-100 mt-10">
                            <div className="parent w-100 flex gap-4">
                                <div className="relative w-full md:mb-0" style={{ width: "80%" }}>
                                    <input type="text" placeholder="Search anything here" className="w-full p-3 rounded-lg border border-gray-300" />
                                </div>
                                <div className="flex items-center space-x-4">
                                    <i className="fas fa-bell text-gray-400"></i>
                                    <div className="flex items-center space-x-2">
                                        <img src="https://storage.googleapis.com/a1aa/image/ScBMkEoJ3Gr6HVjcF2CrdyIti56QzXDWjyir38s7YUdcXC8E.jpg" alt="User profile picture" className="w-10 h-10 rounded-full" width="40" height="40" />
                                        <div className="flex flex-col items-start">
                                            <span className="text-gray-700">John Smith</span>
                                        </div>
                                        <i className="fas fa-caret-down text-gray-400"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-gray-500 mb-6 text-sm" style={{ placeSelf: "start" }}>
                            <span>Dashboard</span>
                            <i className="fas fa-chevron-right mx-2"></i>
                            <span>Letters of credit</span>
                            <i className="fas fa-chevron-right mx-2"></i>
                            <span className="font-bold text-gray-700">Create New LC</span>
                        </div>
                        <div className="relative mb-6 w-100">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="dashedLine border-t-2 border-dashed border-gray-300" style={{ width: "80%" }}></div>
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
                            <div className="col text-center text-sm">Business Details</div>
                            <div className="col text-center text-sm">Business Beneficial Owners</div>
                            <div className="col text-center text-sm">Signatory Power</div>
                            <div className="col text-center text-sm">Review and Additional Documents</div>
                        </div>





                        <div className="bg-gray-100 flex justify-center items-center w-100">




                            <div className="bg-white p-6 rounded-lg  w-100 ">


                                <div className="bg-white p-6 rounded-lg  ">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="account">
                                        Select Account
                                    </label>
                                    <div className="relative">
                                        <select
                                            id="account"
                                            value={account}
                                            onChange={(e) => setAccount(e.target.value)}
                                            className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        >
                                            <option>USDT - wallet</option>
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>


                                <div className="flex justify-center items-center  bg-white w-100">




                                    <div className="" style={{ width: '90%' }}>
                                        <div className="flex justify-between mb-2 text-gray-600">
                                            <span>Subtotal</span>
                                            <span>$120,000</span>
                                        </div>
                                        <div className="flex justify-between mb-2 text-gray-600">
                                            <span>Total Tax</span>
                                            <span>$10,000</span>
                                        </div>
                                        <div className="flex justify-between mb-6 text-gray-600">
                                            <span>LC Fees</span>
                                            <span>$10,000</span>
                                        </div>
                                        <div className="flex justify-between font-bold">
                                            <span className="text-gray-600">TOTAL</span>
                                            <span className="text-red-600">$130,000</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center justify-center mt-10">
                                    <div className="text-center">
                                        <img
                                            src={inovices}
                                            alt="Illustration of a person standing next to a large red wallet with bank cards and dollar signs"
                                            className="mx-auto mb-4"
                                            width="400"
                                            height="400"
                                        />
                                        <p className="text-gray-600 pt-10">
                                            Please select the account containing funds for the required invoices in the Escrow creation process. Thank you
                                        </p>
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div className="finalBtns center mt-6 justify-center">
                            <button className="py-2 px-6 backLetter col-button">Save & Exit</button>
                            <button className="py-2 px-6 nextLetter col-button">Next</button>
                        </div>




                    </div>
                </div>
            </div>
        </>
    );
}
