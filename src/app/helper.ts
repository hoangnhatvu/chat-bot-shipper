import axios from 'axios';
import { IMessageData } from './chat';

const chat = async (messagesData: IMessageData[]) => {
  try {
    const OPENAI_API_KEY = `${process.env.NEXT_PUBLIC_OPENAI_KEY}`;

    const data = {
      model: `${process.env.NEXT_PUBLIC_OPENAI_MODEL}`,
      messages: messagesData,
    };

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${OPENAI_API_KEY}`,
      },
    };

    const response = await axios.post(`${process.env.NEXT_PUBLIC_OPENAI_URL}`, data, config);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export {chat};