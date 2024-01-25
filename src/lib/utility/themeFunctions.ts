export const getThemePrefence = (): string => {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }

  return 'light';
};

export const setImage = (img: HTMLImageElement | null): void => {
  const theme = getThemePrefence();
  if (img) {
    if (theme === 'dark') {
      img.src = '/logo-dark.png';
    } else {
      img.src = '/logo-white.png';
    }
  }
};
