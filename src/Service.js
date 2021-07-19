const API_URL = 'https://devices-backend.vercel.app';
//list
export const listEntity = async ({ entity = 'devices' }) => {
  try {
    const response = await fetch(`${API_URL}/${entity}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};