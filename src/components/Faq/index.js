import React from 'react'
import { faqs } from '@/helpers'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

function FAQ() {
    return (
        <React.Fragment>
            <div className='w-full max-w-[1200px] mx-auto flex flex-col items-center justify-between mb-10'>
                <span className='text-4xl font-bold my-10'>FAQs</span>
                <div className='w-full flex-col flex items-center justify-center gap-2 p-4'>
                    {
                        faqs && faqs?.length > 0 && faqs?.map((faq, index) => (
                            <Accordion key={index} type="single" collapsible className="w-full rounded-md bg-[#FAF9F6] py-1 px-2">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger className={'text-md font-poppins font-normal text-cs-blue hover:no-underline cursor-pointer'}>{faq?.question}</AccordionTrigger>
                                    <AccordionContent className={'text-sm text-cs-gray font-poppins hover:no-underline cursor-pointer'}>
                                        {faq?.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        ))
                    }
                </div>
            </div>
        </React.Fragment>
    )
}

export default FAQ