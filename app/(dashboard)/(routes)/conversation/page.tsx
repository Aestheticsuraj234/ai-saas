"use client";
import Heading from '@/components/Heading'
import { MessageSquare } from 'lucide-react'
import React from 'react'
import { useForm } from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import * as z from 'zod'

import { formSchema } from './constants';
import { Form } from '@/components/ui/form';

const Conversation = () => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            prompt:""
        }
    });

    const isLoading = form.formState.isSubmitting;

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        console.log(values);
    }
  return (
    <div>
        <Heading 
        title='Conversation'
        description='India Most advanced conversation platform'
        icon={MessageSquare}
        iconColor='text-violet-500'
        bgColor='bg-violet-500/10'
        />

        <div className='px-4 lg:px-8'>
        <div>
           <Form {...form} >
                <form
                onSubmit={form.handleSubmit(onSubmit)}
                className='rounded-lg 
                border 
                w-full 
                p-4
                px-3 md:px-6 focus-within:shadow-sm
                grid
                grid-cols-12
                gap-2
                
                '
                >

                </form>
           </Form>
        </div>
        </div>
    </div>
  )
}

export default Conversation