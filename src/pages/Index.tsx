import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { FileText, Download, Leaf, Shield, Database, Users, Globe, Settings, Code, Zap } from "lucide-react";
import { ManualContent } from "@/components/ManualContent";
import { PDFGenerator } from "@/components/PDFGenerator";
import { useToast } from "@/hooks/use-toast";
import heroImage from "@/assets/corn-hero-banner.jpg";
import comparisonImage from "@/assets/corn-comparison.jpg";

const Index = () => {
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const { toast } = useToast();

  const handleGeneratePDF = async () => {
    setIsGeneratingPDF(true);
    try {
      await PDFGenerator.generatePDF();
      toast({
        title: "PDF Generado Exitosamente",
        description: "El manual de instalación ha sido descargado correctamente.",
      });
    } catch (error) {
      toast({
        title: "Error al Generar PDF",
        description: "Hubo un problema al generar el archivo PDF.",
        variant: "destructive",
      });
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/30 to-accent/20">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary">
              <Leaf className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Manual de instalación de tablero</h1>
              <p className="text-sm text-muted-foreground">Corn Diseases Detection</p>
            </div>
          </div>
          <Button 
            onClick={handleGeneratePDF}
            disabled={isGeneratingPDF}
            className="bg-gradient-primary hover:opacity-90 transition-smooth shadow-corn"
          >
            {isGeneratingPDF ? (
              <>
                <Zap className="mr-2 h-4 w-4 animate-spin" />
                Generando...
              </>
            ) : (
              <>
                <Download className="mr-2 h-4 w-4" />
                Descargar PDF
              </>
            )}
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Detección de enfermedades en hojas de maíz" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-hero opacity-60" />
        </div>
        <div className="relative container py-16 text-center">
          <div className="mx-auto max-w-3xl space-y-6">
            <div className="flex justify-center space-x-2">
              <Badge variant="secondary" className="bg-gradient-secondary text-secondary-foreground">
                <Shield className="mr-1 h-3 w-3" />
                Tecnología IA
              </Badge>
              <Badge variant="outline" className="border-primary/20 bg-background/20 backdrop-blur-sm">
                <Database className="mr-1 h-3 w-3" />
                Detección Automática
              </Badge>
            </div>
            
            <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Manual de instalación de tablero
            </h2>
            <h3 className="text-2xl font-semibold text-primary">
              Corn Diseases Detection
            </h3>
            <p className="text-xl text-foreground/80 leading-relaxed">
              Guía completa para la detección y clasificación de enfermedades en hojas de maíz 
              mediante inteligencia artificial. Incluye instalación, configuración y despliegue en AWS S3.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <div className="flex items-center space-x-2 text-sm text-foreground/70">
                <Users className="h-4 w-4" />
                <span>Para usuarios y desarrolladores</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-foreground/70">
                <Globe className="h-4 w-4" />
                <span>Despliegue en AWS S3</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-foreground/70">
                <Code className="h-4 w-4" />
                <span>Código abierto</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="border-y border-border/40 bg-card">
        <div className="container py-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="p-6 text-center bg-gradient-card border-border/40 shadow-leaf">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-success/10">
                <Shield className="h-6 w-6 text-success" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground">Detección Precisa</h3>
              <p className="text-sm text-muted-foreground">Alto grado de confianza en diagnósticos</p>
            </Card>
            
            <Card className="p-6 text-center bg-gradient-card border-border/40 shadow-leaf">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Leaf className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground">Múltiples Enfermedades</h3>
              <p className="text-sm text-muted-foreground">Roya, Tizón y Mancha Gris</p>
            </Card>
            
            <Card className="p-6 text-center bg-gradient-card border-border/40 shadow-leaf">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-accent/60">
                <Settings className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground">Fácil Instalación</h3>
              <p className="text-sm text-muted-foreground">Despliegue simple en AWS S3</p>
            </Card>
            
            <Card className="p-6 text-center bg-gradient-card border-border/40 shadow-leaf">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-secondary/60">
                <FileText className="h-6 w-6 text-secondary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground">Documentación</h3>
              <p className="text-sm text-muted-foreground">Manual completo incluido</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Manual Content */}
      <main className="container py-12">
        <ManualContent />
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-muted/30 py-8">
        <div className="container text-center">
          <p className="text-sm text-muted-foreground">
            Manual de instalación de tablero del proyecto Corn Diseases Detection
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;