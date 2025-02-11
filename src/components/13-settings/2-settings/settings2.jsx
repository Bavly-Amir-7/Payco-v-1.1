import React, { useState } from 'react';
import Aside from '../../aside/aside'; // Importing Aside component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Importing FontAwesomeIcon for icons
import { faTrash, faPencilAlt } from '@fortawesome/free-solid-svg-icons'; // Importing specific icons
import './settings2.css'; // Importing CSS for styling
import security from "./Avatar With Options.svg";
import SearchBar from '../../searchBar/searchBar';


export default function Settings2() {
    const [showQRCode, setShowQRCode] = useState(false);

    return (
        <div className="container-fluid lettersContainer flex-center">
            {/* Main container for layout */}
            <div className="row">
                {/* Sidebar Section */}
                <div className="asideComponent col-lg-3 col-md-2" style={{ height: '100%' }}>
                    <Aside />
                </div>

                {/* Main Content Section */}
                <div className="col-12 col-lg-9 col-md-12 mt-5 text-center">
                            <SearchBar />
                   
                    <div className="text-gray-500 mb-6 text-sm" style={{ placeSelf: "start" }}>
                        <span>Dashboard</span>
                        <i className="fas fa-chevron-right mx-2"></i>
                        <span className="font-bold text-gray-700">Settings</span>
                    </div>

                    {/* General Settings Section */}
                    <div className="p-4 whiteBg settings">
                        <div className="p-4">
                            <div className="flex flex-col items-center justify-center bg-white p-4 w-100">
                                <h1 className="text-2xl font-semibold mb-6">Two factor authentication</h1>
                                <div className="justify-between w-100">
                                    <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
                                        <div className="flex flex-col sm:flex-row items-center gap-2 w-full sm:w-1/2 mb-2 sm:mb-0">
                                            <div className="text-lg">Phone Number: 01124102721</div>
                                            <div className="verified">
                                                <i>
                                                    <svg
                                                        width="20"
                                                        height="20"
                                                        viewBox="0 0 20 20"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <circle cx="10" cy="10" r="9.5" stroke="white" />
                                                        <path
                                                            d="M14.5833 6.5L8.85417 12.2292L6.25 9.625"
                                                            stroke="white"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                </i>
                                                <span> VERIFIED</span>
                                            </div>
                                        </div>

                                        <div className="w-full sm:w-auto text-center sm:text-left">
                                            <a
                                                role="button"
                                                className="text-gray-500 underline"
                                                onClick={() => setShowQRCode(false)}
                                                style={{ cursor: "pointer" }}
                                            >
                                                Change
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
                                        <div className="flex flex-col sm:flex-row items-center gap-2 sm:w-auto w-full mb-2 sm:mb-0">
                                            <div className="text-lg">Authenticator App</div>
                                            <div className="unVerified">
                                                <i>
                                                    <svg
                                                        width="20"
                                                        height="20"
                                                        viewBox="0 0 20 20"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M10 3.75V10H15.3125"
                                                            stroke="white"
                                                            strokeMiterlimit="10"
                                                            strokeLinecap="square"
                                                        />
                                                        <path
                                                            d="M1.56875 13.3298C2.39637 15.4303 3.97778 17.1466 6.00373 18.1429C8.02967 19.1393 10.3544 19.3441 12.5234 18.7172C14.6923 18.0904 16.5494 16.677 17.7315 14.7535C18.9135 12.83 19.3356 10.5348 18.9151 8.31657C18.4945 6.09839 17.2617 4.11686 15.4576 2.75948C13.6535 1.4021 11.408 0.766517 9.16012 0.977023C6.91226 1.18753 4.82377 2.22898 3.30308 3.89771C1.78239 5.56645 0.938875 7.74243 0.9375 10.0001"
                                                            stroke="white"
                                                            strokeMiterlimit="10"
                                                        />
                                                        <path
                                                            d="M1.88187 18.4506L1.5625 13.3281L6.46531 15.0325"
                                                            stroke="white"
                                                            strokeMiterlimit="10"
                                                            strokeLinecap="square"
                                                        />
                                                    </svg>
                                                </i>
                                                <span> UNVERIFIED</span>
                                            </div>
                                        </div>

                                        <div className="w-full sm:w-auto text-center sm:text-left">
                                            <a
                                                role="button"
                                                className="text-gray-500 underline"
                                                onClick={() => setShowQRCode(true)}
                                                style={{ cursor: "pointer" }}
                                            >
                                                Verify
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex justify-center mb-6 w-100">
                                        {showQRCode ? (
                                            <div className="qrCodeExample relative bg-gray-200 p-4">
                                                <button
                                                    className="closeQr absolute top-0 right-0 mt-4 mr-4 text-gray-500"
                                                    onClick={() => setShowQRCode(false)}
                                                    style={{ cursor: "pointer" }}
                                                >
                                                    <i>
                                                        <svg
                                                            width="19"
                                                            height="18"
                                                            viewBox="0 0 19 18"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M17.1714 1.85547L2.88018 16.1467"
                                                                stroke="white"
                                                                strokeWidth="2"
                                                                strokeLinecap="round"
                                                            />
                                                            <path
                                                                d="M1.69141 1.85547L15.9826 16.1467"
                                                                stroke="white"
                                                                strokeWidth="2"
                                                                strokeLinecap="round"
                                                            />
                                                        </svg>
                                                    </i>
                                                </button>
                                                <div className="qrImage">
                                                    <img
                                                        src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example"
                                                        alt="QR Code"
                                                        className="w-32 h-32"
                                                    />
                                                </div>
                                                <h2
                                                    className="responsive-margin text-xl uppercase font-bold"
                                                    style={{ color: "#565656" }}
                                                >
                                                    Scan this code with your <br /> authenticator app
                                                </h2>
                                                <div
                                                    className="flex flex-col sm:flex-row sm:gap-4 gap-0 text-xl uppercase gap-2 responsive-margin"
                                                    style={{ color: "#565656" }}
                                                >
                                                    <div>Email: username@email.com</div>
                                                    <div>
                                                        <u>change</u>
                                                    </div>
                                                </div>

                                                <h2 className="mt-2 text-xl uppercase" style={{ color: "#565656" }}>
                                                    <u>Send code Instead</u>
                                                </h2>
                                            </div>
                                        ) : (
                                            <img src={security} alt="security Image" className="w-416 h-416" />
                                        )}
                                    </div>
                                    <div className="text-center text-gray-600">
                                        Enhance account security by enabling two-factor authentication now.<br />
                                        Protect your valuable information.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
