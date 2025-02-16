import { Header } from "./components/Header";
import { useHashNavigation } from "./hooks/useHashNavigation";
import { Blog } from "./pages/Blog";
import { Contact } from "./pages/Contact";
import { ErrorPage } from "./pages/Error";
import { Home } from "./pages/Home";
import { Single } from "./pages/Single";

function App() {
  const { page, param } = useHashNavigation();
  const contentPage = getPageContent(page, param);
  return (
    <>
      <Header />
      <div>{contentPage}</div>
    </>
  );
}

/**
 * Return the content of the page based on the given page name
 * @param {string} pqge - the name of the page
 * @returns {JSX.Element} the content of the page
 */

function getPageContent(page, param = null) {
  switch (page) {
    case "home": {
      return <Home />;
    }
    case "blog": {
      return <Blog />;
    }
    case "contact": {
      return <Contact />;
    }
    case "post": {
      return <Single postId={param} />;
    }
    default: {
      return <ErrorPage />;
    }
  }
}
export default App;
