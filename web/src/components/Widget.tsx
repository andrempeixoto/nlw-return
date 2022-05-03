import { ChatTeardropDots } from 'phosphor-react';
import { useState } from 'react';

export const Widget = () => {
  const [isWidgetOpen, setIsWidgetOpen] = useState(false);
  const toggleWidgetVisibility = () => {
    setIsWidgetOpen(!isWidgetOpen);
  };

  return (
    <div className="button-container">
      {isWidgetOpen && <p>Hello World</p>}

      <button onClick={toggleWidgetVisibility} className="button group">
        <ChatTeardropDots className="button-icon" />
        <span className="button-title">
          <span className="pl-2"></span>
          Feedback
        </span>
      </button>
    </div>
  );
};
