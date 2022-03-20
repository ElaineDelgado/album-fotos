//COMPONENT QUE GERA CADA FOTO/LINK DO ALBUM QUE AO CLICAR ABRE A FOTO
import {Link} from 'react-router-dom' 
import PhotosTypes from '../types/PhotosTypes'

type Props = {
    data: PhotosTypes
}

const PhotoLink = ({data}: Props) => {
  return (
    <Link to={`/photos/${data.id}`}>
      <figure>
        <img src={data.thumbnailUrl} alt={data.title} />
        <figcaption>{data.title.slice(0,13)+"..."}</figcaption>
      </figure>
    </Link>
  )
}

export default PhotoLink