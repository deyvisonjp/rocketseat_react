import { ImgHTMLAttributes } from 'react';
import styles from './Avatar.module.css'

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
    hasBorder?: boolean;
    srcAvatar: string;
}

export function Avatar({ hasBorder = true, srcAvatar, ...props }: AvatarProps) {
    return (
        <img 
            className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
            src={srcAvatar}
            {...props}
        />
    )
}