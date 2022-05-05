import { CloseButton } from '../../CloseButton';

export const FeedbackContentStep = () => {
  return (
    <>
      <header>
        <span className="text-xl leading-6">Give us your feedback</span>
        <CloseButton />
      </header>

      <div className="form-content"></div>
    </>
  );
};
