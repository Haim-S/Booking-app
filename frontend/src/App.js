import {
BrowserRouter,
Routes,
Route
} from "react-router-dom";
import './App.css';
import HomePage from "./pages/home/HomePage";
import ListPage from "./pages/list/ListPage";
import HotelPage from "./pages/hotel/HotelPage";


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/hotels" element={<ListPage/>}/>
      <Route path="/hotels/:id" element={<HotelPage/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
