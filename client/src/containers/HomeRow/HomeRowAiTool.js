import styles from './homeRow.module.css';

const HomeRowAiTool = ({ tool }) => {
    const { name, description, website, imageUrl } = tool;

    return (
        <div className={styles.home_ai_tools} >
            <div className={styles.home_ai_tools_title} >
                {imageUrl && <img src={imageUrl} alt={name} />}
                <h3>{name}</h3>
            </div>
            <div className={styles.home_ai_tools_description} >
                {description.length > 50 ? `${description.slice(0, 50)}...` : description}
            </div>
            <div className={styles.home_ai_tools_button} >
                <a href={website} target="_blank" rel="noopener noreferrer">Click to visit</a>
            </div>
        </div>
    );
};

export default HomeRowAiTool;