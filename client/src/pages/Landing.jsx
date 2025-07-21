import { useNavigate } from "react-router-dom"

export default function MainHu(){
     const navigate=useNavigate()
    return (<>
    <p>Hello</p>
    <button onClick={()=>navigate('/home')} style={{border:'solid black'}}>Home</button>
    
    </>)
}