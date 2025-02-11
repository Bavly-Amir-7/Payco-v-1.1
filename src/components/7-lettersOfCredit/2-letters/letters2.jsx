import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Aside from '../../aside/aside';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPlus, faChevronDown, faChevronUp, faCalendarAlt, faTimes } from '@fortawesome/free-solid-svg-icons';
import "./letters2.css";
import SearchBar from '../../searchBar/searchBar';


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


                    <div className="col-12 col-lg-9 col-md-12 mt-5 text-center">
                       
                    <SearchBar />

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
                            <div className="col text-center text-sm">Invoice Details</div>
                            <div className="col text-center text-sm">LC Conditions</div>
                            <div className="col text-center text-sm greyColor">Review and Confirmation</div>
                            <div className="col text-center text-sm greyColor">Fund the LC</div>
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
                        <div className="flex justify-center gap-2">

                            <Link
                            
                             to="/letters1"
                             
                             className='saveNext'>
                                <button className="backBtn   redClr font-semibold px-4 py-2 rounded-lg hover:bg-red-600">Back</button>
                            </Link>
                            <Link to="/letters3" className='saveNext'>
                                <button className=" redBtn redBg text-white font-semibold px-4 py-2 rounded-lg hover:bg-red-600">Save & Next</button>
                            </Link>
                        </div>


                    </div>
                </div>
            </div>
        </>
    );
}
