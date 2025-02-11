import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function AccountVerification222() {
    const [selectedCountry, setSelectedCountry] = useState('GB'); // Default to UK
    const [selectedPhoneCountry, setSelectedPhoneCountry] = useState('GB');
    const [countries, setCountries] = useState([]);
    const [countryCodes, setCountryCodes] = useState({});

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(response => response.json())
            .then(data => {
                const countryList = data.map(country => ({
                    code: country.cca2,
                    name: country.name.common,
                    flag: <img src={country.flags.svg} alt={country.name.common} className="w-6 h-4" />,
                    callingCode: country.idd.root ? `${country.idd.root}${country.idd.suffixes ? country.idd.suffixes[0] : ''}` : ''
                })).sort((a, b) => a.name.localeCompare(b.name));

                const countryCodeMap = {};
                countryList.forEach(country => {
                    countryCodeMap[country.code] = country.callingCode || '';
                });

                setCountries(countryList);
                setCountryCodes(countryCodeMap);
            })
            .catch(error => console.error('Error fetching countries:', error));
    }, []);

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="asideComponent col-lg-3 col-md-2">
                </div>
                <div className="col-12 col-lg-9 col-md-12">
                    <h1 className="text-2xl font-bold mb-6 text-center">Account Verification</h1>
                    
                    {/* Country Selection */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div>
                            <label className="block mb-2 text-sm">Country*</label>
                            <div className="flex iconGap items-center borderInput rounded p-2">
<i>{countries.length > 0 ? countries.find(country => country.code === selectedCountry)?.flag : ''}</i>
                                <span>|</span>
                                <select
                                    value={selectedCountry}
                                    onChange={(e) => setSelectedCountry(e.target.value)}
                                    className="flex-1 outline-none text-sm w-full bg-transparent"
                                >
                                    {countries.map(country => (
                                        <option key={country.code} value={country.code}>
                                            {country.name} ({country.callingCode})
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        
                        {/* Phone Number with Country Code */}
                        <div>
                            <label className="block mb-2 text-sm">Phone Number*</label>
                            <div className="flex iconGap items-center borderInput rounded p-2">
                                <i>{countries.find(country => country.code === selectedPhoneCountry)?.flag}</i>
                                <span>|</span>
                                <select
                                    value={selectedPhoneCountry}
                                    onChange={(e) => setSelectedPhoneCountry(e.target.value)}
                                    className="flex-1 outline-none text-sm w-full bg-transparent"
                                >
                                    {countries.map(country => (
                                        <option key={country.code} value={country.code}>
                                            {country.name} ({country.callingCode})
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="flex items-center borderInput rounded p-2 mt-2">
                                <span className="text-sm text-gray-700 pr-2">
                                    {countryCodes[selectedPhoneCountry]}
                                </span>
                                <input
                                    type="number"
                                    className="flex-1 outline-none text-sm w-full"
                                    placeholder="Enter your phone number"
                                    style={{ borderLeft: '1px solid #ddd', paddingLeft: '8px' }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Save & Next Button */}
                    <div className="flex justify-center">
                        <button className="save greyBtn greyBg bg-gray-700 text-white font-semibold px-4 py-2 rounded-lg hover:bg-red-600">
                            Save & Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
