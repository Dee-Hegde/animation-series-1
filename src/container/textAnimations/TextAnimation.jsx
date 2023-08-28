import React, { useCallback, useEffect } from 'react';
import '../../assets/css/text.scss';
import { Animations } from '../../utils/TextStyles';
import { makeLabel } from '../../utils/commonFunctions';

const defaultCode = `@keyframes bounce {
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
}

.bounce {
  animation-name: bounce;
  transform-origin: center bottom;
}`;

function TextAnimation() {
  const [appliedEffect, setAppliedEffect] = React.useState('Bounce');
  const [currentEffect, setCurrentEffect] = React.useState('animate__bounce');
  const [cssCode, setCssCode] = React.useState(defaultCode);
  const [copied, setCopied] = React.useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(cssCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500); // Reset copied status after 1.5 seconds
  };

  const handleStyle = useCallback((styles) => {
    setCurrentEffect(styles?.className);
    setAppliedEffect(styles?.title);
    setCssCode(styles?.code);
    setTimeout(() => {
      setCurrentEffect('');
    }, 1000);
  }, []);

  return (
    <div className='text-animation-container'>
      <div className='styles-container'>
        {Object.keys(Animations).map((item, index) => (
          <div key={index}>
            <h3>{makeLabel(item)}</h3>
            <ul>
              {Animations?.[item].map((styles, indx) => (
                <li
                  onClick={() => handleStyle(styles)}
                  key={indx}>
                  {styles?.title[0].toUpperCase()+styles?.title.slice(1)}
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
        <h3>CSS Code : </h3>
        <pre>{cssCode}</pre>
      </div>
    </div>
  );
}

export default TextAnimation;
