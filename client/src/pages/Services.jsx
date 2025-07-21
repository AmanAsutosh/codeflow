import { Button } from "../components/Button"
import  MyChart  from "../components/charts"

export default function services(){
    return(
        <>
        {/* charts */}
      
        <div className=" mx-14"> 

{/* email,createEvent,results */}

<h1 className="text-2xl font-bold">Actions</h1>
        <div className="grid grid-cols-3 gap-4 m-4">
           
        <div className="relative w-full shadow-lg py-4 px-4 rounded h-40 border-t">
          <Button label="Email"/>
         <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-center text-sm text-gray-600">
        services
      </div>
        </div>
     
       <div className="relative w-full shadow-lg py-4 px-4 rounded h-40 border-t">
          <Button label="Create an event"/>
           <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-center text-sm text-gray-600">
        services
      </div>
        </div>

          <div className="relative w-full shadow-lg py-4 px-4 rounded h-40 border-t ">
          <Button label="Results"/>
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-center text-sm text-gray-600">
        services
      </div>
        </div>
 </div>
        </div>
          
        </>
    )
}