import { FaThumbsUp } from 'react-icons/fa'; // Import your desired icon library
import { AiFillStar } from 'react-icons/ai'; // Import star icon

function TestimonialCard({ testimonials }) {
    return (
            <>
        <div className="flex flex-wrap justify-center space-x-4 space-y-4">
            {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white border rounded-lg shadow-md w-80 h-96 flex flex-col">
                    <div className="flex justify-between p-4">
                        <div className="flex">
                            {[...Array(5)].map((_, i) => (
                                <AiFillStar key={i} className="text-yellow-500" />
                            ))}
                        </div>
                        <div className="bg-gray-200 rounded-full p-2">
                            <FaThumbsUp className="text-gray-600" />
                        </div>
                    </div>
                    <div className="flex-grow p-4 flex items-center justify-center">
                        <p className="text-gray-700 text-center">{testimonial.text}</p>
                    </div>
                    <div className="bg-blue-100 p-4 rounded-b-lg flex justify-between items-center">
                        <div className="flex items-center">
                            <img src={testimonial.icon} alt={testimonial.name} className="h-8 w-8 rounded-full mr-2" />
                            <span className="text-gray-800">{testimonial.name}</span>
                        </div>
                        <span className="text-gray-500 text-sm">{testimonial.time}</span>
                    </div>
                </div>
            ))}
        </div>
                    </>
    );
}

export default TestimonialCard;