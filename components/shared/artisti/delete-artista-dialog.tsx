'use client'

import { useState, useTransition } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button";
import { toast } from "sonner";


const DeleteArtistDialog = ({id, action}: {
        id: string; 
        action: (id: string) => Promise<{success: boolean; message: string;}>
    }) => {

    const[open, setOpen] = useState(false);
    const[isPending, startTransition] = useTransition();

    const handleDeleteClick = () => {
        startTransition(
            async () => {
                const res = await action(id);

                if(!res.success) {
                    toast("Errore!", { description: "Errore imprevisto durante la creazione" });
                } else {
                    setOpen(false)
                    toast("Successo!", { description: "Artista eliminato con successo" });
                }

            }
        )
    }

    return ( 
    
    <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogTrigger asChild > 
            <Button className="hover:cursor-pointer" variant="destructive"> Elimina </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
            <AlertDialogHeader> 
                <AlertDialogTitle> Sei ASSOLUTAMENTE SICURO, CASCASSE IL CAZZO A CRISTO?? </AlertDialogTitle>
                <AlertDialogDescription> Questa azione è irreversibile (non come tua madre) </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
                <AlertDialogCancel> Annulla </AlertDialogCancel>
                <Button variant="destructive" disabled={isPending} onClick={handleDeleteClick}> 
                    {isPending ? "Eliminazione..." : "Elimina"} 
                </Button>
            </AlertDialogFooter>
        </AlertDialogContent>
    </AlertDialog>
    
    );
}
 
export default DeleteArtistDialog;
