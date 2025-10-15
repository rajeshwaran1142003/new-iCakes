import React, { ReactNode } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

interface AnimatedElementProps {
  children: ReactNode;
  animation?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom-in' | 'zoom-out' | 'flip' | 'slide-up' | 'slide-down';
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
}

const AnimatedElement: React.FC<AnimatedElementProps> = ({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 700,
  className = '',
  threshold = 0.1,
}) => {
  const [elementRef, isVisible] = useIntersectionObserver({ threshold });

  const animationClasses = {
    'fade-up': {
      initial: 'opacity-0 translate-y-10',
      animate: 'opacity-100 translate-y-0',
    },
    'fade-down': {
      initial: 'opacity-0 -translate-y-10',
      animate: 'opacity-100 translate-y-0',
    },
    'fade-left': {
      initial: 'opacity-0 translate-x-10',
      animate: 'opacity-100 translate-x-0',
    },
    'fade-right': {
      initial: 'opacity-0 -translate-x-10',
      animate: 'opacity-100 translate-x-0',
    },
    'zoom-in': {
      initial: 'opacity-0 scale-75',
      animate: 'opacity-100 scale-100',
    },
    'zoom-out': {
      initial: 'opacity-0 scale-125',
      animate: 'opacity-100 scale-100',
    },
    'flip': {
      initial: 'opacity-0 rotate-y-90',
      animate: 'opacity-100 rotate-y-0',
    },
    'slide-up': {
      initial: 'translate-y-full opacity-0',
      animate: 'translate-y-0 opacity-100',
    },
    'slide-down': {
      initial: '-translate-y-full opacity-0',
      animate: 'translate-y-0 opacity-100',
    },
  };

  const selectedAnimation = animationClasses[animation];

  return (
    <div
      ref={elementRef as React.RefObject<HTMLDivElement>}
      className={`transition-all ${className} ${
        isVisible ? selectedAnimation.animate : selectedAnimation.initial
      }`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedElement;