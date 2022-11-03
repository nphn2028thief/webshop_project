import { useState } from 'react';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import styles from './Image.module.scss';

function Image({ src, className, alt, fallback: customFallback = images.fallback, ...props }) {
    const [fallback, setFallback] = useState();

    return (
        <img
            className={classNames(styles.wrapper, className)}
            src={fallback || src}
            alt={alt}
            {...props}
            onError={() => setFallback(customFallback)}
        />
    );
}

export default Image;
