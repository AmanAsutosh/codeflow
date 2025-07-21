import {useRecoilValue} from 'recoil';
import {Button} from '../components/Button';
import MyChart from "../components/charts"

export default function Home() {
   
  return (
  <>
  <div className="mx-14">   
  <h1 className="text-2xl font-bold">RealTime Insights</h1>

        <div className="grid grid-cols-3 py-2  ">
          <div className='border rounded'>
            <h1 className="font-bold">Total Registrations</h1>
        <MyChart/>
        </div>
        </div>
  <Button className="hover:bg-gray-200 transition-colors duration-300" label="Join event"/>
  <Button className="hover:bg-gray-200 transition-colors duration-300" label="Host event"/>
  </div>
  </>
 
  );
}
