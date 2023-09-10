import CreateDay from "./component/CreateDay";
import CreateWord from "./component/CreateWord";
import Day from "./component/Day";
import DayList from "./component/DayList";
import EmptyPage from "./component/EmptyPage";
import Header from "./component/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<DayList />}></Route>
          <Route exact path="/day/:day" element={<Day />}></Route>
          <Route exact path="/create_word" element={<CreateWord />}></Route>
          <Route exact path="/create_day" element={<CreateDay />}></Route>
          <Route exact path="*" element={<EmptyPage />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
