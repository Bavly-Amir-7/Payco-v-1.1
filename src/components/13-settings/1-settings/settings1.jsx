import React, { useState } from 'react';
import Aside from '../../aside/aside'; // Importing Aside component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Importing FontAwesomeIcon for icons
import { faTrash, faPencilAlt } from '@fortawesome/free-solid-svg-icons'; // Importing specific icons
import './settings1.css'; // Importing CSS for styling
import imageProfile from './Avatar With Options.svg'; // Default profile image
import { Link } from 'react-router-dom';
import SearchBar from '../../searchBar/searchBar';



export default function Settings1() {
    // State variables for name, editing status, and profile image
    const [name, setName] = useState('John Smith');
    const [isEditingName, setIsEditingName] = useState(false);
    const [image, setImage] = useState(imageProfile);

    // Function to handle changes in the name input
    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    // Function to handle changes in the profile image
    const handleImageChange = (e) => {
        const file = e.target.files[0]; // Get the first selected file
        if (file) {
            const reader = new FileReader(); // Create a FileReader instance
            reader.onload = (e) => {
                setImage(e.target.result); // Set the image state to the uploaded image
            };
            reader.readAsDataURL(file); // Read the file as a data URL
        }
    };

    // Function to remove the profile image
    const handleRemoveImage = () => {
        setImage(imageProfile); // Reset to default profile image
    };

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

                    <div className="flex flex-col md:flex-row justify-between items-center  w-100">


                    </div>
                    <div className="text-gray-500 mb-3 text-sm" style={{ placeSelf: "start" }}>
                        <span>Dashboard</span>
                        <i className="fas fa-chevron-right mx-2"></i>
                        <span className="font-bold text-gray-700"></span>
                    </div>

                    {/* General Settings Section */}
                    <div className="p-4 whiteBg">
                        <div className="p-4">
                            <h1 className="text-center text-2xl font-bold mb-4">General Settings</h1>
                            <div className="border-b mb-4"></div>

                            {/* Profile Picture and Name */}
                            <div className="flex flex-col items-center mb-6">
                                {/* Profile Picture */}
                                <div className="relative">
                                    <img
                                        src={image}
                                        alt="User profile"
                                        className="rounded-full w-24 h-24 mb-2"
                                    />
                                    <input
                                        type="file"
                                        id="imageUpload"
                                        className="hidden"
                                        onChange={handleImageChange}
                                    />
                                    <div className="absolute bottom-0 right-0 flex space-x-2">
                                        <label
                                            htmlFor="imageUpload"
                                            className="bg-pink-200 p-1 rounded-full cursor-pointer"
                                        >
                                            <FontAwesomeIcon icon={faPencilAlt} /> {/* Edit Icon */}
                                        </label>
                                        <button
                                            onClick={handleRemoveImage}
                                            className="bg-red-200 p-1 rounded-full cursor-pointer"
                                        >
                                            <FontAwesomeIcon icon={faTrash} /> {/* Trash Icon */}
                                        </button>
                                    </div>
                                </div>

                                {/* Editable Name */}
                                {isEditingName ? (
                                    <input
                                        type="text"
                                        value={name}
                                        onChange={handleNameChange}
                                        onBlur={() => setIsEditingName(false)}
                                        className="text-lg font-medium text-center"
                                    />
                                ) : (
                                    <p
                                        className="text-lg font-medium"
                                        onClick={() => setIsEditingName(true)}
                                    >
                                        {name}
                                    </p>
                                )}

                                {/* Payco ID */}
                                <p className="text-gray-500">
                                    Payco ID : #123456 <i className="far fa-copy"></i> {/* Copy Icon */}
                                </p>
                            </div>

                            {/* Password Section */}
                            <div className="mb-4">
                                <p className="font-medium text-start">Password</p>
                                <div className="flex justify-between items-center">
                                    <p className="text-gray-500">****************</p>
                                    <button className="text-gray-500">Change</button>
                                </div>
                            </div>

                            {/* Two-Factor Authentication */}
                            <Link to="/settings2" className="">
                                <div
                                    className={`mb-4 flex gap-2 ${location.pathname.startsWith('/settings') ? 'text-red-600 font-medium' : ''
                                        }`}
                                >
                                    <p className="font-medium text-start">Two factor authentication</p>
                                    <div className="flex items-center">
                                        <label className="switch2">
                                            <input type="checkbox" />
                                            <span className="slider round"></span> {/* Toggle switch2 */}
                                        </label>
                                    </div>
                                </div>
                            </Link>


                            {/* Phone Number */}
                            <div className="mb-4 flex flex-col items-start">
                                <p className="text-gray-500">Phone number : 01124102721</p>
                                <p className="text-gray-500">Google Authenticator</p>
                            </div>

                            {/* Business Settings */}
                            <h2 className="text-center text-xl font-bold mb-4">Business Settings</h2>
                            <div className="border-b mb-4"></div>

                            {/* Manage Users */}
                            <div className="mb-4">
                                <p className="font-medium">Manage Users</p>

                                {/* Header Row */}
                                <div className="grid grid-cols-4 gap-4 mb-2 md:grid-cols-3 sm:grid-cols-12 mt-7" style={{ width: "80%", placeSelf: "center" }}>
                                    <p className="font-medium col-span-4 sm:col-span-12 md:col-span-1 md:justify-self-start sm:justify-self-center">Name</p>
                                    <p className="font-medium col-span-4 sm:col-span-12 md:col-span-1 md:justify-self-start sm:justify-self-center">Email</p>
                                    <div className="w-100 flex place-content-center col-span-4 sm:col-span-12 md:col-span-1">
                                        <p className="font-medium text-end md:w-50 sm:w-full">Role</p>
                                        <button className="text-gray-500 col-span-4 sm:col-span-12 md:col-span-1 text-end md:w-50 sm:w-full pl-2">
                                            <i className="fas fa-pencil-alt"></i> {/* Edit Icon */}
                                        </button>
                                    </div>
                                </div>

                                {/* User Rows */}
                                <div className="grid grid-cols-4 gap-4 mb-2 md:grid-cols-3 sm:grid-cols-12" style={{ width: "80%", placeSelf: "center" }}>
                                    <p className="col-span-4 sm:col-span-12 md:col-span-1 md:justify-self-start sm:justify-self-center">Bishoy Mikhael</p>
                                    <p className="col-span-4 sm:col-span-12 md:col-span-1 md:justify-self-start sm:justify-self-center">User@email.com</p>
                                    <div className="w-100 flex place-content-center col-span-4 sm:col-span-12 md:col-span-1">
                                        <p className="font-medium text-end md:w-50 sm:w-full">Role</p>
                                        <div className="text-gray-500 col-span-4 sm:col-span-12 md:col-span-1 pl-2 text-end md:w-50 sm:w-full"></div>
                                    </div>
                                </div>

                                {/* Another User Row */}
                                <div className="grid grid-cols-4 gap-4 mb-2 md:grid-cols-3 sm:grid-cols-12" style={{ width: "80%", placeSelf: "center" }}>
                                    <p className="col-span-4 sm:col-span-12 md:col-span-1 md:justify-self-start sm:justify-self-center">Kareem Elsayed</p>
                                    <p className="col-span-4 sm:col-span-12 md:col-span-1 md:justify-self-start sm:justify-self-center">User@email.com</p>
                                    <p className="col-span-4 sm:col-span-12 md:col-span-1">Admin
                                        <i className="fas fa-chevron-down col-span-4 sm:col-span-12 md:col-span-1"></i> {/* Dropdown Icon */}
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}
