// Must match the message returned by the backend for an empty AI request.
export const NO_AI_CONTEXT = "No meeting transcript or question is available yet. Check your audio input, wait for speech to appear, or enter a question using Ask.";

export function isNoAIContext(error: unknown): boolean {
  const message = error instanceof Error ? error.message : String(error);
  return message === NO_AI_CONTEXT;
}
