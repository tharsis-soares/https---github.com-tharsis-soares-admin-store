"use client"

import Link from "next/link"

import { cn } from "@/lib/utils"

import * as z from 'zod'
import axios from 'axios'
import { useForm, useFieldArray } from 'react-hook-form'
import { Store } from "@prisma/client"
import { zodResolver } from '@hookform/resolvers/zod'

import { Trash } from "lucide-react"

import { Heading } from '@/components/ui/heading'
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useState } from 'react'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  import { Textarea } from "@/components/ui/textarea"
  
import { Input } from '@/components/ui/input'
import { toast } from 'react-hot-toast'
import { useParams, useRouter } from 'next/navigation'
import { AlertModal } from '@/components/modals/alert-modal'
import { ApiAlert } from '@/components/ui/api-alert'
import { useOrigin } from '@/hooks/use-origin'

interface SettingsFormProps {
    initialData: Store
}


const formSchema = z.object({
  name: z.string().min(1),
  // corporateName: z.string().min(5, {
  //   message: "Razão Social deve ter no mímino 5 caracteres.",
  // }).max(30, {
  //   message: "Razão Social deve ter no máximo 30 caracteres.",
  // }).optional(),
  // document: z.string().min(8, {
  //   message: "Número do documento obrigatório no mímino 8 caracteres.",
  // }).max(15, {
  //   message: "Username must not be longer than 30 caracters.",
  // }).optional(),
  // stateDoc: z.string().min(2, {
  //   message: "Estado deve ter no mínimo 2 caracteres.",
  // }).max(15, {
  //   message: "Estado deve ter no máximo 15 caracteres.",
  // }).optional(),
  // cityDoc: z.string().min(2, {
  //   message: "Cidade deve ter mínimo 2 characters.",
  // }).max(30, {
  //   message: "Username must not be longer than 30 caracteres.",
  // }).optional(),
  // phoneNumber: z.string().min(2, {
  //   message: "Cidade deve ter mínimo 2 characters.",
  // }).max(30, {
  //   message: "Username must not be longer than 30 caracteres.",
  // }).optional(),
  // streetAddress: z.string().min(2, {
  //   message: "Cidade deve ter mínimo 2 characters.",
  // }).max(30, {
  //   message: "Username must not be longer than 30 caracteres.",
  // }).optional(),
  // addressNumber: z.string().min(2, {
  //   message: "Cidade deve ter mínimo 2 characters.",
  // }).max(30, {
  //   message: "Username must not be longer than 30 caracteres.",
  // }).optional(),
  // cityName: z.string().min(2, {
  //   message: "Cidade deve ter mínimo 2 characters.",
  // }).max(30, {
  //   message: "Username must not be longer than 30 caracteres.",
  // }).optional(),
  // stateName: z.string().min(2, {
  //   message: "Cidade deve ter mínimo 2 characters.",
  // }).max(30, {
  //   message: "Username must not be longer than 30 caracteres.",
  // }).optional(),
  // bankName: z.string().min(2, {
  //   message: "Cidade deve ter mínimo 2 characters.",
  // }).max(30, {
  //   message: "Username must not be longer than 30 caracteres.",
  // }).optional(),
  // accountNumber: z.string().min(2, {
  //   message: "Cidade deve ter mínimo 2 characters.",
  // }).max(30, {
  //   message: "Username must not be longer than 30 caracteres.",
  // }),
  // accountName: z.string().min(2, {
  //   message: "Cidade deve ter mínimo 2 characters.",
  // }).max(30, {
  //   message: "Username must not be longer than 30 caracteres.",
  // }).optional(),
  // accountType: z.string().min(2, {
  //   message: "Cidade deve ter mínimo 2 characters.",
  // }).max(30, {
  //   message: "Username must not be longer than 30 caracteres.",
  // }).optional(),
  // email: z
  //   .string({
  //     required_error: "Please select an email to display.",
  //   })
  //   .email().optional(),
  // bio: z.string().max(160).min(4).optional(),
  urls: z
    .array(
      z.object({
        value: z.string().url({ message: "Please enter a valid URL." }),
      })
    )
    .optional(),
})

type SettingsFormValues = z.infer<typeof formSchema>

export const SettingsForm: React.FC<SettingsFormProps> = ({
    initialData
}) => {
    const params = useParams()
    const router = useRouter()
    const origin = useOrigin()

    const [open, setOpen] = useState(false)
    const [loading, setLoading] = useState(false)

    const form = useForm<SettingsFormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: initialData
    })    

        
      const { fields, append } = useFieldArray({
        name: "urls",
        control: form.control,
      })
    
    const onSubmit = async (data: SettingsFormValues) => {
        try {
            setLoading(true);
            await axios.patch(`/api/stores/${params.storeId}`, data)
            router.refresh()
            toast.success('Empresa atualizada')
        } catch (err) {
            toast.error("Alguma coisa errada aconteceu")
        } finally {
            setLoading(false)
        }
        console.log(data)
    }

    const onDelete = async () => {
        try {
            setLoading(true);
            await axios.delete(`/api/stores/${params.storeId}`)
            router.refresh()
            router.push('/')
            toast.success('Empresa apagada')
        } catch (err) {
            toast.error("Tenha certeza de apagar todos produtos e categorias primeiro.")
        } finally {
            setLoading(false)
            setOpen(false)
        }
    }

    return (
        <>
        <AlertModal 
            isOpen={open}
            onClose={() => setOpen(false)}
            onConfirm={onDelete}
            loading={loading}
        />
        {/*<div className="flex items-center justify-between">
             <Heading
                title="Settings"
                description="Gerencie as configurações da empresa"
            />
            <Button
                disabled={loading}
                variant="destructive"
                size="sm"
                onClick={() => setOpen(true)}
            >
                <Trash />
            </Button>
            </div> */}
            <Form {...form}>
            <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome Fantasia</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name. It can be your real name or a
                pseudonym. You can only change this once every 30 days.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a verified email to display" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="m@example.com">m@example.com</SelectItem>
                  <SelectItem value="m@google.com">m@google.com</SelectItem>
                  <SelectItem value="m@support.com">m@support.com</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>
                You can manage verified email addresses in your{" "}
                <Link href="/examples/forms">email settings</Link>.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
          />*/}
        
        <div>
          {fields.map((field, index) => (
            <FormField
              control={form.control}
              key={field.id}
              name={`urls.${index}.value`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={cn(index !== 0 && "sr-only")}>
                    URLs
                  </FormLabel>
                  <FormDescription className={cn(index !== 0 && "sr-only")}>
                    Add links to your website, blog, or social media profiles.
                  </FormDescription>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="mt-2"
            onClick={() => append({ value: "" })}
          >
            Add URL
          </Button>
        </div>
        <Button type="submit">Update profile</Button>
            </Form>
            <Separator />
            <ApiAlert title="NEXT_PUBLIC_API_URL" description={`${origin}/api/${params.storeId}`} variant='public' />
        </>
    )
}