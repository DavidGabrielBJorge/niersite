import AboutUs from "./view/aboutUs";
import MainPage from "./view/mainPage";

console.log(window.location)

const pagina = window.location.pathname === '/' ? <MainPage></MainPage> : <AboutUs></AboutUs>
//casona url for / vai carregar a página de início, se não for vai ser a sobre

function App() {
  return pagina;
}

export default App;
