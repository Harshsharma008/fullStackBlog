import About from "@/components/aboutAuthor"
import BlogPostPage from "@/components/data"
import CardCarousel from "@/components/dynamic_card"
import Navbar from "@/components/navbar"
import SliderCard from "@/components/sliderCard"
import { cardData } from "@/utils/cardData"

// Example of how you might pass the dynamic data


// Example usage in your component


    

function page() {
    return (
        <div>
            <Navbar />
            <About />
            <hr />
            <div className="pt-6 pl-14">
                <h1 className="text-xl"><span className="bg-blue-600 text-white font-bold">Read</span> Author blogs</h1>
            </div>
            <div className="pl-14 pr-5">
                <CardCarousel cardData={cardData} />
            </div>
            
            
        </div>

    )
}

export default page