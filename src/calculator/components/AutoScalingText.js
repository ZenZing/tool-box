
import React, { useRef, useState, useEffect } from 'react';
import './AutoScalingText.less';

const AutoScalingText = (props) => {
  const { children } = props;

  const [scale, setScale] = useState(1);
  const nodeRef = useRef();

  useEffect(() => {
    if (!nodeRef.current) return;

    const { current: currentNode } = nodeRef;
    const { parentNode } = currentNode;
  
    const availableWidth = parentNode.offsetWidth;
    const actualWidth = currentNode.offsetWidth;
    const actualScale = availableWidth / actualWidth;

    if (scale === actualScale) return;
  
    if (actualScale < 1) {
      setScale(actualScale);
    } else if (scale < 1) {
      setScale(1);
    }
  }, [nodeRef, children]);

  return (
    <div
      className="auto-scaling-text"
      style={{ transform: `scale(${scale},${scale})` }}
      ref={nodeRef}
    >
      {children}
    </div>
  )
}

export default AutoScalingText;