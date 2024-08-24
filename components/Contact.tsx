import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export default function Contact() {
  return (
    <section id="contact" className="w-full py-12 md:py-16 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Get in Touch</div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter">Let's Discuss Your Project</h2>
            <p className="max-w-[600px] text-base sm:text-lg text-muted-foreground">
              Fill out the form below and one of our experts will be in touch to discuss your web design and
              development needs.
            </p>
          </div>
        </div>
        <div className="mx-auto w-full max-w-md space-y-4 mt-8">
          <form className="flex flex-col gap-4">
            <Input type="text" placeholder="Name" className="w-full" />
            <Input type="email" placeholder="Email" className="w-full" />
            <Textarea placeholder="Message" className="w-full" rows={4} />
            <Button type="submit" className="w-full bg-primary text-primary-foreground">Submit</Button>
          </form>
        </div>
      </div>
    </section>
  )
}