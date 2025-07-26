import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import consultationImage from "@/assets/consultation.jpg";
import successImage from "@/assets/success.jpg";
import { Award, Globe, Heart, TrendingUp } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering the highest quality guidance and support"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Connecting students with opportunities worldwide"
    },
    {
      icon: Heart,
      title: "Personal Care",
      description: "Every student receives individualized attention and support"
    },
    {
      icon: TrendingUp,
      title: "Success Focus",
      description: "Dedicated to achieving the best outcomes for our students"
    }
  ];

  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        {/* Main About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              About <span className="bg-gradient-accent bg-clip-text text-transparent">Eternal Mindbrains</span>
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                Founded with a vision to bridge the gap between ambitious students and world-class educational opportunities, 
                Eternal Mindbrains has been a trusted partner in educational consulting for over a decade.
              </p>
              <p>
                Our team of experienced counselors and education specialists work tirelessly to ensure that every student 
                we serve finds the perfect academic path that aligns with their aspirations and potential.
              </p>
              <p>
                We believe that education is the key to unlocking human potential, and we are committed to making 
                quality education accessible to students from all backgrounds.
              </p>
            </div>
            <div className="mt-8">
              <Button variant="default" size="lg" className="mr-4">
                Our Story
              </Button>
              <Button variant="outline" size="lg">
                Meet the Team
              </Button>
            </div>
          </div>

          <div className="relative">
            <img 
              src={consultationImage} 
              alt="Educational consultation" 
              className="rounded-2xl shadow-elegant w-full"
            />
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-glow">
              <div className="text-2xl font-bold text-primary">10+</div>
              <div className="text-sm text-muted-foreground">Years of Excellence</div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Our Values</h3>
            <p className="text-lg text-muted-foreground">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-0">
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">{value.title}</h4>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Success Stories */}
        <div className="bg-gradient-to-r from-secondary to-primary-glow rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={successImage} 
                alt="Graduation celebration" 
                className="rounded-xl w-full"
              />
            </div>
            <div className="text-secondary-foreground">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">Success Stories</h3>
              <div className="space-y-4 text-lg">
                <p>
                  "Eternal Mindbrains made my dream of studying abroad a reality. Their expert guidance 
                  helped me navigate the complex application process with confidence."
                </p>
                <div className="border-l-4 border-accent pl-4">
                  <p className="font-semibold">Sarah Johnson</p>
                  <p className="text-sm opacity-90">Master's in Computer Science, MIT</p>
                </div>
              </div>
              <Button variant="accent" className="mt-6">
                Read More Stories
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;