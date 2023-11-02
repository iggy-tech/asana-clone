"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { useToast } from "@/components/ui/use-toast";
import { Textarea } from "@/components/ui/textarea";


const FormSchema = z.object({
  first_name: z.string(),
  last_name: z.string(),
  email: z.string().email(),
  phone_number: z.string(),
  country: z.enum(["canada", "usa"]),
  company_size: z.enum([
    "1-10",
    "11-50",
    "51-200",
    "201-500",
    "501-1000",
    "1000+",
  ]),
  info: z.string(),
});

type FormValues = {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  country: "canada" | "usa";
  company_size: "1-10" | "11-50" | "51-200" | "201-500" | "501-1000" | "1000+";
  info: string;
};



export default function FirstSection() {

    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const { toast } = useToast();


  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone_number: "",
      country: "canada",
      company_size: "1-10",
      info: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
    try {
        setLoading(true);
        const res = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });
    
        if (!res.ok) {
            throw new Error("Something went wrong");
        }
    
        setSubmitted(true);
   
    }
    catch (err) {
        console.error(err);
        toast({
            title: "Error",
            description: 'Something went wrong',

        })
    }
    finally {
        setLoading(false);
    }
}


    

  return (
    <div className=" items-center justify-center flex flex-col px-20 m:px-0 py-20 space-y-10 text-center ">
        {!submitted ? (
            <div className="text-5xl ">
                    <div className="text-5xl ">Talk with our sales team</div>

<div className="text-xl">
  Fill out your information and a Bird sales representative will contact
  you shortly.
</div>

            </div>
        ) : (
          
                    <div className="text-3xl text-green-400 ">Thank you for contacting us. We will be in contact with you shortly.</div>
                
        )}



   



      <Form {...form}>
        {!submitted ? (
        

        <form
          onSubmit={form.handleSubmit(onSubmit)}
          

          className="md:w-2/3 space-y-6 border p-8 rounded-xl "

        >
          <FormField
            control={form.control}
            name="first_name"
            render={({ field }) => (
              <FormItem className="flex items-center justify-center  space-y-4 w-full">
                <FormLabel className="w-60 text-2xl pt-4">First Name</FormLabel>
                <FormControl>
                  <Input className="w-full" placeholder="" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="last_name"
            render={({ field }) => (
              <FormItem className="flex items-center justify-center  space-y-4 w-full">
                <FormLabel className="w-60 text-2xl pt-4">Last Name</FormLabel>
                <FormControl>
                  <Input className="" placeholder="" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex items-center justify-center  space-y-4 ">
                <FormLabel className="w-60 text-2xl pt-4">Email</FormLabel>
                <FormControl>
                  <Input className="" placeholder="" {...field} />
                </FormControl>

              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone_number"
            render={({ field }) => (
              <FormItem className="flex items-center justify-center  space-y-4 w-full">
                <FormLabel className="w-60 text-2xl pt-4">
                  Phone Number
                </FormLabel>
                <FormControl>
                  <Input className="" placeholder="" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
                <FormItem className="flex items-center justify-center  space-y-4 w-full">
                 <FormLabel className="w-60 text-2xl pt-4">Country</FormLabel>
                <Select
                
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a country" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <div className="flex gap-4">
                      <SelectItem value="canada"> Canada</SelectItem>
                    </div>
                    <SelectItem value="usa">
                      United States of America
                    </SelectItem>
                  </SelectContent>
                </Select>
    

                <FormMessage />
              </FormItem>
            )}
          />



        <FormField
         control={form.control}
            name="company_size" 
            render={({ field }) => (
                <FormItem className="flex items-center justify-center  space-y-4 w-full">
                 <FormLabel className="w-60 text-2xl pt-4">Company Size</FormLabel>
                <Select
                
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="How many employees?" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <div className="flex gap-4">
                      <SelectItem value="1-10">
                        1-10
                      </SelectItem>
                    </div>
                    <SelectItem value="11-50">
                        11-50
                    </SelectItem>
                    <SelectItem value="51-200">
                        51-200
                    </SelectItem>
                    <SelectItem value="201-500">
                        201-500
                    </SelectItem>
                    <SelectItem value="501-1000">
                        501-1000
                    </SelectItem>
                    <SelectItem value="1000+">
                        1000+
                    </SelectItem>

                  </SelectContent>
                </Select>
    

                <FormMessage />
              </FormItem>
            )}
            />

<FormField
            control={form.control}
            name="info"
            render={({ field }) => (
              <FormItem className="flex items-center justify-center  space-y-4 w-full">
                <FormLabel className="w-60 text-2xl pt-4">
                 Information
                </FormLabel>
                <FormControl>
                  <Textarea
                  style={{height: "200px"}}
                  className="" placeholder="" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />








             <div className="flex items-center justify-center
              gap-4">
            <Button
                
                type="submit"
                className="bg-[#000] text-xl rounded-sm w-80 h-20 "
           
                disabled={loading}
                onClick={() => form.handleSubmit(onSubmit)}
              >
                Submit
              </Button>

            </div>










        </form>
        ) : (
            <div className="text-2xl h-screen text-green-400 items-center space-y-20 flex flex-col ">
           
                <div className="">
              
                    <img src="/videos/check.gif" className="h-28 w-28" />
            
                    </div>
            
            </div>
    
        
        )}
        

      </Form>
    </div>
  );
}
