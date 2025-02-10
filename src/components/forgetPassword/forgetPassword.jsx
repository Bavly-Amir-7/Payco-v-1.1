import React, { useState } from "react";

export default function ForgetPasswordPage() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState(null);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage(null);
        setError(null);
    
        try {
            const response = await fetch("/api/auth/forgot-password", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            });
    
            const text = await response.text(); // Read response as text
    
            console.log("Response text:", text); // Debugging: log response
    
            if (!response.ok) {
                throw new Error(`HTTP Error! Status: ${response.status}, Message: ${text}`);
            }
    
            if (!text) {
                throw new Error("Empty response from server");
            }
    
            const data = JSON.parse(text); // Convert to JSON only if valid
    
            setMessage("A reset link has been sent to your email!");
        } catch (err) {
            console.error("Forgot Password Error:", err.message);
            setError(err.message);
        }
    };
    

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="w-2/3 max-w-md bg-white p-6 rounded shadow-md">
                <h2 className="text-2xl font-bold mb-4">Forgot Password</h2>
                {message && <p className="text-green-600 mb-4">{message}</p>}
                {error && <p className="text-red-600 mb-4">{error}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full p-2 border border-gray-300 rounded"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="w-full bg-red-600 text-white py-2 rounded">
                        Send Reset Link
                    </button>
                </form>
            </div>
        </div>
    );
}
