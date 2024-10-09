// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel"

// // function truncateText(text, length) {
// //   return text.length > length ? text.substring(0, length) + "..." : text;
// // }

// function SliderCard({ cardData }) {
  
//   return (
//     <Carousel className="p-10">
//       <CarouselPrevious>Previous</CarouselPrevious>
//       <CarouselContent>
//         {cardData.map((card, index) => (
//           <CarouselItem key={index} className="basis-1/4 p-2">
//             <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden transition-transform duration-300 hover:shadow-2xl">
//               <img
//                 className="lg:h-48 md:h-36 w-full object-cover object-center"
//                 src={card.Image}
//                 alt={card.title}
//               />
//               <div className="p-6">
//                 <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
//                   {card.Category}
//                 </h2>
//                 <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
//                   {card.title}
//                 </h1>
//                 <p className="leading-relaxed mb-3">{card.ShortDescription}</p>
//                 <div className="flex justify-between items-center">
//                   <span className="text-gray-500 text-sm">{card.Author}</span>
//                   <span className="text-gray-500 text-sm">
//                     {new Date(card.Createdat).toLocaleDateString()}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </CarouselItem>
//         ))}
//       </CarouselContent>
//       <CarouselNext>Next</CarouselNext>
//     </Carousel>
//   );
// }

// export default SliderCard;
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function SliderCard({ cardData }) {
  return (
    <Carousel className="p-10">
      <CarouselPrevious>Previous</CarouselPrevious>
      <CarouselContent>
        {cardData.map((card, index) => (
          <CarouselItem key={index} className="basis-1/4 p-2">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden transition-transform duration-300 hover:shadow-2xl flex flex-col">
              <img
                className="lg:h-48 md:h-36 w-full object-cover object-center"
                src={card.Image}
                alt={card.title}
              />
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  {card.Category}
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  {card.title}
                </h1>
                <p className="leading-relaxed mb-3 flex-grow">{card.ShortDescription}</p>
                {/* Move the author and date to the bottom */}
                <div className="flex justify-between items-center mt-auto">
                  <span className="text-gray-500 text-sm">{card.Author}</span>
                  <span className="text-gray-500 text-sm">
                    {new Date(card.Createdat).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselNext>Next</CarouselNext>
    </Carousel>
  );
}

export default SliderCard;
