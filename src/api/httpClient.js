import axios from "axios";
// import { throttleAdapterEnhancer } from "axios-extensions"
import axiosRetry from "axios-retry"

// const throttleConfig = {
//     threshold: 20 * 1000 //20 second throttle
// }
const httpClient = axios.create({
    baseURL: 'https://techcrunch.com/wp-json/wp/v2/',
    headers: {
        'Content-Type': 'application/json',
    },
    // adapter: throttleAdapterEnhancer(axios.defaults.adapter, throttleConfig)
});

axiosRetry(httpClient, { retries: 4, retryDelay: () => 2000  });

export default httpClient