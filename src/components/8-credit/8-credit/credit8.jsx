import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Aside from '../../aside/aside';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPlus, faChevronDown, faChevronUp, faCalendarAlt, faTimes } from '@fortawesome/free-solid-svg-icons';
import "./credit8.css";
import frame from "./Frame.svg"
import selectedImage from "../../images/Group 138.png"
import SearchBar from '../../searchBar/searchBar';



export default function Credit8() {


    const [account, setAccount] = useState("USDT - wallet");

     const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('overview');

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen); 
    };
    const handleLinkClick = (link) => {
        setActiveLink(link); 
        setIsSidebarOpen(false); 
    };


    return (
        <>
            <div className="container-fluid lettersContainer flex-center">
                <div className="row">
                    <div className="col-lg-3 col-md-2 asideComponent " style={{ height: "100%" }}>
                        <Aside
                            isSidebarOpen={isSidebarOpen}  
                            toggleSidebar={toggleSidebar}  
                            activeLink={activeLink}       
                            handleLinkClick={handleLinkClick} 
                        />
                    </div>

                    {/* 
                    <button
                        onClick={toggleSidebar}  // عند الضغط عليه، تقوم الدالة `toggleSidebar` بتغيير حالة القائمة
                        className="text-white bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded  top-4 left-4 lg:hidden"
                    >
                        <i className="fas fa-bars"></i>
                    </button> */}



                    <div className="col-12 col-lg-9 col-md-12 mt-5  text-center">



                    <SearchBar />



                        <div className="md:flex items-center justify-between mb-6 mt-4 md:mt-10 w-full">
                            <div className="flex items-center flex-wrap text-gray-500 gap-3 text-sm md:text-base">
                                {/* Adjust font size for mobile using responsive text utilities */}
                                <span>Dashboard</span>
                                <i className="fas fa-chevron-right"></i>
                                <span>Letters of credit</span>
                                <i className="fas fa-chevron-right"></i>
                                <span>Letters of credit Timeline</span>

                            </div>

                            <div className="mt-4 md:mt-0">
                                {/* Add margin-top for spacing on mobile */}
                                <Link to="/credit9">
                                    <button className="redBg text-white px-4 py-2 rounded-lg flex items-center justify-center">
                                        <svg width="100%" height="30" viewBox="0 0 184 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_2795_51890)">
                                                <rect width="184" height="45" rx="6" fill="#C20101" />
                                                <path d="M26.0078 34.68C25.7145 34.68 25.4611 34.5867 25.2478 34.4C25.0611 34.1867 24.9678 33.9333 24.9678 33.64V26.76H18.2878C17.9945 26.76 17.7411 26.6667 17.5278 26.48C17.3411 26.2667 17.2478 26.0133 17.2478 25.72V22.08C17.2478 21.7867 17.3411 21.5467 17.5278 21.36C17.7411 21.1467 17.9945 21.04 18.2878 21.04H24.9678V14.36C24.9678 14.0667 25.0611 13.8267 25.2478 13.64C25.4611 13.4267 25.7145 13.32 26.0078 13.32H30.0878C30.3811 13.32 30.6211 13.4267 30.8078 13.64C31.0211 13.8267 31.1278 14.0667 31.1278 14.36V21.04H37.7278C38.0211 21.04 38.2611 21.1467 38.4478 21.36C38.6611 21.5467 38.7678 21.7867 38.7678 22.08V25.72C38.7678 26.0133 38.6611 26.2667 38.4478 26.48C38.2611 26.6667 38.0211 26.76 37.7278 26.76H31.1278V33.64C31.1278 33.9333 31.0211 34.1867 30.8078 34.4C30.6211 34.5867 30.3811 34.68 30.0878 34.68H26.0078Z" fill="white" />
                                                <path d="M50.5913 22.9C50.5913 21.8013 50.8366 20.82 51.3273 19.956C51.8286 19.0813 52.5059 18.404 53.3593 17.924C54.2233 17.4333 55.1886 17.188 56.2553 17.188C57.5033 17.188 58.5966 17.508 59.5353 18.148C60.4739 18.788 61.1299 19.6733 61.5033 20.804H58.9273C58.6713 20.2707 58.3086 19.8707 57.8393 19.604C57.3806 19.3373 56.8473 19.204 56.2393 19.204C55.5886 19.204 55.0073 19.3587 54.4953 19.668C53.9939 19.9667 53.5993 20.3933 53.3113 20.948C53.0339 21.5027 52.8953 22.1533 52.8953 22.9C52.8953 23.636 53.0339 24.2867 53.3113 24.852C53.5993 25.4067 53.9939 25.8387 54.4953 26.148C55.0073 26.4467 55.5886 26.596 56.2393 26.596C56.8473 26.596 57.3806 26.4627 57.8393 26.196C58.3086 25.9187 58.6713 25.5133 58.9273 24.98H61.5033C61.1299 26.1213 60.4739 27.012 59.5353 27.652C58.6073 28.2813 57.5139 28.596 56.2553 28.596C55.1886 28.596 54.2233 28.356 53.3593 27.876C52.5059 27.3853 51.8286 26.708 51.3273 25.844C50.8366 24.98 50.5913 23.9987 50.5913 22.9ZM65.6565 21.012C65.9445 20.5427 66.3178 20.1747 66.7765 19.908C67.2458 19.6413 67.7792 19.508 68.3765 19.508V21.86H67.7845C67.0805 21.86 66.5472 22.0253 66.1845 22.356C65.8325 22.6867 65.6565 23.2627 65.6565 24.084V28.5H63.4165V19.636H65.6565V21.012ZM78.1253 23.876C78.1253 24.196 78.1039 24.484 78.0613 24.74H71.5813C71.6346 25.38 71.8586 25.8813 72.2533 26.244C72.6479 26.6067 73.1333 26.788 73.7093 26.788C74.5413 26.788 75.1333 26.4307 75.4853 25.716H77.9013C77.6453 26.5693 77.1546 27.2733 76.4293 27.828C75.7039 28.372 74.8133 28.644 73.7573 28.644C72.9039 28.644 72.1359 28.4573 71.4533 28.084C70.7813 27.7 70.2533 27.1613 69.8693 26.468C69.4959 25.7747 69.3092 24.9747 69.3092 24.068C69.3092 23.1507 69.4959 22.3453 69.8693 21.652C70.2426 20.9587 70.7653 20.4253 71.4373 20.052C72.1093 19.6787 72.8826 19.492 73.7573 19.492C74.5999 19.492 75.3519 19.6733 76.0133 20.036C76.6853 20.3987 77.2026 20.916 77.5653 21.588C77.9386 22.2493 78.1253 23.012 78.1253 23.876ZM75.8053 23.236C75.7946 22.66 75.5866 22.2013 75.1813 21.86C74.7759 21.508 74.2799 21.332 73.6933 21.332C73.1386 21.332 72.6693 21.5027 72.2853 21.844C71.9119 22.1747 71.6826 22.6387 71.5973 23.236H75.8053ZM79.1842 24.036C79.1842 23.14 79.3602 22.3453 79.7122 21.652C80.0749 20.9587 80.5603 20.4253 81.1683 20.052C81.7869 19.6787 82.4749 19.492 83.2323 19.492C83.8936 19.492 84.4696 19.6253 84.9603 19.892C85.4616 20.1587 85.8616 20.4947 86.1603 20.9V19.636H88.4163V28.5H86.1603V27.204C85.8723 27.62 85.4723 27.9667 84.9603 28.244C84.4589 28.5107 83.8776 28.644 83.2163 28.644C82.4696 28.644 81.7869 28.452 81.1683 28.068C80.5603 27.684 80.0749 27.1453 79.7122 26.452C79.3602 25.748 79.1842 24.9427 79.1842 24.036ZM86.1603 24.068C86.1603 23.524 86.0536 23.06 85.8403 22.676C85.6269 22.2813 85.3389 21.9827 84.9763 21.78C84.6136 21.5667 84.2243 21.46 83.8083 21.46C83.3923 21.46 83.0083 21.5613 82.6562 21.764C82.3043 21.9667 82.0163 22.2653 81.7923 22.66C81.5789 23.044 81.4723 23.5027 81.4723 24.036C81.4723 24.5693 81.5789 25.0387 81.7923 25.444C82.0163 25.8387 82.3043 26.1427 82.6562 26.356C83.0189 26.5693 83.4029 26.676 83.8083 26.676C84.2243 26.676 84.6136 26.5747 84.9763 26.372C85.3389 26.1587 85.6269 25.86 85.8403 25.476C86.0536 25.0813 86.1603 24.612 86.1603 24.068ZM93.212 21.476V25.764C93.212 26.0627 93.2813 26.2813 93.42 26.42C93.5693 26.548 93.8147 26.612 94.156 26.612H95.196V28.5H93.788C91.9 28.5 90.956 27.5827 90.956 25.748V21.476H89.9V19.636H90.956V17.444H93.212V19.636H95.196V21.476H93.212ZM105.047 23.876C105.047 24.196 105.026 24.484 104.983 24.74H98.5031C98.5565 25.38 98.7805 25.8813 99.1751 26.244C99.5698 26.6067 100.055 26.788 100.631 26.788C101.463 26.788 102.055 26.4307 102.407 25.716H104.823C104.567 26.5693 104.076 27.2733 103.351 27.828C102.626 28.372 101.735 28.644 100.679 28.644C99.8258 28.644 99.0578 28.4573 98.3751 28.084C97.7031 27.7 97.1751 27.1613 96.7911 26.468C96.4178 25.7747 96.2311 24.9747 96.2311 24.068C96.2311 23.1507 96.4178 22.3453 96.7911 21.652C97.1645 20.9587 97.6871 20.4253 98.3591 20.052C99.0311 19.6787 99.8045 19.492 100.679 19.492C101.522 19.492 102.274 19.6733 102.935 20.036C103.607 20.3987 104.124 20.916 104.487 21.588C104.86 22.2493 105.047 23.012 105.047 23.876ZM102.727 23.236C102.716 22.66 102.508 22.2013 102.103 21.86C101.698 21.508 101.202 21.332 100.615 21.332C100.06 21.332 99.5911 21.5027 99.2071 21.844C98.8338 22.1747 98.6045 22.6387 98.5191 23.236H102.727ZM120.047 28.5H117.807L112.735 20.836V28.5H110.495V17.316H112.735L117.807 24.996V17.316H120.047V28.5ZM130.5 23.876C130.5 24.196 130.479 24.484 130.436 24.74H123.956C124.01 25.38 124.234 25.8813 124.628 26.244C125.023 26.6067 125.508 26.788 126.084 26.788C126.916 26.788 127.508 26.4307 127.86 25.716H130.276C130.02 26.5693 129.53 27.2733 128.804 27.828C128.079 28.372 127.188 28.644 126.132 28.644C125.279 28.644 124.511 28.4573 123.828 28.084C123.156 27.7 122.628 27.1613 122.244 26.468C121.871 25.7747 121.684 24.9747 121.684 24.068C121.684 23.1507 121.871 22.3453 122.244 21.652C122.618 20.9587 123.14 20.4253 123.812 20.052C124.484 19.6787 125.258 19.492 126.132 19.492C126.975 19.492 127.727 19.6733 128.388 20.036C129.06 20.3987 129.578 20.916 129.94 21.588C130.314 22.2493 130.5 23.012 130.5 23.876ZM128.18 23.236C128.17 22.66 127.962 22.2013 127.556 21.86C127.151 21.508 126.655 21.332 126.068 21.332C125.514 21.332 125.044 21.5027 124.66 21.844C124.287 22.1747 124.058 22.6387 123.972 23.236H128.18ZM144.423 19.636L141.831 28.5H139.415L137.799 22.308L136.183 28.5H133.751L131.143 19.636H133.415L134.983 26.388L136.679 19.636H139.047L140.711 26.372L142.279 19.636H144.423ZM151.688 26.724H155.368V28.5H149.448V17.332H151.688V26.724ZM156.248 22.9C156.248 21.8013 156.493 20.82 156.984 19.956C157.485 19.0813 158.162 18.404 159.016 17.924C159.88 17.4333 160.845 17.188 161.912 17.188C163.16 17.188 164.253 17.508 165.192 18.148C166.13 18.788 166.786 19.6733 167.16 20.804H164.584C164.328 20.2707 163.965 19.8707 163.496 19.604C163.037 19.3373 162.504 19.204 161.896 19.204C161.245 19.204 160.664 19.3587 160.152 19.668C159.65 19.9667 159.256 20.3933 158.968 20.948C158.69 21.5027 158.552 22.1533 158.552 22.9C158.552 23.636 158.69 24.2867 158.968 24.852C159.256 25.4067 159.65 25.8387 160.152 26.148C160.664 26.4467 161.245 26.596 161.896 26.596C162.504 26.596 163.037 26.4627 163.496 26.196C163.965 25.9187 164.328 25.5133 164.584 24.98H167.16C166.786 26.1213 166.13 27.012 165.192 27.652C164.264 28.2813 163.17 28.596 161.912 28.596C160.845 28.596 159.88 28.356 159.016 27.876C158.162 27.3853 157.485 26.708 156.984 25.844C156.493 24.98 156.248 23.9987 156.248 22.9Z" fill="white" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_2795_51890">
                                                    <rect width="100%" height="45" rx="6" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </button>
                                </Link>
                            </div>
                        </div>




                        <div className="relative mb-6 w-100">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="dashedLine border-t-2 border-dashed border-gray-300" style={{ width: "70%" }}></div>
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
                                </div>                                <div className="w-10 h-10 whiteColor redBg rounded-full flex items-center justify-center">2</div>

                                <div className="w-10 h-10  whiteBg rounded-full flex items-center justify-center">3</div>
                            </div>
                        </div>
                        <div className="flex justify-between mb-6 w-100">
                            <div className="col text-center text-sm">Upload Documents</div>
                            <div className="col text-center text-sm">Documents Reviewed</div>
                            <div className="col text-center text-sm">Transfer from escrow</div>
                        </div>





                        <div className="bg-gray-100 flex justify-center items-center w-100">




                            <div className="bg-white p-6 rounded-lg  w-100 ">


                                <div className=" flex items-center justify-center">
                                    <div className="w-100">
                                        {/* Approved Item */}
                                        <div className="greyBg2 p-4 rounded-lg mb-4 flex flex-col md:flex-row items-start md:items-center">
                                            <i className="fas fa-check-circle text-green-500 text-2xl mr-0 md:mr-4 mb-2 md:mb-0"></i>
                                            <div className="flex-1 text-start mb-2 md:mb-0">
                                                <div className="text-sm font-semibold md:text-lg">Beneficiary's Signed Commercial Invoice</div>                                                <div className="text-sm text-gray-500">Approved</div>
                                            </div>
                                            <div className="text-sm text-gray-500">Uploaded: 20/2/2024 1:05 PM</div>
                                        </div>

                                        {/* Rejected Item */}
                                        <div className="greyBg2 p-4 rounded-lg mb-4">
                                            <div className="flex flex-col md:flex-row items-start md:items-center mb-2">
                                                <i className="fas  text-red-500 text-2xl mb-2 md:mb-0 mr-0 md:mr-4"><svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M18.9997 36.416C15.555 36.416 12.1877 35.3945 9.3235 33.4808C6.45934 31.567 4.22701 28.8469 2.90878 25.6644C1.59055 22.4819 1.24565 18.98 1.91767 15.6015C2.5897 12.223 4.24848 9.11967 6.68424 6.6839C9.12 4.24814 12.2234 2.58937 15.6019 1.91734C18.9804 1.24531 22.4823 1.59022 25.6648 2.90845C28.8472 4.22667 31.5673 6.45901 33.4811 9.32317C35.3949 12.1873 36.4164 15.5547 36.4164 18.9993C36.4109 23.6169 34.5742 28.0437 31.3091 31.3088C28.044 34.5739 23.6172 36.4106 18.9997 36.416ZM25.7162 14.5201C25.8674 14.374 25.988 14.1993 26.071 14.0062C26.154 13.813 26.1977 13.6052 26.1995 13.395C26.2013 13.1847 26.1613 12.9763 26.0817 12.7817C26.002 12.5871 25.8845 12.4103 25.7358 12.2616C25.5871 12.113 25.4104 11.9954 25.2158 11.9158C25.0212 11.8362 24.8127 11.7961 24.6025 11.798C24.3922 11.7998 24.1845 11.8435 23.9913 11.9264C23.7981 12.0094 23.6234 12.13 23.4774 12.2813L18.9997 16.7605L14.522 12.2813C14.2234 11.9928 13.8234 11.8333 13.4083 11.8369C12.9932 11.8405 12.596 12.007 12.3025 12.3006C12.0089 12.5941 11.8424 12.9912 11.8388 13.4064C11.8352 13.8215 11.9948 14.2215 12.2832 14.5201L16.7608 18.9993L12.2832 23.4786C12.132 23.6247 12.0113 23.7994 11.9284 23.9925C11.8454 24.1857 11.8017 24.3935 11.7999 24.6037C11.798 24.8139 11.8381 25.0224 11.9177 25.217C11.9973 25.4116 12.1149 25.5884 12.2636 25.7371C12.4122 25.8857 12.589 26.0033 12.7836 26.0829C12.9782 26.1625 13.1867 26.2026 13.3969 26.2007C13.6071 26.1989 13.8149 26.1552 14.0081 26.0723C14.2012 25.9893 14.376 25.8687 14.522 25.7174L18.9997 21.2382L23.4774 25.7174C23.6234 25.8687 23.7981 25.9893 23.9913 26.0723C24.1845 26.1552 24.3922 26.1989 24.6025 26.2007C24.8127 26.2026 25.0212 26.1625 25.2158 26.0829C25.4104 26.0033 25.5871 25.8857 25.7358 25.7371C25.8845 25.5884 26.002 25.4116 26.0817 25.217C26.1613 25.0224 26.2013 24.8139 26.1995 24.6037C26.1977 24.3935 26.154 24.1857 26.071 23.9925C25.988 23.7994 25.8674 23.6247 25.7162 23.4786L21.2385 18.9993L25.7162 14.5201Z" fill="black" />
                                                </svg>

                                                </i>
                                                <div className="flex-1 text-start mb-2 md:mb-0">
                                                    <div className="text-sm font-semibold md:text-lg">Beneficiary's Signed Commercial Invoice</div>

                                                    <div className="text-sm text-gray-500">Reason of rejection: Doesn't match</div>
                                                </div>
                                                <button className="redClr whiteBg  ReplaceBtn px-4 py-2 rounded w-full md:w-auto pt-6">
                                                    Replace
                                                </button>
                                            </div>
                                            <div className="flex flex-col md:flex-row items-start md:items-center w-100 justify-between">
                                                <div className="flex items-center mb-4 md:mb-0">
                                                    <img src={selectedImage} alt="Document thumbnail" className="mr-2" />
                                                </div>
                                                <div className="text-sm text-gray-500">Last review: 20/2/2024 1:05 PM</div>
                                            </div>
                                        </div>



                                        {/* Approved Item */}
                                        <div className="greyBg2 p-4 rounded-lg mb-4 flex flex-col md:flex-row items-start md:items-center">
                                            <i className="fas fa-check-circle text-green-500 text-2xl mr-0 md:mr-4 mb-2 md:mb-0"></i>
                                            <div className="flex-1 text-start mb-2 md:mb-0">
                                                <div className="text-sm font-semibold md:text-lg">Beneficiary's Signed Commercial Invoice</div>                                                <div className="text-sm text-gray-500">Approved</div>
                                            </div>
                                            <div className="text-sm text-gray-500">Uploaded: 20/2/2024 1:05 PM</div>
                                        </div>

                                        <div className="greyBg2 p-4 rounded-lg mb-4 flex flex-col md:flex-row items-start md:items-center">
                                            <i className="fas fa-check-circle text-green-500 text-2xl mr-0 md:mr-4 mb-2 md:mb-0"></i>
                                            <div className="flex-1 text-start mb-2 md:mb-0">
                                                <div className="text-sm font-semibold md:text-lg">Beneficiary's Signed Commercial Invoice</div>                                                <div className="text-sm text-gray-500">Approved</div>
                                            </div>
                                            <div className="text-sm text-gray-500">Uploaded: 20/2/2024 1:05 PM</div>
                                        </div>


                                    </div>
                                </div>






                            </div>

                        </div>


                        <div className="flex justify-center gap-2">


                            <Link to="/credit7" className='saveNext'>
                            <button className="backBtn   redClr font-semibold px-4 py-2 rounded-lg hover:bg-red-600">Back</button>
                            </Link>
                        </div>




                    </div>
                </div>
            </div>
        </>
    );
}
