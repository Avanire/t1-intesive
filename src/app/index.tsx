import './index.css'
import { routing } from '../pages'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/store'

function App() {
    return (
        <Provider store={store}>
            <RouterProvider router={routing()} />
        </Provider>
    )
}

export default App
