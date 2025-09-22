import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Leaf, 
  Shield, 
  Database, 
  Globe, 
  Settings, 
  FileText, 
  AlertTriangle,
  CheckCircle,
  Code,
  Download,
  Upload,
  Lock,
  ExternalLink
} from "lucide-react";
import comparisonImage from "@/assets/corn-comparison.jpg";

export const ManualContent = () => {
  return (
    <div id="manual-content" className="space-y-8">
      {/* Introducción */}
      <Card className="bg-gradient-card border-border/40 shadow-elegant">
        <CardHeader>
          <div className="flex items-center space-x-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary">
              <Leaf className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <CardTitle className="text-2xl">Introducción</CardTitle>
              <p className="text-muted-foreground">Corn Diseases Detection</p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              <p className="text-foreground leading-relaxed">
                Este proyecto es una aplicación web diseñada para la <strong>detección y clasificación de enfermedades en hojas de maíz</strong>. 
                Permite a los usuarios subir una imagen de una hoja y recibir un diagnóstico instantáneo con un alto grado de confianza.
              </p>
              <div className="grid grid-cols-1 gap-3">
                <div className="flex items-center space-x-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span>Detección automática de enfermedades</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span>Interfaz intuitiva y fácil de usar</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span>Análisis con porcentaje de confianza</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span>Historial de predicciones</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src={comparisonImage} 
                alt="Comparación entre hoja de maíz saludable y enferma" 
                className="rounded-lg shadow-elegant max-w-full h-auto border border-border/40"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Características Principales */}
      <Card className="bg-gradient-card border-border/40 shadow-elegant">
        <CardHeader>
          <div className="flex items-center space-x-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-secondary">
              <Shield className="h-6 w-6 text-secondary-foreground" />
            </div>
            <CardTitle className="text-2xl">Características Principales</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-6">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold flex items-center space-x-2">
                <AlertTriangle className="h-5 w-5 text-primary" />
                <span>Detección de enfermedades</span>
              </h3>
              <p className="text-muted-foreground ml-7">
                Utiliza un modelo de aprendizaje automático para identificar enfermedades comunes como la <strong>Roya</strong>, <strong>Tizón</strong> y <strong>Mancha Gris</strong>.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold flex items-center space-x-2">
                <Shield className="h-5 w-5 text-success" />
                <span>Diagnóstico con confianza</span>
              </h3>
              <p className="text-muted-foreground ml-7">
                Proporciona el nombre de la enfermedad detectada junto con un porcentaje de confianza para el diagnóstico.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold flex items-center space-x-2">
                <Database className="h-5 w-5 text-accent-foreground" />
                <span>Análisis detallado</span>
              </h3>
              <p className="text-muted-foreground ml-7">
                Muestra las probabilidades de que la hoja pertenezca a otras categorías, incluyendo un estado <strong>"Saludable"</strong>, para un análisis más completo.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold flex items-center space-x-2">
                <Upload className="h-5 w-5 text-primary" />
                <span>Interfaz intuitiva</span>
              </h3>
              <p className="text-muted-foreground ml-7">
                La interfaz de usuario es sencilla y fácil de usar, permitiendo subir imágenes mediante arrastrar y soltar.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold flex items-center space-x-2">
                <FileText className="h-5 w-5 text-muted-foreground" />
                <span>Historial de predicciones</span>
              </h3>
              <p className="text-muted-foreground ml-7">
                Guarda un registro de los diagnósticos previos para consulta.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Estructura del Repositorio */}
      <Card className="bg-gradient-card border-border/40 shadow-elegant">
        <CardHeader>
          <div className="flex items-center space-x-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-hero">
              <Code className="h-6 w-6 text-white" />
            </div>
            <CardTitle className="text-2xl">Estructura del Repositorio</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            El proyecto está organizado en las siguientes carpetas y archivos clave:
          </p>
          <div className="grid gap-3">
            <div className="flex items-start space-x-3 p-3 rounded-lg bg-muted/50">
              <Code className="h-4 w-4 text-primary mt-0.5" />
              <div>
                <strong className="text-foreground">corn-diseases-detection-api/</strong>
                <p className="text-sm text-muted-foreground">Contiene el código de la API utilizada para el modelo de predicción.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 p-3 rounded-lg bg-muted/50">
              <Database className="h-4 w-4 text-accent-foreground mt-0.5" />
              <div>
                <strong className="text-foreground">eda/ y eda_balanced/</strong>
                <p className="text-sm text-muted-foreground">Directorios para el Análisis Exploratorio de Datos (EDA).</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 p-3 rounded-lg bg-muted/50">
              <Shield className="h-4 w-4 text-success mt-0.5" />
              <div>
                <strong className="text-foreground">models/</strong>
                <p className="text-sm text-muted-foreground">Almacena los modelos de IA entrenados.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 p-3 rounded-lg bg-muted/50">
              <Settings className="h-4 w-4 text-muted-foreground mt-0.5" />
              <div>
                <strong className="text-foreground">preprocessing/</strong>
                <p className="text-sm text-muted-foreground">Archivos para el preprocesamiento de los datos y el ajuste del modelo.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 p-3 rounded-lg bg-muted/50">
              <FileText className="h-4 w-4 text-primary mt-0.5" />
              <div>
                <strong className="text-foreground">src/</strong>
                <p className="text-sm text-muted-foreground">Directorio principal con el código fuente del proyecto.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 p-3 rounded-lg bg-muted/50">
              <Globe className="h-4 w-4 text-primary mt-0.5" />
              <div>
                <strong className="text-foreground">index.html</strong>
                <p className="text-sm text-muted-foreground">El archivo principal de la interfaz de usuario web.</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Demo y Despliegue */}
      <Card className="bg-gradient-card border-border/40 shadow-elegant">
        <CardHeader>
          <div className="flex items-center space-x-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary">
              <Globe className="h-6 w-6 text-primary-foreground" />
            </div>
            <CardTitle className="text-2xl">Demo y Despliegue</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            La aplicación está desplegada y puede ser probada en vivo a través de una URL de AWS S3. 
            La demo permite a los usuarios experimentar la funcionalidad completa del clasificador de enfermedades.
          </p>
          
          <div className="space-y-3">
            <div className="flex items-center space-x-3 p-4 rounded-lg bg-muted/50 border border-border/40">
              <Code className="h-5 w-5 text-primary" />
              <div className="flex-1">
                <p className="font-medium text-foreground">Repositorio del Proyecto</p>
                <p className="text-sm text-muted-foreground break-all">
                  https://github.com/ojgonzalezz/micro_corn_diseases_detection
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 p-4 rounded-lg bg-muted/50 border border-border/40">
              <ExternalLink className="h-5 w-5 text-success" />
              <div className="flex-1">
                <p className="font-medium text-foreground">URL de la Aplicación (Demo)</p>
                <p className="text-sm text-muted-foreground break-all">
                  http://corn-disease-classification-2025.s3-website-us-east-1.amazonaws.com
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Manual de Instalación */}
      <Card className="bg-gradient-card border-border/40 shadow-elegant">
        <CardHeader>
          <div className="flex items-center space-x-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-secondary">
              <Settings className="h-6 w-6 text-secondary-foreground" />
            </div>
            <CardTitle className="text-2xl">Manual de Instalación y Despliegue en AWS S3</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-muted-foreground leading-relaxed">
            Este manual explica cómo desplegar la aplicación web de detección de enfermedades del maíz directamente 
            desde el repositorio de GitHub a un bucket de Amazon S3, permitiendo que la demo sea accesible a través de una URL pública.
          </p>

          {/* Paso 1 */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">1</Badge>
              <h3 className="text-lg font-semibold">Configurar un bucket de Amazon S3</h3>
            </div>
            <div className="ml-8 space-y-3">
              <p className="text-muted-foreground">
                Primero, necesitas crear un <strong>bucket de S3</strong> que alojará los archivos estáticos de la aplicación.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start space-x-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2" />
                  <span>Inicia sesión en la <strong>Consola de Gestión de AWS</strong>.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2" />
                  <span>Navega al servicio <strong>S3</strong>.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2" />
                  <span>Haz clic en "Crear bucket".</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2" />
                  <span>Asigna un <strong>nombre único</strong> al bucket. Debe ser único a nivel global, por lo que te sugerimos usar una convención como <code className="bg-muted px-1 rounded">proyecto-2025-demo-maiz</code>.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2" />
                  <span>Elige una <strong>región de AWS</strong>. Generalmente, es mejor elegir la más cercana a tus usuarios para reducir la latencia.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2" />
                  <span>En "Opciones de configuración de objeto", desmarca la opción <strong>"Bloquear todo el acceso público"</strong> y confirma que estás haciendo público el bucket.</span>
                </li>
              </ul>
            </div>
          </div>

          <Separator />

          {/* Paso 2 */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">2</Badge>
              <h3 className="text-lg font-semibold">Sube los archivos del proyecto a tu bucket de S3</h3>
            </div>
            <div className="ml-8 space-y-3">
              <p className="text-muted-foreground">
                Ahora, debes transferir los archivos del repositorio a tu bucket recién creado.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start space-x-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-success mt-2" />
                  <span>Descarga el proyecto de GitHub. Puedes hacerlo con <code className="bg-muted px-1 rounded">git clone</code> o descargando el archivo ZIP del repositorio.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-success mt-2" />
                  <span>Dentro del repositorio, la <strong>interfaz de usuario</strong> está en el archivo <code className="bg-muted px-1 rounded">index.html</code>.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-success mt-2" />
                  <span>En la consola de S3, navega a tu bucket y haz clic en "Cargar" (Upload).</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-success mt-2" />
                  <span>Arrastra y suelta el archivo <code className="bg-muted px-1 rounded">index.html</code> del proyecto en el área de carga.</span>
                </li>
              </ul>
            </div>
          </div>

          <Separator />

          {/* Paso 3 */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">3</Badge>
              <h3 className="text-lg font-semibold">Habilita el alojamiento de sitios web estáticos</h3>
            </div>
            <div className="ml-8 space-y-3">
              <p className="text-muted-foreground">
                Para que el bucket funcione como un sitio web, debes habilitar esta característica.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start space-x-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-accent-foreground mt-2" />
                  <span>En la consola de S3, selecciona tu bucket.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-accent-foreground mt-2" />
                  <span>Ve a la pestaña <strong>"Propiedades"</strong> (Properties).</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-accent-foreground mt-2" />
                  <span>Baja hasta la sección <strong>"Alojamiento de sitios web estáticos"</strong> y haz clic en "Editar".</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-accent-foreground mt-2" />
                  <span>Selecciona "Habilitar" (Enable).</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-accent-foreground mt-2" />
                  <span>En "Documento de índice", escribe <code className="bg-muted px-1 rounded">index.html</code>.</span>
                </li>
              </ul>
            </div>
          </div>

          <Separator />

          {/* Paso 4 */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">4</Badge>
              <h3 className="text-lg font-semibold">Actualiza la política del bucket para acceso público</h3>
            </div>
            <div className="ml-8 space-y-3">
              <p className="text-muted-foreground">
                Aunque desmarcaste el bloqueo de acceso público, necesitas una <strong>política de bucket</strong> explícita para permitir que los usuarios vean los archivos.
              </p>
              <div className="p-4 bg-muted/50 rounded-lg border border-border/40">
                <pre className="text-xs text-foreground overflow-x-auto">
{`{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::YOUR-BUCKET-NAME/*"
        }
    ]
}`}
                </pre>
              </div>
              <p className="text-sm text-muted-foreground">
                <strong>Importante:</strong> Reemplaza <code className="bg-muted px-1 rounded">YOUR-BUCKET-NAME</code> con el nombre exacto de tu bucket.
              </p>
            </div>
          </div>

          <Separator />

          {/* Paso 5 */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Badge variant="outline" className="bg-success/10 text-success border-success/20">5</Badge>
              <h3 className="text-lg font-semibold">Accede a tu aplicación web</h3>
            </div>
            <div className="ml-8 space-y-3">
              <p className="text-muted-foreground">
                ¡Ya está! Ahora puedes acceder a tu aplicación web a través de la URL de alojamiento de sitios web estáticos.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-success mt-0.5" />
                  <span>Regresa a la pestaña <strong>"Propiedades"</strong> de tu bucket.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-success mt-0.5" />
                  <span>Baja hasta la sección <strong>"Alojamiento de sitios web estáticos"</strong>.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-success mt-0.5" />
                  <span>Encontrarás la <strong>URL del punto de enlace del bucket</strong>. Esta es la dirección que debes usar para acceder a la aplicación web.</span>
                </li>
              </ul>
              <div className="mt-4 p-4 bg-success/10 border border-success/20 rounded-lg">
                <p className="text-sm text-success font-medium">
                  <CheckCircle className="inline h-4 w-4 mr-1" />
                  Cuando un usuario visite esa URL, AWS S3 servirá el archivo index.html que subiste, permitiendo el uso de la aplicación de detección de enfermedades del maíz.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};