'use client'

import { insertArtistSchema } from "@/lib/validators"
import { Artist } from "@/types"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { ControllerRenderProps, SubmitHandler, useForm } from "react-hook-form"
import { z } from "zod"
import { toast } from "sonner"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { createArtist } from "@/lib/actions/artist.actions"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { artistDefaultValues } from "@/lib/constants"
import { Textarea } from "@/components/ui/textarea"

const ArtistaForm = ({ artist }: { artist?: Artist }) => {

  const router = useRouter();

  const form = useForm<z.infer<typeof insertArtistSchema>>({
    resolver: zodResolver(insertArtistSchema),
    defaultValues: artistDefaultValues,
  });

  const { formState } = form;

  const onSubmit: SubmitHandler<z.infer<typeof insertArtistSchema>> = async (values) => {
    try {
      const res = await createArtist(values);
      if (!res.success) {
        toast("Errore!", { description: res.message });
      } else {
        toast("Successo!", { description: res.message });
        router.push("/artisti");
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast("Errore!", { description: "Errore imprevisto durante la creazione" });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 rounded-md p-5 bg-blue-100">
        <div className="flex flex-col gap-5 md:flex-row">
          {/* name */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }: { field: ControllerRenderProps<z.infer<typeof insertArtistSchema>, 'name'> }) => (
              <FormItem className="w-full">
                <FormLabel>Name</FormLabel>
                <FormControl className="bg-white">
                  <Input placeholder="Enter artist name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }: { field: ControllerRenderProps<z.infer<typeof insertArtistSchema>, 'email'> }) => (
              <FormItem className="w-full">
                <FormLabel>Email</FormLabel>
                <FormControl className="bg-white">
                  <Textarea className="resize-none" placeholder="Enter artist email" {...field} />
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

export default ArtistaForm;

// npm install react-hook-form

// npm install @hookform/resolvers zod

// npx shadcn@latest add form