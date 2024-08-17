import axios from 'axios';

const api = axios.create({
    baseURL: '/api',  // Définir l'URL de base pour les requêtes API
});

export default api;
