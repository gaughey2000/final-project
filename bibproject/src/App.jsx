import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Procedures from "./Pages/Procedures";
import Whyus from "./Pages/Whyus";
import Voucher from "./Pages/Voucher";
import Book from "./Pages/Book";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router";
function App() {

  return (
    <>
      <div className="w-full h-full absolute
      bg-gradient-to-b from-slate-500 to-white">
        <header className="flex justify-between items-center
        text-black py-6 px-8 md:px-32 bg-white drop-shadow-md">
          <Navbar />
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/procedures" element={<Procedures />} />
          <Route path="/whyus" element={<Whyus />} />
          <Route path="/voucher" element={<Voucher />} />
          <Route path="/book" element={<Book />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </>
  )
}

export default App
