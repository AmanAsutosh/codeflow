import { useState } from "react"
import { useRecoilValue } from "recoil"
import { changeBool } from "../atoms/message"

export default function DropDown(){
    const change=useRecoilValue(changeBool)
    return(
        <>
        {change &&
        <div className="absolute z-10 right-0 top-0 mt-12 mr-4">
            <a href="/transactions" className="block shadow py-3 px-6 right-0 text-black bg-white">Transactions and History</a>
            <a href="/events" className="block shadow py-3 px-6 right-0 text-black bg-white">Events</a>
            <a href="/settings" className="block shadow py-3 px-6 right-0 text-black bg-white">Settings</a>
        </div>
}
        </>
    )
}