import { ArrowLeft } from 'phosphor-react';
import { FormEvent, useState } from 'react';

import { FeedbackType, feedbackTypes } from '..';
import { CloseButton } from '../../CloseButton';
import { ScreenshotButton } from '../ScreenshotButton';

interface FeedbackContentStepProps {
  feedbackType: FeedbackType;
  onFeedbackRestarted: () => void;
  onFeedbackSent: (type: boolean) => void;
}

export const FeedbackContentStep = ({
  feedbackType,
  onFeedbackRestarted,
  onFeedbackSent,
}: FeedbackContentStepProps) => {
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [comment, setComment] = useState('');

  const feedbackTypeInfo = feedbackTypes[feedbackType];

  const handleSubmitForm = (event: FormEvent) => {
    event.preventDefault();
    console.log(screenshot, comment);

    onFeedbackSent(true);
  };

  return (
    <>
      <header>
        <button
          type="button"
          className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
          onClick={onFeedbackRestarted}
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

      <form className="form-content-container" onSubmit={handleSubmitForm}>
        <textarea
          className="form-content-text-area"
          placeholder="Please tell us in detail what's happening..."
          onChange={(event) => setComment(event.target.value)}
        ></textarea>

        <footer className="form-content-footer">
          <ScreenshotButton onScreenshotTaken={setScreenshot} screenshot={screenshot} />

          <button
            type="submit"
            className="form-content-footer-submit-button"
            disabled={!comment.length}
          >
            Send Feedback
          </button>
        </footer>
      </form>
    </>
  );
};
