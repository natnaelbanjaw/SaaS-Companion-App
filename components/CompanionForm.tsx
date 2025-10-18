"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "./ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import type { Control, FieldValues } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { subjects } from "@/constants";
import { Textarea } from "./ui/textarea";

const formSchema = z.object({
  name: z.string().min(1, { message: "Companion is required" }),
  subject: z.string().min(1, { message: "Subject is required" }),
  topic: z.string().min(1, { message: "Topic is required" }),
  voice: z.string().min(1, { message: "Voice is required" }),
  style: z.string().min(1, { message: "Style is required" }),
  duration: z.coerce.number().min(1, { message: "Duration is required" }),
});

const CompanionForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      subject: "",
      topic: "",
      voice: "",
      style: "",
      duration: 15,
    },
  });

  const OnSubmit = (value: z.infer<typeof formSchema>) => {
    console.log(value);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(OnSubmit)} className="space-y-8">
        <FormField
          name="name"
          control={form.control as unknown as Control<FieldValues>}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Companion name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter the companion name"
                  {...field}
                  className="input"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="subject"
          control={form.control as unknown as Control<FieldValues>}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subject</FormLabel>

              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  value={field.value}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="input-capitalize w-full">
                    <SelectValue placeholder="Select the subject" />
                  </SelectTrigger>

                  <SelectContent>
                    {subjects.map((subject) => (
                      <SelectItem
                        key={subject}
                        value={subject}
                        className="capitalize"
                      >
                        {subject}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="topic"
          control={form.control as unknown as Control<FieldValues>}
          render={({ field }) => (
            <FormItem>
              <FormLabel>What should the companion help with?</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Ex. Derivatives & Integrals"
                  {...field}
                  className="input"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="voice"
          control={form.control as unknown as Control<FieldValues>}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Voice</FormLabel>

              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  value={field.value}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="input w-full">
                    <SelectValue placeholder="Select the voice" />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>

                    <SelectItem value="female">Female</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="style"
          control={form.control as unknown as Control<FieldValues>}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Style</FormLabel>

              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  value={field.value}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="input w-full">
                    <SelectValue placeholder="Select the style" />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectItem value="formal">formal</SelectItem>

                    <SelectItem value="casual">Casual</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="duration"
          control={form.control as unknown as Control<FieldValues>}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Estimated session duration in minutes</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="5"
                  {...field}
                  className="input"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full cursor-pointer">
          Build Your Companion
        </Button>
      </form>
    </Form>
  );
};

export default CompanionForm;
