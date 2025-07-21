import { useRecoilState } from 'recoil';
import {useState} from 'react'

export function Button({label,className=""}){
  
        
       
    
    return (
        <>
        <button className={`border rounded-2xl py-4 px-6 mx-auto ${className}`}>{label}</button>
        
        </>
    )
} 