import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";

const openai = new OpenAI({
  apiKey: "sk - VH86FwDRVHD7VGh7Uh5tT3BlbkFJM1u3bOa3JMdPonxOUNip",
});

export const runtime = "edge";

export async function POST(req) {
  const { messages } = await req.json();
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    stream: true,
    messages: [
      {
        role: "user",
        content: "Give me code for generating a JSX button",
      },
    ],
  });

  const stream = OpenAIStream(response);

  return new StreamingTextResponse(stream);
}
