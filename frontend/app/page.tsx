import Header from "@/components/header";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  const features = [
    {
      title: "Expert Instructors",
      description: "Learn from qualified professionals with real-world experience in English and IT.",
    },
    {
      title: "Interactive Lessons",
      description: "Engage with hands-on content designed to boost your retention and skills.",
    },
    {
      title: "Flexible Learning",
      description: "Study at your own pace, anytime, anywhere — perfect for busy schedules.",
    },
    {
      title: "Beginner to Advanced",
      description: "Courses designed for all levels, from absolute beginners to experienced learners.",
    },
    {
      title: "Community Support",
      description: "Join a growing network of learners and get help, tips, and encouragement.",
    },
    {
      title: "Career-Focused",
      description: "Build real-world skills that directly translate to career and academic success.",
    },
  ]

  return (
    <>
      <Header />
      <HeroSection />
      <section className="max-h-screen w-full bg-cover bg-[url('https://images.unsplash.com/photo-1707730376818-a7a02fe896d5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
        <div className="min-h-screen w-full p-5 lg:p-20">
          <div className="grid gap-6 col-auto lg:grid-cols-3 mt-10">
            {features.map((feature, index) => (
              <Card key={index} className="shadow-md">
                <CardHeader>
                  <CardTitle><p className="text-xl">{feature.title}</p></CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="max-h-screen w-full bg-center bg-black">
        <div className="min-h-screen w-full p-5 lg:p-20">

        </div>
      </section>
      <section className="max-h-screen w-full bg-center bg-[url('https://images.unsplash.com/photo-1693648793394-0b76b7eb042e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
        <div className="min-h-screen w-full p-5 lg:p-20">

        </div>
      </section>
      <Footer />
    </>
  );
}
