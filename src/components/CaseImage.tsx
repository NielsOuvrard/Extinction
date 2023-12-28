import React, { ReactNode } from 'react';
import './CaseImage.scss';


interface CaseImageProps {
    src: string;
    alt: string;
    children?: ReactNode;
}

const CaseImage: React.FC<CaseImageProps> = ({ src, alt, children }) => {
    return (
        <div className="container-image">
            <img src={src} alt={alt} className="image-main" />
            {children}
        </div>
    );
};

export default CaseImage;