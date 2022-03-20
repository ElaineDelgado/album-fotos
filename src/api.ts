// REQUISICAO PARA CADA OS DADOS DO ALBUMS: ALBUMS, THUMBNAILS, FOTO...
import axios from 'axios'

const BASE = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/'
})

//FUNÇÕES PARA PEGAR OS DADOS NECESSÁRIOS
const api =  {
  //pega todos os albums disponíveis
  getAlbums: async () => {
    const response = await BASE.get('/albums')
    return response.data
  },
// gera um album específico
  getAlbum: async (id: string) => {
    const response = await BASE.get(`/albums/${id}`)
    return response.data
  },
  // gera as fotos do album específico
  getPhotos: async (id:string) => {
    const response = await BASE.get(`/albums/${id}/photos`) 
    return response.data
  },
  // gera uma foto específica
  getPhoto: async (id: string) => {
    const response = await BASE.get(`/photos/${id}`)
    return response.data
  }
}

export default api