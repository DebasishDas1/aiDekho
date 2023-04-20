import styles from './components.module.css';

const MyButton = ({ title, action }) => {
    return (
        <span className={styles.myButton} onClick={action} >
            {title}
        </span>
    );
}

export default MyButton;