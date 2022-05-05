import { useState } from 'react';

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
      alt: 'Image of an thought balloon',
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
        'Hey'
      )}

      <footer className="text-xs text-neutral-400">
        Created by{' '}
        <a
          className="hover:underline underline-offset-2"
          href="https://andrepeixoto.dev"
        >
          Andre Peixoto
        </a>
      </footer>
    </div>
  );
};
