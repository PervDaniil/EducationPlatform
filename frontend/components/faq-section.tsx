import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { IconCashBanknote, IconTimeDuration0, IconTimeDuration10, IconTimeDuration30, IconTimeline } from "@tabler/icons-react";


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
                    <div className="p-10 rounded-2xl border-2 shadow-accent bg-muted/10 backdrop-blur-lg">
                        <div className="w-full h-full text-gray-300">
                            <div className="flex flex-col h-full gap-6">
                                <div className="flex-1 mt-5">
                                    <h1 className="text-5xl font-bold text-white border-l-5 border-teal-600 pl-8">English Course</h1>
                                    <p className="mt-5 mb-6 text-gray-300">
                                        English course that introduces students to reading, writing, and creative language projects. Perfect for young minds eager to explore the world of words and communication.
                                    </p>
                                    <hr />
                                    <div className="flex flex-wrap gap-y-4 gap-x-12 pt-4">
                                        <div>
                                            <div className="flex space-x-2">
                                                <p className="text-lg font-semibold">Duration</p>
                                                <IconTimeDuration30 />
                                            </div>
                                            <p className="text-md">30 days (continue learning anytime)</p>
                                        </div>
                                        <div>
                                            <div className="flex space-x-2">
                                                <p className="text-lg font-semibold">Ages</p>
                                                <IconTimeline />
                                            </div>
                                            <p className="text-md">8 – 16 years old</p>
                                        </div>
                                        <div>
                                            <div className="flex space-x-2">
                                            <p className="text-lg font-semibold">Price</p>
                                                <IconCashBanknote />
                                            </div>
                                            <p className="text-md">1200/month</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h1 className="text-5xl font-bold text-white border-l-5 border-teal-600 pl-8">IT Course</h1>
                                    <p className="mt-5 mb-6 text-gray-300">
                                        Technology course that introduces students to coding, digital tools, and creative tech projects and coding.
                                        Perfect for young minds eager to explore the digital world.
                                    </p>
                                    <hr />
                                    <div className="flex flex-wrap gap-y-4 gap-x-12 pt-4">
                                        <div>
                                            <div className="flex space-x-2">
                                                <p className="text-lg font-semibold">Duration</p>
                                                <IconTimeDuration30 />
                                            </div>
                                            <p className="text-md">30 days (continue learning anytime)</p>
                                        </div>
                                        <div>
                                            <div className="flex space-x-2">
                                                <p className="text-lg font-semibold">Ages</p>
                                                <IconTimeline />
                                            </div>
                                            <p className="text-md">8 – 16 years old</p>
                                        </div>
                                        <div>
                                            <div className="flex space-x-2">
                                            <p className="text-lg font-semibold">Price</p>
                                                <IconCashBanknote />
                                            </div>
                                            <p className="text-md">2000/month</p>
                                        </div>
                                    </div>
                                </div>
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
