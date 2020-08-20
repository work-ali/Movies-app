import axios from 'axios'

export default async function getPopular(page = 1) {
    try {
        let response = axios(
            `/movie/popular?&language=en-US&page=${page}`
        )
            .then(res => {
                if (res.status === 200) {
                    return res.data;
                } else {
                    throw new Error("not found");
                }
            })
            .catch(error => {
                console.log(error);
            });
        const res = await response;

        return {
            payload: res.results,
        };
    } catch (error) {
        console.warn("error");
        return {
            payload: null,
        };
    }
}
