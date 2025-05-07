import Header from "@/components/header";
import Footer from "@/components/footer";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import HeroSection from "@/components/hero-section";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import AdvantagesSection from "@/components/advantages-section";
import FeedbackLineChart from "@/components/feedback-line-chart";
import FAQSection from "@/components/faq-section";


export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <AdvantagesSection />
      <section className="max-h-screen w-full bg-center bg-cover bg-black">
        <div className="min-h-screen w-full p-5 lg:p-20">
          <div className="w-full h-full flex flex-row">
            <div className="h-auto w-full p-5 lg:p-20 flex items-center flex-wrap">
              <form className="border-2 w-full max-w-md text-black rounded-lg shadow-lg p-12 space-y-7.5 bg-center bg-[url('https://images.unsplash.com/photo-1660982238213-eeef93d9dc16?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
                <h1 className="pt-2 pb-7.5 text-4xl text-center text-white">Leave a feedback</h1>
                <div className="space-y-1">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" type="text" placeholder="Your name" required />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="email"><p>Email</p></Label>
                  <Input id="email" type="email" placeholder="you@example.com" required />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="feedback"><p>Feedback</p></Label>
                  <Textarea
                    id="feedback"
                    placeholder="Your feedback here"
                    rows={5}
                    required
                  />
                </div>
                <Button type="submit" className="bg-white w-full mt-8"><p className="font-[300]">Submit Feedback</p></Button>
              </form>
            </div>
            <div className="min-w-4xl bg-black p-10 mb-20 rounded-2xl mt-20 border-2 shadow-xl">
              <FeedbackLineChart />
            </div>
          </div>
        </div>
      </section>
      <FAQSection />
      <Footer />
    </>
  );
}
