import { useState } from 'react';

import MySelector from '../components/MySelector';
import MyButton from '../components/MyButton';
import MyInput from '../components/MyInput';
import MyFile from '../components/MyFile';
import MyPaper from '../components/MyPaper';

import feedbackApi from '../apis/feedbackApi';
import addToolApi from '../apis/addToolApi';

import styles from './pages.module.css';

const Submit = () => {
    const rattingList = ['1', '2', '3', '4', '5'];

    const [message, setMessage] = useState('');
    const [ratting, setRatting] = useState('');
    const [newTool, setNewTool] = useState({
        toolName: '',
        toolDescription: '',
        toolUrl: '',
        toolLogo: '',
    })

    const handelNewTool = (event) => {
        const { name, value } = event.target;

        setNewTool(oldData => {
            return { ...oldData, [name]: value }
        })
    }

    const handelFeedback = () => {
        feedbackApi({ message: message, ratting: ratting })
    }

    const addNewTool = () => {
        addToolApi(newTool);
    }

    return (
        <div className={styles.submit} >
            {/* feedback */}
            <MyPaper height={20} className={styles.submit__box} >
                <h1>feedback</h1>
                {/* feedback message */}
                <MyInput
                    name='feedback message'
                    value={message}
                    action={event => setMessage(event.target.value)}
                    placeholder='Please provide your feedback'
                />

                {/* ratting */}
                <MySelector
                    type='Rate aiDekho'
                    option='4'
                    action={setRatting}
                    optionList={rattingList}
                />

                {/* submit button */}
                <MyButton title='Submit feedback' action={handelFeedback} />
            </MyPaper>

            {/* New ai tool */}
            <MyPaper height={20} className={styles.submit__box} >
                <h1>Add new ai tool</h1>
                {/* tool name */}
                <MyInput
                    name='toolName'
                    value={newTool.toolName}
                    action={handelNewTool}
                    placeholder='Tool name'
                />

                {/* tool description */}
                <MyInput
                    name='toolDescription'
                    value={newTool.toolDescription}
                    action={handelNewTool}
                    placeholder='tool description'
                />

                {/* tool url */}
                <MyInput
                    name='toolUrl'
                    value={newTool.toolUrl}
                    action={handelNewTool}
                    placeholder='Tool url'
                />

                {/* tool logo */}
                <MyFile action={({ base64 }) => setNewTool({ ...newTool, toolLogo: base64 })} />
                {/* submit button */}
                <MyButton title='Add new AI tool' action={addNewTool} />
            </MyPaper>
        </div>
    );
};

export default Submit;