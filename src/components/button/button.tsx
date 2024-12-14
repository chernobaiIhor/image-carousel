import { FC, ReactNode } from "react";
import styles from './button.module.scss';

interface IProps {
    variant?: 'default' | 'badge';
    size?: 'sm' | 'lg';
    bg?: 'transparent' | 'white' | 'dark';
    color?: 'light' | 'dark';
    onClick?: () => void;
    children: ReactNode;
}

export const Button: FC<IProps> = ({
                                       variant = 'default',
                                       size = 'sm',
                                       bg = 'transparent',
                                       color = 'dark',
                                       onClick,
                                       children
                                   }) => (
  <button
    className={`${styles.button} ${styles[variant]} ${styles[size]} ${styles[`bg-${bg}`]} ${styles[`color-${color}`]}`}
    onClick={onClick}
  >
      {children}
  </button>
);
