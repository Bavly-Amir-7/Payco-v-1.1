import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Aside from '../../aside/aside';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPlus, faChevronDown, faChevronUp, faCalendarAlt, faTimes } from '@fortawesome/free-solid-svg-icons';
import "./escrow3.css";

export default function Escrow3() {
    const [selectedAccount, setSelectedAccount] = useState('');
    const [activeLink, setActiveLink] = useState('');
    const [showQRCode, setShowQRCode] = useState(false); // حالة جديدة للتحكم في ظهور QR Code

    const handleNavigation = (accountType) => {
        setSelectedAccount(accountType);
        console.log(`Selected account type: ${accountType}`); // Logging selected account type
    };

    const handleGenerateQRCode = () => {
        setShowQRCode(true); // تغيير الحالة لإظهار QR Code
    };
    return (
        <>
            <div className="container-fluid lettersContainer flex-center">
                <div className="row">
                    <div className="asideComponent col-lg-3 col-md-2" style={{ height: "100%" }}>
                        <Aside />
                    </div>


                    <div className="col-12 col-lg-9 col-md-12 mt-5 text-center">
                        <div className="flex flex-col md:flex-row justify-between items-center mb-6 w-100">
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
                            <span>Dashboard</span>
                            <i className="fas fa-chevron-right mx-2"></i>

                            <span className="font-bold text-gray-700">Create New Escrow</span>
                        </div>
                        <div className="relative mb-6 w-100">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="dashedLine border-t-2 border-dashed border-gray-300" style={{ width: "80%" }}></div>
                            </div>
                            <div className="relative flex" style={{ justifyContent: "space-around" }}>
                                <div className="w-10 h-10 whiteColor redBg rounded-full flex items-center justify-center"><i><svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.5" y="0.5" width="49" height="49" rx="24.5" fill="white" />
                                    <rect x="0.5" y="0.5" width="49" height="49" rx="24.5" stroke="#C80000" />
                                    <path d="M31.3333 20L22.1667 29.1667L18 25" stroke="#C80000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                </i></div>
                                <div className="w-10 h-10 whiteColor redBg rounded-full flex items-center justify-center">2</div>
                                <div className="w-10 h-10 greyColor whiteBg rounded-full flex items-center justify-center">3</div>
                                <div className="w-10 h-10 greyColor whiteBg rounded-full flex items-center justify-center">4</div>
                            </div>
                        </div>
                        <div className="flex justify-between mb-6 w-100">
                            <div className="col text-center text-sm">Invoice Details</div>
                            <div className="col text-center text-sm">Escrow Conditions</div>
                            <div className="col text-center text-sm">Review and confirmation</div>
                            <div className="col text-center text-sm">Fund the Escrow</div>
                        </div>
                        <div className="bg-[rgb(252,252,252)] p-8 rounded-lg shadow-md">
                            <h2 className="text-xl font-semibold mb-4 text-center">Select Verification Method</h2>
                            <div className="account-type bg-[rgb(252,252,252)] p-6 rounded-lg mb-6">
                                <div className={`bg-[rgb(244,244,244)] p-4 rounded-lg border border-gray-300 ${selectedAccount === 'personal' ? 'bg-[rgb(230,230,230)]' : ''}`} style={{ marginBottom: '24px' }}>
                                    <label className="flex items-center">
                                        <input type="radio" name="accountType" className="form-radio h-5 w-5 text-red-500" onClick={() => handleNavigation('personal')} />
                                        <h2 className="bold ml-2 md:text-lg  font-medium">Proof of shipping</h2>
                                    </label>
                                    <p className='text-start md-text-lg text-sm' style={{ marginLeft: "38px" }}>Proof of shipping confirms goods dispatched, including sender, recipient, item details, dispatch date, shipping method, and tracking info. It's essential for accountability and logistics, aiding transparency and follow-up actions.</p>

                                </div>

                                <div className={`bg-[rgb(244,244,244)] p-4 rounded-lg border border-gray-300 ${selectedAccount === 'business' ? 'bg-[rgb(230,230,230)]' : ''}`} style={{ marginBottom: '24px' }}>
                                    <label className="flex items-center">
                                        <input type="radio" name="accountType" className="form-radio h-5 w-5 text-red-500" onClick={() => handleNavigation('business')} />
                                        <span className="bold ml-2 text-md font-medium">Proof of Delivery</span>
                                    </label>
                                    <p className=' text-start md-text-lg text-sm' style={{ marginLeft: "38px" }}>Proof of delivery confirms receipt of goods, detailing sender, recipient, item specifics, delivery date, method, and any associated tracking. It's crucial for verifying receipt, aiding in accountability and logistical follow-up.</p>



                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
