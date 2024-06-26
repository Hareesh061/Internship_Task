import { Configuration, OpenAIApi, CreateCompletionRequest } from 'openai';


const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY || '', 
});

// Create an instance of OpenAIApi
const openai = new OpenAIApi(configuration);

export const classifyEmailContent = async (emailBody: string): Promise<string> => {
 
  const request: CreateCompletionRequest = {
    model: 'text-davinci-003', // Ensure 'text-davinci-003' is a valid model name in OpenAI
    prompt: `Classify the following email content into one of the categories: Interested, Not Interested, More Information.\n\nEmail: ${emailBody}`,
    max_tokens: 50, // Use correct property name according to OpenAI SDK
  };

  try {
    // Make API call to OpenAI
    const response = await openai.createCompletion({
      model: request.model,
      prompt: request.prompt,
      max_tokens: request.max_tokens,
    });

    // Check if choices are available in the response
    if (response.data.choices && response.data.choices.length > 0 && response.data.choices[0].text) {
      return response.data.choices[0].text.trim();
    } else {
      throw new Error('No valid response from OpenAI');
    }
    
  } catch (error) {
    console.error('Error classifying email content:', error);
    throw error;
  }
};

export const generateEmailReply = async (emailBody: string): Promise<string> => {
  // Define the request object
  const request: CreateCompletionRequest = {
    model: 'text-davinci-003', // Ensure 'text-davinci-003' is a valid model name in OpenAI
    prompt: `Generate a reply for the following email context: ${emailBody}`,
    max_tokens: 100, // Use correct property name according to OpenAI SDK
  };

  try {
    // Make API call to OpenAI
    const response = await openai.createCompletion({
      model: request.model,
      prompt: request.prompt,
      max_tokens: request.max_tokens,
    });

    // Check if choices are available in the response
    if (response.data.choices && response.data.choices.length > 0 && response.data.choices[0].text) {
      return response.data.choices[0].text.trim();
    } else {
      throw new Error('No valid response from OpenAI');
    }
    
  } catch (error) {
    console.error('Error generating email reply:', error);
    throw error;
  }
};
