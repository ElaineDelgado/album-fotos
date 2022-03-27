// PAGE COM LINKS PARA CADA ALBUM
import React from 'react'
import AlbumsTypes from '../types/AlbumsTypes'
import api from '../api'
import AlbumLink from '../components/AlbumLink'

const Albums = () => {
  const [albums, setAlbums] = React.useState<AlbumsTypes[]>([])
  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
    loadAlbums()
  },[])

  const loadAlbums = async () => {
    setLoading(true)
    const response = await api.getAlbums()
    setAlbums(response)
    setLoading(false)
  }

  return (
    <>
      { loading &&
        albums.length === 0 && <h3>Loading...</h3>
      }
      {
      !loading && albums.length > 0 &&  
      <div className="home-wrapper"> 
        <h1>Photos Collections</h1>
        <h2>Incredible photos from incredible people</h2>
        <hr />
        <article className="albums-container">
          {albums.map((item, index) => (
            <AlbumLink key={index} id={item.id} userId={item.userId} title={item.title.slice(0,15)+'...'} />
          ) )}
        </article>
      </div>
      } 
      {
        !loading && albums.length === 0 &&
        <h3>Não há albums a ser carregados.</h3>
      }       
    </>
  )
}

export default Albums