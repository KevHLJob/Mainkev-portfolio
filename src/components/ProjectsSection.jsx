import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Budget",
    description: "He creado esta aplicación para tener un control de los gastos.",
    image: "/projects/Appbudget.png",
    tags: ["HTML", "CSS", "Javascript"],
    demoUrl: "https://presupuestoapp12.netlify.app/",
    githubUrl: "https://github.com/KevHLJob/Budget-app",
  },
  {
    id: 2,
    title: "Weight Tracker",
    description:
      " Creada para gestionar y llevar un registro del peso con gráfico.",
    image: "/projects/Weight Tracker.png",
    tags: ["Javascript", "Vue", "HTML", "Vite"],
    demoUrl: "https://weighttracker77.netlify.app/",
    githubUrl: "https://github.com/KevHLJob/weight-tracker",
  },
  {
    id: 3,
    title: "Wanner Service",
    description:
      "Creado para la venta de servicios de Ingeniería Electromecánica..",
    image: "/projects/WSDservice.png",
    tags: ["Next.js", "Typescript", "Chakra-ui"],
    demoUrl: "https://wanner-service777.netlify.app/",
    githubUrl: "https://github.com/KevHLJob/chakraui-nextjs-landingpage",
  },
  {
    id: 4,
    title: "Tic Tac Toe",
    description:
      "Juego básico de tres en raya, creado para practicar javascript, useState",
    image: "/projects/Tictactoe-react.png",
    tags: ["React", "Vite" ],
    demoUrl: "https://tic-tac-toe-77.netlify.app/",
    githubUrl: "https://github.com/KevHLJob/02-tic-tac-toe",
  },
  {
    id: 5,
    title: "Blog",
    description:
      "Prueba de template con Nextjs, modificación por medio de markdown.",
    image: "/projects/KevBlog.png",
    tags: ["Next.js", "Markdown"],
    demoUrl: "https://blog-kevdev.vercel.app",
    githubUrl: "https://github.com/KevHLJob/Blog-website",
  },
  {
    id: 6,
    title: "To do List",
    description:
      "Creada para el manejo de actividades por hacer.",
    image: "/projects/3.png",
    tags: ["Javascript", "CSS", "HTML"],
    demoUrl: "https://worklist-777.netlify.app/",
    githubUrl: "https://github.com/KevHLJob/Worklist",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Proyectos <span className="text-primary">Dev </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          {/* Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience. */}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/KevHLJob"
          >
            Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};