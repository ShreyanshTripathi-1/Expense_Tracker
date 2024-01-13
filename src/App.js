import "./App.css";
import Header from "./Components/Header";
import Home from "./pages/Home/index";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import AddExpense from "./pages/add-expense/index";
function App() {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route exact path="" element={<Home />} />
        <Route exact path="/add-expense" element={<AddExpense />} />
      </Routes>
      <div>Footer</div>
    </Router>
  );
}

export default App;
