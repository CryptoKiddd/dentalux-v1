import { MantineProvider } from '@mantine/core';
import {HeroPage,AboutPage,DentistsPage,ContactPage,WorkPage, BlogPage,PostPage} from './Pages';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HeroPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/dentists",
    element: <DentistsPage />,
  },
  {
    path: "/contacts",
    element: <ContactPage />,
  },
  {
    path: "/works",
    element: <WorkPage />,
  },
  {
    path: "/blog",
    element: <BlogPage />,
  },
  {
    path: "/blog/:id",
    element: <PostPage />,
  },
]);


function App() {
  return (
    <div className="App">
      <MantineProvider withGlobalStyles withNormalizeCSS>

<RouterProvider router={router} />    
      </MantineProvider>
    </div>
  );
}

export default App;
