"use client";

import html2canvas from 'html2canvas';
import { useState, useRef } from "react";
import Day from "./Day/Day";
import Header from "./Header/Header";
import style from './TimeTable.module.css'

const Timetable = () => {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    const initialTimeSlots = [
        { time: '9:00 - 9:55', subject: 'Math' },
        { time: '10:00 - 10:55', subject: 'Chemistry' },
        { time: '11:00 - 11:55', subject: 'Biology' },
        { time: '12:00 - 12:55', subject: 'Physics' },
        { time: '1:00 - 1:55', subject: 'History' },
        { time: '2:00 - 2:55', subject: 'Geography' },
        { time: '3:00 - 3:55', subject: 'Computer Science' },
        { time: '4:00 - 4:55', subject: 'English' },
        { time: '5:00 - 5:55', subject: 'Physical Education' },
    ];

    const timetableRef = useRef(null);

    // Initializing timetableData with subjects for each day
    const [timetableData, setTimetableData] = useState({
        Monday: [...initialTimeSlots],
        Tuesday: [...initialTimeSlots],
        Wednesday: [...initialTimeSlots],
        Thursday: [...initialTimeSlots],
        Friday: [...initialTimeSlots],
        // Add data for extra days
    });

    // Function to handle subject changes for a specific day
    const handleSubjectChange = (day, index, newSubject) => {
        setTimetableData((prevData) => {
            const newData = { ...prevData };
            newData[day][index] = { ...newData[day][index], subject: newSubject };
            return newData;
        });
    };

    const handleDownloadImage = async () => {
        if (timetableRef.current) {
            const canvas = await html2canvas(timetableRef.current);
            const imgData = canvas.toDataURL('image/png');

            // Creating a temporary link element and trigger a download
            const link = document.createElement('a');
            link.href = imgData;
            link.download = 'timetable.png';
            link.click();
        }
    };

    return (
        <div>
            <Header />
            <div ref={timetableRef}>
                {days.map((day) => (
                    <Day key={day} day={day} timeSlots={timetableData[day]} onSubjectChange={(index, newSubject) => handleSubjectChange(day, index, newSubject)} />
                ))}
            </div>
            <div className={style.btndiv}>
                <button className={style.btn} onClick={handleDownloadImage}>Download Timetable Image</button>
            </div>
        </div>
    );
};

export default Timetable;
