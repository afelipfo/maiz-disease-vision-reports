# 🌽 Sistema de Detección de Enfermedades del Maíz

Una aplicación web moderna para la detección y análisis de enfermedades en cultivos de maíz utilizando visión por computadora y generación de reportes PDF.

## 📋 Información del Proyecto

**Repositorio**: https://github.com/afelipfo/maiz-disease-vision-reports

## 🚀 Características Principales

- **🔍 Detección de Enfermedades**: Sistema de análisis visual para identificar enfermedades en cultivos de maíz
- **📊 Generación de Reportes**: Creación automática de reportes PDF con análisis detallados
- **🎨 Interfaz Moderna**: UI/UX intuitiva construida con componentes de shadcn/ui
- **📱 Responsive Design**: Optimizado para dispositivos móviles y desktop
- **⚡ Alto Rendimiento**: Construido con Vite para desarrollo rápido y eficiente

## 🛠️ Cómo Ejecutar el Proyecto

### Requisitos Previos

- Node.js (versión 16 o superior) - [instalar con nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
- npm o yarn

### Pasos de Instalación

```sh
# Paso 1: Clonar el repositorio
git clone https://github.com/afelipfo/maiz-disease-vision-reports.git

# Paso 2: Navegar al directorio del proyecto
cd maiz-disease-vision-reports

# Paso 3: Instalar las dependencias
npm install

# Paso 4: Iniciar el servidor de desarrollo
npm run dev
```

La aplicación estará disponible en `http://localhost:5173` (o el puerto que Vite asigne automáticamente).

## 📁 Estructura del Proyecto

```
maiz-disease-vision-reports/
├── src/
│   ├── components/          # Componentes React reutilizables
│   │   ├── ui/             # Componentes de UI (shadcn/ui)
│   │   ├── ManualContent.tsx
│   │   └── PDFGenerator.tsx
│   ├── pages/              # Páginas principales
│   ├── hooks/              # Custom hooks
│   ├── lib/                # Utilidades y configuraciones
│   └── assets/             # Imágenes y recursos estáticos
├── public/                 # Archivos públicos
└── package.json           # Dependencias y scripts
```

## 🔧 Scripts Disponibles

```sh
npm run dev      # Inicia el servidor de desarrollo
npm run build    # Construye la aplicación para producción
npm run preview  # Previsualiza la build de producción
npm run lint     # Ejecuta el linter ESLint
```

## 🛠️ Tecnologías Utilizadas

Este proyecto está construido con las siguientes tecnologías:

### Frontend
- **React 18** - Biblioteca de JavaScript para interfaces de usuario
- **TypeScript** - Superset tipado de JavaScript
- **Vite** - Herramienta de construcción rápida y moderna

### UI/UX
- **shadcn/ui** - Componentes de UI modernos y accesibles
- **Tailwind CSS** - Framework de CSS utilitario
- **Lucide React** - Iconos SVG optimizados

### Funcionalidades
- **React Router DOM** - Enrutamiento del lado del cliente
- **React Hook Form** - Manejo de formularios
- **jsPDF** - Generación de documentos PDF
- **html2canvas** - Captura de pantalla para reportes
- **Recharts** - Gráficos y visualizaciones de datos

### Herramientas de Desarrollo
- **ESLint** - Linter para JavaScript/TypeScript
- **PostCSS** - Procesador de CSS
- **Autoprefixer** - Prefijos CSS automáticos

## 🚀 Despliegue

### Build para Producción

```sh
# Construir la aplicación
npm run build

# Previsualizar la build
npm run preview
```

### Opciones de Despliegue

- **Vercel**: Conecta tu repositorio de GitHub para despliegue automático
- **Netlify**: Arrastra y suelta la carpeta `dist` o conecta el repositorio
- **GitHub Pages**: Usa GitHub Actions para despliegue automático
- **Firebase Hosting**: Despliega fácilmente con Firebase CLI

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Contacto

**Felipe** - [@afelipfo](https://github.com/afelipfo)

Enlace del Proyecto: [https://github.com/afelipfo/maiz-disease-vision-reports](https://github.com/afelipfo/maiz-disease-vision-reports)
