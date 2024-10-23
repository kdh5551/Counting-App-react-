import { useEffect } from 'react';

const Even = () => {
  // lifecycle 관리3 - unmount
  useEffect(() => {
    return () => {
      console.log('unmount');
    };
  }, []);

  return <div>EVEN</div>;
};

export default Even;
