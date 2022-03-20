import api from '../api'
import React from 'react'
import PhotosTypes  from '../types/PhotosTypes'
import {useParams, useNavigate} from 'react-router-dom'

const Photo = () => {
  const navigate = useNavigate()
  const params = useParams()
  const [photo, setPhoto] = React.useState<PhotosTypes>()
  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
    if(params.id) {
      getPhoto(params.id)
    }
  },[params.id])

  const getPhoto = async (id:string) => {
    setLoading(true)
    const response = await api.getPhoto(id) 
    setPhoto(response)
    setLoading(false)
  }

  const handleClick = () => {
    navigate(-1)
  }

  return (
    <>
      {loading && <h3>Loading...</h3>}      
      
      {photo &&
      <section className="foto-container">
        <header className="album-header">
          <h1 className="photo-title">{photo.title}</h1>
          <button className="btn-voltar" onClick={handleClick}>VOLTAR</button>
        </header>
        <img src={photo.url} alt={photo.title} />
      </section>
      }
    </>
  )
}
export default Photo