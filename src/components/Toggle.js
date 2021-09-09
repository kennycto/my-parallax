import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

const Toggle = () => {
  const [isToggled, setToggle] = useState(true);
  const fade = useSpring({
    // opacity: !isToggled ? 1 : 0,
    color: isToggled ? 'tomato' : 'green',
    // fontSize: !isToggled ? '2rem' : '10rem',
    transform: isToggled ? 'translate3d(0,0px,0)' : 'translate3d(0, 50px, 0)',
  });

  return (
    <div>
      <animated.h1 style={fade}>Hello</animated.h1>
      <button onClick={() => setToggle(!isToggled)}>Toggle</button>
    </div>
  );
};

export default Toggle;
