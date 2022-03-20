//COMPONENT QUE GERA UM ALBUM/LINK QUE AO CLICAR ABRE O ALBUM E SUAS FOTOS
import {Link} from 'react-router-dom'

type Props = {
  id: number,
  userId:number,
  title: string,
}

const AlbumItem = ({id, userId, title}: Props) => {
return (
  <Link to={`/album/${id}`}>
      <div className="album">
        <h3>{title.toUpperCase()}</h3>
        <p>
          Fotos de: usuário {userId}
          <br/>
          Album: {id}
        </p>                            
      </div>
  </Link>
  )
}

export default AlbumItem