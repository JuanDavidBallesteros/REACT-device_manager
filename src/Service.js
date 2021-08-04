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

// Create
export const createEntity = async ({ entity = 'devices', object, method = 'POST', idObject = null }) => {
  try {
    let url = null;
    if (method === 'POST') {
      url = `${API_URL}/${entity}`;
    } else if (method === 'PUT' && idObject !== null) {
      url = `${API_URL}/${entity}/${idObject}`;
      console.log('Entra')
    }
    if (!url) {
      throw new Error('Check the input')
    }
    const response = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(object),
      mode: 'cors',
    });
    const data = await response.json();
    return data;


  } catch (error) {
    throw error;
  }
};

// Get One
export const getOne = async (entity = "devices", idObjeto) => {
  try {
    const answer = await fetch(`${API_URL}/${entity}/${idObjeto}`);
    const data = await answer.json();
    return data;
  } catch (error) {
    console.log({ error });
  }
};

// Delete
export const deleteEntity = async ({ entity = 'devices', idObject = undefined }) => {
  try {
    let url = `${API_URL}/${entity}/${idObject}`;
    if (idObject === undefined) {
      throw new Error('Check the input');
    }
    const response = await fetch(url, {
      method: 'DELETE',
    });
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};