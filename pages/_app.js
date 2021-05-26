import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css"
import "../styles/globals.css";
import "../styles/navbar.scss";
import "../styles/homeMain.scss";

// navbar
import NavBar from "../layouts/NavBar";

function MyApp({ Component, pageProps }) {
  return (
    <NavBar>
      <Component {...pageProps} />
    </NavBar>
  );
}

export default MyApp;
