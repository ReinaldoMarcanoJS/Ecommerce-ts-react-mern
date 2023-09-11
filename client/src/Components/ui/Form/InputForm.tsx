import {InputHTMLAttributes} from "react"



type props = InputHTMLAttributes<HTMLInputElement> 

export const InputForm = ({...propsInput} : props): JSX.Element => {
  return (
    <div>
        <input {...propsInput} 
            className="mobile:w-full mobile:rounded-md mobile:mb-2 mobile:px-3 mobile:py-2 mobile:border 2xl:py-4 2xl:rounded-xl mobile:border-cyan-700 outline-none tablet:mb-4 desktop:mb-6 2xl:mb-8"
        />
    </div>
  );
};
