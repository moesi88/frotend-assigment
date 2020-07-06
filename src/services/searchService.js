export default async (searchValue) => {
    return await fetch(`/search?q=${searchValue}`)
        .then(res => res.json())
        .then((result) => {
            return result
        })
}