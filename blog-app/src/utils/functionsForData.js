export async function fetchCards() {
    const options = {
        headers: {
            Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`
        }
    }
    try {
        const res = await fetch("http://127.0.0.1:1337/api/cards");
        const response = await res.json();
        return response;
    } catch (error) {
        console.log(error)
    }
}