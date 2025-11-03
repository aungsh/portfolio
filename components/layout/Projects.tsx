"use client";
import { Badge } from "@/components/ui/badge";

interface Project {
  title: string;
  description: string;
  techStack: string[];
  url: string;
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: "SIT-AIO (Work in Progress)",
      description: "Classroom assistant for SIT students.",
      techStack: ["Arduino"],
      url: "https://sit-aio.vercel.app/",
    },
    {
      title: "Popcorn Vibes",
      description: "Sentiment analysis for movie reviews.",
      techStack: ["Next.js", "Python", "Fast API"],
      url: "https://popcornvibes.vercel.app/",
    },
    {
      title: "Your Life in Weeks",
      description: "A unique way to visualize your life.",
      techStack: ["Next.js", "ShadCN"],
      url: "https://life.swanhtataung.com",
    },
    {
      title: "Portfolio Template",
      description: "This portfolio template you're viewing right now.",
      techStack: ["Next.js"],
      url: "https://github.com/15WattPowerBrick/portfolio",
    },
  ];

  return (
    <section id="projects">
      <h2 className="text-sm text-secondary font-black">Projects</h2>
      <div className="mt-4 space-y-6">
        {projects.map(({ title, description, techStack, url }) => (
          <div key={title}>
            <a href={url} target="_blank" rel="noopener noreferrer">
              <h3 className="font-bold">{title}</h3>
              <p className="text-muted-foreground mb-3">{description}</p>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <Badge key={tech} className="text-xs" variant="outline">
                    {tech}
                  </Badge>
                ))}
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
