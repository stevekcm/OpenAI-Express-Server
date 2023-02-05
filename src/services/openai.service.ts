import { openai } from "../utils/openai";

const createCompletion = async (model: string, prompt: string) => {
  const response = await openai.createCompletion({
    model: model,
    prompt: prompt,
    max_tokens: 512,
    temperature: 0,
  });

  return response.data.choices[0].text;
};

const getModels = async () => {
  const response = await openai.listModels();

  const models = response.data.data.map((model) => {
    return { model: model.id };
  });

  return models;
};

const retrieveModel = async (model: string) => {
  return await openai.retrieveModel(model);
};

export default {
  createCompletion,
  getModels,
  retrieveModel,
};
