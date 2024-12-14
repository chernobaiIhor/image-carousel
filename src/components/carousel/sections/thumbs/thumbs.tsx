import { FC } from "react";
import images from "../../../../constants/images.ts";
import styles from './thumbs.module.scss';

interface IProps {
    url: string;
    activeIndex: number;
    onClick: (index: number) => () => void;
}

export const Thumbs: FC<IProps> = ({url, activeIndex, onClick}) => (
  <div className={styles.thumbsGrid}>
      {images.map(({background, thumbnail}, index) => (
        <picture
          key={background}
          className={`${styles.thumbnail} 
            ${activeIndex === index ? styles.active : ''} 
            ${index > activeIndex ? styles.afterActive : ''} 
            `}
        >
            <source
              media="(min-width: 1024px)"
              srcSet={`${url}/${thumbnail}?w=1024`}
            />
            <source
              media="(min-width: 768px)"
              srcSet={`${url}/${thumbnail}?w=768`}
            />
            <img
              src={`${url}/${thumbnail}`}
              alt={`Thumbnail ${index + 1}`}
              onClick={onClick(index)}
              loading="lazy"
            />
        </picture>
      ))}
  </div>
);
