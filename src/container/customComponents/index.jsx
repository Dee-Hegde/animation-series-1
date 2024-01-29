import React, { useState } from 'react';
import ProgressBar from '../../component/customeComponents/ProgressBar';



const obj = [{ id: 0, name: 'Progress Bar', component: '' }];

function CustomComponentsDashboard() {
  const [selected, setSelected] = useState(obj[0]);

  return (
    <div className='text-animation-container'>
      <div className='styles-container'>
        {obj.map((item) => (
          <li>{item.name}</li>
        ))}
      </div>
      <div style={{width:"100%"}} className='render-component'>
        <ProgressBar/>
      </div>
    </div>
  );
}

export default CustomComponentsDashboard;
