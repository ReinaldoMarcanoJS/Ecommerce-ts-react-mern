import { ContentLoaderComponent } from "./ContentLoderComponent"

export const Loader = ():JSX.Element => {
    return(
        <div className="grid tablet:grid-cols-2 md:grid-cols-3 desktop:grid-cols-4 2xl:grid-cols-5">
          <div className=""><ContentLoaderComponent /></div>
          <div className=""><ContentLoaderComponent/></div>
          <div className=""><ContentLoaderComponent /></div>
          <div className="mobile:hidden tablet:block"><ContentLoaderComponent /></div>
          <div className="mobile:hidden tablet:block"><ContentLoaderComponent /></div>
          <div className="mobile:hidden tablet:block"><ContentLoaderComponent /></div>
          <div className="mobile:hidden tablet:block"><ContentLoaderComponent /></div>
          <div className="mobile:hidden tablet:block"><ContentLoaderComponent /></div>
          <div className="mobile:hidden tablet:hidden md:block desktop:block 2xl:block"><ContentLoaderComponent /></div>
          <div className="mobile:hidden tablet:hidden md:hidden desktop:block 2xl:block"><ContentLoaderComponent /></div>
          <div className="mobile:hidden tablet:hidden md:hidden desktop:block 2xl:block"><ContentLoaderComponent /></div>
          <div className="mobile:hidden tablet:hidden md:hidden desktop:block 2xl:block"><ContentLoaderComponent /></div>
          <div className="mobile:hidden tablet:hidden md:hidden 2xl:block"><ContentLoaderComponent /></div>
          <div className="mobile:hidden tablet:hidden md:hidden 2xl:block"><ContentLoaderComponent /></div>
          <div className="mobile:hidden tablet:hidden md:hidden 2xl:block"><ContentLoaderComponent /></div>
        </div>
    )
}