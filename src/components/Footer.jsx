import {
  ArrowUp,
  Copyright,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-6  bg-card relative  border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
      <p className="text-sm text-muted-foreground p-4">
        &copy; {new Date().getFullYear()} Swarnadeep.co. All rights reserves
      </p>

      <a
        href="#hero"
        className="p-3 rounded-full bg-primary/10 text-primary transition-colors"
      >
        <ArrowUp size={20} />
      </a>

      <div className="p-6">
        <div className="flex space-x-4 justify-center">
          <a href="https://www.linkedin.com/in/swarnadeeproy/" target="_blank">
            <Linkedin />
          </a>
          <a href="https://www.instagram.com/thatgoddamntrip/" target="_blank">
            <Instagram />
          </a>
          <a href="https://www.instagram.com/thatgoddamntrip/" target="_blank">
            <Facebook />
          </a>
        </div>
      </div>
    </footer>
  );
};
