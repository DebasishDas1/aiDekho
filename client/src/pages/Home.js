import HomeRow from '../containers/HomeRow';
import Filter from '../containers/Filter';

import { trendingList } from '../containers/HomeRow/trendingList'
import { generateToolList } from '../containers/HomeRow/generateToolList';

import styles from './pages.module.css';

const Home = () => {
    return (
        <div className={styles.app} >
            <Filter />
            <HomeRow title='Latest & Trending' list={trendingList} />
            <HomeRow title='Generate' list={generateToolList} />
        </div>
    );
};

export default Home;