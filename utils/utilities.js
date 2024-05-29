import OpenAI from "openai";
import { supabase } from "@/config/supabaseClient";

import { movies } from "@/assets/movies/content";

const openai = new OpenAI(process.env.NEXT_OPENAI_API_KEY);

const chatMessages = [
  {
    role: "system",
    content: `You are an enthusiastic movie expert who loves recommending movies to people. You will be given two pieces of information - some context about movies and a question. Your main job is to formulate a short answer with description of the movie using the provided context. If you are unsure and cannot find the answer in the context, say, "Sorry, I don't know the answer." Please do not make up the answer.`,
  },
];

async function getChatCompletion(text, query) {
  chatMessages.push({
    role: "user",
    content: `Context: ${text} Question: ${query}`,
  });

  const response = await openai.chat.completions.create({
    model: "gpt-4",
    messages: chatMessages,
    temperature: 0.5,
    frequency_penalty: 0.5,
  });
  return response.choices[0].message.content;
}

function findMatchingMovie(responseContent, movies) {
  for (const movie of movies) {
    if (
      movie.content.includes(responseContent) ||
      responseContent.includes(movie.title)
    ) {
      return movie;
    }
  }
  return null; // Si aucun film correspondant n'est trouvé
}

async function getMovieRecommendation(query) {
  const embeddingResponse = await openai.embeddings.create({
    model: "text-embedding-ada-002",
    input: query,
  });

  const queryEmbedding = embeddingResponse.data[0].embedding;

  const response = await supabase.rpc("match_new_movies", {
    query_embedding: queryEmbedding,
    match_threshold: 0.1,
    match_count: 1,
  });
  const content = response.data[0].content;

  const reco_movie = findMatchingMovie(content, movies);
  return reco_movie;
}
export { getChatCompletion, getMovieRecommendation };
