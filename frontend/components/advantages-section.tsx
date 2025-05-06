import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IconChartColumn, IconFocus2, IconInfoCircle, IconPresentation, IconSchool, IconUsersGroup } from "@tabler/icons-react";


export default function AdvantagesSection() {
    const features = [
        {
            icon: IconInfoCircle,
            title: "Expert Instructors",
            description: "Learn from qualified professionals with real-world experience in English and IT.",
        },
        {
            icon: IconPresentation,
            title: "Interactive Lessons",
            description: "Engage with hands-on content designed to boost your retention and skills.",
        },
        {
            icon: IconSchool,
            title: "Flexible Learning",
            description: "Study at your own pace, anytime, anywhere — perfect for busy schedules.",
        },
        {
            icon: IconChartColumn,
            title: "Beginner to Advanced",
            description: "Courses designed for all levels, from absolute beginners to experienced learners.",
        },
        {
            icon: IconUsersGroup,
            title: "Community Support",
            description: "Join a growing network of learners and get help, tips, and encouragement.",
        },
        {
            icon: IconFocus2,
            title: "Career-Focused",
            description: "Build real-world skills that directly translate to career and academic success.",
        },
    ]

    return (
        <section className="flex items-center max-h-screen w-full bg-cover bg-[url('https://images.unsplash.com/photo-1707730376818-a7a02fe896d5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
            <div className="h-auto w-full p-5 lg:p-20">
                <div className="grid gap-y-12 gap-x-10 col-auto lg:grid-cols-3 mt-10">
                    {features.map((feature, index) => (
                        <Card key={index} className="relative flex flex-col min-h-72 bg-black opacity-85 shadow-md hover:opacity-100 transition-all duration-200">
                            <CardHeader>
                                <CardTitle className="flex"><p className="text-xl flex-1">{feature.title}</p> <feature.icon /></CardTitle>
                            </CardHeader>
                            <CardContent className="flex-1 flex flex-col items-end justify-end pt-5">
                                <p className="flex-1 text-sm text-muted-foreground">{feature.description}</p>
                                <Button className="cursor-pointer" variant="outline"><p className="font-[200]">More</p></Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}