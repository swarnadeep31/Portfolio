import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message send!",
        description: "Thank you for yur message. I'll get back to you soon",
      });
      setIsSubmitting(false);
    }, 1500);
  };
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In<span className="text-primary"> Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your visions. Feel free to reach out to me
          using the contact form below or via email
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className=" justify-center">
              <div className="flex text-2xl font-semibold p-2">
                <h3>Let's</h3>
                <span className="text-primary">Talk,</span>
              </div>

              <div className="p-2 justify-start">
                <p className="text-muted-foreground text-start">
                  If you want to contact with me here are some information
                </p>
              </div>
              {/* Email Contact */}
              <div className="flex gap-2  sm:flex-row items-center sm:items-start sm:space-x-4  sm:space-y-0 p-4">
                <div className="p-3   rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <a
                    href="mailto:Swarnadeeproy35@gmail.com"
                    className="text-muted-foreground hover:text-primary text-center sm:text-left text-sm h-10 items-center flex justify-center transition-colors duration-300"
                  >
                    Swarnadeeproy35@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone number  */}
              <div className="flex sm:flex-row items-center gap-2 sm:items-start sm:space-x-4  sm:space-y-0 p-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <a
                    href="tel:+917439732996"
                    className="text-muted-foreground hover:text-primary text-center sm:text-left text-sm h-10 items-center flex justify-center transition-colors duration-300"
                  >
                    +91 7439732996
                  </a>
                </div>
              </div>

              {/* location */}
              <div className="flex sm:flex-row items-center gap-2 sm:items-start sm:space-x-4  sm:space-y-0 p-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <a className="text-muted-foreground hover:text-primary text-center sm:text-left text-sm h-10 items-center flex justify-center transition-colors duration-300">
                    Kolkata, WB, India
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* conatct from */}
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Name In From*/}
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-medium mb-2"
                ></label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-iput bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Your Name..."
                />
              </div>
              {/* Email In From*/}
              <div>
                <label
                  htmlFor="Email"
                  className="block text-xs font-medium mb-2"
                ></label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-iput bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Jonsho@gmail.com"
                />
              </div>
              {/* Message In From*/}
              <div>
                <label
                  htmlFor="Message"
                  className="block text-xs font-medium mb-2"
                ></label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-iput bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'd  like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
