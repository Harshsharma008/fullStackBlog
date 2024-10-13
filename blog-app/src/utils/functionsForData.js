export async function fetchCards() {
    const options = {
        headers: {
            Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`
        }
    }
    try {
        const res = await fetch("http://localhost:1337/api/blog-details");
        console.log(res, "in resss")
        const response = await res.json();
        return response;
    } catch (error) {
        console.log(error)
    }
}