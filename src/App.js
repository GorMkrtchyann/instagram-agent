import {Main} from "./components/main";
import {Footer} from "./components/footer";
import {Route, Routes} from "react-router";

function App() {
  return (
      <Routes>
          <Route path={'/confirm/:user'} element={<>
              <Main/>
              <Footer/>
          </>}/>
      </Routes>
  );
}

export default App;
