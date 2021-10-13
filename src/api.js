import axios from "axios";

export default {
    methods: {
        async $callAPI(url, method, data) {
            return (await axios({
                method: method,
                url,
                data
            }).catch(e => {
                console.log(e);
            })).data
        },
    },
    mounted() {
        console.log("믹스인 mounted");
    },
    unmounted() {
        console.log("믹스인 unmounted");
    }
}