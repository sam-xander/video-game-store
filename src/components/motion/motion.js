import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import images from "./images";

function motion() {
  const [width, setwidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    console.log(images);
    console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
    setwidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <main className="motion">
      <div className="motion">{/* PAGE CONTENT */}</div>
      <div className="motion">
        <motion.div
          ref={carousel}
          className="carousel"
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="inner-carousel"
          >
            {images.map((image) => {
              return (
                <motion.div className="item" key={image}>
                  <img src="{image}" alt=""></img>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}

export default motion;
