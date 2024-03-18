import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Layout from "./layout/Layout";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";
import AddHotel from "./pages/AddHotel";
import { useAppContext } from "./contexts/AppContext";
import MyHotels from "./pages/MyHotel";
import EditHotel from "./pages/EditHotel";
import Search from "./pages/Search";
import Detail from "./pages/Detail";
import Booking from "./pages/Booking";

const App = () => {
  const { isLoggedIn } = useAppContext();
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Layout childern={<p>Home Page</p>}></Layout>}
          />
          <Route
            path="/search"
            element={<Layout childern={<Search/>}></Layout>}
          />
          <Route
            path="/detail/:hotelId"
            element={<Layout childern={<Detail/>}></Layout>}
          />
          <Route
            path="/register"
            element={<Layout childern={<Register />}></Layout>}
          />
          <Route
            path="/sign-in"
            element={<Layout childern={<SignIn />}></Layout>}
          />

          {isLoggedIn && (
            <>
             <Route
                path="/hotel/:hotelId/booking"
                element={<Layout childern={<Booking/>}></Layout>}
              />
              <Route
                path="/add-hotel"
                element={<Layout childern={<AddHotel />}></Layout>}
              />
              <Route
                path="/edit-hotel/:hotelId"
                element={<Layout childern={<EditHotel />}></Layout>
                }
              />
              <Route
                path="/my-hotels"
                element={<Layout childern={<MyHotels />}></Layout>
                }
              />

            </>
          )}

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
