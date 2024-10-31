import {Button} from "@/components/ui/button";
import {MdOutlineSettings} from "react-icons/md";

const BpsSearchHead= () => {
   return (
       <div className="border-b flex justify-between items-center p-2">
           <h1 className="text-lg font-semibold">Statistic Search</h1>
            <Button variant="ghost" size="icon">
               <MdOutlineSettings className="text-lg" />
            </Button>
       </div>
   )
};

export default BpsSearchHead