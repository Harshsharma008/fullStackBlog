import Blog from "@/components/blog";
import CardCarousel from "@/components/dynamic_card";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Products from "@/components/products";
import SliderCard from "@/components/sliderCard";
import Statics from "@/components/statics";
import Testimonial from "@/components/testimonial";
import { cardData } from "@/utils/cardData";
import { fetchCards } from "../utils/functionsForData"
const dataCard = [
  {
    title: "Exploring the Mountains",
    category: "Travel",
    description: "A journey through the majestic mountains, exploring nature and adventure.",
    image: "/cardDemo.png",
    author: "John Doe",
    date: "2023-09-15",
  },
  {
    title: "Culinary Delights",
    category: "Food",
    description: "Discover the flavors of the world through exquisite culinary experiences.",
    image: "/cardDemo.png",
    author: "Jane Smith",
    date: "2023-08-25",
  },
  {
    title: "Tech Innovations",
    category: "Technology",
    description: "An overview of the latest trends and innovations in the tech industry.",
    image: "/cardDemo.png",
    author: "Alice Johnson",
    date: "2023-10-05",
  },
  {
    title: "Art and Culture",
    category: "Art",
    description: "A deep dive into the world of art and culture, exploring various forms of expression.",
    image: "/cardDemo.png",
    author: "Bob Brown",
    date: "2023-09-20",
  },
  {
    title: "The Future of Work",
    category: "Business",
    description: "Insights into how remote work is reshaping the business landscape.",
    image: "/cardDemo.png",
    author: "Charlie Davis",
    date: "2023-07-30",
  },
];

const dataProducts = [
  {
    title: "Shooting Stars",
    description: "Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.",
    image: "/product1.png",
  },
  {
    title: "Cosmic Dreams",
    description: "A collection of dreamy inspirations that spark your imagination and creativity.",
    image: "/product2.png",
  },
  {
    title: "Ocean Waves",
    description: "Experience the tranquility and beauty of ocean waves with our new collection.",
    image: "/product3.png",
  },
  {
    title: "Mountain Adventure",
    description: "Join us for an adventure through the mountains with breathtaking views.",
    image: "product4.png",
  },
  {
    title: "Urban Jungle",
    description: "Explore the vibrant and energetic lifestyle of the urban jungle.",
    image: "product1.png",
  },
  {
    title: "Wildlife Wonders",
    description: "Discover the beauty of wildlife and nature with our unique collection.",
    image: "product2.png",
  },
];

// Example usage in your component



export default async function Home() {
  const response = await fetchCards(); // Assuming fetchCards is your fetch function
  const cardDatas = response.data;
  console.log(cardDatas, "heyy harsh ")
  return (
    <>

      <Navbar />
      <Hero />

      <Statics />
      <Blog />
      <SliderCard cardData={cardDatas } />
      <Products cardData={dataProducts} />

      <Testimonial cardData={cardData} />
      <Footer />
    </>
  );
}
