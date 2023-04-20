import styles from './search.module.css';

const SearchPrompt = ({ title, action }) => {
    return (
        <div
            className={styles.tool_search_prompterList_promt}
            onClick={action}
        >
            {title}
        </div>
    );
};

export default SearchPrompt;