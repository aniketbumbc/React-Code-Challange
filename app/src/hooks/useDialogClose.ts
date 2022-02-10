import { useRef, useEffect } from 'react';
import { ESCAPE } from 'src/constant/constant';

type dispatchHandler = () => void;

export const useDialogClose = (dispatchHandler: dispatchHandler) => {
  const dialogRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const mouseDownHandler = (event: Event) => {
      if (!dialogRef.current?.contains(event.target as Node)) {
        dispatchHandler();
      }
    };

    const onKeyDownHander = (event: KeyboardEvent) => {
      if (event.key === ESCAPE) {
        dispatchHandler();
      }
    };

    document.addEventListener('mousedown', mouseDownHandler);
    document.addEventListener('keydown', onKeyDownHander);

    return () => {
      document.removeEventListener('mousedown', mouseDownHandler);
      document.removeEventListener('keydown', onKeyDownHander);
    };
  });

  return dialogRef;
};
