import { Landmark, MonitorSmartphone, Factory } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Perfil <span className="text-primary">Profesional</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
             Ingeniero de sistemas informáticos | Auditoría de TI | OS
            </h3>

            <p className="text-muted-foreground">
              Ingeniero de Sistemas Informáticos con experiencia en manufactura, auditoría de TI y soporte técnico. 
              Previamente trabajé como Asistente de TI, realizando mantenimiento preventivo de equipos, 
              gestionando usuarios a través de Active Directory y Microsoft 365. 
              En mi trayectoria laboral como Operador de Manufactura en Infotree Global Solutions para Intel, 
              implementé estrategias de producción, optimicé recursos y 
              colaboré con equipos técnicos para asegurar la eficiencia, calidad y seguridad en la operación.
            </p>

            <p className="text-muted-foreground">
              Valoro el trabajo en equipo, la proactividad y la comunicación efectiva para lograr objetivos comunes
              y generar valor en entornos dinámicos y productivos.
            </p>

            {/* <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div> */}
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Factory className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Especialista de Operación</h4>
                  <p className="text-muted-foreground">
                    Implementé estrategias de producción, optimicé recursos y 
              colaboré con equipos técnicos para asegurar la eficiencia, calidad y seguridad en la operación.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Landmark className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Auditoría de TI</h4>
                  <p className="text-muted-foreground">
                    Participé en la identificación de riesgos informáticos, coordinación de auditorías TI
                    y evaluación de controles de seguridad y ciberseguridad.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MonitorSmartphone className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Asistente de TI </h4>
                  <p className="text-muted-foreground">
                    Brindé soporte a usuarios en ambientes productivos, 
                    realizando mantenimiento preventivo de equipos, 
                    gestionando usuarios a través de Active Directory y Microsoft 365.
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