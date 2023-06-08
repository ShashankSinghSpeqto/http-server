const getRoute = require("./get.route");
const postRoute = require("./post.route");
const putRoute = require("./put.route");
const deleteRoute = require("./delete.route");

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
        path: "/put",
        route: putRoute,
    },
    {
        path: "/delete",
        route: deleteRoute,
    },
];

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
});

module.exports = router;
