import axios from 'axios'

export default async function getSearchedMovie(searchTerm) {
  try {
    let res = axios(
      `/search/movie?query=${searchTerm.toLowerCase()}`
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

    const response = await res;

    return {
      payload: response.results
    };
  } catch (error) {
    console.warn("error");
    return {
      payload: null,
    };
  }
}