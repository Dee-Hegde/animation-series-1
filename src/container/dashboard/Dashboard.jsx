import React from 'react'
import "../../assets/css/dashboard.scss"
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate= useNavigate();

  const items = [
    { lable: 'Text', path: '/text' },
    { lable: 'Images', path: '/images' },
    { lable: 'box', path: '/box' },
  ];

  const handleNavigation = (path) => {
    navigate(path)
  }
  return (
    <div className='dashboard-main-container'>
      {items.map((item, index) => (
        <div
        key={{index}}
          className='dashboard-containers'
          onClick={()=>handleNavigation(item?.path)}>
          <h2>{item?.lable}</h2>
        </div>
      ))}
    </div>
  );
}

export default Dashboard