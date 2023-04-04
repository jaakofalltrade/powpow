export enum MessageHistoryRole {
  USER = "user",
  ASSISTANT = "assistant",
  SYSTEM = "system",
}

export type MessageHistory = {
  role: MessageHistoryRole;
  content: string;
};
