import { Route } from "react-router-dom";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom"; // Import RouterProvider

import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import AboutUsPage from "./pages/AboutUsPage";
import OurServicesPage from "./pages/OurServicesPage";
import NotFoundPage from "./pages/NotFoundPage";
import ContactUsPage from "./pages/ContactUsPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="about" element={<AboutUsPage />} />
      <Route path="services" element={<OurServicesPage />} />
      <Route path="contact" element={<ContactUsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
