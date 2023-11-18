/**
 * 長いテキストをmaxLengthに省略する
 * maxLengthより多い場合、末を...にする
 * @param text
 * @param maxLength
 * @returns string
 */
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) {
    return text;
  } else {
    return text.slice(0, maxLength - 3) + '...';
  }
};
