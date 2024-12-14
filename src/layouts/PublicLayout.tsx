import { Outlet } from 'react-router-dom';
import './PublicLayout.css'

import useTypewriter from '../hooks/useTypewriter';

const PublicLayout = () => {
  const PHRASES_ROTATION = [
    'down your ideas before they fade away.',
    'your notes, your life.',
    'your thoughts, your notes.',
    'your notes, your world.',
    'your notes, your way.',
    'your notes, your style.',
  ];

  const INTERVAL = 75;

  const text = useTypewriter(PHRASES_ROTATION, INTERVAL);

  return (
    <div className='public-layout-container'>
      <div className="public-layout-left">
        <Outlet />
      </div>
      <div className="public-layout-right">
        <h1>
          <span className='slogan-accent-span'>Note {text}</span><span className='cursor'>|</span>
        </h1>
      </div>
    </div>
  );
};

export default PublicLayout;