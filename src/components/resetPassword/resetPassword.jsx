import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function ResetPasswordPage() {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState(null);
    const [error, setError] = useState(null);
    const [searchParams] = useSearchParams();
    const token = searchParams.get("token"); 

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage(null);
        setError(null);
    
        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }
    
        try {
            const response = await fetch("/api/auth/reset-password", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ password, token }),
            });
    
            const text = await response.text(); // Read raw response text
    
            console.log("Response text:", text); // Log response for debugging
    
            if (!response.ok) {
                throw new Error(`HTTP Error! Status: ${response.status}, Message: ${text}`);
            }
    
            if (!text) {
                throw new Error("Empty response from server");
            }
    
            const data = JSON.parse(text); // Convert to JSON only if valid
    
            setMessage("Password has been successfully reset!");
        } catch (err) {
            console.error("Reset Password Error:", err.message);
            setError(err.message);
        }
    };
    

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="w-2/3 max-w-md bg-white p-6 rounded shadow-md">
                <h2 className="text-2xl font-bold mb-4">Reset Password</h2>
                {message && <p className="text-green-600 mb-4">{message}</p>}
                {error && <p className="text-red-600 mb-4">{error}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">New Password</label>
                        <input
                            type="password"
                            placeholder="Enter new password"
                            className="w-full p-2 border border-gray-300 rounded"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Confirm Password</label>
                        <input
                            type="password"
                            placeholder="Confirm new password"
                            className="w-full p-2 border border-gray-300 rounded"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="w-full bg-red-600 text-white py-2 rounded">
                        Reset Password
                    </button>
                </form>
            </div>
        </div>
    );
}
