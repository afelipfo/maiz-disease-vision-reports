import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export class PDFGenerator {
  static async generatePDF() {
    try {
      // Get the manual content element
      const element = document.getElementById('manual-content');
      if (!element) {
        throw new Error('Manual content not found');
      }

      // Create a new jsPDF instance
      const pdf = new jsPDF('p', 'mm', 'a4');
      
      // Add title page
      pdf.setFontSize(24);
      pdf.setTextColor(70, 120, 60); // Green color for title
      pdf.text('Manual de instalación de tablero', 105, 40, { align: 'center' });
      
      pdf.setFontSize(18);
      pdf.setTextColor(200, 160, 60); // Golden color for subtitle
      pdf.text('Corn Diseases Detection', 105, 55, { align: 'center' });
      
      
      // Add footer on title page
      pdf.setFontSize(10);
      pdf.text('Manual de instalación de tablero del proyecto Corn Diseases Detection', 105, 280, { align: 'center' });
      
      // Add new page for content
      pdf.addPage();
      
      // Generate content pages with better formatting
      const sections = element.children;
      let yPosition = 15;
      let pageNumber = 2; // Starting from page 2 (after title page)
      
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i] as HTMLElement;
        
        try {
          // Capture the section as canvas with optimized settings
          const canvas = await html2canvas(section, {
            scale: 1.5,
            backgroundColor: '#ffffff',
            logging: false,
            allowTaint: true,
            useCORS: true,
            width: section.scrollWidth,
            height: section.scrollHeight,
            removeContainer: true,
            imageTimeout: 0,
            onclone: (clonedDoc) => {
              // Remove any fixed positioning that might cause issues
              const clonedElement = clonedDoc.getElementById('manual-content');
              if (clonedElement) {
                const allElements = clonedElement.querySelectorAll('*');
                allElements.forEach(el => {
                  const element = el as HTMLElement;
                  element.style.position = 'static';
                  element.style.transform = 'none';
                });
              }
            }
          });
          
          const imgData = canvas.toDataURL('image/png', 0.95);
          const imgWidth = 180; // Slightly smaller width for better margins
          const imgHeight = (canvas.height * imgWidth) / canvas.width;
          
          // Add some spacing between sections but keep it compact
          const sectionSpacing = i > 0 ? 8 : 0;
          
          // Check if we need a new page with better spacing calculation
          if (yPosition + imgHeight + sectionSpacing > 260) {
            pdf.addPage();
            yPosition = 15;
            pageNumber++;
          } else {
            yPosition += sectionSpacing;
          }
          
          // Add the image to PDF with better positioning
          pdf.addImage(imgData, 'PNG', 15, yPosition, imgWidth, imgHeight);
          yPosition += imgHeight + 5; // Minimal spacing after each section
          
        } catch (error) {
          console.error('Error capturing section:', error);
          // Improved text fallback
          pdf.setFontSize(11);
          pdf.setTextColor(100, 100, 100);
          pdf.text('[ Contenido no disponible en esta sección ]', 15, yPosition);
          yPosition += 15;
        }
      }
      
      // Save the PDF with a cleaner filename
      const today = new Date();
      const fileName = `Manual_Instalacion_Tablero_Corn_Diseases_${today.getFullYear()}.pdf`;
      pdf.save(fileName);
      
    } catch (error) {
      console.error('Error generating PDF:', error);
      throw error;
    }
  }
}