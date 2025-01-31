import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Aside from '../../aside/aside';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPlus, faChevronDown, faChevronUp, faCalendarAlt, faTimes } from '@fortawesome/free-solid-svg-icons';
import "./invoices1.css";
import Calender from '../../calender/calender';

export default function Invoices1() {


    const [isModalOpen, setIsModalOpen] = useState(false); // حالة لفتح وغلق المودال
    const [isModalOpen2, setIsModalOpen2] = useState(false); // حالة لفتح وغلق المودال
    const [dateOfBirth, setDateOfBirth] = useState("1 / 31 / 1998"); // لتحديث التاريخ

    const handleDateChange = (newDate) => {
        setDateOfBirth(newDate); // تحديث التاريخ بعد اختياره من Calender
        setIsModalOpen(false); // إغلاق المودال
    };



    const [activeTab, setActiveTab] = useState("new");

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

                            <span className="font-bold text-gray-700">invoices</span>
                        </div>
                        <div className="relative mb-6 w-100">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="dashedLine border-t-2 border-dashed border-gray-300" style={{ width: "80%" }}></div>
                            </div>
                            <div className="relative flex" style={{ justifyContent: "space-around" }}>
                                <div className="w-10 h-10 whiteColor redBg rounded-full flex items-center justify-center">4</div>
                                <div className="w-10 h-10 greyColor whiteBg rounded-full flex items-center justify-center">2</div>
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
                        <div className="p-4 whiteBg">
                            {/* Tabs */}
                            <div className="flex border-b w-100 buttons-container" style={{ placeContent: "center" }}>
                                <button
                                    onClick={() => setActiveTab("new")}
                                    className={`p-2 ${activeTab === "new" ? "bg-red-500 text-white" : "bg-gray-100"} col-button`}
                                >
                                    Create new invoice
                                </button>
                                <button
                                    onClick={() => setActiveTab("existing")}
                                    className={`p-2 ${activeTab === "existing" ? "bg-red-500 text-white" : "bg-gray-100"} col-button`}
                                >
                                    Choose from existing invoices
                                </button>
                                <button
                                    onClick={() => setActiveTab("import")}
                                    className={`p-2 ${activeTab === "import" ? "bg-red-500 text-white" : "bg-gray-100"} col-button`}
                                >
                                    Import Invoice
                                </button>
                            </div>


                            {/* Content */}
                            <div className="mt-4">
                                {activeTab === "new" && (
                                    <div>
                                        {/* محتوى Create new invoice */}
                                        <div className="">
                                            <div className='     .bg-gray-100'>
                                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                                                    <div>
                                                        <label htmlFor="recipient-name" className="block text-gray-700">Recipient Name</label>
                                                        <div className="flex items-center border border-gray-300 rounded-lg">
                                                            <span className="px-3 text-gray-500"><i className="fas fa-user"></i></span>
                                                            <span>|</span>
                                                            <input type="text" id="recipient-name" className="flex-grow p-2 border-none focus:outline-none" placeholder='beshoi' />

                                                        </div>
                                                    </div>
                                                    <div>
                                                        <label htmlFor="reference-number" className="block text-gray-700">Reference Number (optional)</label>
                                                        <input type="text" id="reference-number" className="w-full border border-gray-300 rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500" defaultValue="12345" />
                                                    </div>


                                                    <div>
                                                        <label htmlFor="invoice-date" className="block text-gray-700">
                                                            Invoice Date (optional)
                                                        </label>
                                                        <div className="d-flex mail">
                                                            <div
                                                                className="iconGap flex items-center borderInput rounded p-2 cursor-pointer"
                                                                style={{ width: "100%", border: "1px solid red" }}
                                                                onClick={() => setIsModalOpen(true)} // فتح المودال عند الضغط على الأيقونة
                                                            >

                                                                <input
                                                                    type="text"
                                                                    className="flex-1 outline-none placeholder:text-sm"
                                                                    placeholder={dateOfBirth}
                                                                    readOnly
                                                                />
                                                                <i className="fas fa-calendar-alt ml-2"></i>
                                                            </div>
                                                        </div>

                                                        {isModalOpen && (
                                                            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                                                                <div className="bg-white rounded-lg shadow-lg p-4">
                                                                    <Calender
                                                                        onDateSelect={handleDateChange} // تمرير الدالة لتحديث التاريخ
                                                                    />
                                                                    <button
                                                                        className="mt-4 bg-gray-300 text-gray-700 py-2 px-4 rounded"
                                                                        onClick={() => setIsModalOpen(false)}
                                                                    >
                                                                        Close
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>



                                                </div>
                                                <div className="overflow-x-auto">
                                                    <table className="min-w-full bg-gray-100 rounded-md">
                                                        <thead>
                                                            <tr className="hidden md:table-row">
                                                                <th className="py-2 px-4 text-left text-gray-700">Item code</th>
                                                                <th className="py-2 px-4 text-left text-gray-700">Description</th>
                                                                <th className="py-2 px-4 text-left text-gray-700">QTY</th>
                                                                <th className="py-2 px-4 text-left text-gray-700">Unit prices</th>
                                                                <th className="py-2 px-4 text-left text-gray-700">Tax rate</th>
                                                                <th className="py-2 px-4 text-left text-gray-700">Amount</th>
                                                                <th className="py-2 px-4 text-left text-gray-700"></th>
                                                            </tr>
                                                        </thead>
                                                        <tbody className="bg-gray-100">
                                                            {[...Array(3)].map((_, index) => (
                                                                <tr className="block md:table-row mb-4 md:mb-0" key={index}>
                                                                    <td className="py-2 px-4 w-full md:w-1/6 block md:table-cell">
                                                                        <span className="md:hidden block text-gray-700 font-semibold">Item code</span>
                                                                        <input type="text" className="w-full border border-gray-300 rounded-md py-1 px-2 text-gray-700" />
                                                                    </td>
                                                                    <td className="py-2 px-4 w-full md:w-1/3 block md:table-cell">
                                                                        <span className="md:hidden block text-gray-700 font-semibold">Description</span>
                                                                        <input type="text" className="w-full border border-gray-300 rounded-md py-1 px-2 text-gray-700" />
                                                                    </td>
                                                                    <td className="py-2 px-4 w-full md:w-1/12 block md:table-cell">
                                                                        <span className="md:hidden block text-gray-700 font-semibold">QTY</span>
                                                                        <input type="text" className="w-full border border-gray-300 rounded-md py-1 px-2 text-gray-700" />
                                                                    </td>
                                                                    <td className="py-2 px-4 w-full md:w-1/6 block md:table-cell">
                                                                        <span className="md:hidden block text-gray-700 font-semibold">Unit prices</span>
                                                                        <input type="text" className="w-full border border-gray-300 rounded-md py-1 px-2 text-gray-700" />
                                                                    </td>
                                                                    <td className="py-2 px-4 w-full md:w-1/12 block md:table-cell">
                                                                        <span className="md:hidden block text-gray-700 font-semibold">Tax rate</span>
                                                                        <input type="text" className="w-full border border-gray-300 rounded-md py-1 px-2 text-gray-700" />
                                                                    </td>
                                                                    <td className="py-2 px-4 w-full md:w-1/6 block md:table-cell">
                                                                        <span className="md:hidden block text-gray-700 font-semibold">Amount</span>
                                                                        <input type="text" className="w-full border border-gray-300 rounded-md py-1 px-2 text-gray-700" />
                                                                    </td>
                                                                    <td className="py-2 px-4 text-center w-full md:w-1/12 block md:table-cell">
                                                                        <button className="text-red-500">
                                                                            <FontAwesomeIcon icon={faTimes} />
                                                                        </button>
                                                                    </td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div className="mt-4">
                                                    <button className="w-full py-2 border bg-gray-100 border-red-500 text-red-500 rounded-md">
                                                        <FontAwesomeIcon icon={faPlus} />
                                                    </button>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                )}
                                {activeTab === "existing" && (
                                    <div>
                                        <div>
                                            {/* محتوى Create new invoice */}
                                            <div className="p-6">
                                                <div className=" p-6">
                                                    <div className="theBorder bg-white p-6 rounded-lg ">
                                                        <div className="mb-4">
                                                            <label htmlFor="recipient-name" className="block text-gray-700 font-semibold mb-2">Recipient Name</label>
                                                            <div className="flex flex-col sm:flex-row items-center border border-gray-300 rounded-lg">
                                                                <div className="flex items-center w-full">
                                                                    <span className="px-3 text-gray-500"><i className="fas fa-user"></i></span>
                                                                    <span>|</span>
                                                                    <input type="text" id="recipient-name" className="flex-grow p-2 border-none focus:outline-none w-full sm:w-auto" />
                                                                </div>
                                                                <button className="bg-red-600 text-white px-4 py-2 rounded-b-lg sm:rounded-b-none sm:rounded-r-lg w-full sm:w-auto  sm:mt-0">Search</button>
                                                            </div>
                                                        </div>

                                                        <div className="mb-4">
                                                            <div className="flex justify-between items-center">
                                                                <span className="text-gray-700 font-semibold">Advanced Search</span>
                                                                <i className="fas fa-chevron-down"></i>
                                                            </div>
                                                        </div>
                                                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                                                            <div>
                                                                <label htmlFor="reference-num" className="block text-gray-700 mb-2">Reference Num.</label>
                                                                <input type="text" id="reference-num" className="w-full p-2 border border-gray-300 rounded-lg" />
                                                            </div>
                                                            <div>
                                                                <label htmlFor="item-code" className="block text-gray-700 mb-2">Item code</label>
                                                                <input type="text" id="item-code" className="w-full p-2 border border-gray-300 rounded-lg" />
                                                            </div>
                                                            <div>
                                                                <label htmlFor="invoice-date" className="block text-gray-700 mb-2">Invoice Date</label>
                                                                <input type="text" id="invoice-date" className="w-full p-2 border border-gray-300 rounded-lg" />
                                                            </div>
                                                            <div>
                                                                <label htmlFor="unit-price" className="block text-gray-700 mb-2">Unit Price</label>
                                                                <input type="text" id="unit-price" className="w-full p-2 border border-gray-300 rounded-lg" />
                                                            </div>
                                                        </div>

                                                        <div>
                                                            <a href="#" className="text-red-600">Clear all filters</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="overflow-x-auto bg-gray-100 p-4 rounded-lg shadow-md">
                                                    <table className="min-w-full rounded-md bg-white">
                                                        <thead className="hidden md:table-header-group">
                                                            <tr>
                                                                <th className="py-2 px-4 text-left text-gray-700">Select</th>
                                                                <th className="py-2 px-4 text-left text-gray-700">Item code</th>
                                                                <th className="py-2 px-4 text-left text-gray-700">Description</th>
                                                                <th className="py-2 px-4 text-left text-gray-700">QTY</th>
                                                                <th className="py-2 px-4 text-left text-gray-700">Unit Price</th>
                                                                <th className="py-2 px-4 text-left text-gray-700">Tax Rate</th>
                                                                <th className="py-2 px-4 text-left text-gray-700">Amount</th>
                                                                <th className="py-2 px-4 text-left text-gray-700">Remove</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody className="bg-gray-100">
                                                            {[...Array(5)].map((_, index) => (
                                                                <tr
                                                                    key={index}
                                                                    className="checkBoxes bg-white border-b border-gray-200 flex flex-col md:table-row md:flex-row space-y-4 md:space-y-0 mb-6"
                                                                >
                                                                    <td className="boxes py-1 px-1 text-center w-100 md:w-10 flex items-center md:justify-center">
                                                                        {/* Unique ID for each checkbox */}
                                                                        <input
                                                                            type="checkbox"
                                                                            id={`custom-checkbox-${index}`}
                                                                            className="hidden peer"
                                                                        />
                                                                        <label
                                                                            htmlFor={`custom-checkbox-${index}`}
                                                                            className="w-6 h-6 flex items-center justify-center rounded border border-gray-300 bg-white cursor-pointer"
                                                                        >
                                                                            <svg
                                                                                className="hidden peer-checked:block w-4 h-4"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                viewBox="0 0 16 12"
                                                                                fill="none"
                                                                            >
                                                                                <path
                                                                                    d="M14.3333 1L5.16667 10.1667L1 6"
                                                                                    stroke="#C80000"
                                                                                    strokeWidth="2"
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                />
                                                                            </svg>
                                                                        </label>
                                                                    </td>


                                                                    <td className="py-1 px-1 w-full md:w-24">
                                                                        <input type="text" className="border border-gray-300 rounded-md p-1 text-gray-700 w-full" value="SH_White" />
                                                                    </td>
                                                                    <td className="py-1 px-1 w-full md:w-48">
                                                                        <input type="text" className="border border-gray-300 rounded-md p-1 text-gray-700 w-full" value="Laced Rubber shoe - white" />
                                                                    </td>
                                                                    <td className="py-1 px-1 w-full md:w-20">
                                                                        <input type="number" className="border border-gray-300 rounded-md p-1 text-gray-700 w-full" value="2" />
                                                                    </td>
                                                                    <td className="py-1 px-1 w-full md:w-24">
                                                                        <input type="button" className="border border-gray-300 rounded-md p-1 text-gray-700 w-full" value="$15.00" />
                                                                    </td>
                                                                    <td className="py-1 px-1 w-full md:w-20">
                                                                        <input type="number" className="border border-gray-300 rounded-md p-1 text-gray-700 w-full" value="2" />
                                                                    </td>
                                                                    <td className="py-1 px-1 w-full md:w-24">
                                                                        <input type="text" className="border border-gray-300 rounded-md p-1 text-gray-700 w-full" value="$150.00" />
                                                                    </td>
                                                                    <td className="py-1 px-1 text-center w-full md:w-100 flex items-center justify-center md:justify-center">
                                                                        <button className="text-red-500">
                                                                            <FontAwesomeIcon icon={faTimes} />
                                                                        </button>
                                                                    </td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                    <div className="mt-4 flex items-center justify-between">
                                                        <span className="text-gray-700 font-semibold">Total Amount: 12112</span>
                                                        <button className="bg-white text-red-500 border border-red-500 px-4 py-2 rounded-md">View all supplier invoices</button>
                                                    </div>
                                                </div>


                                                <div className="mt-4">
                                                    <button className="w-full py-2 border whiteBg border-red-500 text-red-500 rounded-md">
                                                        <FontAwesomeIcon icon={faPlus} />
                                                    </button>
                                                </div>


                                            </div>
                                        </div>
                                    </div>
                                )}
                                {activeTab === "import" && (
                                    <div>
                                        {/* محتوى Import Invoice */}
                                        <p>هنا محتوى استيراد فاتورة.</p>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="flex justify-center gap-2">

                            <Link

                                //! here we made a comment to D-NONE THE NEXT LINK FOR ESCROW8 COMPONENT

                                // to="/escrow8"


                                className='saveNext'>
                                <button className="backBtn   redClr font-semibold px-4 py-2 rounded-lg hover:bg-red-600">Back</button>
                            </Link>



                            <Link to="/wallets1" className='saveNext'>
                                <button className=" redBtn redBg text-white font-semibold px-4 py-2 rounded-lg hover:bg-red-600">Next</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
