import { useEffect, useState } from 'react';


const useCheckIfMobile = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  }
  
  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
  
    return () => {
      window.removeEventListener('resize', handleWindowResize());
    }
  }, []);
  
  return windowWidth <= 480;
}

export default useCheckIfMobile;

