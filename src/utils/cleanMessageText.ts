export const cleanMessageText = (args: {
  messageHistory: string[];
}): string[] => {
  const { messageHistory } = args;
  return messageHistory.map((message) => {
    const splitMessages = message.split('"');
    return splitMessages[1];
  });
};
