import axios from 'axios';

// const API_KEY_VIMEO = 'cfb859aa4009d8e3d581f4444ce00939';

export const buscarVideos = async (pesquisa) => {
  const endpoint = `https://api.vimeo.com/videos?query=${pesquisa}`;
  
  try {
    const response = await axios.get(endpoint, {
      headers: {
        'Authorization': `Bearer ${API_KEY_VIMEO}`
      }
    });
    return response.data.data.map(video => ({
      id: video.uri.split('/').pop(),
      title: video.name,
      description: video.description,
      thumbnail: video.pictures.sizes[2]?.link,
    }));
  } catch (erro) {
    console.error('Erro ao buscar vídeos do Vimeo:', erro);
    return [];
  }
};
