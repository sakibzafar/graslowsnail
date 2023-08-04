// a interface specifies how a specific structure should look like, what variables and values should it have
import { MouseEventHandler } from 'react';

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?:
    MouseEventHandler<HTMLButtonElement>;
    btnType?: 'button' | 'submit';
};


