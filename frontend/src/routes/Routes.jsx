import Add from "../pages/Add";
import Detail from "../pages/Detail";
import Main from "../pages/Main";
import NotFound from "../pages/NotFound";
import Root from "../pages/Root";
import Wishlist from "../pages/Wishlist";


export const ROUTES = [
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Main />
            },
            {
                path: "/:id",
                element: <Detail />
            },
            {
                path: "wishlist",
                element: <Wishlist />
            },
            {
                path: "/add",
                element: <Add />
            },
            {
                path: "*",
                element: <NotFound />
            }
        ]
    }
]