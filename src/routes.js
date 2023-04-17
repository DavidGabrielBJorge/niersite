import { BrowserRouter, Routes, Route } from "react-router-dom";//Permite isar componentes do React Router
import AboutUs from "./view/aboutUs";
import MainPage from "./view/mainPage";
import Menu from "./components/Menu";
import Footer from "components/Footer";
import BasePage from "components/BasePage";
import Post from "view/post";
import NotFound from "view/notFound";

//caso na url for "/"" vai carregar a página de início, se não for vai ser a sobre

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu/>
      <Routes>

          <Route path="/" element={<BasePage/>}>{/*Rota Pai, é uma rota para a página padrão para as duas páginas que possuem o mesmo elemento, no caso o banner e o main*/}
            <Route path='/' element={<MainPage></MainPage>}/>{/*Rota filha  */}
            <Route path='/aboutus' element={<AboutUs></AboutUs>}/>{/*Rota filha  */}
            <Route path='/posts/:id' element={<Post></Post>}/>{/*Rota filha  */}
          </Route>

          <Route path='*' element={<NotFound></NotFound>}/>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default AppRoutes;

/*
A rota alinhada funciona dessa forma: 

Na rota "/", a estrutura a ser renderizada será:
  <BasePage>
    <MainPage></MainPage>
  </BasePage>

Na rota "/aboutus", a estrutura a ser renderizada será:
  <BasePage>
    <AboutUs></AboutUs>
  </BasePage>

*/