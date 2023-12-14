import React, { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Top: 0 nos lleva todo el camino de regreso a la parte superior de la página
  // Behavior: Smooth lo mantiene suave
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // El botón se muestra después de desplazarse por 500 píxeles
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <div>
          <div
            onClick={scrollToTop}
            className="scroll_up"
            data-aos="fade-left"
            data-aos-duration="12000"
            data-aos-delay="10000"
          >
            <FiArrowUp />
          </div>
        </div>
      )}
    </>
  );
}
