import axios from 'axios';

export const makeGallery = async (value, page) => {
    axios.defaults.baseURL = "https://api.unsplash.com/search/photos";
      const API_KEY = "egN3sQSjY2AbWg1q6qqhQfD_sYLCdHq7IxCgGmwQhN0";
      const params = {
        client_id: API_KEY, 
        query: value,
        orientation: "landscape",
        page: page,
        per_page: 20
    };  
    const getImages = await axios.get('', { params: params });
    return getImages.data.results;
} 