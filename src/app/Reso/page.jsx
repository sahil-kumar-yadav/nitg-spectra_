// pages/index.js
"use client"
import { useState } from 'react';

import data from "../../../public/Resources_data";
import CourseTree from '@/components/CourseTree/CourseTree';


const HomePage = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  // src="/right-arrow.svg"
  return (
    <div className="container" >
      <h1 className=' text-4xl font-bold font-serif'>Courses</h1>
      <CourseTree data={data} selectedCourse={selectedCourse} setSelectedCourse={setSelectedCourse} />
    </div>
  );
};

export default HomePage;
