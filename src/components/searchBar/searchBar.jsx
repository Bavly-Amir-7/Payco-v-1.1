import React from 'react'
import "./searchBar.css"

export default function SearchBar() {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 w-full px-3 overflow-hidden">
            <div className="flex w-full items-center justify-between gap-2 md:gap-3 flex-nowrap">

                {/* Search Input */}
                <div className="relative flex-1 min-w-0">
                    <input type="text" placeholder="Search anything here"
                        className="w-full p-2 md:p-3 rounded-lg border border-gray-300 text-sm md:text-base" />
                </div>

                {/* User Section */}
                <div className="flex items-center space-x-2 md:space-x-3 flex-nowrap min-w-fit">
                    <i className="fas fa-bell text-gray-400 text-lg"></i>

                    <div className="flex items-center gap-2 min-w-0">
                        <img src="https://storage.googleapis.com/a1aa/image/ScBMkEoJ3Gr6HVjcF2CrdyIti56QzXDWjyir38s7YUdcXC8E.jpg"
                            alt="User profile picture"
                            className="w-8 h-8 md:w-10 md:h-10 rounded-full flex-shrink-0"
                            width="30" height="30" />

                        {/* Ensure Name Stays in One Line */}
                        <span className="text-gray-700 whitespace-nowrap overflow-hidden text-ellipsis text-sm md:text-base">
                            John Smith
                        </span>

                        <i className="fas fa-caret-down text-gray-400 text-lg"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}
