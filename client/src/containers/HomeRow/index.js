import { useState, useEffect } from 'react';
import HomeRowAiTool from './HomeRowAiTool';

import styles from './homeRow.module.css';

const HomeRow = ({ title, list }) => {
    const [toolsList, setTools] = useState([]);

    useEffect(() => {
        setTools(list);
    }, [toolsList, list]);

    return (
        <div className={styles.homeRow} >
            <h2> {title} </h2>

            {/* container */}
            {toolsList ?
                <div className={styles.homeRow_conntainer} >
                    {toolsList.map((tool, i) => <HomeRowAiTool tool={tool} key={i} />)}
                </div>
                : <h3 style={{ color: 'gray' }} >We are searching for related tools ...</h3>
            }

        </div>
    );
};

export default HomeRow;