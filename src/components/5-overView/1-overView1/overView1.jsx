import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Aside from '../../aside/aside';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPlus, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import "./overView1.css";
import { BarChart } from '@mui/x-charts/BarChart';
import { LineChart, lineElementClasses } from '@mui/x-charts/LineChart';
import recptImage from "./Ellipse 7.svg"
import SearchBar from '../../searchBar/searchBar';





export default function OverView1() {
    const [selectedCoin, setSelectedCoin] = useState('Bitcoin');
    const coins = [
        {
            name: 'Bitcoin',
            icon: (
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="28" cy="28" r="28" fill="#D75656" />
                    <g clipPath="url(#clip0_3573_2647)">
                        <path d="M20.2839 24.3132H20.5576C21.6113 24.3132 22.4734 25.1753 22.4734 26.229V35.8078C22.4734 36.8615 21.6113 37.7236 20.5576 37.7236H20.2839C19.2303 37.7236 18.3682 36.8615 18.3682 35.8078V26.229C18.3682 25.1753 19.2303 24.3132 20.2839 24.3132ZM27.947 18.5659C29.0007 18.5659 29.8627 19.428 29.8627 20.4817V35.8078C29.8627 36.8615 29.0007 37.7236 27.947 37.7236C26.8933 37.7236 26.0312 36.8615 26.0312 35.8078V20.4817C26.0312 19.428 26.8933 18.5659 27.947 18.5659ZM35.61 29.5131C36.6637 29.5131 37.5258 30.3752 37.5258 31.4289V35.8078C37.5258 36.8615 36.6637 37.7236 35.61 37.7236C34.5564 37.7236 33.6943 36.8615 33.6943 35.8078V31.4289C33.6943 30.3752 34.5564 29.5131 35.61 29.5131Z" fill="white" />
                    </g>
                    <defs>
                        <clipPath id="clip0_3573_2647">
                            <rect width="32.8417" height="32.8417" fill="white" transform="translate(11.5264 11.7241)" />
                        </clipPath>
                    </defs>
                </svg>
            ),
            value: '350.40'
        },
        {
            name: 'Ethereum',
            icon: (
                <svg width="57" height="56" viewBox="0 0 57 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="28.0645" cy="28" r="28" fill="#F4F7FE" />
                    <g clipPath="url(#clip0_3573_5493)">
                        <path d="M20.3484 24.3132H20.6221C21.6757 24.3132 22.5378 25.1753 22.5378 26.229V35.8078C22.5378 36.8615 21.6757 37.7236 20.6221 37.7236H20.3484C19.2947 37.7236 18.4326 36.8615 18.4326 35.8078V26.229C18.4326 25.1753 19.2947 24.3132 20.3484 24.3132ZM28.0114 18.5659C29.0651 18.5659 29.9272 19.428 29.9272 20.4817V35.8078C29.9272 36.8615 29.0651 37.7236 28.0114 37.7236C26.9578 37.7236 26.0957 36.8615 26.0957 35.8078V20.4817C26.0957 19.428 26.9578 18.5659 28.0114 18.5659ZM35.6745 29.5131C36.7282 29.5131 37.5903 30.3752 37.5903 31.4289V35.8078C37.5903 36.8615 36.7282 37.7236 35.6745 37.7236C34.6208 37.7236 33.7587 36.8615 33.7587 35.8078V31.4289C33.7587 30.3752 34.6208 29.5131 35.6745 29.5131Z" fill="#C20101" />
                    </g>
                    <defs>
                        <clipPath id="clip0_3573_5493">
                            <rect width="32.8417" height="32.8417" fill="white" transform="translate(11.5908 11.7241)" />
                        </clipPath>
                    </defs>
                </svg>
            ),
            value: '350.40'
        },
        {
            name: 'Tether',
            icon: (
                <svg width="57" height="56" viewBox="0 0 57 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="28.0645" cy="28" r="28" fill="#F4F7FE" />
                    <g clipPath="url(#clip0_3573_5493)">
                        <path d="M20.3484 24.3132H20.6221C21.6757 24.3132 22.5378 25.1753 22.5378 26.229V35.8078C22.5378 36.8615 21.6757 37.7236 20.6221 37.7236H20.3484C19.2947 37.7236 18.4326 36.8615 18.4326 35.8078V26.229C18.4326 25.1753 19.2947 24.3132 20.3484 24.3132ZM28.0114 18.5659C29.0651 18.5659 29.9272 19.428 29.9272 20.4817V35.8078C29.9272 36.8615 29.0651 37.7236 28.0114 37.7236C26.9578 37.7236 26.0957 36.8615 26.0957 35.8078V20.4817C26.0957 19.428 26.9578 18.5659 28.0114 18.5659ZM35.6745 29.5131C36.7282 29.5131 37.5903 30.3752 37.5903 31.4289V35.8078C37.5903 36.8615 36.7282 37.7236 35.6745 37.7236C34.6208 37.7236 33.7587 36.8615 33.7587 35.8078V31.4289C33.7587 30.3752 34.6208 29.5131 35.6745 29.5131Z" fill="#C20101" />
                    </g>
                    <defs>
                        <clipPath id="clip0_3573_5493">
                            <rect width="32.8417" height="32.8417" fill="white" transform="translate(11.5908 11.7241)" />
                        </clipPath>
                    </defs>
                </svg>
            ),
            value: '350.40'
        },
        {
            name: 'USD Coin',
            icon: (
                <svg width="57" height="56" viewBox="0 0 57 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="28.0645" cy="28" r="28" fill="#F4F7FE" />
                    <g clipPath="url(#clip0_3573_5493)">
                        <path d="M20.3484 24.3132H20.6221C21.6757 24.3132 22.5378 25.1753 22.5378 26.229V35.8078C22.5378 36.8615 21.6757 37.7236 20.6221 37.7236H20.3484C19.2947 37.7236 18.4326 36.8615 18.4326 35.8078V26.229C18.4326 25.1753 19.2947 24.3132 20.3484 24.3132ZM28.0114 18.5659C29.0651 18.5659 29.9272 19.428 29.9272 20.4817V35.8078C29.9272 36.8615 29.0651 37.7236 28.0114 37.7236C26.9578 37.7236 26.0957 36.8615 26.0957 35.8078V20.4817C26.0957 19.428 26.9578 18.5659 28.0114 18.5659ZM35.6745 29.5131C36.7282 29.5131 37.5903 30.3752 37.5903 31.4289V35.8078C37.5903 36.8615 36.7282 37.7236 35.6745 37.7236C34.6208 37.7236 33.7587 36.8615 33.7587 35.8078V31.4289C33.7587 30.3752 34.6208 29.5131 35.6745 29.5131Z" fill="#C20101" />
                    </g>
                    <defs>
                        <clipPath id="clip0_3573_5493">
                            <rect width="32.8417" height="32.8417" fill="white" transform="translate(11.5908 11.7241)" />
                        </clipPath>
                    </defs>
                </svg>
            ),
            value: '350.40'
        }
    ];




    const options = {
        // set the labels option to true to show the labels on the X and Y axis
        xaxis: {
            show: true,
            categories: ['01 Feb', '02 Feb', '03 Feb', '04 Feb', '05 Feb', '06 Feb', '07 Feb'],
            labels: {
                show: true,
                style: {
                    fontFamily: "Inter, sans-serif",
                    cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
                }
            },
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
        },
        yaxis: {
            show: true,
            labels: {
                show: true,
                style: {
                    fontFamily: "Inter, sans-serif",
                    cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
                },
                formatter: function (value) {
                    return '$' + value;
                }
            }
        },
        series: [
            {
                name: "Developer Edition",
                data: [150, 141, 145, 152, 135, 125],
                color: "#1A56DB",
            },
            {
                name: "Designer Edition",
                data: [43, 13, 65, 12, 42, 73],
                color: "#7E3BF2",
            },
        ],
        chart: {
            sparkline: {
                enabled: false
            },
            height: "100%",
            width: "100%",
            type: "area",
            fontFamily: "Inter, sans-serif",
            dropShadow: {
                enabled: false,
            },
            toolbar: {
                show: false,
            },
        },
        tooltip: {
            enabled: true,
            x: {
                show: false,
            },
        },
        fill: {
            type: "gradient",
            gradient: {
                opacityFrom: 0.55,
                opacityTo: 0,
                shade: "#1C64F2",
                gradientToColors: ["#1C64F2"],
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            width: 6,
        },
        legend: {
            show: false
        },
        grid: {
            show: false,
        },
    }

    if (document.getElementById("labels-chart") && typeof ApexCharts !== 'undefined') {
        const chart = new ApexCharts(document.getElementById("labels-chart"), options);
        chart.render();
    }



    const uData = [4000, 3000, 2000, 2780, 1890];
    const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
    const amtData = [2400, 2210, 0, 2000, 2181];
    const xLabels = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
    ];


    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="asideComponent col-lg-3 col-md-2" style={{ height: "100%" }}>
                        <Aside />
                    </div>

                    <div className="col-12 col-lg-9 col-md-12 mt-5" style={{ placeItems: "center" }}>

                        <div className="">
                          
                        <SearchBar />

                            <div className="flex justify-between">

                                <h1 className="text-2xl font-bold mb-2">Welcome back, John</h1>
                                <button className="redBg text-white px-4 py-2 rounded-lg mt-1">send/receive</button>

                            </div>
                            <div className="text-gray-500 mb-6">
                                <span>Dashboard</span> <i className="fas fa-chevron-right mx-2"></i> <span className="font-bold text-gray-700">Overview</span>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                                {coins.map((coin) => (
                                    <div
                                        key={coin.name}
                                        className={`p-4 rounded-lg flex items-center cursor-pointer ${selectedCoin === coin.name ? 'redBg text-white' : 'bg-white border border-gray-200 text-gray-700'}`}
                                        onClick={() => setSelectedCoin(coin.name)}
                                    >
                                        {/* Check if icon is a component (for SVG) or a string (for Font Awesome) */}
                                        {typeof coin.icon === 'string' ? (
                                            <i className={`${coin.icon} text-2xl ${selectedCoin === coin.name ? 'text-white' : 'text-gray-500'}`}></i>
                                        ) : (
                                            <span className={`text-2xl ${selectedCoin === coin.name ? 'text-white' : 'text-gray-500'}`}>
                                                {coin.icon}
                                            </span>
                                        )}
                                        <div className="pl-5">
                                            <p className="text-xl font-bold">{coin.name}</p>
                                            <p className="text-2xl font-bold">{coin.value}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="charts grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
                                <div className="bg-white p-3 rounded-lg border border-gray-200">
                                    <h2 className="text-xl font-bold mb-4">Analytics</h2>
                                    <div className="flex  mb-4">
                                        <div className='gap-3 w-100 space-x-4'>

                                            <button className="text-gray-700 font-bold">Month</button>
                                            <button className="text-gray-500">Week</button>
                                            <button className="text-gray-500">Day</button>
                                        </div>
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
                                    </div>

                                    <div className="flex justify-between items-end">
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
                                            height={300}
                                        />
                                    </div>
                                </div>

                                <div className="bg-white p-3 rounded-lg border border-gray-200">
                                    <h2 className="text-xl font-bold mb-4">Balance Overview</h2>
                                    <div className="flex  mb-4">
                                        <div className='gap-3 w-100 space-x-4'>

                                            <button className="text-gray-700 font-bold">Month</button>
                                            <button className="text-gray-500">Week</button>
                                            <button className="text-gray-500">Day</button>
                                        </div>
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
                                    </div>
                                    <div className="flex justify-between items-end">
                                        <LineChart
                                            width={500}
                                            height={300}
                                            series={[
                                                { data: uData, area: true, stack: 'total', showMark: false, color: '#B71C1C' }, // Sent (Dark Red)
                                                { data: amtData, area: true, stack: 'total', showMark: false, color: '#F8BBD0' }, // Received (Light Pink)
                                            ]}
                                            xAxis={[{ scaleType: 'point', data: xLabels }]}
                                            sx={{
                                                [`& .${lineElementClasses.root}`]: {
                                                    display: 'none',
                                                },
                                            }}
                                        />

                                    </div>
                                </div>
                            </div>
                            <div className='whiteBg p-6'>
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
                                                <path d="M15.2758 2.25991C15.3167 1.68487 14.9237 1.1884 14.3981 1.15101L5.83232 0.541652C5.30668 0.504259 4.84741 0.940106 4.8065 1.51514C4.76559 2.09018 5.15855 2.58666 5.68419 2.62405L13.2982 3.1657L12.7057 11.4953C12.6648 12.0703 13.0577 12.5668 13.5833 12.6042C14.109 12.6416 14.5683 12.2057 14.6092 11.6307L15.2758 2.25991ZM1.8003 15.4501L14.9447 2.97632L13.7034 1.40809L0.559071 13.8819L1.8003 15.4501Z" fill="black" />
                                            </svg>

                                            </i>
                                            <p className="text-gray-700">SEND</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-500 md:hidden">Type</p>
                                            <p className="text-gray-700">Escrow</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-500 md:hidden">Status</p>
                                            <button className='' >-</button>
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
                                                <path d="M15.2758 2.25991C15.3167 1.68487 14.9237 1.1884 14.3981 1.15101L5.83232 0.541652C5.30668 0.504259 4.84741 0.940106 4.8065 1.51514C4.76559 2.09018 5.15855 2.58666 5.68419 2.62405L13.2982 3.1657L12.7057 11.4953C12.6648 12.0703 13.0577 12.5668 13.5833 12.6042C14.109 12.6416 14.5683 12.2057 14.6092 11.6307L15.2758 2.25991ZM1.8003 15.4501L14.9447 2.97632L13.7034 1.40809L0.559071 13.8819L1.8003 15.4501Z" fill="black" />
                                            </svg>

                                            </i>                                                                                                        <p className="text-gray-700">SEND</p>

                                        </div>
                                        <div>
                                            <p className="text-gray-500 md:hidden">Type</p>
                                            <p className="text-gray-700">Transfer</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-500 md:hidden">Status</p>
                                            <button className=''>-</button>                                        </div>
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
                                                <path d="M15.2758 2.25991C15.3167 1.68487 14.9237 1.1884 14.3981 1.15101L5.83232 0.541652C5.30668 0.504259 4.84741 0.940106 4.8065 1.51514C4.76559 2.09018 5.15855 2.58666 5.68419 2.62405L13.2982 3.1657L12.7057 11.4953C12.6648 12.0703 13.0577 12.5668 13.5833 12.6042C14.109 12.6416 14.5683 12.2057 14.6092 11.6307L15.2758 2.25991ZM1.8003 15.4501L14.9447 2.97632L13.7034 1.40809L0.559071 13.8819L1.8003 15.4501Z" fill="black" />
                                            </svg>

                                            </i>                                                                                                        <p className="text-gray-700">SEND</p>

                                        </div>
                                        <div>
                                            <p className="text-gray-500 md:hidden">Type</p>
                                            <p className="text-gray-700">Transfer</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-500 md:hidden">Status</p>
                                            <button className=''>-</button>                                       </div>
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
                                                <path d="M15.2758 2.25991C15.3167 1.68487 14.9237 1.1884 14.3981 1.15101L5.83232 0.541652C5.30668 0.504259 4.84741 0.940106 4.8065 1.51514C4.76559 2.09018 5.15855 2.58666 5.68419 2.62405L13.2982 3.1657L12.7057 11.4953C12.6648 12.0703 13.0577 12.5668 13.5833 12.6042C14.109 12.6416 14.5683 12.2057 14.6092 11.6307L15.2758 2.25991ZM1.8003 15.4501L14.9447 2.97632L13.7034 1.40809L0.559071 13.8819L1.8003 15.4501Z" fill="black" />
                                            </svg>

                                            </i>                                                                                                        <p className="text-gray-700">SEND</p>

                                        </div>
                                        <div>
                                            <p className="text-gray-500 md:hidden">Type</p>
                                            <p className="text-gray-700">Letter of credit</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-500 md:hidden">Status</p>
                                            -                                                        </div>
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
                                                <path d="M15.2758 2.25991C15.3167 1.68487 14.9237 1.1884 14.3981 1.15101L5.83232 0.541652C5.30668 0.504259 4.84741 0.940106 4.8065 1.51514C4.76559 2.09018 5.15855 2.58666 5.68419 2.62405L13.2982 3.1657L12.7057 11.4953C12.6648 12.0703 13.0577 12.5668 13.5833 12.6042C14.109 12.6416 14.5683 12.2057 14.6092 11.6307L15.2758 2.25991ZM1.8003 15.4501L14.9447 2.97632L13.7034 1.40809L0.559071 13.8819L1.8003 15.4501Z" fill="black" />
                                            </svg>

                                            </i>                                                                                                        <p className="text-gray-700">SEND</p>

                                        </div>
                                        <div>
                                            <p className="text-gray-500 md:hidden">Type</p>
                                            <p className="text-gray-700">Transfer</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-500 md:hidden">Status</p>
                                            -                                                        </div>
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
