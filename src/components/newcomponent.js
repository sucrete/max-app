import React, { useRef } from "react";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "react-spring";

const NewComponent = () => {
  const [ref, inView, entry] = useInView({
    /* Optional options */
    triggerOnce: true,
    rootMargin: "-300px 0px"
  });
  const props = useSpring({ opacity: inView ? 1 : 0 });

  return (
    <div ref={ref}>
      <h2>{`Header inside viewport ${inView}.`}</h2>
      <animated.div style={props}>
        <span aria-label="Wave">👋</span>
      </animated.div>
    </div>
  );
};

export default NewComponent;
