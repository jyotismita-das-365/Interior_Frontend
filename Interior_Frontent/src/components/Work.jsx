import React from "react";

const Work = ({images}) => {
  const [isSliderOpen, setIsSliderOpen] = React.useState(false);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const openSlider = (index) => {
    setCurrentIndex(index);
    setIsSliderOpen(true);
  };

  const closeSlider = () => {
    setIsSliderOpen(false);
  };

  const showPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const showNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <div className="grid grid-cols-3 gap-4 p-4">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`image-${index}`}
            onClick={() => openSlider(index)}
            className="rounded-xl shadow-md w-64 h-64 object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
          />
        ))}
      </div>
      {isSliderOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <button
            onClick={closeSlider}
            className="absolute top-6 right-8 text-white text-3xl font-bold"
            aria-label="Close"
          >
            &times;
          </button>
          <button
            onClick={showPrev}
            className="absolute left-8 top-1/2 transform -translate-y-1/2 text-white text-4xl font-bold"
            aria-label="Previous"
          >
            &#8592;
          </button>
          <img
            src={images[currentIndex]}
            alt={`image-full-${currentIndex}`}
            className="max-w-3xl max-h-[80vh] rounded-xl shadow-lg"
          />
          <button
            onClick={showNext}
            className="absolute right-8 top-1/2 transform -translate-y-1/2 text-white text-4xl font-bold"
            aria-label="Next"
          >
            &#8594;
          </button>
        </div>
      )}
    </>
  );
}

export default Work;