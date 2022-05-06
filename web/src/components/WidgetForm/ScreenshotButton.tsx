import { Camera } from 'phosphor-react';
import html2canvas from 'html2canvas';
import { useState } from 'react';
import { Loading } from '../Loading';

interface ScreenShotButtonProps {
  onScreenshotTaken: (screenshot: string) => void;
}

export const ScreenshotButton = ({ onScreenshotTaken }: ScreenShotButtonProps) => {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);

  const handleTakeScreenshot = async () => {
    setIsTakingScreenshot(true);

    const canvas = await html2canvas(document.querySelector('html')!);
    const base64image = canvas.toDataURL('image/png');

    setIsTakingScreenshot(false);
    onScreenshotTaken(base64image);
  };

  return (
    <button type="button" onClick={handleTakeScreenshot} className="form-content-footer-camera">
      {isTakingScreenshot ? <Loading /> : <Camera className="w-6 h-6" />}
    </button>
  );
};
