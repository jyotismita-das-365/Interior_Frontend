import React, { useState } from 'react';

const WhatsAppFloating = ({
  phone = "919501908530",
  initialSide = "right",
  initialY = 24 // Set initialY to 24 for bottom margin
}) => {
  const [side, setSide] = useState(initialSide);
  const [dragging, setDragging] = useState(false);
  const [startX, setStartX] = useState(0);

  // Mouse events
  const handleMouseDown = (e) => {
    setDragging(true);
    setStartX(e.clientX);
    e.preventDefault();
  };
  const handleMouseUp = (e) => {
    if (!dragging) return;
    setDragging(false);
    setSide(e.clientX < window.innerWidth / 2 ? "left" : "right");
  };

  // Touch events
  const handleTouchStart = (e) => {
    setDragging(true);
    setStartX(e.touches[0].clientX);
  };
  const handleTouchEnd = (e) => {
    if (!dragging) return;
    setDragging(false);
    const touch = e.changedTouches[0];
    setSide(touch.clientX < window.innerWidth / 2 ? "left" : "right");
  };

  React.useEffect(() => {
    if (dragging) {
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchend', handleTouchEnd);
    } else {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleTouchEnd);
    }
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [dragging]);

  const positionStyle = {
    position: 'fixed',
    [side]: 24,
    bottom: 24, // Place at bottom
    zIndex: 1000,
    cursor: 'grab',
    touchAction: 'none'
  };

  return (
    <div
      style={positionStyle}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      className="group"
    >
      <a
        href={`https://wa.me/${phone}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center bg-green-500 rounded-full shadow-lg p-3 hover:bg-green-600 transition"
        title="Chat on WhatsApp"
      >
        {/* SVG icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="white"
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.029-.967-.272-.099-.471-.149-.67.15-.198.297-.767.967-.941 1.166-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.075-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.205 5.077 4.377.711.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.617h-.001a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.455 4.436-9.89 9.893-9.89 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.897 6.991c-.002 5.455-4.437 9.89-9.893 9.89zm8.413-18.307A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.953L0 24l6.305-1.654a11.86 11.86 0 005.717 1.463h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.49-8.486z" />
        </svg>
      </a>
    </div>
  );
};

export default WhatsAppFloating;
