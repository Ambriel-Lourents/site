import { useEffect } from 'react';

export const usePageTitle = (title: string) => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title ? `Ambriel Lourents | ${title}` : 'Ambriel Lourents';

    return () => {
      document.title = previousTitle;
    };
  }, [title]);
}; 