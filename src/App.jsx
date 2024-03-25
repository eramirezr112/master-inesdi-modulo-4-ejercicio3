import "./App.css";
import AuthProvider from "./context/AuthProvider";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TodoList from "./TodoList";
import Login from "./Login";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/todo-list" element={<TodoList />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
