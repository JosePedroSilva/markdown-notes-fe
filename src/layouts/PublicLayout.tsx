import { Outlet } from 'react-router-dom';
import './PublicLayout.css'

import useTypewriter from '../hooks/useTypewriter';

const PublicLayout = () => {
  const PHRASES_ROTATION = [
    'your notes, your life.',
    'your thoughts, your notes.',
    'your notes, your world.',
    'your thoughts, anytime, anywhere.',
    'your notes, your way.',
  ];

  const INTERVAL = 50;

  const text = useTypewriter(PHRASES_ROTATION, INTERVAL);

  return (
    <>
      <div className='public-layout-container'>
        <h1 className="logo">MarkNest</h1>
        <div className="public-layout-left">
          <Outlet />
        </div>
        <div className="public-layout-right">
          <h1>
            <span className='slogan-accent-span'>Note </span>{text}<span className='cursor'>|</span>
          </h1>
        </div>
      </div>
    </>
  );
};

export default PublicLayout;