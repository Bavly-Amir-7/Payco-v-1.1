import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Aside from '../../aside/aside';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPlus, faChevronDown, faChevronUp, faCalendarAlt, faTimes } from '@fortawesome/free-solid-svg-icons';
import "./wallets.css";
import SearchBar from '../../searchBar/searchBar';


export default function Wallets1() {
    // Function to copy text to clipboard
    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text).then(() => {
            alert('Copied to clipboard');
        }).catch((err) => {
            console.error('Could not copy text: ', err);
        });
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
                            <span className="font-bold text-gray-700">Wallets</span>
                        </div>

                        <div className="p-4 whiteBg">
                            <div className="flex flex-col items-center mt-10 px-4 w-100">
                                <h1 className="text-2xl font-semibold mb-6">Wallet Addresses</h1>

                                {/* Bitcoin Wallet */}
                                <div className="w-full  bg-gray-100 p-4 rounded-lg mb-4 flex flex-col md:flex-row items-center md:items-start">
                                    <div className="flex items-center mb-4 md:mb-0 md:mr-4">
                                        <div className="bg-gray-300 p-2 rounded-full">
                                            <i className="fab fa-bitcoin text-2xl"></i>
                                        </div>
                                    </div>
                                    <div className="flex-grow mb-4 md:mb-0">
                                        <h2 className="font-semibold">Bitcoin (SegWit) Wallet Address</h2>
                                        <p className="break-all">j238jjfh9723h78w7yef23fj8292j238jjfh9723h78w7yef23fj8292</p>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <i
                                            className="fas fa-copy text-2xl cursor-pointer"
                                            onClick={() => copyToClipboard('j238jjfh9723h78w7yef23fj8292j238jjfh9723h78w7yef23fj8292')}
                                        ></i>
                                        <i className="fas fa-qrcode text-2xl"></i>
                                    </div>
                                </div>

                                {/* Ethereum Wallet */}
                                <div className="w-full  bg-gray-100 p-4 rounded-lg flex flex-col md:flex-row items-center md:items-start">
                                    <div className="flex items-center mb-4 md:mb-0 md:mr-4">
                                        <div className="bg-gray-300 p-2 rounded-full">
                                            <i className="fab fa-bitcoin text-2xl"></i>
                                        </div>
                                    </div>
                                    <div className="flex-grow mb-4 md:mb-0">
                                        <h2 className="font-semibold">Ethereum Wallet Address</h2>
                                        <p className="break-all">j238jjfh9723h78w7yef23fj8292j238jjfh9723h78w7yef23fj8292</p>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <i
                                            className="fas fa-copy text-2xl cursor-pointer"
                                            onClick={() => copyToClipboard('j238jjfh9723h78w7yef23fj8292j238jjfh9723h78w7yef23fj8292')}
                                        ></i>
                                        <i className="fas fa-qrcode text-2xl"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
