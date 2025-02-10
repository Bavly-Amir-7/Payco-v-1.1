import React, { useState } from 'react';
import "./signUp.css";
import { Link, useNavigate } from 'react-router-dom';
import image1 from "./../images/computer.png";
import image2 from "./../images/Ayco2.png";
import Aside from '../aside/aside';

export default function SignUpPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [retypePassword, setRetypePassword] = useState('');
    const [passwordValid, setPasswordValid] = useState({
        length: false,
        uppercase: false,
        number: false,
        special: false,
        lowercase: false,
        match: false,
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showRetypePassword, setShowRetypePassword] = useState(false);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const validatePassword = (pass, retype) => {
        const lengthValid = pass.length >= 8;
        const uppercaseValid = /[A-Z]/.test(pass);
        const numberValid = /[0-9]/.test(pass);
        const specialValid = /[@#$%^&*]/.test(pass);
        const lowercaseValid = /[a-z]/.test(pass);
        const matchValid = pass === retype;

        setPasswordValid({
            length: lengthValid,
            uppercase: uppercaseValid,
            number: numberValid,
            special: specialValid,
            lowercase: lowercaseValid,
            match: matchValid,
        });
    };

    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        validatePassword(newPassword, retypePassword);
    };

    const handleRetypePasswordChange = (e) => {
        const newRetypePassword = e.target.value;
        setRetypePassword(newRetypePassword);
        validatePassword(password, newRetypePassword);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setLoading(true);

        if (!passwordValid.match) {
            setError("Passwords do not match");
            setLoading(false);
            return;
        }

        try {
            const response = await fetch("/api/auth/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Signup failed");
            }

            alert("Signup successful! Please check your email for verification.");
            navigate("/login");
        } catch (err) {
            setError(err.message);
        }
        setLoading(false);
    };

    return (
        <div className="signUpBody">
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="computer col-span-1 flex items-center justify-center">
                    <img src={image1} alt="Illustration of secure payment system with various security icons" className="w-2/3" />
                </div>
                <div className="loginArea col-span-1 flex items-center justify-center bg-gray-100 pt-2">
                    <div className="w-2/3">
                        <div className="text-start imageParent mb-3">
                            <img src={image2} alt="Payco Logo" className="mx-auto mb-3" />
                            <h2 className="text-2xl font-bold mt-5">Sign Up</h2>
                        </div>
                        {error && <p className="text-red-600 text-center">{error}</p>}
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2">Email</label>
                                <div className="flex items-center border border-gray-300 rounded bg-white">
                                    {/* أيقونة البريد الإلكتروني */}
                                    <div className="flex items-center pl-3">
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.25 0.75H3.75C2.7558 0.751191 1.80267 1.14666 1.09966 1.84966C0.396661 2.55267 0.00119089 3.5058 0 4.5L0 13.5C0.00119089 14.4942 0.396661 15.4473 1.09966 16.1503C1.80267 16.8533 2.7558 17.2488 3.75 17.25H14.25C15.2442 17.2488 16.1973 16.8533 16.9003 16.1503C17.6033 15.4473 17.9988 14.4942 18 13.5V4.5C17.9988 3.5058 17.6033 2.55267 16.9003 1.84966C16.1973 1.14666 15.2442 0.751191 14.25 0.75ZM3.75 2.25H14.25C14.6991 2.25088 15.1376 2.38614 15.5092 2.63835C15.8808 2.89057 16.1684 3.24821 16.335 3.66525L10.5915 9.4095C10.1688 9.83049 9.59656 10.0669 9 10.0669C8.40344 10.0669 7.83118 9.83049 7.4085 9.4095L1.665 3.66525C1.83161 3.24821 2.11921 2.89057 2.49079 2.63835C2.86236 2.38614 3.30091 2.25088 3.75 2.25ZM14.25 15.75H3.75C3.15326 15.75 2.58097 15.5129 2.15901 15.091C1.73705 14.669 1.5 14.0967 1.5 13.5V5.625L6.348 10.47C7.05197 11.1722 8.00569 11.5665 9 11.5665C9.99431 11.5665 10.948 11.1722 11.652 10.47L16.5 5.625V13.5C16.5 14.0967 16.2629 14.669 15.841 15.091C15.419 15.5129 14.8467 15.75 14.25 15.75Z" fill="#2D2D2D" />
                                    </svg>
                                        <span className="mx-2 text-gray-400">|</span>
                                    </div>

                                    {/* حقل الإدخال */}
                                    <input
                                        type="email"
                                        placeholder="username@gmail.com"
                                        className="flex-1 p-2 outline-none"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="mb-4 relative">
                                <label className="block text-gray-700 mb-2">Create Password</label>
                                <div className="flex items-center border border-gray-300 rounded bg-white">
                                    {/* أيقونة القفل */}
                                    <div className="flex items-center pl-3">
                                        <svg width="9" height="18" viewBox="0 0 9 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.47756 0.127203C4.05352 0.127643 3.64697 0.296287 3.34713 0.59613C3.04729 0.895973 2.87865 1.30252 2.87821 1.72656L2.87821 9.72878C2.03843 10.0325 1.31212 10.5867 0.797397 11.3164C0.282672 12.0462 0.00433908 12.9164 -1.88557e-07 13.8094C0.236485 19.5578 8.43312 19.564 8.67233 13.8093C8.66893 12.9714 8.42403 12.1522 7.96697 11.4498C7.5099 10.7475 6.86006 10.1918 6.09527 9.84934L6.66575 8.98114C6.7058 8.91991 6.7238 8.84686 6.71678 8.77404C6.70975 8.70121 6.67812 8.63295 6.6271 8.58051L5.39569 7.31202L6.62144 6.11235C6.68387 6.04922 6.71868 5.9639 6.71822 5.87512C6.71717 5.8311 6.70711 5.78777 6.68869 5.74778C6.67026 5.70779 6.64385 5.672 6.61107 5.6426L5.39884 4.55259L6.63213 3.21906C6.67884 3.16886 6.70827 3.10504 6.71613 3.03692C6.72399 2.9688 6.70986 2.89995 6.6758 2.84043L5.28792 0.404957C5.17986 0.304436 5.05188 0.22776 4.91227 0.17991C4.77267 0.132059 4.62455 0.114101 4.47756 0.127203ZM5.99961 2.95419L4.70505 4.3562C4.67646 4.38758 4.65433 4.42428 4.63993 4.46421C4.62553 4.50413 4.61914 4.54651 4.62112 4.58891C4.62311 4.63131 4.63343 4.6729 4.6515 4.71131C4.66956 4.74972 4.69502 4.78419 4.72642 4.81276L5.92577 5.89273L4.71699 7.07606C4.65607 7.13546 4.62122 7.21661 4.62011 7.30169C4.61899 7.38676 4.65168 7.4688 4.71102 7.52978L5.9861 8.84444L5.34165 9.8245C5.30508 9.88326 5.28805 9.95209 5.29301 10.0211C5.29796 10.0902 5.32465 10.1559 5.36924 10.2088C5.44579 10.2831 5.54159 10.3344 5.64581 10.3571C9.44009 11.8702 8.43086 17.4346 4.33611 17.502C3.44659 17.5014 2.58714 17.18 1.91557 16.5967C1.24399 16.0134 0.805372 15.2074 0.680248 14.3267C0.555123 13.4461 0.751892 12.5498 1.23442 11.8025C1.71696 11.0553 2.45286 10.5072 3.30702 10.2588C3.36809 10.2351 3.42092 10.194 3.45904 10.1407C3.49717 10.0874 3.51895 10.0241 3.52171 9.95866L3.52171 1.72655C3.52248 1.57479 3.55936 1.42538 3.62931 1.29069C3.69927 1.156 3.80027 1.0399 3.92398 0.951982C4.0477 0.864065 4.19056 0.806858 4.34076 0.785093C4.49096 0.763326 4.64419 0.777628 4.78777 0.826811L5.99961 2.95419Z" fill="#020202" />
                                            <path d="M2.95898 13.6932C2.9628 14.0105 3.09153 14.3136 3.31728 14.5366C3.54303 14.7597 3.8476 14.8848 4.16496 14.8848C4.48232 14.8848 4.78688 14.7597 5.01262 14.5366C5.23837 14.3136 5.3671 14.0105 5.3709 13.6932C5.36709 13.3758 5.23835 13.0728 5.0126 12.8497C4.78685 12.6267 4.48228 12.5016 4.16492 12.5016C3.84756 12.5016 3.543 12.6267 3.31726 12.8498C3.09151 13.0728 2.96279 13.3759 2.95898 13.6932ZM4.7274 13.6932C4.72522 13.8409 4.665 13.9819 4.55976 14.0856C4.45451 14.1893 4.31269 14.2474 4.16494 14.2474C4.01719 14.2474 3.87537 14.1893 3.77013 14.0856C3.66489 13.9819 3.60468 13.8409 3.60251 13.6932C3.6048 13.5455 3.66507 13.4047 3.7703 13.3011C3.87553 13.1975 4.01728 13.1394 4.16496 13.1394C4.31264 13.1394 4.45439 13.1975 4.55961 13.3011C4.66484 13.4047 4.72511 13.5455 4.7274 13.6932Z" fill="#020202" />
                                        </svg>
                                        <span className="mx-2 text-gray-400">|</span>
                                    </div>

                                    {/* حقل الإدخال */}
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="********"
                                        className="flex-1 p-2 outline-none"
                                        value={password}
                                        onChange={handlePasswordChange}
                                        required
                                    />

                                    {/* زر إظهار/إخفاء كلمة المرور */}
                                    <button
                                        type="button"
                                        className="pr-3 text-gray-600"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? (
                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17.8856 8.64983C17.7248 8.42986 13.8934 3.26367 8.99991 3.26367C4.10647 3.26367 0.274852 8.42986 0.114223 8.64962C-0.0380743 8.85831 -0.0380743 9.14135 0.114223 9.35004C0.274852 9.57001 4.10647 14.7362 8.99991 14.7362C13.8934 14.7362 17.7248 9.56998 17.8856 9.35022C18.0381 9.14156 18.0381 8.85831 17.8856 8.64983ZM8.99991 13.5494C5.39537 13.5494 2.27345 10.1205 1.3493 8.99953C2.27226 7.87759 5.38764 4.45048 8.99991 4.45048C12.6043 4.45048 15.726 7.87878 16.6505 9.00034C15.7276 10.1222 12.6122 13.5494 8.99991 13.5494Z" fill="#020202" />
                                                <path d="M8.99991 5.43945C7.03671 5.43945 5.43945 7.03671 5.43945 8.99991C5.43945 10.9631 7.03671 12.5604 8.99991 12.5604C10.9631 12.5604 12.5604 10.9631 12.5604 8.99991C12.5604 7.03671 10.9631 5.43945 8.99991 5.43945ZM8.99991 11.3735C7.69104 11.3735 6.6263 10.3087 6.6263 8.99991C6.6263 7.69107 7.69107 6.62629 8.99991 6.62629C10.3087 6.62629 11.3735 7.69107 11.3735 8.99991C11.3735 10.3087 10.3088 11.3735 8.99991 11.3735Z" fill="#020202" />
                                            </svg>
                                        ) : (
                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17.8856 8.64983C17.7248 8.42986 13.8934 3.26367 8.99991 3.26367C4.10647 3.26367 0.274852 8.42986 0.114223 8.64962C-0.0380743 8.85831 -0.0380743 9.14135 0.114223 9.35004C0.274852 9.57001 4.10647 14.7362 8.99991 14.7362C13.8934 14.7362 17.7248 9.56998 17.8856 9.35022C18.0381 9.14156 18.0381 8.85831 17.8856 8.64983ZM8.99991 13.5494C5.39537 13.5494 2.27345 10.1205 1.3493 8.99953C2.27226 7.87759 5.38764 4.45048 8.99991 4.45048C12.6043 4.45048 15.726 7.87878 16.6505 9.00034C15.7276 10.1222 12.6122 13.5494 8.99991 13.5494Z" fill="#020202" />
                                                <path d="M8.99991 5.43945C7.03671 5.43945 5.43945 7.03671 5.43945 8.99991C5.43945 10.9631 7.03671 12.5604 8.99991 12.5604C10.9631 12.5604 12.5604 10.9631 12.5604 8.99991C12.5604 7.03671 10.9631 5.43945 8.99991 5.43945ZM8.99991 11.3735C7.69104 11.3735 6.6263 10.3087 6.6263 8.99991C6.6263 7.69107 7.69107 6.62629 8.99991 6.62629C10.3087 6.62629 11.3735 7.69107 11.3735 8.99991C11.3735 10.3087 10.3088 11.3735 8.99991 11.3735Z" fill="#020202" />
                                            </svg>
                                        )}
                                    </button>
                                </div>

                                {/* شروط كلمة المرور */}
                                <ul className="mt-2 text-sm">
                                    <li className={passwordValid.length ? "text-green-500" : "text-red-500"}>
                                        Must be at least 8 characters long
                                    </li>
                                    <li
                                        className={
                                            passwordValid.uppercase ? "text-green-500" : "text-red-500"
                                        }
                                    >
                                        Include at least 1 uppercase letter
                                    </li>
                                    <li className={passwordValid.number ? "text-green-500" : "text-red-500"}>
                                        Include at least one number
                                    </li>
                                    <li
                                        className={
                                            passwordValid.special ? "text-green-500" : "text-red-500"
                                        }
                                    >
                                        Include at least 1 special character (@#$%^&*)
                                    </li>
                                    <li
                                        className={
                                            passwordValid.lowercase ? "text-green-500" : "text-red-500"
                                        }
                                    >
                                        Include at least 1 lowercase letter
                                    </li>
                                </ul>
                            </div>


                            <div className="mb-4 relative">
                                <label className="block text-gray-700 mb-2">Retype Password</label>
                                <div className="flex items-center border border-gray-300 rounded bg-white">
                                    {/* Icon */}
                                    <div className="flex items-center pl-3">
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.8856 8.64983C17.7248 8.42986 13.8934 3.26367 8.99991 3.26367C4.10647 3.26367 0.274852 8.42986 0.114223 8.64962C-0.0380743 8.85831 -0.0380743 9.14135 0.114223 9.35004C0.274852 9.57001 4.10647 14.7362 8.99991 14.7362C13.8934 14.7362 17.7248 9.56998 17.8856 9.35022C18.0381 9.14156 18.0381 8.85831 17.8856 8.64983ZM8.99991 13.5494C5.39537 13.5494 2.27345 10.1205 1.3493 8.99953C2.27226 7.87759 5.38764 4.45048 8.99991 4.45048C12.6043 4.45048 15.726 7.87878 16.6505 9.00034C15.7276 10.1222 12.6122 13.5494 8.99991 13.5494Z" fill="#020202" />
                                            <path d="M8.99991 5.43945C7.03671 5.43945 5.43945 7.03671 5.43945 8.99991C5.43945 10.9631 7.03671 12.5604 8.99991 12.5604C10.9631 12.5604 12.5604 10.9631 12.5604 8.99991C12.5604 7.03671 10.9631 5.43945 8.99991 5.43945ZM8.99991 11.3735C7.69104 11.3735 6.6263 10.3087 6.6263 8.99991C6.6263 7.69107 7.69107 6.62629 8.99991 6.62629C10.3087 6.62629 11.3735 7.69107 11.3735 8.99991C11.3735 10.3087 10.3088 11.3735 8.99991 11.3735Z" fill="#020202" />
                                        </svg>
                                        <span className="mx-2 text-gray-400">|</span>
                                    </div>

                                    {/* Input Field */}
                                    <input
                                        type={showRetypePassword ? "text" : "password"}
                                        placeholder="********"
                                        className="flex-1 p-2 outline-none"
                                        value={retypePassword}
                                        onChange={handleRetypePasswordChange}
                                        required
                                    />

                                    {/* Show/Hide Password Button */}
                                    <button
                                        type="button"
                                        className="pr-3 text-gray-600"
                                        onClick={() => setShowRetypePassword(!showRetypePassword)}
                                    >
                                        {showRetypePassword ? (
                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17.8856 8.64983C17.7248 8.42986 13.8934 3.26367 8.99991 3.26367C4.10647 3.26367 0.274852 8.42986 0.114223 8.64962C-0.0380743 8.85831 -0.0380743 9.14135 0.114223 9.35004C0.274852 9.57001 4.10647 14.7362 8.99991 14.7362C13.8934 14.7362 17.7248 9.56998 17.8856 9.35022C18.0381 9.14156 18.0381 8.85831 17.8856 8.64983ZM8.99991 13.5494C5.39537 13.5494 2.27345 10.1205 1.3493 8.99953C2.27226 7.87759 5.38764 4.45048 8.99991 4.45048C12.6043 4.45048 15.726 7.87878 16.6505 9.00034C15.7276 10.1222 12.6122 13.5494 8.99991 13.5494Z" fill="#020202" />
                                                <path d="M8.99991 5.43945C7.03671 5.43945 5.43945 7.03671 5.43945 8.99991C5.43945 10.9631 7.03671 12.5604 8.99991 12.5604C10.9631 12.5604 12.5604 10.9631 12.5604 8.99991C12.5604 7.03671 10.9631 5.43945 8.99991 5.43945ZM8.99991 11.3735C7.69104 11.3735 6.6263 10.3087 6.6263 8.99991C6.6263 7.69107 7.69107 6.62629 8.99991 6.62629C10.3087 6.62629 11.3735 7.69107 11.3735 8.99991C11.3735 10.3087 10.3088 11.3735 8.99991 11.3735Z" fill="#020202" />
                                            </svg>
                                        ) : (
                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17.8856 8.64983C17.7248 8.42986 13.8934 3.26367 8.99991 3.26367C4.10647 3.26367 0.274852 8.42986 0.114223 8.64962C-0.0380743 8.85831 -0.0380743 9.14135 0.114223 9.35004C0.274852 9.57001 4.10647 14.7362 8.99991 14.7362C13.8934 14.7362 17.7248 9.56998 17.8856 9.35022C18.0381 9.14156 18.0381 8.85831 17.8856 8.64983ZM8.99991 13.5494C5.39537 13.5494 2.27345 10.1205 1.3493 8.99953C2.27226 7.87759 5.38764 4.45048 8.99991 4.45048C12.6043 4.45048 15.726 7.87878 16.6505 9.00034C15.7276 10.1222 12.6122 13.5494 8.99991 13.5494Z" fill="#020202" />
                                                <path d="M8.99991 5.43945C7.03671 5.43945 5.43945 7.03671 5.43945 8.99991C5.43945 10.9631 7.03671 12.5604 8.99991 12.5604C10.9631 12.5604 12.5604 10.9631 12.5604 8.99991C12.5604 7.03671 10.9631 5.43945 8.99991 5.43945ZM8.99991 11.3735C7.69104 11.3735 6.6263 10.3087 6.6263 8.99991C6.6263 7.69107 7.69107 6.62629 8.99991 6.62629C10.3087 6.62629 11.3735 7.69107 11.3735 8.99991C11.3735 10.3087 10.3088 11.3735 8.99991 11.3735Z" fill="#020202" />
                                            </svg>
                                        )}
                                    </button>
                                </div>

                                {/* Password Match Validation */}
                                <p className={passwordValid.match ? "text-green-500 mt-2" : "text-red-500 mt-2"}>
                                    {passwordValid.match ? "Passwords match" : "Passwords do not match"}
                                </p>
                            </div>

                            <div className="mb-4">
                                <button type="submit" className="redBg w-full bg-red-600 text-white py-2 rounded" disabled={loading}>
                                    {loading ? "Signing Up..." : "Sign Up"}
                                </button>
                            </div>
                        </form>
                        <div className="flex items-center justify-center mt-4 lines">
                            <span className="flex-1">
                                <svg width="100%" height="1" viewBox="0 0 268 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="0.357422" y1="0.5" x2="267.817" y2="0.499975" stroke="#BFBFBF" />
                                </svg>
                            </span>
                            <span className="text-sm text-gray-500 mx-2">OR</span>
                            <span className="flex-1">
                                <svg width="100%" height="1" viewBox="0 0 268 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="0.357422" y1="0.5" x2="267.817" y2="0.499975" stroke="#BFBFBF" />
                                </svg>
                            </span>
                        </div>

                        <div className='mt-2'>
                            <button
                                className="w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                                type="button"
                            >
                                <div className='googleSearch'>
                                    <div>
                                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">


                                            <g clipPath="url(#clip0_2795_60742)">
                                                <path d="M5.77203 14.5027L4.93663 17.6213L1.88323 17.6859C0.970719 15.9934 0.453125 14.057 0.453125 11.9992C0.453125 10.0093 0.937063 8.13277 1.79488 6.48047H1.79553L4.51391 6.97884L5.70472 9.68091C5.45548 10.4075 5.31964 11.1875 5.31964 11.9992C5.31973 12.88 5.4793 13.724 5.77203 14.5027Z" fill="#FBBB00" />
                                                <path d="M24.2433 9.75781C24.3811 10.4837 24.453 11.2334 24.453 11.9996C24.453 12.8587 24.3627 13.6967 24.1906 14.5051C23.6064 17.2558 22.08 19.6578 19.9655 21.3576L19.9649 21.3569L16.541 21.1822L16.0564 18.1572C17.4594 17.3343 18.5559 16.0466 19.1335 14.5051H12.7168V9.75781H19.2271H24.2433Z" fill="#518EF8" />
                                                <path d="M19.9655 21.3577L19.9662 21.3584C17.9097 23.0113 15.2974 24.0004 12.4537 24.0004C7.88379 24.0004 3.91062 21.4461 1.88379 17.6872L5.77259 14.5039C6.78598 17.2085 9.39499 19.1338 12.4537 19.1338C13.7684 19.1338 15.0001 18.7784 16.057 18.158L19.9655 21.3577Z" fill="#28B446" />
                                                <path d="M20.1127 2.76262L16.2253 5.94525C15.1314 5.26153 13.8384 4.86656 12.4532 4.86656C9.32525 4.86656 6.66744 6.88017 5.70481 9.68175L1.79558 6.48131H1.79492C3.79208 2.63077 7.81536 0 12.4532 0C15.3648 0 18.0345 1.03716 20.1127 2.76262Z" fill="#F14336" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_2795_60742">
                                                    <rect width="24" height="24" fill="white" transform="translate(0.453125)" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div>
                                        Sign up with Google
                                    </div>
                                </div>
                            </button>
                        </div>
                        <div className="text-center mt-4">
                            <span className="text-sm text-gray-500">
                                Already have an account?{" "}
                                <Link className="hover:text-red-700" to="/login">
                                    Sign in
                                </Link>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

