import axios from "axios";
import urlList from "./urlList";

const feedbackApi = async (data) => {
    try {
        const response = await axios.post(urlList.feedBack, data);
        console.log('feedback : ', response.data);
    } catch (error) {
        console.error(error);
    }
}

export default feedbackApi;