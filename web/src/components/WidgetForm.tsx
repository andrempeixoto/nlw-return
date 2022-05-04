import { CloseButton } from './CloseButton';

export const WidgetForm = () => {
  return (
    <div className="form-container">
      <header>
        <span className="text-xl leading-6">Give us your feedback</span>
        <CloseButton />
      </header>

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
