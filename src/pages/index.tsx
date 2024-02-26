import { createBrowserRouter } from 'react-router-dom'
import { baseLayout } from '@app/layouts/baseLayout'
import Home from './home/ui/Home/Home'
import Blog from './blog/ui/Blog/Blog'
import Post from './post/ui/Post/Post'

export const routing = () =>
    createBrowserRouter([
        {
            element: baseLayout,
            children: [
                {
                    path: '/',
                    element: <Home />,
                },
                {
                    path: '/blog',
                    element: <Blog />,
                },
                {
                    path: '/blog/:id',
                    element: <Post />,
                },
            ],
        },
    ])
