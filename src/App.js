import "./App.css";
import { Menu, Dashboard, About, Servises } from "./components";

function App() {
  return (
    <div className='App'>
      <Menu className='menu'> </Menu>{" "}
      <Dashboard className='Dashboard'> </Dashboard>
      <About> </About> <Servises> </Servises>
    </div>
  );
}

export default App;
