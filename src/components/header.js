import React, { useState } from "react";
import { useTrail, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

const items = ["DIRECTOR", "EDITOR", "CINEMATOGRAPHER", "BASED IN NYC"];
const config = { mass: 10, tension: 3800, friction: 800 };

const Header = () => {
  const [ref, inView, entry] = useInView({
    /* Optional options */
    triggerOnce: true,
    rootMargin: "-350px 0px"
  });
  const trail = useTrail(items.length, {
    config,
    x: inView ? 0 : 200,
    height: inView ? 125 : 0,
    from: { x: 200, height: 0 }
  });

  return (
    <header className="maxHeader">
      <span id="director">DIRECTOR</span>
      {"\n"}
      <span id="editor">EDITOR</span>
      {"\n"}
      <span id="cinematographer">CINEMATOGRAPHER, </span>
      {"\n"}
      <span id="nyc">based in NYC</span>
      {/* onClick={() => set(state => !state)} */}
      <div ref={ref} className="trails-main">
        <div>
          {trail.map(({ x, height, ...rest }, index) => (
            <animated.div
              key={items[index]}
              className="trails-text"
              style={{
                ...rest,
                transform: x.interpolate(x => `translate3d(0,${x}px,0)`)
              }}
            >
              <animated.div style={{ height }}>{items[index]}</animated.div>
            </animated.div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
