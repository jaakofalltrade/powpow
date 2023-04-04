export const cleanMessageText = (content: string): string => {
  const splitMessages = content.split('"');
  return splitMessages[1];
};
