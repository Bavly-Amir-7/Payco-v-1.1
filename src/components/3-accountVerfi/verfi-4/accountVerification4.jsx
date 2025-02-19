import React, { useState } from 'react';
import "./verfi4.css";
import Aside from '../../aside/aside';
import { Link } from 'react-router-dom';

export default function AccountVerification4() {
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

                        <div className="bg-light p-8 rounded-lg shadow-md">
                            <div className="space-y-6">
                                <h1 className="text-center text-lg font-bold">Review</h1>
                                <div className="row justify-content-center">
                                    <div className="col-12 col-lg-10">
                                        <div className="d-flex align-items-center p-4 bg-gray-200 rounded-lg justify-content-between mb-4">
                                            <div className="d-flex align-items-center">
                                                <i className="fas fa-chevron-down mr-2"></i>
                                                <span className="font-semibold">Personal Details</span>
                                            </div>
                                            <a href="#" className="changeBtn">Change</a>
                                        </div>

                                        <div className="d-flex align-items-center p-4 bg-gray-200 rounded-lg justify-content-between mb-4">
                                            <div className="d-flex align-items-center">
                                                <i className="fas fa-chevron-down mr-2"></i>
                                                <span className="font-semibold">Account Details</span>
                                            </div>
                                            <a href="#" className="changeBtn">Change</a>
                                        </div>

                                        <div className="d-flex align-items-center p-4 bg-gray-200 rounded-lg justify-content-between mb-4">
                                            <div className="d-flex align-items-center">
                                                <i className="fas fa-chevron-down mr-2"></i>
                                                <span className="font-semibold">Passport or National ID Verification</span>
                                            </div>
                                            <a href="#" className="changeBtn">Change</a>
                                        </div>

                                        <div className="p-6 bg-gray-200 rounded-lg text-center" style={{ marginTop: "110px" }}>
                                            <h2 className="font-bold">Additional Documents</h2>
                                            <p className="text-sm text-gray-600 mt-2">Verification is within reach! Adding extra documents helps us confirm your info quickly and securely, so you can unlock the full experience sooner.</p>
                                            <button className="uploadBtn mt-4 px-6 py-2 rounded">UPLOAD</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center gap-2">
                            
                            <Link to="/verfi3" className='saveNext'>
                                <button className="backBtn   redClr font-semibold px-4 py-2 rounded-lg hover:bg-red-600">Back</button>
                            </Link>
                            <Link to="/business1" className='saveNext'>
                                <button className=" redBtn redBg text-white font-semibold px-4 py-2 rounded-lg hover:bg-red-600">Finish</button>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}
