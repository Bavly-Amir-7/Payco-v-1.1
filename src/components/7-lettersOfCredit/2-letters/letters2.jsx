import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Aside from '../../aside/aside';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPlus, faChevronDown, faChevronUp, faCalendarAlt, faTimes } from '@fortawesome/free-solid-svg-icons';
import "./letters2.css";

export default function Letters2() {


    const [mandatoryOpen, setMandatoryOpen] = useState({
        mandatory1: true,
        mandatory2: false,
        mandatory3: false
    });

    const [optionalOpen, setOptionalOpen] = useState({
        optional1: false,
        optional2: false,
        optional3: false
    });

    const toggleDropdown = (id, type) => {
        if (type === 'mandatory') {
            setMandatoryOpen(prevState => ({
                ...prevState,
                [id]: !prevState[id]
            }));
        } else {
            setOptionalOpen(prevState => ({
                ...prevState,
                [id]: !prevState[id]
            }));
        }
    };


    return (
        <>
            <div className="container-fluid lettersContainer flex-center">
                <div className="row">
                    <div className="asideComponent col-lg-3 col-md-2" style={{ height: "100%" }}>
                        <Aside />
                    </div>


                    <div className="col-12 col-lg-9 col-md-10 mt-5 text-center">
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
                                <div className="w-10 h-10 whiteColor redBg rounded-full flex items-center justify-center">2</div>
                                <div className="w-10 h-10 greyColor whiteBg rounded-full flex items-center justify-center">3</div>
                                <div className="w-10 h-10 greyColor whiteBg rounded-full flex items-center justify-center">4</div>
                            </div>
                        </div>
                        <div className="flex justify-between mb-6 w-100">
                            <div className="col text-center text-sm">Business Details</div>
                            <div className="col text-center text-sm">Business Beneficial Owners</div>
                            <div className="col text-center text-sm">Signatory Power</div>
                            <div className="col text-center text-sm">Review and Additional Documents</div>
                        </div>





                        <div className="bg-gray-100 flex justify-center items-center w-100">
                            <div className="bg-white p-6 rounded-lg shadow-lg w-100 ">
                                <h2 className="text-center text-lg font-semibold mb-4">Mandatory Documents</h2>
                                <div className="space-y-4">
                                    <div className="bg-gray-200 p-4 rounded-lg">
                                        <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleDropdown('mandatory1', 'mandatory')}>
                                            <span className="font-semibold">Beneficiary’s Signed Invoice</span>
                                            <i className={`fas ${mandatoryOpen.mandatory1 ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                                        </div>
                                        {mandatoryOpen.mandatory1 && (
                                            <div className="mt-2 text-sm text-gray-700">
                                                <p>This document provides a description of the products being shipped, their quantities, unit prices, and any discounts, taxes, or additional charges. Invoices submitted for this LC must exactly match with the agreed upon invoice contained in the LC contract.</p>
                                            </div>
                                        )}
                                    </div>
                                    <div className="bg-gray-200 p-4 rounded-lg">
                                        <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleDropdown('mandatory2', 'mandatory')}>
                                            <span className="font-semibold">Proof of Shipment</span>
                                            <i className={`fas ${mandatoryOpen.mandatory2 ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                                        </div>
                                        {mandatoryOpen.mandatory2 && (
                                            <div className="mt-2 text-sm text-gray-700">
                                                <p>Details about the proof of shipment.</p>
                                            </div>
                                        )}
                                    </div>
                                    <div className="bg-gray-200 p-4 rounded-lg">
                                        <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleDropdown('mandatory3', 'mandatory')}>
                                            <span className="font-semibold">Proof of Insurance for 110% Value of Invoice</span>
                                            <i className={`fas ${mandatoryOpen.mandatory3 ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                                        </div>
                                        {mandatoryOpen.mandatory3 && (
                                            <div className="mt-2 text-sm text-gray-700">
                                                <p>Details about the proof of insurance.</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <h2 className="text-center text-lg font-semibold mt-6 mb-4">Optional Documents</h2>
                                <div className="space-y-4">
                                    <div className="bg-gray-200 p-4 rounded-lg">
                                        <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleDropdown('optional1', 'optional')}>
                                            <div className="flex items-center">
                                                <input type="checkbox" className="form-checkbox custom-checkbox h-5 w-5" />
                                                <span className="ml-2 font-semibold">Certificate of Origin</span>
                                            </div>
                                            <i className={`fas ${optionalOpen.optional1 ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                                        </div>
                                        {optionalOpen.optional1 && (
                                            <div className="mt-2 text-sm text-gray-700">
                                                <p>Details about the certificate of origin.</p>
                                            </div>
                                        )}
                                    </div>
                                    <div className="bg-gray-200 p-4 rounded-lg">
                                        <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleDropdown('optional2', 'optional')}>
                                            <div className="flex items-center">
                                                <input type="checkbox" className="form-checkbox custom-checkbox h-5 w-5" />
                                                <span className="ml-2 font-semibold">Beneficiary’s Signed Invoice</span>
                                            </div>
                                            <i className={`fas ${optionalOpen.optional2 ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                                        </div>
                                        {optionalOpen.optional2 && (
                                            <div className="mt-2 text-sm text-gray-700">
                                                <p>Details about the beneficiary’s signed invoice.</p>
                                            </div>
                                        )}
                                    </div>
                                    <div className="bg-gray-200 p-4 rounded-lg">
                                        <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleDropdown('optional3', 'optional')}>
                                            <div className="flex items-center">
                                                <input type="checkbox" className="form-checkbox custom-checkbox h-5 w-5" />
                                                <span className="ml-2 font-semibold">Certificate of Inspection</span>
                                            </div>
                                            <i className={`fas ${optionalOpen.optional3 ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                                        </div>
                                        {optionalOpen.optional3 && (
                                            <div className="mt-2 text-sm text-gray-700">
                                                <p>Details about the certificate of inspection.</p>
                                            </div>
                                        )}
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
