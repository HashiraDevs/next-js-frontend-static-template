import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import Image from 'next/image';
import { Skeleton } from '@/components/ui/skeleton';
import { useState, useEffect } from 'react';

const MasonryGrid = () => {
  const images = [
    "/gallery/img2.jpg",
    "/gallery/img3.jpg",
    "/gallery/img4.jpg",
    "/gallery/img5.jpg",
    "/gallery/img6.jpg",
    "/gallery/img7.jpg",
    "/gallery/img9.jpg",
    "/gallery/img10.jpg",
    "/gallery/img11.jpg",
    "/gallery/img12.jpg",
    "/gallery/img13.jpg",
    "/gallery/img14.jpg",
    "/gallery/img15.jpg",
    "/gallery/img16.jpg",
    "/gallery/img17.jpg",
    "/gallery/P1030783.jpg",
    "/gallery/P1030785.jpg",
    "/gallery/P1030788.jpg",
    "/gallery/P1030789.jpg",
    "/gallery/P1030790.jpg",
    "/gallery/P1030791.jpg",
    "/gallery/P1030793.jpg",
    "/gallery/P1030794.jpg",
    "/gallery/P1030801.jpg",
    "/gallery/P1030803.jpg",
    "/gallery/P1030804.jpg",
    "/gallery/P1030806.jpg",
    "/gallery/P1030807.jpg",
    "/gallery/P1030808.jpg",
    "/gallery/P1030810.jpg",
    "/gallery/P1030811.jpg",
    "/gallery/P1030812.jpg",
    "/gallery/P1030813.jpg",
    "/gallery/P1030815.jpg",
    "/gallery/P1030817.jpg",
  ]

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
      <Masonry
        columnsCount={4}
        gutter="10px"
        className="space-y-4 md:px-40 px-10 py-10"
      >
        {!loaded &&
          Array.from({ length: images.length }).map((_, i) => (
            <Skeleton key={i} className='w-full h-60 rounded-md' />
          ))
        }

        {loaded &&
          images.map((image, i) => (
            <div key={i} className="overflow-hidden group">
              <Image
                src={image}
                alt={`Gallery image ${i}`}
                style={{
                  display: 'block',
                  objectFit: 'cover',
                }}
                className="rounded-md transition-transform duration-300 group-hover:scale-125"
                width={500}
                height={300}
                quality={80}
                priority={i === 0}
              />
            </div>
          ))
        }
      </Masonry>
    </ResponsiveMasonry>
  );
};

export default MasonryGrid;
