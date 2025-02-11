import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Aside from '../../aside/aside';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPlus, faChevronDown, faChevronUp, faCalendarAlt, faTimes } from '@fortawesome/free-solid-svg-icons';
import "./letters3.css";
import SearchBar from '../../searchBar/searchBar';


export default function Letters3() {


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
                                <div className="w-10 h-10 greyColor whiteBg rounded-full flex items-center justify-center">
                                    <i>
                                        <svg width="51" height="50" viewBox="0 0 51 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="0.90625" y="0.5" width="49" height="49" rx="24.5" fill="#FCFCFC" />
                                            <rect x="0.90625" y="0.5" width="49" height="49" rx="24.5" stroke="#CDCDCD" />
                                            <path d="M32.0726 21L22.9059 30.1667L18.7393 26" stroke="#C20101" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </i>
                                </div>                                <div className="w-10 h-10 whiteColor redBg rounded-full flex items-center justify-center">3</div>
                                <div className="w-10 h-10 greyColor whiteBg rounded-full flex items-center justify-center">4</div>
                            </div>
                        </div>
                        <div className="flex justify-between mb-6 w-100">
                            <div className="col text-center text-sm">Invoice Details</div>
                            <div className="col text-center text-sm">LC Conditions</div>
                            <div className="col text-center text-sm ">Review and Confirmation</div>
                            <div className="col text-center text-sm greyColor">Fund the LC</div>
                        </div>






                        <div className="bg-gray-100 flex justify-center items-center w-100">




                            <div className="bg-white p-6 rounded-lg shadow-lg w-100 ">
                                <div className="bg-white rounded-lg  p-6 w-full max-w-4xl  mb-6">
                                    <h1 className="text-center text-xl font-bold mb-4">Invoice</h1>
                                    <div className="flex justify-between mb-4">
                                        <div>
                                            <p className="text-gray-500 text-start">From</p>
                                            <p className="font-semibold">Muhammad Abdelhamid</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-gray-500 text-start">To</p>
                                            <p className="font-semibold">Muhammad Abdelhamid</p>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="firstGroup grid grid-cols-2 md:grid-cols-7 gap-2 items-center">
                                            <input type="text" value="WALLET321" className="col-span-2 md:col-span-1 border rounded p-2 text-center" readOnly />
                                            <input type="text" value="Rubber wallet - brown" className="col-span-2 md:col-span-2 border rounded p-2 text-center" readOnly />
                                            <input type="text" value="2" className="col-span-1 md:col-span-1 border rounded p-2 text-center" readOnly />
                                            <input type="text" value="$6" className="col-span-1 md:col-span-1 border rounded p-2 text-center" readOnly />
                                            <input type="text" value="%12" className="col-span-1 md:col-span-1 border rounded p-2 text-center" readOnly />
                                            <input type="text" value="$120" className="col-span-1 md:col-span-1 border rounded p-2 text-center" readOnly />
                                        </div>
                                        <div className="secondGroup grid grid-cols-2 md:grid-cols-7 gap-2 items-center mt-3">
                                            <input type="text" value="WALLET321" className="col-span-2 md:col-span-1 border rounded p-2 text-center" readOnly />
                                            <input type="text" value="Rubber wallet - brown" className="col-span-2 md:col-span-2 border rounded p-2 text-center" readOnly />
                                            <input type="text" value="2" className="col-span-1 md:col-span-1 border rounded p-2 text-center" readOnly />
                                            <input type="text" value="$6" className="col-span-1 md:col-span-1 border rounded p-2 text-center" readOnly />
                                            <input type="text" value="%12" className="col-span-1 md:col-span-1 border rounded p-2 text-center" readOnly />
                                            <input type="text" value="$120" className="col-span-1 md:col-span-1 border rounded p-2 text-center" readOnly />
                                        </div>
                                    </div>

                                </div>


                                <h2 className="text-center text-lg font-semibold mb-4">LC conditions</h2>
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

                                <div className="flex justify-center items-center mt-10 bg-white w-100">
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

                            </div>

                        </div>
                        <div className="flex justify-center gap-2">

                            <Link to="/letters2" className='saveNext'>
                                <button className="backBtn   redClr font-semibold px-4 py-2 rounded-lg hover:bg-red-600">Back</button>
                            </Link>
                            <Link to="/letters4" className='saveNext'>
                                <button className=" redBtn redBg text-white font-semibold px-4 py-2 rounded-lg hover:bg-red-600">Next</button>
                            </Link>
                        </div>




                    </div>
                </div>
            </div>
        </>
    );
}
