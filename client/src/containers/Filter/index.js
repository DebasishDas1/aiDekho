import { useState, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import SearchPrompt from './SearchPrompt';

import styles from './search.module.css';

const Search = () => {
    const [search, setSearch] = useState('');
    const promterList = ['Recommended', 'Populer', '2d-3d'];
    const [prompter, setPrompter] = useState();

    useEffect(() => {
        console.log(prompter);
    }, [prompter]);

    const searchHandler = (event) => {
        event.preventDefault();

        console.log(search);
    }

    return (
        <div className={styles.tool_search} >
            <div className={styles.tool_search_prompterList} >
                {
                    promterList.map((promt, i) => {
                        return (
                            <SearchPrompt
                                key={i}
                                title={promt}
                                action={setPrompter}
                            />
                        );
                    })
                }
            </div>
            <div className={styles.tool_search_input} >
                <SearchIcon />
                <form onSubmit={searchHandler} >
                    <input
                        placeholder='Search the card'
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                    />
                </form>
            </div>
        </div>
    );
};

export default Search;
