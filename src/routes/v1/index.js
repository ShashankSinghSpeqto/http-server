import getRoute from "./get.route";
import postRoute from "./post.route";
import putRoute from "./put.route.js";
import deleteRoute from "./delete.route";

const router = express.Router();

const defaultRoutes = [
    {
        path: "/get",
        route: getRoute,
    },
    {
        path: "/post",
        route: postRoute,
    },
    {
        path: "./put",
        route: putRoute,
    },
    {
        path: "./delete",
        route: deleteRoute,
    },
];

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
});

export default router;
