import OpenAI from "openai";
import { getChatCompletion, getMovieRecommendation } from "@/utils/utilities";

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_KEY,
  dangerouslyAllowBrowser: true,
});

// POST/api/messages
export const POST = async request => {
  try {
    const { input, query } = await request.json();

    const movie_reco = await getMovieRecommendation(input);

    const chat = await getChatCompletion(movie_reco.content, query);
    console.log(chat);

    return new Response(JSON.stringify({ movie: movie_reco, chat }), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response("Something went wwrong", { status: 500 });
  }
};
