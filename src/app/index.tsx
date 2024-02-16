import './index.css'
import 'react-loading-skeleton/dist/skeleton.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { routing } from '../pages'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { appStore } from './store/store'

function App() {
    return (
        <Provider store={appStore}>
            <RouterProvider router={routing()} />
        </Provider>
    )
}

export default App
