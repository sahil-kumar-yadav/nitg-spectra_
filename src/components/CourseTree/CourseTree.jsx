// components/CourseTree.js
"use client"
import { useState, useCallback, memo } from 'react';
import styles from './CourseTree.module.css';
import Link from 'next/link';

const CourseTree = memo(({ data, setSelectedCourse }) => {
  const [expandedYears, setExpandedYears] = useState([]);
  const [expandedSemesters, setExpandedSemesters] = useState([]);
  const [expandedCourses, setExpandedCourses] = useState([]);

  const toggleYear = useCallback((year) => {
    setExpandedYears((prevExpanded) =>
      prevExpanded.includes(year) ? prevExpanded.filter((y) => y !== year) : [...prevExpanded, year]
    );
    // Reset expanded semesters and courses when toggling year
    setExpandedSemesters([]);
    setExpandedCourses([]);
  }, []);

  const toggleSemester = useCallback((semester) => {
    setExpandedSemesters((prevExpanded) =>
      prevExpanded.includes(semester)
        ? prevExpanded.filter((s) => s !== semester)
        : [...prevExpanded, semester]
    );
    // Reset expanded courses when toggling semester
    setExpandedCourses([]);
  }, []);

  const toggleCourse = useCallback((course) => {
    setExpandedCourses((prevExpanded) =>
      prevExpanded.includes(course) ? prevExpanded.filter((c) => c !== course) : [...prevExpanded, course]
    );
  }, []);

  return (
    <ul className={styles.courseTree}>
      {data.map((yearData) => (
        <li key={yearData.year} className={styles.year}>
          <button className={styles.yearButton} onClick={() => toggleYear(yearData.year)}>
            <img
              src="/right-arrow.svg"
              alt=""
              className={styles.icon}
            />
            {yearData.year}
          </button>
          {expandedYears.includes(yearData.year) && (
            <ul className={styles.semesterList}>
              {yearData.semesters.map((semesterData) => (
                <li key={semesterData.semester} className={styles.semester}>
                  <button className={styles.semesterButton} onClick={() => toggleSemester(semesterData.semester)}>
                    <img
                      src="/right-arrow.svg"
                      alt=""
                      className={styles.icon}
                    />
                    {semesterData.semester}
                  </button>
                  {expandedSemesters.includes(semesterData.semester) && (
                    <ul className={styles.courseList}>
                      {semesterData.courses.map((courseData) => (
                        <li key={courseData.course} className={styles.course}>
                          <button className={styles.courseButton} onClick={() => toggleCourse(courseData.course)}>
                            <img
                              src="/right-arrow.svg"
                              alt=""
                              className={styles.icon}
                            />
                            {courseData.course}
                          </button>
                          {expandedCourses.includes(courseData.course) && (
                            <ul className={styles.fileList}>
                              {courseData.files.map((file) => (
                                <li key={file.name} className={styles.file}>
                                  <Link href={file.url}>{file.name}</Link>

                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
});

export default CourseTree;
