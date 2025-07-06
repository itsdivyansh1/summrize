import { Route, Routes } from "react-router";
import NotFound from "./pages/404";
import HomePage from "./pages/Home";
import MainApp from "./pages/MainApp";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/app" element={<MainApp />} />

        {/* 404 not found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
