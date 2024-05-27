import PropTypes from 'prop-types';
import styles from './Avatar.module.css'

export function Avatar({ hasBorder = true, srcAvatar }) {
    return (
        <img 
            className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
            src={srcAvatar}
        />
    )
}