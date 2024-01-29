import React, { useEffect, useState } from 'react';
import '../../assets/css/main/dashboard.scss';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

  const [textEffect, setTextEffect] = useState('animate__bounce');

  useEffect(() => {
      const textAnimations = [
        'animate__bounce',
        'animate__flash',
        'animate__rubberBand',
        'animate__shakeX',
        'animate__shakeY',
        'animate__swing',
        'animate__tada',
      ];
    const intervalId = setInterval(() => {
      setTextEffect(
        textAnimations[Math.floor(Math.random() * textAnimations.length)]
      );
    }, 2500);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [textEffect]);

  const handleNavigation = (path) => {
    navigate(path);
  };
  return (
    <div className='dashboard-main-container'>
      <div
        className='dashboard-containers'
        onClick={() => handleNavigation('/text')}>
        <h2 className={`animate__animated ${textEffect} `}>Text Animations</h2>
      </div>
      <div
        className='dashboard-containers'
        onClick={() => handleNavigation('/images')}>
        <h2>Image Animations</h2>
      </div>
      <div
        className='dashboard-containers'
        onClick={() => handleNavigation('/custom-components')}>
        <h2>Custom Components</h2>
      </div>
      <div
        className='dashboard-containers'
        onClick={() => handleNavigation('/custom-buttons')}>
        <h2>Buttons</h2>
      </div>
      {/* <div
        className='dashboard-containers'
        onClick={() => handleNavigation('/box')}>
        <h2>Box</h2>
      </div> */}
    </div>
  );
}

export default Dashboard;
