import React, { useState, useEffect, useCallback } from 'react';
import { animated, useSpring, useTransition } from 'react-spring';
import { PixabayModel } from '../model';
import { Toggle } from '../components';

const cssBase = 'HomePage';

const pages = [
  ({ style }) => (
    <animated.div style={{ ...style, background: 'lightpink' }}>A</animated.div>
  ),
  ({ style }) => (
    <animated.div style={{ ...style, background: 'lightblue' }}>B</animated.div>
  ),
  ({ style }) => (
    <animated.div style={{ ...style, background: 'lightgreen' }}>
      C
    </animated.div>
  ),
];

export default function HomePage() {
  const [index, setIndex] = useState(0);
  const onClick = useCallback(() => setIndex((state) => (state + 1) % 3), []);
  const transitions = useTransition(index, (p) => p, {
    from: { opacity: 0, transform: 'translate3d(100%, 0, 0)' },
    enter: { opacity: 1, transform: 'translate3d(0%, 0, 0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%, 0, 0)' },
  });

  const [initialized, setInitialized] = useState(false);
  const [images, setImages] = useState([]);

  // const fade = useSpring({
  //   from: {
  //     opacity: 0,
  //   },
  //   to: {
  //     opacity: 1,
  //   },
  // });

  const loadImages = async () => {
    try {
      const { hits } = await PixabayModel.getImages();
      setImages(hits);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (!initialized) {
      loadImages();
      setInitialized(true);
    }
  }, [initialized]);

  if (!images.length) return <div>Nothing</div>;

  return (
    <div className={cssBase} onClick={onClick}>
      {transitions.map(({ item, props, key }) => {
        // const Page = pages[item];
        // return <Page key={key} style={props} />
        const image = images[item];
        return (
          <animated.div
            key={key}
            style={{
              ...props,
              backgroundImage: `url("${image.largeImageURL}")`,
            }}></animated.div>
        );
      })}
      {/* <animated.div className={cssBase} style={fade}>
        <main>
          <Toggle />
        </main>
      </animated.div> */}
    </div>
  );
}
