import React, { useState, useEffect } from 'react';
import "./verfi1.css";
import Aside from '../../aside/aside';
import { Link } from 'react-router-dom';

export default function AccountVerification1() {
    const [selectedAccount, setSelectedAccount] = useState('');
    const [activeLink, setActiveLink] = useState('overview');

    const handleNavigation = (accountType) => {
        setSelectedAccount(accountType);
        console.log(`Selected account type: ${accountType}`); // Logging selected account type
    };


    // 🔹  countries API
      const [countries, setCountries] = useState([]);
      const [countryCodes, setCountryCodes] = useState({});
  
      // 🔹 save choosen country
      const [selectedFirstCountry, setSelectedFirstCountry] = useState('GB');
      const [selectedSecondCountry, setSelectedSecondCountry] = useState('GB');
      const [selectedThirdCountry, setSelectedThirdCountry] = useState('GB');
  
      useEffect(() => {
          const fetchCountries = async () => {
              try {
                  const response = await fetch('https://restcountries.com/v3.1/all');
                  const data = await response.json();
                  const countryList = data.map(country => ({
                      code: country.cca2,
                      name: country.name.common,
                      flag: <img src={country.flags.svg} alt={country.name.common} className="w-6 h-4" />,
                      callingCode: country.idd?.root ? `${country.idd.root}${country.idd.suffixes ? country.idd.suffixes[0] : ''}` : 'N/A'
                  })).sort((a, b) => a.name.localeCompare(b.name));
  
                  const countryCodeMap = {};
                  countryList.forEach(country => {
                      countryCodeMap[country.code] = country.callingCode || 'N/A';
                  });
  
                  setCountries(countryList);
                  setCountryCodes(countryCodeMap);
              } catch (error) {
                  console.error('Error fetching countries:', error);
              }
          };
  
          fetchCountries();
      }, []);
  
    
        const handleCountryChange = (event) => {
            setSelectedCountry(event.target.value);
        };
    
        const handlePhoneCountryChange = (event) => {
            setSelectedPhoneCountry(event.target.value);
        };
    
    

    return (
        <>


            <div className="container-fluid lettersContainer flex-center">

                <div className="row">
                    <div className="asideComponent col-lg-3 col-md-2" style={{ height: "100%" }}>
                        <Aside />
                    </div>



                    <div className="col-12 col-lg-9 col-md-12 mt-5 text-center">
                        <h1 className="text-2xl font-bold mb-6 text-center">Add Business Beneficial Owner(s)</h1>
                        <div className="relative mb-6 w-100">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="dashedLine border-t-2 border-dashed border-gray-300 " style={{ width: "80%" }}></div>
                            </div>
                            <div className="relative flex" style={{ justifyContent: "space-around" }}>
                                <div className="w-10 h-10 whiteColor redBg rounded-full flex items-center justify-center">1</div>

                                <div className="w-10 h-10 greyColor whiteBg rounded-full flex items-center justify-center">
                                    2
                                </div>
                                <div className="w-10 h-10 greyColor whiteBg rounded-full flex items-center justify-center">
                                    3
                                </div>
                                <div className="w-10 h-10 greyColor whiteBg rounded-full flex items-center justify-center">
                                    4
                                </div>
                            </div>
                        </div>


                        <div className="flex justify-between mb-6 w-100">
                            <div className="col text-center text-sm">Account Type</div>
                            <div className="col text-center text-sm">Personal Details</div>
                            <div className="col text-center text-sm">Identity Verification</div>
                            <div className="col text-center text-sm">Review and Additional Documents</div>
                        </div>
                        <div className='verfi1Component'
                            style={{
                                backgroundColor: "rgb(252,252,252)",
                                padding: window.innerWidth < 768 ? "0.25rem" : "2rem", // Dynamically set padding
                                borderRadius: "0.5rem",
                                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                            }} >
                            <h2 className=" text-xl font-semibold mb-2 text-center pt-2">Select Account Type</h2>
                            <div className="account-type bg-[rgb(252,252,252)] p-6 rounded-lg mb-6">
                                <div className={`bg-[rgb(244,244,244)] p-4 rounded-lg border border-gray-300 ${selectedAccount === 'personal' ? 'bg-[rgb(230,230,230)]' : ''}`} style={{ marginBottom: '24px' }}>
                                    <label className="flex items-center">
                                        <input type="radio" name="accountType" className="form-radio h-5 w-5 text-red-500" onClick={() => handleNavigation('personal')} />
                                        <span className="bold ml-2 text-md font-medium">Personal Account</span>
                                    </label>
                                    {selectedAccount === 'personal' && (
                                        <div className='inputsStyles'>
                                            <div className="mt-4">
                                                <label className="block text-gray-700">Full Name*</label>
                                                <div className="mt-1 relative rounded-md shadow-sm">
                                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M14.25 0.75H3.75C2.7558 0.751191 1.80267 1.14666 1.09966 1.84966C0.396661 2.55267 0.00119089 3.5058 0 4.5L0 13.5C0.00119089 14.4942 0.396661 15.4473 1.09966 16.1503C1.80267 16.8533 2.7558 17.2488 3.75 17.25H14.25C15.2442 17.2488 16.1973 16.8533 16.9003 16.1503C17.6033 15.4473 17.9988 14.4942 18 13.5V4.5C17.9988 3.5058 17.6033 2.55267 16.9003 1.84966C16.1973 1.14666 15.2442 0.751191 14.25 0.75ZM3.75 2.25H14.25C14.6991 2.25088 15.1376 2.38614 15.5092 2.63835C15.8808 2.89057 16.1684 3.24821 16.335 3.66525L10.5915 9.4095C10.1688 9.83049 9.59656 10.0669 9 10.0669C8.40344 10.0669 7.83118 9.83049 7.4085 9.4095L1.665 3.66525C1.83161 3.24821 2.11921 2.89057 2.49079 2.63835C2.86236 2.38614 3.30091 2.25088 3.75 2.25ZM14.25 15.75H3.75C3.15326 15.75 2.58097 15.5129 2.15901 15.091C1.73705 14.669 1.5 14.0967 1.5 13.5V5.625L6.348 10.47C7.05197 11.1722 8.00569 11.5665 9 11.5665C9.99431 11.5665 10.948 11.1722 11.652 10.47L16.5 5.625V13.5C16.5 14.0967 16.2629 14.669 15.841 15.091C15.419 15.5129 14.8467 15.75 14.25 15.75Z" fill="#2D2D2D" />
                                                        </svg>
                                                        <span className="pl-1">|</span>
                                                    </div>
                                                    <input
                                                        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                                                        placeholder="username@gmail.com"
                                                        type="email"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="mt-4">
                                                <label className="block text-gray-700">Phone Number*</label>
                                                <div className="mt-1 relative rounded-md shadow-sm">
                                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M17.1819 4.50022H14.6962L15.5168 1.13335C15.6338 0.653641 15.3753 0.159594 14.9384 0.0308912C14.5015 -0.0978115 14.0523 0.187444 13.9361 0.667154L13.0027 4.50022H7.19182L8.0125 1.13335C8.12951 0.653641 7.87093 0.159594 7.43407 0.0308912C6.99706 -0.0968227 6.54882 0.187444 6.43256 0.667154L5.49817 4.50022H2.45455C2.00286 4.50022 1.63642 4.90248 1.63642 5.40015C1.63642 5.89799 2.00286 6.30025 2.45455 6.30025H5.05877L3.74235 11.7002H0.818134C0.366595 11.7002 0 12.1024 0 12.6001C0 13.0978 0.366595 13.5 0.818134 13.5H3.30385L2.48317 16.8669C2.36616 17.3466 2.62474 17.8406 3.0616 17.9693C3.13201 17.9901 3.20317 18 3.27269 18C3.63359 18 3.96498 17.7353 4.06236 17.3331L4.99749 13.5H10.8082L9.9875 16.8669C9.87064 17.3466 10.1291 17.8406 10.5661 17.9693C10.6363 17.9901 10.7075 18 10.7779 18C11.1388 18 11.4701 17.7353 11.5674 17.3331L12.5018 13.5H15.5454C15.9971 13.5 16.3637 13.0978 16.3637 12.6001C16.3637 12.1024 15.9971 11.7002 15.5454 11.7002H12.9412L14.2576 6.30025H17.1819C17.6336 6.30025 18 5.89799 18 5.40015C18 4.90248 17.6336 4.50022 17.1819 4.50022ZM11.2467 11.7002H5.436L6.75242 6.30025H12.5633L11.2467 11.7002Z" fill="black" />
                                                        </svg>
                                                        <span className="pl-1">|</span>
                                                    </div>
                                                    <input
                                                        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                                                        placeholder="+20 123 456 7890"
                                                        type="number"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <div className={`bg-[rgb(244,244,244)] p-4 rounded-lg border border-gray-300 ${selectedAccount === 'business' ? 'bg-[rgb(230,230,230)]' : ''}`} style={{ marginBottom: '24px' }}>
                                    <label className="flex items-center">
                                        <input type="radio" name="accountType" className="form-radio h-5 w-5 text-red-500" onClick={() => handleNavigation('business')} />
                                        <span className="bold ml-2 text-md font-medium">Business Account</span>
                                    </label>
                                    {selectedAccount === 'business' && (
                                        <div className='inputsStyles'>
                                            <div className="mt-4">
                                                <label className="block text-gray-700">Business Name*</label>
                                                <div className="mt-1 relative rounded-md shadow-sm">
                                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M17.1819 9.81836C16.9364 9.81836 16.7728 9.98201 16.7728 10.2274V15.5456C16.7728 15.7911 16.6091 15.9547 16.3637 15.9547H1.63641C1.39095 15.9547 1.22734 15.7911 1.22734 15.5456V10.2274C1.22734 9.98198 1.06368 9.81836 0.818258 9.81836C0.572832 9.81836 0.40918 9.98201 0.40918 10.2274V15.5456C0.40918 16.2411 0.940988 16.7729 1.63645 16.7729H16.3637C17.0592 16.7729 17.591 16.2411 17.591 15.5456V10.2274C17.591 9.98198 17.4273 9.81836 17.1819 9.81836Z" fill="black" />
                                                            <path d="M16.7727 4.09082H1.22727C0.531809 4.09082 0 4.62263 0 5.31809V7.93628C0 8.50898 0.409078 8.9999 0.940922 9.12263L7.36365 10.5544V11.8635C7.36365 12.109 7.5273 12.2726 7.77273 12.2726H10.2273C10.4727 12.2726 10.6363 12.1089 10.6363 11.8635V10.5544L17.0591 9.12263C17.5909 8.9999 18 8.50898 18 7.93625V5.31806C18 4.62263 17.4682 4.09082 16.7727 4.09082ZM9.81819 11.4544H8.18184V9.81809H9.81819V11.4544ZM17.1818 7.93625C17.1818 8.14079 17.0591 8.30444 16.8545 8.34532L10.6363 9.73625V9.40898C10.6363 9.16352 10.4727 8.9999 10.2273 8.9999H7.77273C7.52727 8.9999 7.36365 9.16355 7.36365 9.40898V9.73625L1.14546 8.34536C0.940922 8.30444 0.818191 8.14082 0.818191 7.93628V5.31809C0.818191 5.07263 0.981844 4.90901 1.22727 4.90901H16.7727C17.0182 4.90901 17.1818 5.07266 17.1818 5.31809V7.93625Z" fill="black" />
                                                            <path d="M11.0457 1.22754H6.95481C6.25935 1.22754 5.72754 1.75935 5.72754 2.45481V2.86389C5.72754 3.10935 5.89119 3.27296 6.13662 3.27296C6.38204 3.27296 6.5457 3.10931 6.5457 2.86389V2.45481C6.5457 2.20935 6.70935 2.04573 6.95477 2.04573H11.0457C11.2912 2.04573 11.4548 2.20938 11.4548 2.45481V2.86389C11.4548 3.10935 11.6184 3.27296 11.8639 3.27296C12.1093 3.27296 12.2729 3.10931 12.2729 2.86389V2.45481C12.273 1.75935 11.7412 1.22754 11.0457 1.22754Z" fill="black" />
                                                        </svg>

                                                        <span className="pl-1">|</span>
                                                    </div>
                                                    <input
                                                        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                                                        placeholder="Your Business Name"
                                                        type="text"
                                                        required
                                                    />
                                                </div>
                                            </div>



                                            <div className='mt-4'>
                                                <label className="block mb-2 text-sm">Country of Incorporation*</label>
                                                <div className="seven0 flex iconGap items-center borderInput rounded p-2">
                                                    <i>
                                                        {countries.find((country) => country.code === selectedFirstCountry)?.flag}
                                                    </i>
                                                    <span>|</span>
                                                    <select
                                                        value={selectedFirstCountry}
                                                        onChange={(e) => setSelectedFirstCountry(e.target.value)}
                                                        className="flex-1 outline-none text-sm w-full bg-transparent"
                                                    >
                                                        {countries.map((country) => (
                                                            <option
                                                                key={country.code}
                                                                value={country.code}
                                                            >
                                                                {country.name}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>


                                            <div className="mt-4">
                                                <label className="block text-gray-700">Company registration number* (For US people only)</label>
                                                <div className="mt-1 relative rounded-md shadow-sm">
                                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M17.1819 4.50022H14.6962L15.5168 1.13335C15.6338 0.653641 15.3753 0.159594 14.9384 0.0308912C14.5015 -0.0978115 14.0523 0.187444 13.9361 0.667154L13.0027 4.50022H7.19182L8.0125 1.13335C8.12951 0.653641 7.87093 0.159594 7.43407 0.0308912C6.99706 -0.0968227 6.54882 0.187444 6.43256 0.667154L5.49817 4.50022H2.45455C2.00286 4.50022 1.63642 4.90248 1.63642 5.40015C1.63642 5.89799 2.00286 6.30025 2.45455 6.30025H5.05877L3.74235 11.7002H0.818134C0.366595 11.7002 0 12.1024 0 12.6001C0 13.0978 0.366595 13.5 0.818134 13.5H3.30385L2.48317 16.8669C2.36616 17.3466 2.62474 17.8406 3.0616 17.9693C3.13201 17.9901 3.20317 18 3.27269 18C3.63359 18 3.96498 17.7353 4.06236 17.3331L4.99749 13.5H10.8082L9.9875 16.8669C9.87064 17.3466 10.1291 17.8406 10.5661 17.9693C10.6363 17.9901 10.7075 18 10.7779 18C11.1388 18 11.4701 17.7353 11.5674 17.3331L12.5018 13.5H15.5454C15.9971 13.5 16.3637 13.0978 16.3637 12.6001C16.3637 12.1024 15.9971 11.7002 15.5454 11.7002H12.9412L14.2576 6.30025H17.1819C17.6336 6.30025 18 5.89799 18 5.40015C18 4.90248 17.6336 4.50022 17.1819 4.50022ZM11.2467 11.7002H5.436L6.75242 6.30025H12.5633L11.2467 11.7002Z" fill="black" />
                                                        </svg>

                                                        <span className="pl-1">|</span>
                                                    </div>
                                                    <input
                                                        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                                                        placeholder="Changable"
                                                        type="number"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="flex justify-center">
                                <Link to="/verfi2">
                                    <button className="redBtn redBg text-white font-semibold px-4 py-2 rounded-lg hover:bg-red-600">Save & Next</button>
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ >
    );
}

