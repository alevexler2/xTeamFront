import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route
} from "react-router-dom";
import { routes } from './routes';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout/>}>
      {routes.map(({Element, path, index}) => (
        <Route key={index} path={path} element={<Element/>}/>
    ))}
    </Route>
  )
);

function App() {
  

  return (
    <RouterProvider router={router}/>
  )
}

export default App
