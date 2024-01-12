"use client"

import React from 'react';
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi, } from './ui/carousel';
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from "embla-carousel-autoplay"
import { Skeleton } from "@/components/ui/skeleton"

export function Slider() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  )
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  // Array of carousel items
  const carouselItems = [
    { content: '/IMG_1833.PNG' },
    { content: '/IMG_1834.PNG' },
    { content: '/IMG_1835.PNG' },
    { content: '/IMG_1882.PNG' },
    { content: '/IMG_1883.PNG' },
    { content: '/IMG_1884.PNG' },
    { content: '/IMG_1885.PNG' },
  ];

  const [imageLoaded, setImageLoaded] = React.useState<boolean>(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div>
      <Carousel
        plugins={[plugin.current]}
        setApi={setApi} opts={{
          // align: "start",
          loop: true,
          dragFree: true,
        }}>
        <CarouselContent>
          {/* Map through the array and generate CarouselItem components */}
          {carouselItems.map((item, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              {/* Use next/image for displaying images */}
              <Skeleton
                className={`h-full w-full object-cover rounded-lg ${imageLoaded ? 'hidden' : 'block'}`}
              >
                <Image
                  src={item.content}
                  alt={`Image ${index + 1}`}
                  width={500}
                  height={200}
                  onLoad={handleImageLoad}
                />
              </Skeleton>
              {imageLoaded && (
                <Image
                  src={item.content}
                  alt={`Image ${index + 1}`}
                  width={500}
                  height={200}
                />
              )}
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="py-2 text-center text-sm text-muted-foreground">
        Slide {current} of {count}
      </div>
    </div>
  );
};

export default Slider;
// "use client"
// import React from 'react';
// import Image from 'next/image';
// import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi, } from './ui/carousel';
// import useEmblaCarousel from 'embla-carousel-react'
// import Autoplay from "embla-carousel-autoplay"
// import { Skeleton } from "@/components/ui/skeleton"






// export function Slider() {
    
//     const plugin = React.useRef(
//         Autoplay({ delay: 2000, stopOnInteraction: true })
//       )
//     const [api, setApi] = React.useState<CarouselApi>()
//     const [current, setCurrent] = React.useState(0)
//     const [count, setCount] = React.useState(0)

//     React.useEffect(() => {
//         if (!api) {
//           return
//         }
    
//         setCount(api.scrollSnapList().length)
//     setCurrent(api.selectedScrollSnap() + 1)
 
//     api.on("select", () => {
//       setCurrent(api.selectedScrollSnap() + 1)
//     })
//   }, [api])

//   // Array of carousel items
//   const carouselItems = [
//     { content: '/image1.jpg' },
//     { content: '/image2.jpg' },
//     { content: '/image3.jpg' },
//     { content: '/image4.jpg' },
//     { content: '/image5.jpg' },
//     { content: '/image6.jpg' },
//   ];

//   return (
//     <div>
//       <Carousel 
//         plugins={[plugin.current]}
//         setApi={setApi} opts={{
//     // align: "start",
//     loop: true,
//     dragFree: true,
//   }}>
//         <CarouselContent>
//           {/* Map through the array and generate CarouselItem components */}
//           {carouselItems.map((item, index) => (
//             <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
//               {/* Use next/image for displaying images */}
//               <Skeleton
//                 className="h-full w-full object-cover rounded-lg"
//               >
//                 <Image src={item.content} alt={`Image ${index + 1}`} width={500} height={200} />
//               </Skeleton>
//               {/* <Image src={item.content} alt={`Image ${index + 1}`} width={500} height={200} /> */}
//             </CarouselItem>
//           ))}
//         </CarouselContent>
//         <CarouselPrevious />
//         <CarouselNext />
//       </Carousel>
//            <div className="py-2 text-center text-sm text-muted-foreground">
//          Slide {current} of {count}
//       </div>
//     </div>
//   );
// };

// export default Slider;

