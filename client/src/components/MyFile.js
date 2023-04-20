import FileBase from 'react-file-base64';

import styles from './components.module.css';

const MyFile = ({ action }) => {
    return (
        <div className={styles.fileInput} >
            <FileBase
                type='file'
                multiple={false}
                onDone={action}
            />
        </div>
    )
};

export default MyFile;