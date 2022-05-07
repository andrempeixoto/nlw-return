import { Camera, Trash } from 'phosphor-react';
import html2canvas from 'html2canvas';
import { useState } from 'react';
import { Loading } from '../Loading';
import { backgroundSize } from 'html2canvas/dist/types/css/property-descriptors/background-size';

interface ScreenShotButtonProps {
  onScreenshotTaken: (screenshot: string | null) => void;
  screenshot: string | null;
}

export const ScreenshotButton = ({ onScreenshotTaken, screenshot }: ScreenShotButtonProps) => {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);

  const handleTakeScreenshot = async () => {
    setIsTakingScreenshot(true);

    const canvas = await html2canvas(document.querySelector('html')!);
    const base64image = canvas.toDataURL('image/png');

    setIsTakingScreenshot(false);
    onScreenshotTaken(base64image);
  };

  if (screenshot) {
    return (
      <button
        type="button"
        onClick={() => onScreenshotTaken(null)}
        className="form-content-footer-button"
        style={{
          backgroundImage: `url(${screenshot})`,
          backgroundPosition: 'right bottom',
          backgroundSize: 150,
        }}
      >
        <Trash weight="fill" />
      </button>
    );
  }

  return (
    <button type="button" onClick={handleTakeScreenshot} className="form-content-footer-camera">
      {isTakingScreenshot ? <Loading /> : <Camera className="w-6 h-6" />}
    </button>
  );
};
