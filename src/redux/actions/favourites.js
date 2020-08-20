export default async function toggleFavourite(movie) {
    try {
        let items = JSON.parse(localStorage.getItem('favourites')) || []
        let newItems

        if (items) {
            let itemIndex = items.findIndex((element) => element.id == movie.id)

            if (itemIndex === -1) {
                newItems = [...items]
                newItems.push(movie)
            }
            else {
                newItems = [...items].filter(item => item.id != movie.id)
            }
        }
        else {
            return []
        }

        localStorage.setItem('favourites', JSON.stringify(newItems))

        return {
            payload: newItems
        }

    } catch (error) {
        console.warn("error", error);
        return {
            payload: null,
        };
    }
}
