import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";


export default function FAQSection() {
    return (
        <section className="max-h-screen w-full bg-center bg-[url('https://images.unsplash.com/photo-1693648793394-0b76b7eb042e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
            <div className="min-h-screen w-full p-5 lg:p-20">
                <div className="grid col-auto lg:grid-cols-2 gap-x-16">
                    <div className="p-10 backdrop-blur-lg rounded-2xl border-2">
                        <h1 className="text-white text-9xl pb-10">FAQ</h1>
                        <div className="flex flex-col gap-y-8">
                            {faqList.map((item, index) => (
                                <Accordion className="ml-2 bg-muted/10 opacity-85 shadow-accent border py-1 px-4 rounded-md" key={index} type="single" collapsible>
                                    <AccordionItem value="faq">
                                        <AccordionTrigger><p className="text-gray-300">{item.question}</p></AccordionTrigger>
                                        <AccordionContent><p>{item.answer}</p></AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            ))}
                        </div>
                    </div>
                    <div className="p-10 rounded-2xl border-2">
                        <div className="w-full h-full grid grid-cols-2 place-items-center">
                            <div className="flex justify-center items-center w-64 h-32 bg-muted/10 border rounded-xl">
                                <h1 className="text-8xl ">EN</h1>
                            </div>
                            <div className="flex justify-center items-center w-64 h-32 bg-muted/10 border rounded-xl">
                                <h1 className="text-8xl ">IT</h1>
                            </div>
                            <div className="flex justify-center items-center w-64 h-32 bg-muted/10 border rounded-xl">
                                <h1 className="text-7xl ">1200</h1>
                            </div>
                            <div className="flex justify-center items-center w-64 h-32 bg-muted/10 border rounded-xl">
                                <h1 className="text-7xl ">2000</h1>
                            </div>
                            <div className="flex justify-center items-center w-64 h-32 bg-muted/10 border rounded-xl">
                                <h1 className="text-8xl ">1 m</h1>
                            </div>
                            <div className="flex justify-center items-center w-64 h-32 bg-muted/10 border rounded-xl">
                                <h1 className="text-8xl ">1 m</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const faqList = [
    {
        question: "What courses are available on Brain Center?",
        answer: "We offer a variety of English and IT courses — from beginner to advanced — including programming, data handling, and more."
    },
    {
        question: "Is the platform suitable for beginners?",
        answer: "Yes, our courses are designed for both beginners and advanced learners. You can choose your level and learn at your own pace."
    },
    {
        question: "Who are the instructors at Brain Center?",
        answer: "Our courses are taught by experienced instructors and industry experts, ensuring high-quality, up-to-date education."
    },
    {
        question: "What is the format of the lessons?",
        answer: "Lessons are interactive and include video content, exercises, instructor feedback, and community support."
    },
    {
        question: "How can I start learning on the platform?",
        answer: "Just sign up on the Brain Center website, choose a course, and start learning today!"
    }
];
