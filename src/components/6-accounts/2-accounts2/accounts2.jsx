import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPlus, faChevronRight, faChevronDown, faChevronUp, faCalendarAlt, faTimes, faBell, faArrowRight, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import Aside from '../../aside/aside';
import "./accounts2.css";
import { Link } from 'react-router-dom';


export default function Accounts2() {
    const [activeTab, setActiveTab] = useState('business');

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
                                    <FontAwesomeIcon icon={faBell} className="text-gray-400" />
                                    <div className="flex items-center space-x-2">
                                        <img src="https://storage.googleapis.com/a1aa/image/ScBMkEoJ3Gr6HVjcF2CrdyIti56QzXDWjyir38s7YUdcXC8E.jpg" alt="User profile" className="w-10 h-10 rounded-full" width="40" height="40" />
                                        <div className="flex flex-col items-start">
                                            <span className="text-gray-700">John Smith</span>
                                        </div>
                                        <FontAwesomeIcon icon={faChevronDown} className="text-gray-400" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-gray-500 mb-6 text-start">
                            <span>Dashboard</span> <FontAwesomeIcon icon={faChevronRight} className="mx-2" /> <span className="font-bold text-gray-700">New Transfer</span>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-8 ">
                            <div className="flex justify-center mb-8">
                                <div className="flex space-x-4 bg-gray-100 rounded-full p-1">
                                    <button
                                        id="business-button"
                                        className={`py-2 px-4 rounded-full font-bold ${activeTab === 'business' ? 'bg-white text-red-500' : 'text-gray-500'}`}
                                        onClick={() => setActiveTab('business')}
                                    >
                                        Business
                                    </button>
                                    <button
                                        id="consumer-button"
                                        className={`py-2 px-4 rounded-full font-bold ${activeTab === 'consumer' ? 'bg-white text-red-500' : 'text-gray-500'}`}
                                        onClick={() => setActiveTab('consumer')}
                                    >
                                        Consumer
                                    </button>
                                </div>
                            </div>

                            {activeTab === 'business' && (
                                <div id="business-tab">
                                    <div className="grid grid-cols-2 gap-4 mb-6">
                                        <div>
                                            <label className="block text-gray-700 mb-2">Recipient Name</label>
                                            <input type="text" value="John Smith" className="w-full border border-gray-300 rounded-lg p-2" readOnly />
                                        </div>
                                        <div>
                                            <label className="block text-gray-700 mb-2">Recipient Email</label>
                                            <input type="text" value="john.smith@example.com" className="w-full border border-gray-300 rounded-lg p-2" readOnly />
                                        </div>
                                    </div>
                                    <div className="mb-6">
                                        <label className="block text-gray-700 mb-2">Select account</label>
                                        <select className="w-full border border-gray-300 rounded-lg p-2">
                                            <option>Bitcoin (SwgWit) Wallet</option>
                                        </select>
                                    </div>
                                    <div className="flex flex-col items-center justify-between mb-6 space-y-4 md:flex-row md:space-y-0">
                                        <div className="flex flex-col items-center space-y-2">
                                            <input type="text" value="$120,000" className="w-32 border border-gray-300 rounded-lg p-2 text-center" readOnly />
                                            <div className="bg-gray-200 text-gray-700 rounded-lg p-2">USD</div>
                                        </div>
                                        <FontAwesomeIcon icon={faArrowRight} className="text-gray-500 md:block hidden" />
                                        <FontAwesomeIcon icon={faArrowDown} className="text-gray-500 md:hidden" />
                                        <div className="flex flex-col items-center space-y-2">
                                            <input type="text" value="$120,000" className="w-32 border border-gray-300 rounded-lg p-2 text-center" readOnly />
                                            <div className="bg-gray-200 text-gray-700 rounded-lg p-2">USD</div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between mb-2">
                                        <div className="text-gray-700">Subtotal</div>
                                        <div className="text-gray-900 font-bold text-lg">$120,000</div>
                                    </div>
                                    <div className="flex justify-between mb-2">
                                        <div className="text-gray-700">Fees (0.5%)</div>
                                        <div className="text-gray-900 font-bold text-lg">$600</div>
                                    </div>
                                    <div className="flex justify-between mb-2">
                                        <div className="text-gray-700">Total</div>
                                        <div className="text-gray-900 font-bold text-lg">$120,600</div>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'consumer' && (
                                <div id="consumer-tab">
                                    <div className="grid grid-cols-2 gap-4 mb-6">
                                        <div>
                                            <label className="block text-gray-700 mb-2">Recipient Name</label>
                                            <input type="text" value="Jane Doe" className="w-full border border-gray-300 rounded-lg p-2" readOnly />
                                        </div>
                                        <div>
                                            <label className="block text-gray-700 mb-2">Recipient Email</label>
                                            <input type="text" value="jane.doe@example.com" className="w-full border border-gray-300 rounded-lg p-2" readOnly />
                                        </div>
                                    </div>
                                    <div className="mb-6">
                                        <label className="block text-gray-700 mb-2">Select account</label>
                                        <select className="w-full border border-gray-300 rounded-lg p-2">
                                            <option>Ethereum Wallet</option>
                                        </select>
                                    </div>
                                    <div className="flex flex-col items-center justify-between mb-6 space-y-4 md:flex-row md:space-y-0">
                                        <div className="flex flex-col items-center space-y-2">
                                            <input type="text" value="$50,000" className="w-32 border border-gray-300 rounded-lg p-2 text-center" readOnly />
                                            <div className="bg-gray-200 text-gray-700 rounded-lg p-2">USD</div>
                                        </div>
                                        <FontAwesomeIcon icon={faArrowRight} className="text-gray-500 md:block hidden" />
                                        <FontAwesomeIcon icon={faArrowDown} className="text-gray-500 md:hidden" />
                                        <div className="flex flex-col items-center space-y-2">
                                            <input type="text" value="$50,000" className="w-32 border border-gray-300 rounded-lg p-2 text-center" readOnly />
                                            <div className="bg-gray-200 text-gray-700 rounded-lg p-2">USD</div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between mb-2">
                                        <div className="text-gray-700">Subtotal</div>
                                        <div className="text-gray-900 font-bold text-lg">$50,000</div>
                                    </div>
                                    <div className="flex justify-between mb-2">
                                        <div className="text-gray-700">Fees (0.5%)</div>
                                        <div className="text-gray-900 font-bold text-lg">$250</div>
                                    </div>
                                    <div className="flex justify-between mb-2">
                                        <div className="text-gray-700">Total</div>
                                        <div className="text-gray-900 font-bold text-lg">$50,250</div>
                                    </div>
                                </div>
                            )}

                        </div>


                        <div className="flex justify-center gap-2">

                            <Link to="/accounts1" className='saveNext'>
                                <button className="backBtn   redClr font-semibold px-4 py-2 rounded-lg hover:bg-red-600">Back</button>
                            </Link>
                            <Link

                                //! here we made a comment to D-NONE THE NEXT LINK FOR LETTERS1 COMPONENT

                                // to="/letters1"



                                
                                className='saveNext'>
                                <button className=" redBtn redBg text-white font-semibold px-4 py-2 rounded-lg hover:bg-red-600">Save & Next</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
