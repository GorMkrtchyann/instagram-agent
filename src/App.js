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
          <Route path={'/'} element={<h1>ERROR</h1>}/>
          <Route path={'*'} element={<h1>ERROR</h1>}/>
      </Routes>
  );
}

export default App;
