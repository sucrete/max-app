import React from "react";
import useNativeLazyLoading from "@charlietango/use-native-lazy-loading";
import { useInView } from "react-intersection-observer";

const LazyImage = ({ width, height, src, alt, ...rest }) => {
  const supportsLazyLoading = useNativeLazyLoading();
  const [ref, inView] = useInView({
    triggerOnce: true,
    margin: "200px 0px"
  });

  return (
    <div
      ref={supportsLazyLoading === false ? ref : undefined}
      style={{
        position: "relative",
        paddingBottom: `${(height / width) * 100}%`
      }}
    >
      {inView || supportsLazyLoading ? (
        <img
          {...rest}
          alt={alt}
          src={src}
          width={width}
          height={height}
          loading="lazy"
          style={{ position: "absolute", width: "100%", height: "100%" }}
        />
      ) : null}
    </div>
  );
};

export default LazyImage;
