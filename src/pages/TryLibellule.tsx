import React, { useEffect, useRef } from 'react';
import './TryLibellule.scss';


interface ObjectMovementProps {
    src: string;
    alt: string;
    class_name: string;
}

const ObjectMovement: React.FC<ObjectMovementProps> = ({ src, alt, class_name }) => {
    const libelluleRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const libellule = libelluleRef.current;

        if (!libellule) return;

        let startTime: number;


        function circleMovement(t: number): { x: number; y: number } {
            const radius = 40; // Adjust the radius of the circle
            const centerX = 50; // Adjust the center X position
            const centerY = 50; // Adjust the center Y position

            const angle = t * Math.PI * 2; // Full circle over time
            const x = centerX + radius * Math.cos(angle);
            const y = centerY + radius * Math.sin(angle);

            return { x, y };
        }
        // Update the position based on the custom function
        function updatePosition(timestamp: number) {
            if (!startTime) startTime = timestamp;

            const elapsed = timestamp - startTime;
            const time = (elapsed % 8000) / 8000; // Adjust 8000 to the animation duration
            const newPosition = circleMovement(time);
            if (libellule && libellule.style) {
                libellule.style.right = `calc(${newPosition.x}%)`;
                libellule.style.top = `calc(${newPosition.y}%)`;
                requestAnimationFrame(updatePosition);
            }
        }

        // Start the animation loop
        requestAnimationFrame(updatePosition);

        // Cleanup function
        return () => {
            // startTime = 0;
            <img src={src} alt={alt} className="image-main" />
        };
    }, [src, alt]);

    return (
        <div ref={libelluleRef} className="libellule">
            <img className={class_name} src={src} alt={alt} />
        </div>
    );
};

export default ObjectMovement;
