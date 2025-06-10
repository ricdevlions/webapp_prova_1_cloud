'use client'

import { insertReleaseSchema } from "@/lib/validators"
import { Artist } from "@/types"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { ControllerRenderProps, SubmitHandler, useForm } from "react-hook-form"
import { z } from "zod"
import { toast } from "sonner"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { createRelease } from "@/lib/actions/releases.actions"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { releaseDefaultValues } from "@/lib/constants"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const ReleaseForm = ({ artists }: { artists: Artist[] }) => {

  const router = useRouter();

  const form = useForm<z.infer<typeof insertReleaseSchema>>({
    resolver: zodResolver(insertReleaseSchema),
    defaultValues: releaseDefaultValues,
  });

  const { formState } = form;

  const onSubmit: SubmitHandler<z.infer<typeof insertReleaseSchema>> = async (values) => {
    try {
      const res = await createRelease(values);
      if (!res.success) {
        toast("Errore!", { description: res.message });
      } else {
        toast("Successo!", { description: res.message });
        router.push("/releases");
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast("Errore!", { description: "Errore imprevisto durante la creazione" });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 rounded-md p-5 bg-green-100">
        <div className="flex flex-col gap-5 md:flex-row">
          {/* title */}
          <FormField
            control={form.control}
            name="title"
            render={({ field }: { field: ControllerRenderProps<z.infer<typeof insertReleaseSchema>, 'title'> }) => (
              <FormItem className="w-full">
                <FormLabel>Title</FormLabel>
                <FormControl className="bg-white">
                  <Input placeholder="Enter album title" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* genre */}
          <FormField
            control={form.control}
            name="genre"
            render={({ field }: { field: ControllerRenderProps<z.infer<typeof insertReleaseSchema>, 'genre'> }) => (
              <FormItem className="w-full">
                <FormLabel>Genre</FormLabel>
                <FormControl className="bg-white">
                  <Input placeholder="Enter album genre" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex flex-col gap-5 md:flex-row">
         {/* label */}
          <FormField
            control={form.control}
            name="label"
            render={({ field }: { field: ControllerRenderProps<z.infer<typeof insertReleaseSchema>, 'label'> }) => (
              <FormItem className="w-full">
                <FormLabel>Label</FormLabel>
                <FormControl className="bg-white">
                  <Select
                    onValueChange={(value) => field.onChange(value === "true")}
                    value={field.value ? "true" : "false"}
                  >
                    <SelectTrigger className="bg-white">
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="true">True</SelectItem>
                      <SelectItem value="false">False</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* artist */}
          <FormField
            control={form.control}
            name="artistId"
            render={({ field }: { field: ControllerRenderProps<z.infer<typeof insertReleaseSchema>, 'artistId'> }) => (
              <FormItem className="w-full">
                <FormLabel>Artist</FormLabel>
                <FormControl className="bg-white">
                  <Select
                    onValueChange={field.onChange}
                  >
                    <SelectTrigger className="bg-white">
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      {
                            artists.map( (artist) => (
                                
                               <SelectItem key={artist.id} value={artist.id}>{artist.name}</SelectItem>
                                
                                )                            
                            )
                        }
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>


        <div>
          <Button disabled={!formState.isValid} type="submit" size="lg" className="button w-full">
          {/* <Button type="submit" size="lg" className="button w-full"> */}
            Crea
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ReleaseForm;

// npm install react-hook-form

// npm install @hookform/resolvers zod

// npx shadcn@latest add form