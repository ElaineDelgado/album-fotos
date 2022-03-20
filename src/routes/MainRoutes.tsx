import { useRoutes } from 'react-router-dom'
import Home from '../pages/Home'
import Album from '../pages/Album'
import Photo from '../pages/Photo'

const MainRoutes = () => {
    return useRoutes([
        {path:"/", element:<Home />},
        {path:"/album/:id", element: <Album />},
        {path:"/photos/:id", element: <Photo />}
    ])
}

export default MainRoutes