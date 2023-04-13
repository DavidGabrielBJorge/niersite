import { BrowserRouter, Routes, Route } from "react-router-dom";//Permite isar componentes do React Router
import AboutUs from "./view/aboutUs";
import MainPage from "./view/mainPage";
import Menu from "./components/Menu";

//casona url for / vai carregar a página de início, se não for vai ser a sobre

function App() {
  return (
    <BrowserRouter>
      <Menu/>
      <Routes>
          <Route path='/' element={<MainPage></MainPage>}/>
          <Route path='/aboutus' element={<AboutUs></AboutUs>}/>
          <Route path='*' element={<div>página não encontrada</div>}/>

          
      </Routes>
    </BrowserRouter>
  );
}

export default App;
