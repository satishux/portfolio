import { useEffect, useState, useRef } from 'react';
import Loader from '../components/UI/Loader/Loader';

const ScrollTop = ({ children }) => {
  const [loaded, setLoaded] = useState(false);
  const loadedFunc = useRef(setLoaded).current;

  useEffect(
    (setLoaded) => {
      setTimeout(() => {
        loadedFunc(true);
      }, 1000);
      window.scrollTo(0, 0);
    },
    [loadedFunc]
  );

  return loaded ? children : <Loader />;
};

export default ScrollTop;
