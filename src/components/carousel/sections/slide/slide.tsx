import styles from './slide.module.scss';
import images from "../../../../constants/images.ts";
import { FC } from "react";

interface IProps {
    url: string;
    activeIndex: number;
}

export const Slide: FC<IProps> = ({activeIndex, url}) => (
  <div className={styles.carouselSlide}>
      <picture className={styles.carouselImage}>
          <source
            media="(min-width: 1024px)"
            srcSet={`${url}/${images[activeIndex].background}?w=1024`}
          />
          <source
            media="(min-width: 768px)"
            srcSet={`${url}/${images[activeIndex].background}?w=768`}
          />
          <img
            src={`${url}/${images[activeIndex].background}`}
            alt="Background"
            loading="lazy"
          />
      </picture>
      <div className={styles.foregroundImage}>
          {images[activeIndex].foreground && (
            <img
              src={`${url}/${images[activeIndex].foreground}`}
              alt="Foreground"
              loading="lazy"
            />
          )}
      </div>
  </div>
)