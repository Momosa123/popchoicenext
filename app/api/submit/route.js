import OpenAI from "openai";
import { getChatCompletion, getMovieRecommendation } from "@/utils/utilities";
export const maxDuration = 20;
const openai = new OpenAI({
  apiKey: process.env.NEXT_OPENAI_API_KEY,
});

// POST/api/messages
export const POST = async request => {
  console.log("started");
  if (!process.env.NEXT_OPENAI_API_KEY) {
    return console.log("Y a pas de clé OPEN API");
  }
  try {
    const { input, query } = await request.json();

    const movie_reco = await getMovieRecommendation(input);
    console.log(movie_reco);
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
