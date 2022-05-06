import { useState } from 'react';

import { FeedbackContentStep } from './Steps/FeedbackContentStep';
import { FeedbackTypeStep } from './Steps/FeedbackTypeStep';

import bugImageUrl from '../../assets/bug.svg';
import ideaImageUrl from '../../assets/idea.svg';
import thoughtImageUrl from '../../assets/thought.svg';

export const feedbackTypes = {
  BUG: {
    title: 'Bug',
    image: {
      source: bugImageUrl,
      alt: 'Image of an insect',
    },
  },
  IDEA: {
    title: 'Idea',
    image: {
      source: ideaImageUrl,
      alt: 'Image of a light bulb',
    },
  },
  THOUGHT: {
    title: 'Thought',
    image: {
      source: thoughtImageUrl,
      alt: 'Image of a thought balloon',
    },
  },
};

export type FeedBackType = keyof typeof feedbackTypes;

export const WidgetForm = () => {
  const [feedbackType, setFeedbackType] = useState<FeedBackType | null>(null);

  return (
    <div className="form-container">
      {!feedbackType ? (
        <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
      ) : (
        <FeedbackContentStep feedbackType={feedbackType} onFeedbackRestarted={setFeedbackType} />
      )}

      <footer className="form-footer">
        Created by{' '}
        <a className="hover:underline underline-offset-2" href="https://andrepeixoto.dev">
          Andre Peixoto
        </a>
      </footer>
    </div>
  );
};
