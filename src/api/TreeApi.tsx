const API_URL = import.meta.env.VITE_SERVER_API_URL;
const TREE_URL = `${API_URL}/notes`;

export const fetchTree = async (token: string) => {
  if(!token){
    throw new Error('Token is required');
  }

  try{
    const response = await fetch(TREE_URL,{
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })

    if(!response.ok){
      throw new Error('Error fetching tree');
    }

    return response;
  } catch(e) {
    throw new Error('Error fetching tree '+ e);
  }
};