import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer';

const LazyLoadImage = (props) => {
	const { ref, inView, entry } = useInView({
		threshold: 0,
        triggerOnce: true
	});

    const {
        src,
        extraSrcs,
        ...restProps
    } = props;

    useEffect(() => {
        if (inView) {
            [...entry.target.querySelectorAll('source')].forEach(source => {
                source.srcset = source.dataset.srcset;
            })
            const img = entry.target.querySelector('img')
            img.src = img.dataset.src;
        }
    }, [inView])

    return (
        <picture {...restProps} ref={ref}>
            {extraSrcs && (
                extraSrcs.map(extraSrc => (
                    <source data-srcSet={extraSrc} key={extraSrc} />
                ))
            )}
            <img data-src={src} key={src}/>
        </picture>
        
    )
}

export default LazyLoadImage;