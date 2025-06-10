'use client'

import { clsx } from "clsx";
import { useState } from "react";
import { Button } from "./button";

export default function ActionsCard() {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-10">
      <Button
        onClick={() => setOpen(!open)}
        variant={"ritardo"}
        size={"bigcta"}
      >
        {(!open)? <p>Mostra</p> : <p>Nascondi</p>}
      </Button>

      <div
        className={clsx(
          "transition-all duration-500 ease-in-out transform p-4 rounded shadow-md text-center",
          open ? "opacity-100 translate-y-0 scale-100 text-white bg-purple-700" : "opacity-0 -translate-y-5 scale-95 bg-gray-200"
        )}
      >
        Questa card non fa ancora nulla
      </div>
    </div>
  );
}
