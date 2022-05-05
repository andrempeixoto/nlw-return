import { FeedBackType, feedbackTypes } from '..';
import { CloseButton } from '../../CloseButton';

interface FeedbackTypeStepProps {
  onFeedbackTypeChanged: (type: FeedBackType) => void;
}

export const FeedbackTypeStep = (props: FeedbackTypeStepProps) => {
  return (
    <>
      <header>
        <span className="text-xl leading-6">Give us your feedback</span>
        <CloseButton />
      </header>

      <div className="form-types">
        {Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <button
              key={key}
              onClick={() => props.onFeedbackTypeChanged(key as FeedBackType)}
              className="form-types-button"
              type="button"
            >
              <img src={value.image.source} alt={value.image.alt} />
              <span>{value.title}</span>
            </button>
          );
        })}
      </div>
    </>
  );
};
