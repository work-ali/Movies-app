import axios from 'axios'

export default async function getMovie(id) {
    try {
        let response = axios(
            `https://api.themoviedb.org/3/movie/${id}?&language=en-US`
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
            payload: res,
        };
    } catch (error) {
        console.warn("error");
        return {
            payload: null,
        };
    }
}
