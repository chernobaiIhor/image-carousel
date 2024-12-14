import { useState } from 'react';
import { Slide } from "./sections/slide/slide.tsx";
import { Thumbs } from "./sections/thumbs/thumbs.tsx";
import { Overlay } from "./sections/overlay/overlay.tsx";

const url = import.meta.env.VITE_APP_BASE_URL;

export const Carousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleActiveIndex = (index: number) => () => setActiveIndex(index);

    return (
      <>
          <Slide url={url} activeIndex={activeIndex}/>
          <div className="container">
              <Overlay/>
              <Thumbs url={url} activeIndex={activeIndex} onClick={handleActiveIndex}/>
          </div>
      </>
    );
};
