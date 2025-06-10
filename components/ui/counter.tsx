'use client'

import { Button } from "@/components/ui/button"
import { useState } from "react";

const Counter = () => {

    const [count, increaseCount] = useState(0);

    return ( 
        <div className="mt-6">
            <Button className="m-2" variant="default" onClick={() => increaseCount(count + 1)}>
                Increase
            </Button>
            <Button className="m-2" variant="destructive" onClick={() => increaseCount(count - 1)}>
                Decrease
            </Button>
        <div className="mt-3 border text-3xl">{count}</div>
        </div >
     );
};
 
export default Counter;