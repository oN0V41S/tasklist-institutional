import logo from "../../assets/logoSquad (1).png";
import { FiChevronDown } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Layout({ children }) {
  const onLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("idUsuario");
    console.log("Saindo da conta...");
  };

  const Header = () => {
    return (
      <header className="flex items-center justify-between w-[100%] pr-[15vw] pl-[15vw] p-5 bg-white">
        {/* <img src={logo} alt="logo" className="m-0 mt-auto mb-auto w-[8vw]" /> */}
        <h1 className="font-4 font-bold">Lista de Tarefas</h1>
        <button id="usuario" className="flex items-center gap-1">
          <Link to="/" onClick={onLogout} className="flex gap-2 align-center">
            Sair
            <FiChevronDown />
          </Link>
        </button>
      </header>
    );
  };

  const Footer = () => {
    return (
      <footer className="flex w-full m-auto justify-between pr-[5vw] pl-[5vw] pb-[13vh] pt-[13vh] bg-white">
        <section id="logo" className="">
          <img src={logo} alt="logo" className="w-[10vw]" />
        </section>
        <nav id="navigation" className="flex flex-col gap-2">
          <Link
            to="#"
            className="font-semibold hover:text-blue-800 transition-all"
          >
            Home
          </Link>
          <Link
            to="#"
            className="font-semibold hover:text-blue-800 transition-all"
          >
            Equipe
          </Link>
          <Link
            to="#"
            className="font-semibold hover:text-blue-800 transition-all"
          >
            Documentação
          </Link>
        </nav>
        <section id="midia" className="flex flex-col gap-2">
          <ul id="icons" className="flex w-max m-auto gap-4 ">
            <li>
              <img src="" alt="logo" />
            </li>
            <li>
              <img src="" alt="logo" />
            </li>
            <li>
              <img src="" alt="logo" />
            </li>
          </ul>
          <p>TechForce©2024 Todos os direitos reservados</p>
        </section>
      </footer>
    );
  };

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
