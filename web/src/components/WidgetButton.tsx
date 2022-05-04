import { ChatTeardropDots } from 'phosphor-react';
import { Popover } from '@headlessui/react';
import { WidgetForm } from './WidgetForm';

export const WidgetButton = () => {
  return (
    <Popover className="button-container">
      <Popover.Panel>
        <WidgetForm />
      </Popover.Panel>

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
