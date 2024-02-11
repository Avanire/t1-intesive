import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { baseLayout } from '../app/layouts/baseLayout'

const Home = lazy(() => import('./home/ui/Home/Home'))

export const routing = () =>
    createBrowserRouter([
        {
            element: baseLayout,
            errorElement: <div>404 Error</div>,
            children: [
                {
                    path: '/',
                    element: <Home />,
                },
            ],
        },
    ])
