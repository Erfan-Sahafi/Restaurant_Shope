import { useRoutes } from "react-router-dom";
import routes from "./Routes";

const App = () => {
  const router = useRoutes(routes);

  return (
    <>
      {router}
    </>
  );
};

export default App;
