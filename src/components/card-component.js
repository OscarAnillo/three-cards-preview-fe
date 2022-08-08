import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function CardComponent({ img, title, paragraph, className }){
    const cardRef = useRef(null);

    useEffect(() => {
        gsap.from('.card', {
            opacity: 0,
            x: -200,
            y: 100,
            duration: 2,
            transform: 'scale(5)',
            ease: 'bounce'
          })
        gsap.to('.card', {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 2,
            transform: 'scale(1)',
            ease: 'bounce'
          })
    }, []);

    return (
        <div className='card' ref={cardRef}>
            <div  className="container">
                <img src={img} alt="" />
                <h1>{title}</h1>
                <p>{paragraph}</p>
                <button>Learn More</button>
            </div>
        </div>
    )
}