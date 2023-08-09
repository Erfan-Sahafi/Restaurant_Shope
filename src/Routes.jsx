import Home from "./Pages/Home/Home";
import Foods from "./Pages/Foods/Foods";
import DetailsFood from "./Pages/DetailsFood/DetailsFood";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Basket from "./Pages/Basket/Basket";
import PanelAdmin from "./Pages/PanelAdmin/PanelAdmin";
import FoodCategory from "./Pages/FoodCategory/FoodCategory";

const routes = [
    {path:"/", element: < Home />},
    {path: "/foods",element: <Foods/>},
    {path: "/detailsfood/:foodID",element: <DetailsFood/>},
    {path: "/login",element: <Login/>},
    {path: "/register",element: <Register/>},
    {path: "/basket",element: <Basket/>},
    {path: "/foodcategory/:categoryName",element: <FoodCategory/>}
];

export default routes;
