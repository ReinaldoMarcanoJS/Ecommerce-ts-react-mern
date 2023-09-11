import type {HTMLAttributes} from 'react'

type Props = HTMLAttributes<HTMLDivElement>

export const MenuOutlined = ({...PropsDiv}:Props):JSX.Element => {
    return(
        <div {...PropsDiv} className="mobile:w-11 mobile:h-8 bg-transparent ml-4 desktop:w-12 desktop:flex desktop:flex-col desktop:h-11 desktop:justify-center ">
            <figure className="mobile:h-2 my-1 w-full  bg-white rounded-xl"></figure>        
            <figure className="mobile:h-2 my-1 w-full bg-white rounded-xl"></figure>        
            <figure className="mobile:h-2 my-1 w-full bg-white rounded-xl"></figure>        
        </div>
    )
}