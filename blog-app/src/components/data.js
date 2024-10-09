import React from 'react';

const BlogPostPage = ({ data }) => {
    return (
        <div className="bg-white min-h-screen py-10 px-6">
            {/* Blog Title */}
            <h1 className="text-[30px] font-bold text-black mb-4">{data.title}</h1>

            {/* Blog Image */}
            <div className="bg-sky-200 p-4 mb-6">
                <img src={data.image} alt={data.title} className="w-full object-cover h-64 rounded-md" />
            </div>

            {/* Blog Content */}
            <div className="text-black">
                <h2 className="text-[27px] font-semibold mb-3">{data.heading1}</h2>
                <p className="text-[18px] mb-4">{data.body1}</p>

                <h3 className="text-[24px] font-semibold mb-3">{data.heading2}</h3>
                <p className="text-[18px] mb-4">{data.body2}</p>

                <h4 className="text-[20px] font-semibold mb-3">{data.heading3}</h4>
                <p className="text-[19px] mb-6">{data.body3}</p>

                {/* Table Section */}
                <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse">
                        <thead className="bg-blue-700 text-white">
                            <tr>
                                <th className="px-4 py-2">First</th>
                                <th className="px-4 py-2">Last</th>
                                <th className="px-4 py-2">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-sky-200">
                                <td className="border px-4 py-2">{data.tableRow1.first}</td>
                                <td className="border px-4 py-2">{data.tableRow1.last}</td>
                                <td className="border px-4 py-2">{data.tableRow1.handle}</td>
                            </tr>
                            <tr className="bg-white">
                                <td className="border px-4 py-2">{data.tableRow2.first}</td>
                                <td className="border px-4 py-2">{data.tableRow2.last}</td>
                                <td className="border px-4 py-2">{data.tableRow2.handle}</td>
                            </tr>
                            <tr className="bg-sky-200">
                                <td className="border px-4 py-2">{data.tableRow3.first}</td>
                                <td className="border px-4 py-2">{data.tableRow3.last}</td>
                                <td className="border px-4 py-2">{data.tableRow3.handle}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default BlogPostPage;