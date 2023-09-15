import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { Loader } from "./ui";

export const Dashboard = (): JSX.Element => {

 
  const loading = true;
  return (
    <>
    <Navbar />
    <div className={loading ? "grid bg-#fff pl-5 mobile:pt-32 tablet:pt-32 desktop:pt-48 2xl:pt-48 " : "mobile:bg-#fff h-full "}>

      {loading ? (
        <Loader />
      ) : (
        <div className="mobile: h-full">
          <main
            className={
              loading
                ? "grid bg-#fff pl-5 mobile:pt-32 desktop:pt-48"
                : "mobile:h-screen bg-#fff mobile:pt-32 desktop:pt-48"
            }></main>

        </div>
      )}
    </div>
    <Footer />

    </>
  );
};
