import "bootstrap/dist/css/bootstrap.min.css"
import Footer from "./views/Footer";
import Main from "./views/Main";
import Navbar from "./views/Navbar";
import TableOfContents from "./views/TableOfContents";

function App() {
  return (
    <div className="container">
      <Navbar />

      <div className="d-flex">
        <TableOfContents />
        <Main />
      </div>
      
      <Footer />
    </div>
  );
}

export default App;
