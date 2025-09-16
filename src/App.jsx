import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import PrivateRoute from "./routes/PrivateRoute";
import { privateRoutes, publicRoutes } from "./routes/allRoutes";

function App() {
  return (
    <div className="max-w-[1920px] h-screen overflow-x-hidden bg-primary-muted overflow-y-auto">
      <Navbar />
      <hr className="border-secondary-muted md:mt-15 lg:mt-0" />

      <Routes>
        {/* Public Routes */}
        {publicRoutes.map((route, idx) => (
          <Route key={idx} path={route.path} element={<route.element />} />
        ))}

        {/* Private Routes */}
        {privateRoutes.map((route, idx) => (
          <Route
            key={idx}
            path={route.path}
            element={<PrivateRoute>{<route.element />}</PrivateRoute>}
          />
        ))}
      </Routes>
    </div>
  );
}

export default App;
