import { FiSearch } from "react-icons/fi";
// import {useState} from 'react'
import type {InputHTMLAttributes} from "react"
type props = InputHTMLAttributes<HTMLInputElement> 

export const Searcher = ({...Inputprops}: props):JSX.Element => {
    return (
        <div className="mobile:w-full flex tablet:w-full tablet:mt-2 desktop:mt-0 desktop:flex desktop:w-searcherDesktop">
            <input className="" placeholder="Buscar..." {...Inputprops}/>
            <button className="border-white border bg-orange-950/70 hover:bg-cyan-900/20 active:bg-orange-950/70  w-12 flex items-center justify-center rounded-e-lg"><FiSearch color="White" /></button>
        </div>
    )
}