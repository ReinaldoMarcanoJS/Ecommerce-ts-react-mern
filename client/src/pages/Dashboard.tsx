import { Footer } from "../Components/Footer";
import { Navbar } from "..//Components/Navbar";
import { Loader } from "..//Components/ui";
import { ListOfProducts } from "../Components/ui/Products/ListOfProducts";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../reducers/rootReducer";
import { useEffect } from "react";
import { getProducts } from "../api/products";
import { setProducts } from "../slices/products.slice";

export const Dashboard = (): JSX.Element => {
  const products = useSelector((state:IRootState)=>state.products.products)
  const dispath = useDispatch();
  useEffect(()=>{
    async function fetchProducts(){
        const products = await getProducts();
        dispath(setProducts(products))
    } 
    fetchProducts();
  },[])
  const loading = false;
  return (
    <>
      <Navbar />
      <div
        className={
          loading
            ? "grid bg-#fff pl-5 mobile:pt-32 tablet:pt-32 desktop:pt-48 2xl:pt-48 "
            : "mobile:bg-#fff h-full "
        }>
        {loading ? (
          <Loader />
        ) : (
          <div className="mobile: h-full">
            <main
              className={
                loading
                  ? "grid bg-#fff pl-5 mobile:pt-32 desktop:pt-48"
                  : "mobile:h-auto mobile:flex flex-col items-center mobile:mx-2  bg-#fff mobile:pt-32 desktop:pt-48 transition-all"
              }>
              <div className="mobile:w-11/12 border mobile:mb-2 border-cyan-700 bg-slate-500/10 duration-100 mobile:h-10 mobile:active:text-2xl mobile:items-center mobile:flex mobile:justify-center shadow-xl rounded-md mobile:font-default mobile:text-xl text-center mobile:font-medium">
                <div className="mobile:w-auto ">
                  <button className="">
                    <p className="text-cyan-700  ">
                      Sell your products with us!
                    </p>
                  </button>
                </div>
              </div>
              {/* <div className="mobile:w-11/12 border mobile:mt-2 border-cyan-700 bg-slate-500/10  duration-100 mobile:h-10 mobile:active:text-2xl mobile:items-center mobile:flex mobile:flex-row mobile:justify-center shadow-xl rounded-md mobile:font-default mobile:text-xl text-center mobile:font-medium">
                <div className="mobile:w-auto ">
                    <div className="mobile:w-auto ">
                      <button className="">
                        <p className="text-cyan-700  ">search products</p>
                      </button>
                  </div>
                </div>
              </div> */}
              <div className="w-full">
                <ListOfProducts productsProps={products} />
              </div>
            </main>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};
