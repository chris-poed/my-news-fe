import "./App.css";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import ArticleList from "../src/components/ArticleList";
import ArticleView from "../src/components/ArticleView";
import { Routes, Route } from "react-router";
import Box from "@mui/material/Container";
import AppBar from "./components/AppBar";

function App() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        paddingLeft: 0.5,
        paddingRight: 0.5,
      }}
    >
      <AppBar />
      <Routes>
        <Route path="/" element={<ArticleList />} />
        <Route path="/:sort" element={<ArticleList />} />
        <Route path="/:topic" element={<ArticleList />} />
        <Route path="/:topic/:sort" element={<ArticleList />} />
        <Route path="/article/:article_id" element={<ArticleView />} />
        {/*   <Route path="/:topic" element={<ArticleList />} /> */}
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
