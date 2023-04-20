import { useState } from 'react';

import MyButton from '../components/MyButton';
import MyInput from '../components/MyInput';

import styles from './pages.module.css';

const Contact = () => {
    const [connection, setConnection] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handelConnection = (event) => {
        const { name, value } = event.target;

        setConnection(oldData => { return { ...oldData, [name]: value } })
    }

    const sendEmail = () => {
        console.log(connection);
    }

    return (
        <div className={styles.contact} >
            {/* title */}
            <h1>Feel free to contact us</h1>

            {/* map */}
            <div className={styles.contact__map} >
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.9698254250447!2d88.35495577467564!3d22.654913629949696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89d03ddd97829%3A0xffa380efed305d4c!2sDakshineswar%20Kali%20Temple!5e0!3m2!1sen!2sin!4v1681416715701!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    loading="lazy"
                    title='1'
                    referrerpolicy="no-referrer-when-downgrade"
                />
            </div>

            {/* form */}
            <div className={styles.contact__form} >
                <MyInput
                    name='name'
                    value={connection.name}
                    action={handelConnection}
                    placeholder='Please provide your feedback'
                />
                <MyInput
                    name='email'
                    value={connection.email}
                    action={handelConnection}
                    placeholder='Please provide your feedback'
                />
                <MyInput
                    name='message'
                    value={connection.message}
                    action={handelConnection}
                    placeholder='Please provide your feedback'
                />
                <MyButton title='Submit feedback' action={sendEmail} />
            </div>
        </div>
    );
};

export default Contact;