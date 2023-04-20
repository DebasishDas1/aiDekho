import { useEffect, useState } from 'react';
import styles from './components.module.css';

const MySelector = ({ type, option, optionList, action }) => {
    const [selector, setSelector] = useState(option);

    useEffect(() => {
        action(selector);
    }, [selector, action]);

    return (
        <div className={styles.selector_contaner} >
            {type}
            <div className={styles.selector_option_contaner} >
                {
                    optionList.map(item => {
                        return (
                            <div
                                key={item}
                                value={item}
                                className={item === selector ?
                                    styles.selector_option_selected : styles.selector_option}
                                onClick={() => setSelector(item)}
                            >
                                {item}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )

}

export default MySelector;