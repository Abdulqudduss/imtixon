import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
const handleDragStart = (e) => e.preventDefault();

const items = [
    <img className='carusel__img' src="https://picsum.photos/651/651" onDragStart={handleDragStart} role="presentation" />,
    <img className='carusel__img' src="https://picsum.photos/652/652" onDragStart={handleDragStart} role="presentation" />,
    <img className='carusel__img' src="https://picsum.photos/653/653" onDragStart={handleDragStart} role="presentation" />,
    <img className='carusel__img' src="https://picsum.photos/654/654" onDragStart={handleDragStart} role="presentation" />,
  ];
const Contact = () => {
  return (
    <div>
    <AliceCarousel mouseTracking items={items} />
    </div>
  )
}

export default Contact