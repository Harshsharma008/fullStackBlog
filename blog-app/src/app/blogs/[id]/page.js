"use client";
import { useEffect, useState } from 'react';
import './style.css'; // Import your CSS file
import Navbar from '@/components/navbar';

const decodeHtml = (encodedStr) => {
    const txt = document.createElement('textarea');
    txt.innerHTML = encodedStr;
    return txt.value;
};

const MyPage = () => {
    const [decodedHtml, setDecodedHtml] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchContent = async () => {
            try {
                const response = await fetch('http://localhost:1337/api/blog-details'); // Adjust your API endpoint
                const data = await response.json();
                console.log(data, "----data------");
                const encodedHtml = data.data[0]?.harshcustom || '';
                setDecodedHtml(decodeHtml(encodedHtml));
            } catch (error) {
                console.error('Error fetching content:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchContent();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div><Navbar /></div>
        
        <div className="container">

            <Navbar />
            <h1>Your Page Title</h1>
            <div className="content" dangerouslySetInnerHTML={{ __html: decodedHtml }} />
        </div>
        </>
    );
};

export default MyPage;
