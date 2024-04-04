import './App.css';
import AllPages from './pages/AllPages';
import { Login } from './pages/Login';


export function App() {
  return (
    <div>
      <AllPages />
      <Login />
    </div>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
