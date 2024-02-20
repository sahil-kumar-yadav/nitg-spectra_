"use client";
import TimeSlot from '../TimeSlot/TimeSlot';
import styles from './Day.module.css';

const Day = ({ day, timeSlots, onSubjectChange }) => {
  return (
    <div className={styles.dayContainer}>
      <h2 className={styles.h22} >{day}</h2>
      <div className={styles.timeSlots}>
        {timeSlots.map((slot, index) => (


          <TimeSlot key={index} time={slot.time} subject={slot.subject} onSubjectChange={onSubjectChange} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Day;
