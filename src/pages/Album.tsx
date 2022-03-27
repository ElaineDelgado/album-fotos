import React from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import api from '../api'
import PhotoLink from '../components/PhotoLink'
import PhotosTypes from '../types/PhotosTypes'
import AlbumsTypes from '../types/AlbumsTypes'


const Album = () => {
  const navigate = useNavigate()
  const params = useParams()
  const [albumInfo, setAlbumInfo] = React.useState<AlbumsTypes>()
  const [photos, setPhotos] = React.useState<PhotosTypes[]>([])
  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
    if(params.id) {
      getAllPhotos(params.id)
      getAlbum(params.id)
    }
  },[params.id])

  const getAllPhotos = async (id:string) => {
    setLoading(true) 
    const response = await api.getPhotos(id)
    setPhotos(response)
    setLoading(false)
  }

  const getAlbum = async (id:string) => {
        const response = await api.getAlbum(id)
        setAlbumInfo(response)
    }

  const handleClick = () => navigate("/")  

  return (
    <>
        {loading && <h3>Loading...</h3>}
        <header className="album-header">
          <h1 className="album-title">Album: {albumInfo?.title}</h1> 
          <button className="btn-voltar" onClick={handleClick}>VOLTAR</button>
        </header>
        <hr />    
        <section className="photos-container">
          {photos.map((item, index) => <PhotoLink key={index} data={item} />)}
        </section>    
    </>
  )
}

export default Album 