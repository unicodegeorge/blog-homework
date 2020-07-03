import Home from "./components/Home";

import CreatePosts from "./components/CreatePosts";
import ManagePosts from "./components/ManagePosts";
import Post from "./components/Post";
import NotFound from "./components/NotFound";

export default[
    //Setting the routes
    {
        path: '/',
        component: Home,
        name: 'home'
    },
    {
        path: '/createposts',
        component: CreatePosts,
        name: 'create_posts'
    },

    {
        path: '/manageposts',
        component: ManagePosts,
        name: 'manage_posts'
    },

    {
        path: '/Post',
        component: Post,
        name: 'post',
    },
    {
    path: '*',
        component: NotFound

    }
]
