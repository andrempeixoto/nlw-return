import { CloseButton } from '../../CloseButton';

import successImageUrl from '../../../assets/success.svg';

interface FeedbackSuccessStepProps {
  onFeedbackRestarted: () => void;
}

export const FeedbackSuccessStep = ({ onFeedbackRestarted }: FeedbackSuccessStepProps) => {
  return (
    <>
      <header>
        <CloseButton />
      </header>

      <div className="form-success-container">
        <img src={successImageUrl} />
        <span className="form-success-message">Thank you for your feedback!</span>
        <button onClick={onFeedbackRestarted} className="form-success-button">
          Send another one
        </button>
      </div>
    </>
  );
};
