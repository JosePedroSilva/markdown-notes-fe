// import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import './PublicLayout.css'

// const PHRASES_ROTATION = [
//   'your thoughts, anytime, anywhere.',
//   'your notes, your way.',
//   'down your ideas before they fade away.',
//   'your notes, your life.',
//   'your thoughts, your notes.',
//   'your notes, your world.',
//   'your notes, your way.',
//   'your notes, your style.',
// ]

const PublicLayout = () => {
  // const [phraseIndex, setPhraseIndex] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setPhraseIndex((prevIndex) => (prevIndex + 1) % PHRASES_ROTATION.length);
  //   }, 3000);

  //   return () => clearInterval(interval);
  // }, [PHRASES_ROTATION.length]);

  return (
    <div className='public-layout-container'>
      <div className="public-layout-left">
        <Outlet />
      </div>
      <div className="public-layout-right">
        {/* <h1>
          <span className='slogan-accent-span'>Note </span>
        </h1> */}
      </div>
    </div>
  );
};

export default PublicLayout;