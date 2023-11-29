export const bytesToKilobytes = (bytes: number): string => {
  const kilobytes = bytes / 1024;

  if (kilobytes >= 1024) {
    return `${(kilobytes / 1024).toFixed(2)} MB`;
  }

  return `${Math.round(kilobytes)} KB`;
};
