import React, { ReactNode } from 'react';
import './CaseImage.scss';
import { useInView } from 'react-intersection-observer';


interface CaseImageProps {
    src: string;
    alt: string;
    children?: ReactNode;
}

const CaseImage: React.FC<CaseImageProps> = ({ src, alt, children }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
    });
    return (
        <div className={`container-image ${inView ? 'visible' : ''}`} ref={ref}>
            <img src={src} alt={alt} className="image-main" />
            {children}
        </div>
    );
};

export default CaseImage;