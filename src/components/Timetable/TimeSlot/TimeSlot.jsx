import styles from "./TimeSlot.module.css"

const TimeSlot = ({ time, subject, onSubjectChange, index }) => (
    <div className={styles.timeSlot}>
        <span className={styles.time}>{time}</span>
        <input
            className={styles.ip}
            type="text"
            value={subject}
            onChange={(e) => onSubjectChange(index, e.target.value)}
            placeholder="Enter Subject"
        />
    </div>
);

export default TimeSlot;