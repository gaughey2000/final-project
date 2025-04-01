import Navbar from "./Components/Navbar";
import NewHome from "./Pages/NewHome";
import Procedures from "./Pages/Procedures";
import Whyus from "./Pages/Whyus";
import Book from "./Pages/Book";
import Contact from "./Pages/Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router";
function App() {

  return (

      <div className="w-full min-h-screen
      bg-primary">
        <header className="w-full">
          <Navbar />
        </header>
        <Routes>
          <Route path="/" element={<NewHome />} />
          <Route path="/procedures" element={<Procedures />} />
          <Route path="/whyus" element={<Whyus />} />
          <Route path="/book" element={<Book />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

  )
}

export default App
