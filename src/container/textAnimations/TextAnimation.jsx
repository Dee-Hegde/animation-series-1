import React, { useCallback, useEffect } from 'react';
import '../../assets/css/text.scss';
import { Animations } from '../../utils/TextStyles';

function TextAnimation() {
const [appliedEffect, setAppliedEffect] = React.useState('animate__bounce');
  const [currentEffect, setCurrentEffect] = React.useState('animate__bounce');

  const handleStyle = useCallback((styles) => {
    setCurrentEffect(styles?.className);
    setAppliedEffect(styles?.title);
    setTimeout(() => {
      setCurrentEffect('');
    }, 1000);
  }, []);

  return (
    <div className='text-animation-container'>
      <div className='styles-container'>
        {Object.keys(Animations).map((item, index) => (
          <div key={index}>
            <h3>{item}</h3>
            <ul>
              {Animations?.[item].map((styles, indx) => (
                <li
                  onClick={() => handleStyle(styles)}
                  key={indx}>
                  {styles?.title}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className='text-container'>
        <h2 className={`animate__animated ${currentEffect}`}>
          Text Animations!.
        </h2>
      </div>
      <div className='code-container'>
        <h3>Animation Name: {appliedEffect}</h3>
        <h3>CSS Code :</h3>
      </div>
    </div>
  );
}

export default TextAnimation;
