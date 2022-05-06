import { ArrowLeft } from 'phosphor-react';
import { useState } from 'react';

import { FeedBackType, feedbackTypes } from '..';
import { CloseButton } from '../../CloseButton';
import { ScreenshotButton } from '../ScreenshotButton';

interface FeedbackContentStepProps {
  feedbackType: FeedBackType;
  onFeedbackRestarted: (type: null) => void;
}

export const FeedbackContentStep = ({
  feedbackType,
  onFeedbackRestarted,
}: FeedbackContentStepProps) => {
  const [screenshot, setScreenshot] = useState<string | null>(null);

  const feedbackTypeInfo = feedbackTypes[feedbackType];

  return (
    <>
      <header>
        <button
          type="button"
          className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
          onClick={() => onFeedbackRestarted(null)}
        >
          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>

        <span className="text-xl leading-6 flex items-center gap-2">
          <img
            src={feedbackTypeInfo.image.source}
            alt={feedbackTypeInfo.image.alt}
            className="w-6 h-6"
          ></img>
          {feedbackTypeInfo.title}
        </span>
        <CloseButton />
      </header>

      <form className="form-content-container">
        <textarea
          className="form-content-text-area"
          placeholder="Tell us in more detail what's hapenning..."
        ></textarea>

        <footer className="form-content-footer">
          <ScreenshotButton onScreenshotTaken={setScreenshot} />

          <button type="submit" className="form-content-footer-submit">
            Send Feedback
          </button>
        </footer>
      </form>
    </>
  );
};
