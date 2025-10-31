import { Briefcase, Code, User } from "lucide-react";

export const AboutScetion = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="conatiner mx-auto max-w-5xl ">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          <div className="space-y-6 ">
            <h3 className="text-2xl text-semibold">
              Web Devloper & Game Enthusiast
            </h3>

            <p className="text-muted-foreground">
              build multiple projects ranging from simple landing pages to
              complex web applications. I am passionate about creating seamless
              user experiences and writing clean, efficient code. Loves to play
              games during leisure time.
            </p>
            <p className="text-muted-foreground">
              I'm passionate about learning new technologies and continuously
              improving my skills. When I'm not coding, I enjoy gaming, which
              helps me unwind and sparks my creativity.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="https://drive.google.com/file/d/1kqOx5FgZG3I2JU50iJG9TtOUloRxk-Nm/view?usp=sharing"
                target="_blank"
                className="px-6 py-2 rounded-full border border-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground ">
                    Create responsive and dynamic websites using modern
                    technologies.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">University Student</h4>
                  <p className="text-muted-foreground ">
                    Completing my master's degree in computer science, focusing
                    on software development and algorithms.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Build</h4>
                  <p className="text-muted-foreground ">
                    Works real-world projects in web development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
