import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Procedures from "./Components/Procedures";
import Whyus from "./Components/Whyus";
import Voucher from "./Components/Voucher";
import Book from "./Components/Book";
import Contact from "./Components/Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router";
function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/procedures" element={<Procedures />} />
        <Route path="/whyus" element={<Whyus />} />
        <Route path="/voucher" element={<Voucher />} />
        <Route path="/book" element={<Book />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
