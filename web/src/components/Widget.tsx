import { ChatTeardropDots } from 'phosphor-react';
import { Popover } from '@headlessui/react';

export const Widget = () => {
  return (
    <Popover className="button-container">
      <Popover.Panel>Hello World</Popover.Panel>

      <Popover.Button className="button group">
        <ChatTeardropDots className="button-icon" />
        <span className="button-title">
          <span className="pl-2"></span>
          Feedback
        </span>
      </Popover.Button>
    </Popover>
  );
};
