import { BrowserRouter, Routes, Route } from "react-router-dom";
import Counter from "../Project/01_counter/Counter.jsx";
import Header from "./Header.jsx";
import Table from "./Table.jsx";
import Page from "./Page.jsx";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Table />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="*" element={<Page />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
