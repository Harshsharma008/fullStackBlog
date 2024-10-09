import BlogPostPage from '@/components/data'
import React from 'react'
import { cardData } from "@/utils/cardData"
import Navbar from '@/components/navbar';
import SliderCard from '@/components/sliderCard';
export const data = {
    title: 'Dynamic Blog Title',
    heading1: 'Introduction to the Blog',
    body1: 'This is the introductory content of the blog...',
    heading2: 'Main Content',
    body2: 'This section covers the core ideas...',
    heading3: 'Conclusion',
    body3: 'Wrapping up the blog with key takeaways...',
    tableRow1: { first: 'John', last: 'Doe', handle: '@johndoe' },
    tableRow2: { first: 'Jane', last: 'Doe', handle: '@janedoe' },
    tableRow3: { first: 'Mark', last: 'Twain', handle: '@marktwain' },
};

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
function page() {
    return (
        <div>
            <Navbar/>
            <BlogPostPage data={data} />

            <SliderCard cardData={dataCard} />
        </div>
    )
}

export default page