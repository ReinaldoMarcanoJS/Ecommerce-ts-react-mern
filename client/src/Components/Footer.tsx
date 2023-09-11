import GooglePlay from "../assets/googleplay.png";
import AppStore from "../assets/appstore.png";
import AppGallery from "../assets/appgallery.png";
import { OptionsRedirectFooter } from "./ui";
export const Footer = (): JSX.Element => {
  return (
    <footer className=" text-white-default block w-full border-t border-gray-200  py-8 border-b border-bg-slate-600 bg-gradient-to-r from-cyan-900 via-orange-950 to-cyan-900 stop">
      <div className="mobile:flex mobile:flex-col tablet:flex-row tablet:px-14 desktop:grid w-full desktop:px-20 justify-items-center grid-cols-4 gap-10 py-4 text-left  ">
        <section className="flex flex-col">
          <div className="">
            <div>
              <p className="font-semibold text-xl text-center">
                ¡Descarga la App y llévate a GoodShop a todas partes!
              </p>
            </div>
            <div className="grid mt-4 gap-4 auto-rows-auto rounded justify-center">
              <img src={GooglePlay} className="w-40 rounded-lg" />
              <img src={AppStore} className="w-40 rounded-lg" />
              <img src={AppGallery} className="w-40 rounded-lg" />
            </div>
          </div>
        </section>
        <section className="mobile:flex mobile:justify-center mobile:text-center ">
          <ul>
            <span className="font-semibold mb-3 text-lg">Ayuda</span>
            <OptionsRedirectFooter>Centro de ayuda</OptionsRedirectFooter>
            <OptionsRedirectFooter>Uso y Reglas</OptionsRedirectFooter>
            <OptionsRedirectFooter>Contactanos</OptionsRedirectFooter>
          </ul>
        </section>
        <section className="mobile:flex mobile:justify-center mobile:text-center">
          <ul className="mobile:">
            <span className="font-semibold  text-lg">GoodShop</span>
            <OptionsRedirectFooter>Donaciones</OptionsRedirectFooter>
            <OptionsRedirectFooter>PinPun</OptionsRedirectFooter>
            <OptionsRedirectFooter>
              Términos y Condiciones
            </OptionsRedirectFooter>
            <OptionsRedirectFooter>Programa de Usuarios </OptionsRedirectFooter>
          </ul>
        </section>
        <section className="mobile:hidden tablet:flex">
          <ul>
            <span className="font-semibold mb-3 text-lg">Siguenos</span>
            <OptionsRedirectFooter>Facebook</OptionsRedirectFooter>
            <OptionsRedirectFooter>Instagram</OptionsRedirectFooter>
            <OptionsRedirectFooter>Youtube</OptionsRedirectFooter>
            <OptionsRedirectFooter>linkedin</OptionsRedirectFooter>
          </ul>
        </section>
      </div>
      <div className="w-full h-1 border-b border-bg-slate-800"></div>
      <div className="px-20 pt-6">
        <p className="text-lg text-white-default font-normal">
          2023 GoodShop. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};
