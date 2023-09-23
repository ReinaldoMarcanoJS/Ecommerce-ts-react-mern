import { OptionsRedirectModal, Searcher } from "./ui";
import { MenuOutlined } from "./ui";
import { VscAdd } from "react-icons/vsc";
import { AiOutlineClose, AiOutlineDown } from "react-icons/ai";
import { BsPersonCircle } from "react-icons/bs";
import { ItemCategoryNavbar } from "./ui/Navbar/ItemCategoryNavbar.tsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../reducers/rootReducer.ts";
import { apiLogout } from "../api/auth.ts";
import toast from "react-hot-toast";
import { setIsAuth } from "../slices/ui.slice.ts";
import { setUser } from "../slices/auth.slice.ts";
export const Navbar = (): JSX.Element => {
  const [OpenModal, setOpenModal] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isAuth = useSelector((state: IRootState) => state.ui.isAuth);
  const user = useSelector((state: IRootState) => state.auth.User);
  const handleLogout = async () => {
    const response = await apiLogout();
    if (response.data === "OK") {
      toast.success("log out");
      dispatch(setIsAuth(false));
      dispatch(setUser(null));
      navigate("/login");
    } else {
      toast.error("try Again");
    }
  };
  return (
    <>
      <div className="mobile:py-0 mobile:h-28 mobile:px-0 mobile:absolute tablet:absolute desktop:fixed overflow-x-hidden text-white-default pt-2 w-full desktop:h-44 px-10 bg-gradient-to-r from-cyan-900 via-orange-950 to-cyan-900 stop">
        <nav className="mobile:h-full flex flex-row desktop:flex-col desktop:justify-evenly ">
          <section className="mobile:flex mobile:flex-col mobile:justify-around w-full tablet:justify-evenly desktop:flex-col desktop:flex  desktop:items-center text-base font-semibold max-h-full desktop:justify-center">
            <div className="mobile:flex mobile:justify-evenly w-full mobile:mt-2 mobile:flex-row desktop:items-center desktop:justify-center desktop:mt-0">
              <div className="mobile:w-full flex justify-around px-0">
                <div className="flex items-center justify-center">
                  <MenuOutlined onClick={() => setOpenModal(!OpenModal)} />
                </div>
                <div>
                  <h1
                    className="mobile:ml-5 duration-300 text-4xl font-extrabold bg-clip-text cursor-pointer desktop:mx-1"
                    onClick={() => console.log("gola")}>
                    GoodShop
                  </h1>
                </div>
                <div className="mobile:hidden tablet:hidden desktop:flex desktop:w-searcherDesktop">
                  <Searcher
                    className="w-full px-4 py-1.5 bg-white rounded-s-lg text-black/70 text-lg placeholder:text-lg placeholder:text-slate-500/60"
                    //searcher Desktop
                  />{" "}
                </div>
                <div className="mobile:flex">
                  {isAuth && user ? (
                    <button
                      onClick={() => handleLogout()}
                      className="ms:h items-center mobile:flex border border-white mobile:text-sm rounded-lg px-2 py-0 mx-2 desktop:text-lg ">
                      <span>Logout </span>
                    </button>
                  ) : (
                    <button
                      onClick={() => navigate("/login")}
                      className="ms:h items-center mobile:flex border border-white mobile:text-xs rounded-lg px-2 py-0 mx-2 desktop:text-lg ">
                      <span className="mobile:text-lg">Log in </span>
                    </button>
                  )}
                </div>
                <div className="mobile:hidden desktop:flex desktop:p-2 justify-center  px-2 py-0 mx-2 text-lg items-center rounded-lg border-white border ">
                  <span className="mobile:   mx-1">
                    <VscAdd />
                  </span>
                  <button className="mobile:">Publicar</button>
                </div>
              </div>
            </div>

            <div className="mobile:w-full tablet w-full px-2 mobile:mb-2  desktop:hidden">
              <Searcher
                //searcher mobile and tablet
                className="mobile:w-full  mobile:flex  w-full px-4 py-1.5 bg-white rounded-s-lg text-black/70 text-lg placeholder:text-lg placeholder:text-slate-500/60"
              />{" "}
            </div>
          </section>

          <section className="mobile:hidden  desktop:flex text-white-default justify-evenly items-center font-normal text-lg">
            <div className="mobile: w-full">
              <ul className="mobile: flex justify-evenly ">
                <li>
                  <div className="mobile: flex items-center bg-white/10 rounded-lg px-3  hover:font-semibold transition-all duration-300 ">
                    <h3 className="mobile: flex text-center mx-2 font-semibold hover:font-bold ">
                      Categorias y mas{" "}
                    </h3>
                    <AiOutlineDown />
                  </div>
                </li>
                <ItemCategoryNavbar>inmuebles</ItemCategoryNavbar>
                <span className="mobile: text-white-default/60">|</span>
                <ItemCategoryNavbar>Vehiculos</ItemCategoryNavbar>
                <span className="mobile: text-white-default/60">|</span>
                <ItemCategoryNavbar>Electronica</ItemCategoryNavbar>
                <span className="mobile: text-white-default/60">|</span>
                <ItemCategoryNavbar>Hogar</ItemCategoryNavbar>
                <span className="mobile: text-white-default/60">|</span>
                <ItemCategoryNavbar>Empleo</ItemCategoryNavbar>
                <span className="mobile: text-white-default/60">|</span>
                <ItemCategoryNavbar>Directorio</ItemCategoryNavbar>
                <span className="mobile: text-white-default/60">|</span>
                <ItemCategoryNavbar>
                  Soluciones para vendedores
                </ItemCategoryNavbar>
              </ul>
            </div>
          </section>
        </nav>
      </div>

      {OpenModal && (
        <div className="mobile:w-full mobile:h-screen fixed bg-black/75 mobile:absolute">
          <div className="mobile:fixed  mobile:duration-300 mobile:h-screen mobile:w-3/4 bg-slate-600/95">
            <div className="mobile:mx-2 mobile:rounded-lg mobile:h-full">
              <div
                className="absolute mobile:left-full text-2xl mobile:top-2"
                onClick={() => setOpenModal(!OpenModal)}>
                <AiOutlineClose color="white" />
              </div>
              <div className="mobile:text-xl mobile:items-center mobile:text-white-default mobile:flex mobile:mb-6 w-full mobile:justify-center mobile:font-semibold mobile:mt-6 desktop:font-bold">
                <BsPersonCircle color="white" />

                {isAuth && user ? (
                  <p className="mobile:ml-4">
                    <span>
                      {user.name} {user.lastname}
                    </span>
                  </p>
                ) : (
                  <>
                    <p className="mobile:ml-4">Hola, Inicia Sesion</p>
                  </>
                )}
              </div>

              <div className="mobile:mx-3 mobile:h-full">
                <ul className="mobile:text-white-default p">
                  <h3 className="mobile:text-white-default mobile:ml-6">
                    Categories
                  </h3>
                  <div className="w-full h-2 border-b-2 border-white/80"></div>

                  <div className="mobile:ml-3">
                    <OptionsRedirectModal className="mt-1">
                      Electronics
                    </OptionsRedirectModal>
                    <OptionsRedirectModal className="mt-1">
                      Clothes
                    </OptionsRedirectModal>
                    <OptionsRedirectModal className="mt-1">
                      Cars
                    </OptionsRedirectModal>
                    <OptionsRedirectModal className="mt-1">
                      Houses and Departaments
                    </OptionsRedirectModal>
                    <OptionsRedirectModal className="mt-1">
                      Electrodomestics
                    </OptionsRedirectModal>
                    <OptionsRedirectModal className="mt-1">
                      Homes
                    </OptionsRedirectModal>
                    <OptionsRedirectModal className="mt-1">
                      Games
                    </OptionsRedirectModal>
                    <OptionsRedirectModal className="mt-1">
                      Software
                    </OptionsRedirectModal>
                    <OptionsRedirectModal className="mt-1">
                      Gift
                    </OptionsRedirectModal>
                    <OptionsRedirectModal className="mt-1">
                      anothers
                    </OptionsRedirectModal>
                  </div>

                  <div className="w-full h-2 border-b-2 border-white/80 py-2"></div>

                  <div className="mobile:h-full w-full">
                    <div className="pt-4 flex justify-around items-center text-left">
                      <ul className="mobile:text-center">
                        <span className="font-semibold mb- text-lg mt-4">
                          Siguenos
                        </span>
                        <OptionsRedirectModal className="mt-1">
                          Facebook
                        </OptionsRedirectModal>
                        <OptionsRedirectModal>Instagram</OptionsRedirectModal>
                        <OptionsRedirectModal>Youtube</OptionsRedirectModal>
                        <OptionsRedirectModal>linkedin</OptionsRedirectModal>
                      </ul>

                      <ul className="mobile:text-center">
                        <span className="font-semibold mb- text-lg mt-4">
                          GoodShop
                        </span>
                        <OptionsRedirectModal className="mt-1">
                          Uso y Reglas
                        </OptionsRedirectModal>
                        <OptionsRedirectModal>Contactanos</OptionsRedirectModal>
                        <OptionsRedirectModal>donaciones</OptionsRedirectModal>
                        <OptionsRedirectModal>
                          Recomiendanos
                        </OptionsRedirectModal>
                      </ul>
                    </div>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
