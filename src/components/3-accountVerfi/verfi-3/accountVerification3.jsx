import React, { useState } from 'react';
import "./verfi3.css";
import Aside from '../../aside/aside';
import { Link } from 'react-router-dom';

export default function AccountVerification3() {
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

    return (
        <>
            <div className="container-fluid">
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
                                    </i> </div>
                                <div className="w-10 h-10 greyColor whiteBg rounded-full flex items-center justify-center">
                                    <i>
                                        <svg width="51" height="50" viewBox="0 0 51 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="0.90625" y="0.5" width="49" height="49" rx="24.5" fill="#FCFCFC" />
                                            <rect x="0.90625" y="0.5" width="49" height="49" rx="24.5" stroke="#CDCDCD" />
                                            <path d="M32.0726 21L22.9059 30.1667L18.7393 26" stroke="#C20101" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </i> </div>
                                <div className="w-10 h-10 whiteColor redBg rounded-full flex items-center justify-center">3</div>
                                <div className="w-10 h-10 greyColor whiteBg rounded-full flex items-center justify-center">4</div>
                            </div>
                        </div>
                        <div className="flex justify-between mb-6 w-100">
                            <p className="text-center flex-1">Account Type</p>
                            <p className="text-center flex-1">Personal Details</p>
                            <p className="text-center flex-1">Identity Verification</p>
                            <p className="text-center flex-1">Review and Additional <br /> Documents</p>
                        </div>
                        <div className="" style={{
                            backgroundColor: "rgb(252,252,252)",
                            padding: window.innerWidth < 768 ? "0.25rem" : "2rem", // Dynamically set padding
                            borderRadius: "0.5rem",
                            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                        }} >
                            <h2 className="text-xl font-semibold mb-4 text-center pt-2">Select Verification Method</h2>
                            <div className="account-type bg-[rgb(252,252,252)] p-6 rounded-lg mb-6">
                                <div className={`bg-[rgb(244,244,244)] p-4 rounded-lg border border-gray-300 ${selectedAccount === 'personal' ? 'bg-[rgb(230,230,230)]' : ''}`} style={{ marginBottom: '24px' }}>
                                    <label className="flex items-center">
                                        <input type="radio" name="accountType" className="form-radio h-5 w-5 text-red-500" onClick={() => handleNavigation('personal')} />
                                        <h2 className="bold ml-2 text-lg font-medium">Continue on this Device</h2>
                                    </label>
                                    <p className='' style={{ marginLeft: "38px" }}>Continue on this device: Open your camera to verify with a third party. Press 'Go to <br /> Verification' to proceed</p>
                                    <div className='text-center'>
                                        <button className='codeBtn'>Go to verification</button>
                                    </div>
                                </div>

                                <div className={`bg-[rgb(244,244,244)] p-4 rounded-lg border border-gray-300 ${selectedAccount === 'business' ? 'bg-[rgb(230,230,230)]' : ''}`} style={{ marginBottom: '24px' }}>
                                    <label className="flex items-center">
                                        <input type="radio" name="accountType" className="form-radio h-5 w-5 text-red-500" onClick={() => handleNavigation('business')} />
                                        <span className="bold ml-2 text-md font-medium">Verify on Mobile</span>
                                    </label>
                                    <p className='scan'>Verify on mobile: Press 'Generate Code' to scan and complete the process</p>
                                    <div className='text-center'>
                                        {!showQRCode ? ( 
                                            <button className='codeBtn2' onClick={handleGenerateQRCode}>Generate QR Code</button>
                                        ) : null} 
                                    </div>


                                    {showQRCode && ( 
                                        <div className="text-center w-100  ">
                                            <div className="bg-white p-4 rounded-lg shadow-md qrCode">
                                                <i className="fas fa-qrcode text-5xl"></i>
                                            </div>
                                            <div className="w-100">

                                                <p className="mt-2 text-lg font-semibold text-gray-800">Scan With Your Mobile</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                        </div>



                        <div className="flex justify-center gap-2">
                            
                            <Link to="/verfi2" className='saveNext'>
                                <button className="backBtn   redClr font-semibold px-4 py-2 rounded-lg hover:bg-red-600">Back</button>
                            </Link>
                            <Link to="/verfi4" className='saveNext'>
                                <button className="saveBtn greyBtn greyBg text-white font-semibold px-4 py-2 rounded-lg hover:bg-red-600">Save & Next</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
