import React, { useState } from 'react';
import Aside from '../../aside/aside';
import "./accounts.css";
import { BarChart } from '@mui/x-charts/BarChart';
import recptImage from "./Ellipse 7.svg";
import { Link } from 'react-router-dom';

import notFound from "./No Results@3x.svg";
import SearchBar from '../../searchBar/searchBar';



export default function Accounts1() {

    const [chartWidth, chageChartWidth] = useState(true);

    const [عرضغيرموجود, تغييرعرض] = useState(false);
    const [coin, changeCoin] = useState('Bitcoin');

    const currencies = {
        Bitcoin: {
            balance: '150,000.00',
            unit: 'BT',
            sent: '150,000.00',
            received: '150,000.00'
        },
        Ethereum: {
            balance: '200,000.00',
            unit: 'ETH',
            sent: '200,000.00',
            received: '200,000.00'
        },
        USDP: {
            balance: '300,000.00',
            unit: 'USDP',
            sent: '300,000.00',
            received: '300,000.00'
        },
        All: {
            balance: '650,000.00',
            unit: 'ALL',
            sent: '650,000.00',
            received: '650,000.00'
        }
    };

    const currency = currencies[coin];

    const [year, setYear] = React.useState(2024);

    const incrementYear = () => {
        setYear(year + 1);
    };

    const decrementYear = () => {
        setYear(year - 1);
    };




    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="asideComponent col-lg-3 col-md-2" style={{ height: "100%" }}>
                        <Aside />
                    </div>

                    <div className="col-12 col-lg-9 col-md-12 mt-5" style={{ placeItems: "center" }}>
                            <SearchBar />

                        <div className="">
                            



                            <div className="flex justify-between">

                                <h1 className="text-2xl font-bold mb-2">Welcome back, John</h1>
                                <Link to="/accounts2" className="">

                                    <button className="redBg text-white px-4 py-2 rounded-lg mt-1">send/receive</button>
                                </Link>

                            </div>
                            <div className="text-gray-500 mb-6">
                                <span>Dashboard</span> <i className="fas fa-chevron-right mx-2"></i> <span className="font-bold text-gray-700">Accounts</span>
                            </div>


                            <div className="charts grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
                                <div className="charts grid grid-cols-1 lg:grid-cols-1 gap-4 ">
                                    <div className="bg-white rounded-lg shadow-lg p-6">
                                        <div className="flex justify-between items-center mb-3">
                                            <h2 className="text-xl font-semibold">Accounts</h2>
                                            <button onClick={() => تغييرعرض(!عرضغيرموجود)} className="text-gray-500">
                                                View Details
                                            </button>
                                        </div>
                                        <div className="flex mb-2">
                                            {Object.keys(currencies).map((key) => (
                                                <button
                                                    key={key}
                                                    onClick={() => changeCoin(key)}
                                                    className={`px-3 py-1 rounded-full ${coin === key ? 'bg-red-200 text-red-600' : 'text-gray-500'}`}
                                                >
                                                    {key}
                                                </button>
                                            ))}
                                        </div>
                                        <div className="mb-2">
                                            <div className="text-3xl font-bold">
                                                {currency.balance} <span className="text-gray-500 text-xl">{currency.unit}</span>
                                            </div>
                                            <div className="flex justify-between items-center mb-3">
                                                <div>
                                                    <div className="text-gray-500">Balance</div>
                                                    <div className="text-sm text-gray-400">6% raise than last month</div>
                                                </div>
                                                <div>
                                                    <button className="p-2 rounded-full">
                                                        <i>
                                                            <svg width="49" height="45" viewBox="0 0 49 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <ellipse opacity="0.4" cx="24.7722" cy="22.5" rx="23.8601" ry="22.5" fill="#F6D6D6" />
                                                                <path d="M32.1432 14.9162C32.0982 14.3737 31.6093 13.9715 31.0511 14.0178L21.9545 14.7718C21.3963 14.8181 20.9803 15.2954 21.0252 15.8378C21.0702 16.3803 21.5592 16.7826 22.1174 16.7363L30.2032 16.066L30.8546 23.9239C30.8995 24.4664 31.3885 24.8686 31.9467 24.8224C32.5049 24.7761 32.921 24.2988 32.876 23.7563L32.1432 14.9162ZM19.1844 30.2271L31.9047 15.6353L30.3602 14.3647L17.6398 28.9565L19.1844 30.2271Z" fill="#C20101" />
                                                            </svg>
                                                        </i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 gap-2 w-100">
                                            {عرضغيرموجود ? (
                                                <div className='notFoundArea w-100'>

                                                    <img src={notFound} alt="not found" style={{ width: "100px", placeSelf: "center" }} />
                                                    <p className='text-center w-100'  >You have no transactions yet</p>
                                                </div>
                                            ) : (
                                                <div className="sentAndRec grid grid-cols-2 gap-2 w-100 " style={{ paddingTop: "50px" }}>
                                                    <div className="accountsSent p-4 rounded-lg">
                                                        <div className=" flex justify-between items-center ">
                                                            <div className="">Sent</div>
                                                            <button className="bg-white text-red-600 p-1 rounded-full">
                                                                <i className="fas fa-arrow-up"></i>
                                                            </button>
                                                        </div>
                                                        <div className=" font-bold ">$ {currency.sent}</div>
                                                        <div className="text-sm ">6% raise than last month</div>
                                                    </div>
                                                    <div className="accountsRecived p-4 rounded-lg">
                                                        <div className="flex justify-between items-center ">
                                                            <div className="">Received</div>
                                                            <button className=" p-1 rounded-full">
                                                                <i className="fas fa-arrow-up"></i>
                                                            </button>
                                                        </div>
                                                        <div className=" font-bold ">$ {currency.received}</div>
                                                        <div className="text-sm ">6% raise than last month</div>
                                                    </div>

                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* باقي المحتوى هنا */}
                                </div>

                                <div className="bg-white p-6 rounded-lg border border-gray-200">
                                    <div className="flex justify-between items-center mb-3">
                                        <h2 className="text-xl font-bold mb-4">Balance Overview</h2>
                                        <button className="text-gray-500" onClick={() => chageChartWidth(!chartWidth)}>View Details</button>
                                    </div>

                                    <div className="flex mb-4 justify-between">
                                        <div className="flex items-center space-x-4 ">
                                            <div className="flex items-center">
                                                <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: '#B71C1C' }}></div>
                                                <span className="text-gray-800 font-semibold">Sent</span>
                                            </div>
                                            <div className="flex items-center">
                                                <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: '#F8BBD0' }}></div>
                                                <span className="text-gray-800 font-semibold">Received</span>
                                            </div>
                                        </div>

                                        <div className="yearBtn flex items-center justify-center bg-red-100 p-2 rounded-lg">
                                            <button className="text-red-600" onClick={decrementYear}>
                                                <i><svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.710803 7.8416C0.0976085 7.44807 0.097609 6.55193 0.710803 6.1584L10.0044 0.19415C10.6699 -0.232974 11.5445 0.244932 11.5445 1.03575L11.5445 12.9643C11.5445 13.7551 10.6699 14.233 10.0044 13.8058L0.710803 7.8416Z" fill="#C20101" /></svg></i>
                                            </button>
                                            <span className="mx-4 text-gray-700">{year}</span>
                                            <button onClick={incrementYear}>
                                                <i><svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.2081 7.8416C11.8213 7.44807 11.8213 6.55193 11.2081 6.1584L1.91456 0.194149C1.24901 -0.232974 0.374459 0.244932 0.374459 1.03575L0.374458 12.9643C0.374458 13.7551 1.24901 14.233 1.91456 13.8058L11.2081 7.8416Z" fill="#C20101" /></svg></i>
                                            </button>
                                        </div>
                                    </div>

                                    <div className="flex justify-between items-end">
                                        {chartWidth ? (
                                            <BarChart
                                                xAxis={[
                                                    {
                                                        scaleType: 'band',
                                                        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
                                                    },
                                                ]}
                                                series={[
                                                    { data: [15, 5, 25, 30, 10], color: '#B71C1C' }, // Sent (Dark Red)
                                                    { data: [20, 3, 15, 20, 8], color: '#F8BBD0' },  // Received (Light Pink)
                                                ]}
                                                barwidth={12} // Slightly wider bars
                                                slots={{
                                                    bar: (props) => {
                                                        const { style, ownerState } = props;
                                                        const str = JSON.stringify(style);
                                                        const arr = JSON.parse(str);
                                                        const { x, y, height, width } = arr;

                                                        const radius = 8;
                                                        const barwidth = 15;

                                                        const d = `
                                                   M${x + radius},${y} 
                                                   h${barwidth - 2 * radius} 
                                                   a${radius},${radius} 0 0 1 ${radius},${radius}
                                                   v${height - 2 * radius} 
                                                   a${radius},${radius} 0 0 1 ${-radius},${radius} 
                                                   h${2 * radius - barwidth} 
                                                   a${radius},${radius} 0 0 1 ${-radius},${-radius} 
                                                   v${2 * radius - height} 
                                                   a${radius},${radius} 0 0 1 ${radius},${-radius} 
                                                   z
                                               `;

                                                        return <path d={d} fill={ownerState.color}></path>;
                                                    },
                                                }}
                                                width={500}
                                                height={270}
                                            />
                                        ) : (
                                            <div className="flex flex-col items-center w-100">
                                                <img className='w-50' src={notFound} alt="not found" style={{ margin: "0 auto" }} />
                                                <p className="text-gray-500 text-center">Analytics will be shown here once you start using payco services</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white p-6 rounded-lg border border-gray-200">
                                <div className="mb-4">
                                    <h2 className="text-xl font-bold mb-2">Recent transactions</h2>
                                    <div className="flex justify-start space-x-4">
                                        <select className="border border-gray-300 rounded-lg p-2">
                                            <option>All</option>
                                            <option>Sent</option>
                                        </select>
                                        <select className="border border-gray-300 rounded-lg p-2">
                                            <option>Sent</option>
                                        </select>
                                        <button className="text-red-500">See all</button>
                                    </div>
                                </div>
                                <div className="hidden md:grid grid-cols-6 gap-1  text-gray-500 mb-2">
                                    <div className='col-span-1 md:col-span-2'>Recipient/Applicant</div>
                                    <div >Type</div>
                                    <div className=''>Ref Num.</div>
                                    <div>Status</div>
                                    <div>Amount</div>
                                </div>
                                <div className="space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-6 gap-1 items-center">
                                        <div className="col-span-2 md:col-span-2 flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-4">
                                            <img src={recptImage} alt="Recipient profile picture" className="w-10 h-10 rounded-full" />
                                            <div>
                                                <p className="text-gray-500 md:hidden">Recipient/Applicant</p>
                                                <p className="font-bold text-gray-700">Muhammad Abdelhamid</p>
                                                <p className="text-gray-500">10/2/2024</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-1 gap-1">
                                            <p className="text-gray-500 md:hidden">Type</p>
                                            <i className=""><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0.941297 13.9319C0.900519 14.5047 1.29555 14.9995 1.82363 15.0371L10.4291 15.6498C10.9572 15.6874 11.4183 15.2535 11.4591 14.6807C11.4999 14.1079 11.1049 13.6131 10.5768 13.5755L2.92746 13.0309L3.51814 4.73379C3.55892 4.16099 3.16389 3.66617 2.63581 3.62857C2.10774 3.59098 1.64659 4.02485 1.60581 4.59765L0.941297 13.9319ZM14.5316 0.744688L1.27356 13.2185L2.52136 14.7815L15.7794 2.30769L14.5316 0.744688Z" fill="black" />
                                            </svg>
                                            </i>
                                            <p className="text-gray-700">Received</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-500 md:hidden">Type</p>
                                            <p className="text-gray-700">#12345</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-500 md:hidden">Status</p>
                                            <button className='confirmedBtn' >Confirmed</button>
                                        </div>
                                        <div className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-1 gap-1">
                                            <p className="text-gray-500 md:hidden">Amount</p>
                                            <p className="text-gray-700">-$3,000</p>
                                            <button className="viewDetails text-red-500 border border-red-500 rounded-lg w-100 py-2 text-xs">View Details</button>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-6 gap-1 items-center">
                                        <div className="col-span-2 md:col-span-2 flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-4">
                                            <img src={recptImage} alt="Recipient profile picture" className="w-10 h-10 rounded-full" />
                                            <div>
                                                <p className="text-gray-500 md:hidden">Recipient/Applicant</p>
                                                <p className="font-bold text-gray-700">Muhammad Abdelhamid</p>
                                                <p className="text-gray-500">10/2/2024</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-1 gap-1">
                                            <p className="text-gray-500 md:hidden">Type</p>
                                            <i className=""><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0.941297 13.9319C0.900519 14.5047 1.29555 14.9995 1.82363 15.0371L10.4291 15.6498C10.9572 15.6874 11.4183 15.2535 11.4591 14.6807C11.4999 14.1079 11.1049 13.6131 10.5768 13.5755L2.92746 13.0309L3.51814 4.73379C3.55892 4.16099 3.16389 3.66617 2.63581 3.62857C2.10774 3.59098 1.64659 4.02485 1.60581 4.59765L0.941297 13.9319ZM14.5316 0.744688L1.27356 13.2185L2.52136 14.7815L15.7794 2.30769L14.5316 0.744688Z" fill="black" />
                                            </svg>
                                            </i>                                            <p className="text-gray-700">Received</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-500 md:hidden">Type</p>
                                            <p className="text-gray-700">#12345</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-500 md:hidden">Status</p>
                                            <button className='pendingdBtn'>Pending</button>                                        </div>
                                        <div className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-1 gap-1">
                                            <p className="text-gray-500 md:hidden">Amount</p>
                                            <p className="text-gray-700">-$3,000</p>
                                            <button className="text-red-500 border border-red-500 rounded-lg w-100 py-2 text-xs">View Details</button>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-6 gap-1 items-center">
                                        <div className="col-span-2 md:col-span-2 flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-4">
                                            <img src={recptImage} alt="Recipient profile picture" className="w-10 h-10 rounded-full" />
                                            <div>
                                                <p className="text-gray-500 md:hidden">Recipient/Applicant</p>
                                                <p className="font-bold text-gray-700">Muhammad Abdelhamid</p>
                                                <p className="text-gray-500">10/2/2024</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-1 gap-1">
                                            <p className="text-gray-500 md:hidden">Type</p>
                                            <i className=""><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0.941297 13.9319C0.900519 14.5047 1.29555 14.9995 1.82363 15.0371L10.4291 15.6498C10.9572 15.6874 11.4183 15.2535 11.4591 14.6807C11.4999 14.1079 11.1049 13.6131 10.5768 13.5755L2.92746 13.0309L3.51814 4.73379C3.55892 4.16099 3.16389 3.66617 2.63581 3.62857C2.10774 3.59098 1.64659 4.02485 1.60581 4.59765L0.941297 13.9319ZM14.5316 0.744688L1.27356 13.2185L2.52136 14.7815L15.7794 2.30769L14.5316 0.744688Z" fill="black" />
                                            </svg>
                                            </i>                                            <p className="text-gray-700">Received</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-500 md:hidden">Type</p>
                                            <p className="text-gray-700">#12345</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-500 md:hidden">Status</p>
                                            <button className='cancelledBtn'>Cancelled</button>                                       </div>
                                        <div className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-1 gap-1">
                                            <p className="text-gray-500 md:hidden">Amount</p>
                                            <p className="text-gray-700">-$3,000</p>
                                            <button className="text-red-500 border border-red-500 rounded-lg w-100 py-2 text-xs">View Details</button>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-6 gap-1 items-center">
                                        <div className="col-span-2 md:col-span-2 flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-4">
                                            <img src={recptImage} alt="Recipient profile picture" className="w-10 h-10 rounded-full" />
                                            <div>
                                                <p className="text-gray-500 md:hidden">Recipient/Applicant</p>
                                                <p className="font-bold text-gray-700">Muhammad Abdelhamid</p>
                                                <p className="text-gray-500">10/2/2024</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-1 gap-1">
                                            <p className="text-gray-500 md:hidden">Type</p>
                                            <i className=""><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0.941297 13.9319C0.900519 14.5047 1.29555 14.9995 1.82363 15.0371L10.4291 15.6498C10.9572 15.6874 11.4183 15.2535 11.4591 14.6807C11.4999 14.1079 11.1049 13.6131 10.5768 13.5755L2.92746 13.0309L3.51814 4.73379C3.55892 4.16099 3.16389 3.66617 2.63581 3.62857C2.10774 3.59098 1.64659 4.02485 1.60581 4.59765L0.941297 13.9319ZM14.5316 0.744688L1.27356 13.2185L2.52136 14.7815L15.7794 2.30769L14.5316 0.744688Z" fill="black" />
                                            </svg>
                                            </i>                                            <p className="text-gray-700">Received</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-500 md:hidden">Type</p>
                                            <p className="text-gray-700">#12345</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-500 md:hidden">Status</p>
                                            <button className='confirmedBtn' >Confirmed</button>
                                        </div>
                                        <div className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-1 gap-1">
                                            <p className="text-gray-500 md:hidden">Amount</p>
                                            <p className="text-gray-700">-$3,000</p>
                                            <button className="text-red-500 border border-red-500 rounded-lg w-100 py-2 text-xs">View Details</button>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-6 gap-1 items-center">
                                        <div className="col-span-2 md:col-span-2 flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-4">
                                            <img src={recptImage} alt="Recipient profile picture" className="w-10 h-10 rounded-full" />
                                            <div>
                                                <p className="text-gray-500 md:hidden">Recipient/Applicant</p>
                                                <p className="font-bold text-gray-700">Muhammad Abdelhamid</p>
                                                <p className="text-gray-500">10/2/2024</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-1 gap-1">
                                            <p className="text-gray-500 md:hidden">Type</p>
                                            <i className=""><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0.941297 13.9319C0.900519 14.5047 1.29555 14.9995 1.82363 15.0371L10.4291 15.6498C10.9572 15.6874 11.4183 15.2535 11.4591 14.6807C11.4999 14.1079 11.1049 13.6131 10.5768 13.5755L2.92746 13.0309L3.51814 4.73379C3.55892 4.16099 3.16389 3.66617 2.63581 3.62857C2.10774 3.59098 1.64659 4.02485 1.60581 4.59765L0.941297 13.9319ZM14.5316 0.744688L1.27356 13.2185L2.52136 14.7815L15.7794 2.30769L14.5316 0.744688Z" fill="black" />
                                            </svg>
                                            </i>                                            <p className="text-gray-700">Received</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-500 md:hidden">Type</p>
                                            <p className="text-gray-700">#12345</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-500 md:hidden">Status</p>
                                            <button className='confirmedBtn' >Confirmed</button>
                                        </div>
                                        <div className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-1 gap-1">
                                            <p className="text-gray-500 md:hidden">Amount</p>
                                            <p className="text-gray-700">-$3,000</p>
                                            <button className="text-red-500 border border-red-500 rounded-lg w-100 py-2 text-xs">View Details</button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

            {/* Modal */}


        </>
    );
}
