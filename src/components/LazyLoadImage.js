import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer';

const LazyLoadImage = (props) => {
	const { ref, inView, entry } = useInView({
		threshold: 0,
        triggerOnce: true
	});

    const {
        src,
        ...restProps
    } = props;

    useEffect(() => {
        if (inView) {
            entry.target.src = props.src;
        }
    }, [inView])

    return (
        <img {...restProps} data-src={props.src} ref={ref}/>
    )
}

export default LazyLoadImage;