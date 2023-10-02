//GET
//PATH update
// Delete

import { connectToDb } from "@utils/database";
import Prompt from "@models/prompt";

export const GET = async (request, { params }) => {
  try {
    await connectToDb();

    const prompt = await Prompt.findById(params.id);
    if (!prompt)
      return new Response("Prompt not found", {
        status: 404,
      });

    return new Response(JSON.stringify(prompt), { status: 200 });
  } catch (error) {
    console.log("error while fetching data from prompts", error);
    return new Response("error while fetching data from prompt", {
      status: 500,
    });
  }
};

export const PATCH = async (request, { params }) => {
  const { prompt, tag } = await request.json();

  try {
    await connectToDb();
    const existingPrompt = await Prompt.findById(params.id);
    if (!existingPrompt)
      return new Response("prompt not found", { status: 404 });

    existingPrompt.prompt = prompt;
    existingPrompt.tag = tag;

    await existingPrompt.save();
    return new Response(JSON.stringify(existingPrompt), { status: 200 });
  } catch (error) {
    return new Response("error while updating the prompt", {
      status: 500,
    });
  }
};

export const DELETE = async (request, { params }) => {
  console.log("error while deleting");
  try {
    await connectToDb();

    await Prompt.findByIdAndRemove(params.id);
    console.log("id to delete", params.id);
    return new Response("Promopt deleted scuccessfully", { status: 200 });
  } catch (error) {
    console.log("error while deleting", error);
    return new Response("Failed to delete the prompt", { status: 500 });
  }
};