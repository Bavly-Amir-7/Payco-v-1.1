import React, { useState, useEffect } from 'react';
import "./calender.css";

export default function Calender({ onDateSelect }) {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDay, setSelectedDay] = useState(new Date().getDate());
    const [showYearDropdown, setShowYearDropdown] = useState(false);
    const [showMonthDropdown, setShowMonthDropdown] = useState(false);

    const years = Array.from({ length: 61 }, (_, i) => 1970 + i); // 1970 to 2030
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    useEffect(() => {
        const today = new Date();
        setSelectedDay(today.getDate());
    }, [currentDate]);

    const getDaysInMonth = (year, month) => {
        const days = [];
        const firstDayOfMonth = new Date(year, month, 1);
        const lastDayOfMonth = new Date(year, month + 1, 0);

        // Days from the previous month
        const startDayOfWeek = (firstDayOfMonth.getDay() + 6) % 7; // Adjust to start from Monday
        for (let i = startDayOfWeek - 1; i >= 0; i--) {
            const day = new Date(year, month, -i).getDate();
            days.push({ day, isCurrentMonth: false });
        }

        // Days in the current month
        for (let day = 1; day <= lastDayOfMonth.getDate(); day++) {
            days.push({ day, isCurrentMonth: true });
        }

        // Days from the next month
        const endDayOfWeek = (lastDayOfMonth.getDay() + 6) % 7; // Adjust to end on Sunday
        for (let i = 1; i < 7 - endDayOfWeek; i++) {
            const day = new Date(year, month + 1, i).getDate();
            days.push({ day, isCurrentMonth: false });
        }

        return days;
    };

    const changeMonth = (direction) => {
        setCurrentDate((prevDate) => {
            const newMonth = prevDate.getMonth() + direction;
            return new Date(prevDate.getFullYear(), newMonth, 1);
        });
    };

    const selectYear = (year) => {
        setCurrentDate(new Date(year, currentDate.getMonth(), 1));
        setShowYearDropdown(false);
    };

    const selectMonth = (monthIndex) => {
        setCurrentDate(new Date(currentDate.getFullYear(), monthIndex, 1));
        setShowMonthDropdown(false);
    };

    const selectDay = (day) => {
        setSelectedDay(day);
        const formattedDate = `${currentDate.getMonth() + 1} / ${day} / ${currentDate.getFullYear()}`;
        if (onDateSelect) {
            onDateSelect(formattedDate); 
        }
    };

    const days = getDaysInMonth(currentDate.getFullYear(), currentDate.getMonth());

    return (
        <div className="bg-white rounded-lg shadow-lg p-4 w-72">
            <div className="flex justify-between items-center mb-4 relative">
                <button
                    className="text-red-500 text-lg"
                    onClick={() => changeMonth(-1)}
                >
                    &lt;
                </button>
                <div className="flex items-center gap-2">
                    <div className="relative">
                        <span
                            className="font-semibold text-lg cursor-pointer flex items-center"
                            onClick={() => setShowMonthDropdown(!showMonthDropdown)}
                        >
                            {months[currentDate.getMonth()]}
                            <span className="ml-1 text-red-500">&#9662;</span>
                        </span>
                        {showMonthDropdown && (
                            <ul className="absolute bg-white border rounded shadow-md mt-2 max-h-40 overflow-y-auto z-10">
                                {months.map((month, index) => (
                                    <li
                                        key={index}
                                        className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                                        onClick={() => selectMonth(index)}
                                    >
                                        {month}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    <div className="relative">
                        <span
                            className="font-semibold text-lg cursor-pointer flex items-center"
                            onClick={() => setShowYearDropdown(!showYearDropdown)}
                        >
                            {currentDate.getFullYear()}
                            <span className="ml-1 text-red-500">&#9662;</span>
                        </span>
                        {showYearDropdown && (
                            <ul className="absolute bg-white border rounded shadow-md mt-2 max-h-40 overflow-y-auto z-10">
                                {years.map((year) => (
                                    <li
                                        key={year}
                                        className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                                        onClick={() => selectYear(year)}
                                    >
                                        {year}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
                <button
                    className="text-red-500 text-lg"
                    onClick={() => changeMonth(1)}
                >
                    &gt;
                </button>
            </div>
            <div className="grid grid-cols-7 gap-2 text-center text-gray-700">
                <div className="font-medium">Mo</div>
                <div className="font-medium">Tu</div>
                <div className="font-medium">We</div>
                <div className="font-medium">Th</div>
                <div className="font-medium">Fr</div>
                <div className="font-medium">Sa</div>
                <div className="font-medium">Su</div>
                {days.map((day, index) => (
                    <div
                        key={index}
                        className={`cursor-pointer flex items-center justify-center w-10 h-10 rounded-full ${
                            day.isCurrentMonth ? 'text-gray-700' : 'text-gray-400'
                        } ${
                            selectedDay === day.day && day.isCurrentMonth ? 'bg-red-500 text-white' : 'hover:bg-gray-200'
                        }`}
                        onClick={() => day.isCurrentMonth && selectDay(day.day)}
                    >
                        {day.day}
                    </div>
                ))}
            </div>
        </div>
    );
}
