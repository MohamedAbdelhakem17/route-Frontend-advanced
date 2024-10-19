import { Suspense, lazy, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingPage from "../LoadingPage/LoadingPage";

const Home = lazy(() => import("../Home/Home"));
const SingelProduct = lazy(() => import("../SingelProduct/SingelProduct"));

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);
  if (isLoading) return <LoadingPage />

  return (
    <>
      <Suspense fallback={<LoadingPage />}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<SingelProduct />} />
          </Routes>
        </Router>
      </Suspense>
    </>
  );
};

export default App;
