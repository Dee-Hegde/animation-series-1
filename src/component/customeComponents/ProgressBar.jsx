import React from 'react'
import "../../assets/css/custom/progressbar.scss"

function ProgressBar({ value = '50', percentage = true }) {
  return (
    <div className='container'>
      <div className='progress-bar'>
        <div
          className='progress-done'
          style={{ width: `${value}%` }}></div>
      </div>
      {percentage && <p className='percentage-text'>{`${value}%`}</p>}
    </div>
  );
}

export default ProgressBar