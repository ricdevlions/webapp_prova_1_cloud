'use client'

import { Drumstick , Bird, RefreshCcw } from 'lucide-react';
import { useState, useTransition } from 'react';
import { Button } from './button';

const MutantIcon = () => {

    const [isPending, startTransition] = useTransition()
    const [isPoltrona, setPoltrona] = useState(false)
    const changeIcon = () => {
        const start = Date.now();
        while (Date.now() - start < 250) {} //per simulare delay di 1.5s
        return !isPoltrona
    }

    return (
        <div>
            <Button
                onClick={() => {
                    startTransition( () => {
                        setPoltrona(changeIcon);
                        });
                    }}> 
                {isPending? <RefreshCcw/> : ((isPoltrona)? <Drumstick /> : <Bird />)}
            </Button>
        </div>
    );
};

export default MutantIcon;