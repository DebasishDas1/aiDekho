import axios from "axios";
import urlList from "./urlList";

const addToolApi = async (data) => {
    try {
        const response = await axios.post(urlList.addTool, data);
        console.log('add tool : ', response.data);
    } catch (error) {
        console.error(error);
    }
}

export default addToolApi;