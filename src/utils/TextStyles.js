export const Animations = {
  attentionSeekers: [
    {
      title: 'Bounce',
      className: 'animate__bounce',
      id: 0,
      code: `@keyframes bounce {
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
}`,
    },
    {
      title: 'Flash',
      className: 'animate__flash',
      id: 1,
      code: `@keyframes flash {
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
}

.flash {
  animation-name: flash;
}`,
    },
    {
      title: 'Pulse',
      className: 'animate__pulse',
      id: 2,
      code: `@keyframes pulse {
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
}

.pulse {
  animation-name: pulse;
  animation-timing-function: ease-in-out;
}`,
    },
    {
      title: 'Rubber Band',
      className: 'animate__rubberBand',
      id: 3,
      code: `@keyframes rubberBand {
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
}

.rubberBand {
  animation-name: rubberBand;
}`,
    },
    {
      title: 'ShakeX',
      className: 'animate__shakeX',
      id: 4,
      code: `@keyframes shakeX {
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
}

.shakeX {
  animation-name: shakeX;
}`,
    },
    { title: 'ShakeY', className: 'animate__shakeY', id: 5 },
    {
      title: 'HeadShake',
      className: 'animate__headShake',
      id: 6,
      code: `@keyframes headShake {
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
}

.headShake {
  animation-timing-function: ease-in-out;
  animation-name: headShake;
}`,
    },
    {
      title: 'Swing',
      className: 'animate__swing',
      id: 7,
      code: `@keyframes swing {
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
}

.swing {
  transform-origin: top center;
  animation-name: swing;
}`,
    },
    {
      title: 'Tada',
      className: 'animate__tada',
      id: 8,
      code: `@keyframes tada {
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
}

.tada {
  animation-name: tada;
}`,
    },
    {
      title: 'Wobble',
      className: 'animate__wobble',
      id: 9,
      code: `@keyframes wobble {
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
}

.wobble {
  animation-name: wobble;
}`,
    },
    {
      title: 'Jello',
      className: 'animate__jello',
      id: 10,
      code: `@keyframes jello {
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
}

.jello {
  animation-name: jello;
  transform-origin: center;
}`,
    },
    {
      title: 'Heart Beat',
      className: 'animate__heartBeat',
      id: 11,
      code: `@keyframes heartBeat {
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
}

.heartBeat {
  animation-name: heartBeat;
  animation-duration: calc(var(--animate-duration) * 1.3);
  animation-timing-function: ease-in-out;
}`,
    },
  ],
  backEntrances: [
    { title: 'BackInDown', className: 'animate__backInDown', id: 0 },
    { title: 'BackInLeft', className: 'animate__backInLeft', id: 1 },
    { title: 'BackInRight', className: 'animate__backInRight', id: 2 },
    { title: 'BackInUp', className: 'animate__backInUp', id: 3 },
  ],
  bouncingEntrances: [
    { title: 'Bounce In', className: 'animate__bounceIn', id: 0 },
    { title: 'bounceInDown', className: 'animate__bounceInDown', id: 1 },
    { title: 'bounceInLeft', className: 'animate__bounceInLeft', id: 2 },
    { title: 'bounceInRight', className: 'animate__bounceInRight', id: 3 },
    { title: 'bounceInUp', className: 'animate__bounceInUp', id: 3 },
  ],
  bouncingExits: [
    { title: 'bounceIn', className: 'animate__bounceIn', id: 0 },
    { title: 'bounceInDown', className: 'animate__bounceInDown', id: 1 },
    { title: 'bounceInLeft', className: 'animate__bounceInLeft', id: 2 },
    { title: 'bounceInRight', className: 'animate__bounceInRight', id: 3 },
    { title: 'bounceInUp', className: 'animate__bounceInUp', id: 4 },
  ],
  fadingEntrances: [
    { title: 'fadeIn', className: 'animate__fadeIn', id: 0 },
    { title: 'fadeInDown', className: 'animate__fadeInDown', id: 1 },
    { title: 'fadeInDownBig', className: 'animate__fadeInDownBig', id: 2 },
    { title: 'fadeInLeft', className: 'animate__fadeInLeft', id: 3 },
    { title: 'fadeInLeftBig', className: 'animate__fadeInLeftBig', id: 4 },
    { title: 'fadeInRight', className: 'animate__fadeInRight', id: 5 },
    { title: 'fadeInRightBig', className: 'animate__fadeInRightBig', id: 6 },
    { title: 'fadeInUp', className: 'animate__fadeInUp', id: 7 },
    { title: 'fadeInUpBig', className: 'animate__fadeInUpBig', id: 8 },
    { title: 'fadeInTopLeft', className: 'animate__fadeInTopLeft', id: 9 },
    { title: 'fadeInTopRight', className: 'animate__fadeInTopRight', id: 10 },
    {
      title: 'fadeInBottomLeft',
      className: 'animate__fadeInBottomLeft',
      id: 11,
    },
    {
      title: 'fadeInBottomRight',
      className: 'animate__fadeInBottomRight',
      id: 12,
    },
  ],
  fadingExits: [
    { title: 'fadeOut', className: 'animate__fadeOut', id: 0 },
    { title: 'fadeOutDown', className: 'animate__fadeOutDown', id: 1 },
    { title: 'fadeOutDownBig', className: 'animate__fadeOutDownBig', id: 2 },
    { title: 'fadeOutLeft', className: 'animate__fadeOutLeft', id: 3 },
    { title: 'fadeOutLeftBig', className: 'animate__fadeOutLeftBig', id: 4 },
    { title: 'fadeOutRight', className: 'animate__fadeOutRight', id: 5 },
    {
      title: 'fadeOutRightBig',
      className: 'animate__fadeOutRightBig',
      id: 6,
    },
    { title: 'fadeOutUp', className: 'animate__fadeOutUp', id: 7 },
    { title: 'fadeOutUpBig', className: 'animate__fadeOutUpBig', id: 8 },
    { title: 'fadeOutTopLeft', className: 'animate__fadeOutTopLeft', id: 9 },
    {
      title: 'fadeOutTopRight',
      className: 'animate__fadeOutTopRight',
      id: 10,
    },
    {
      title: 'fadeOutBottomRight',
      className: 'animate__fadeOutBottomRight',
      id: 11,
    },
    {
      title: 'fadeOutBottomLeft',
      className: 'animate__fadeOutBottomLeft',
      id: 12,
    },
  ],
  flippers: [
    { title: 'flip', className: 'animate__flip', id: 0 },
    { title: 'flipInX', className: 'animate__flipInX', id: 1 },
    { title: 'flipInY', className: 'animate__flipInY', id: 2 },
    { title: 'flipOutX', className: 'animate__flipOutX', id: 3 },
    { title: 'flipOutY', className: 'animate__flipOutY', id: 4 },
  ],
  lightSpeed: [
    {
      title: 'lightSpeedInRight',
      className: 'animate__lightSpeedInRight',
      id: 0,
    },
    {
      title: 'lightSpeedInLeft',
      className: 'animate__lightSpeedInLeft',
      id: 1,
    },
    {
      title: 'lightSpeedOutRight',
      className: 'animate__lightSpeedOutRight',
      id: 2,
    },
    {
      title: 'lightSpeedOutLeft',
      className: 'animate__lightSpeedOutLeft',
      id: 3,
    },
  ],
  rotatingEntrances: [
    { title: 'rotateIn', className: 'animate__rotateIn', id: 0 },
    {
      title: 'rotateInDownLeft',
      className: 'animate__rotateInDownLeft',
      id: 1,
    },
    {
      title: 'rotateInDownRight',
      className: 'animate__rotateInDownRight',
      id: 2,
    },
    { title: 'rotateInUpLeft', className: 'animate__rotateInUpLeft', id: 3 },
    { title: 'rotateInUpRight', className: 'animate__rotateInUpRight', id: 4 },
  ],
  rotatingExits: [
    { title: 'rotateOut', className: 'animate__rotateOut', id: 0 },
    {
      title: 'rotateOutDownLeft',
      className: 'animate__rotateOutDownLeft',
      id: 1,
    },
    {
      title: 'rotateOutDownRight',
      className: 'animate__rotateOutDownRight',
      id: 2,
    },
    { title: 'rotateOutUpLeft', className: 'animate__rotateOutUpLeft', id: 3 },
    { title: 'otateOutUpRight', className: 'animate__rotateOutUpRight', id: 4 },
  ],
  specials: [
    { title: 'flip', className: 'animate__hinge', id: 0 },
    { title: 'flipInX', className: 'animate__jackInTheBox', id: 1 },
    { title: 'flipInY', className: 'animate__rollIn', id: 2 },
    { title: 'flipOutX', className: 'animate__rollOut', id: 3 },
  ],
  zoomingEntrances: [
    { title: 'zoomIn', className: 'animate__zoomIn', id: 0 },
    { title: 'zoomInDown', className: 'animate__zoomInDown', id: 1 },
    { title: 'zoomInLeft', className: 'animate__zoomInLeft', id: 2 },
    { title: 'zoomInRight', className: 'animate__zoomInRight', id: 3 },
    { title: 'zoomInUp', className: 'animate__zoomInUp', id: 4 },
  ],
  zoomingExits: [
    { title: 'zoomOut', className: 'animate__zoomOut', id: 0 },
    { title: 'zoomOutDown', className: 'animate__zoomOutDown', id: 1 },
    { title: 'zoomOutLeft', className: 'animate__zoomOutLeft', id: 2 },
    { title: 'zoomOutRight', className: 'animate__zoomOutRight', id: 3 },
    { title: 'zoomOutUp', className: 'animate__zoomOutUp', id: 4 },
  ],
  slidingEntrances: [
    { title: 'slideInDown', className: 'animate__slideInDown', id: 0 },
    { title: 'slideInLeft', className: 'animate__slideInLeft', id: 1 },
    { title: 'slideInRight', className: 'animate__slideInRight', id: 2 },
    { title: 'slideInUp', className: 'animate__slideInUp', id: 3 },
  ],
  slidingExits: [
    { title: 'slideOutDown', className: 'animate__slideOutDown', id: 0 },
    { title: 'slideOutLeft', className: 'animate__slideOutLeft', id: 1 },
    { title: 'slideOutRight', className: 'animate__slideOutRight', id: 2 },
    { title: 'slideOutUp', className: 'animate__slideOutUp', id: 3 },
  ],
};
