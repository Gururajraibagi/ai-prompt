import { connectToDb } from "@utils/database";
import Prompt from "@models/prompt";

export const GET = async (request) => {
  try {
    console.log("called get request");

    await connectToDb();

    const prompts = await Prompt.find({}).populate("creator");
    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    console.log("error while fetching data from prompts", error);
    return new Response("error while fetching data from prompts", {
      status: 500,
    });
  }
};
