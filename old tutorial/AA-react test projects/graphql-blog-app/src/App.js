import { Navigate, Route, Routes } from "react-router-dom";

//components
import ScrollToTop from './components/common/ScrollToTop'
import HomePage from "./components/Home";
import Layout from "./components/layout";
import AuthorPage from "./components/AuthorPage";
import BlogPage from "./components/BlogPage";

function App() {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/authors/:slug" element={<AuthorPage />} />
        <Route path="/blogs/:slug" element={<BlogPage />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </Layout>
  );
}

export default App;
