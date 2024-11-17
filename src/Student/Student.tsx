import styles from './Student.module.css'

interface StudentProps {
    name:string;
    age:number;
    isStudent:boolean;
}

function Student(props:StudentProps) {
    return (
        <div className={styles.student}>
            <p>Name: {props.name || "unknown"}</p>
            <p>Age: {props.age || "unknown"}</p>
            <p>Student : {props.isStudent? "Yes" : "No"}</p>
        </div>
    );
}

export default Student;  // Exports the Student component for use in other files
