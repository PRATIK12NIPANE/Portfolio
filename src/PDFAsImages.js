import React, { useEffect, useState } from 'react';
import { pdfjs } from 'pdfjs-dist';
import 'pdfjs-dist/web/pdf_viewer.css';

const PDFAsImages = ({ pdfUrl }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const loadPdf = async () => {
      const loadingTask = pdfjs.getDocument(pdfUrl);
      const pdf = await loadingTask.promise;
      const numPages = pdf.numPages;
      const imagePromises = [];

      for (let pageNum = 1; pageNum <= numPages; pageNum++) {
        imagePromises.push(renderPageToImage(pdf, pageNum));
      }

      const images = await Promise.all(imagePromises);
      setImages(images);
    };

    const renderPageToImage = async (pdf, pageNum) => {
      const page = await pdf.getPage(pageNum);
      const viewport = page.getViewport({ scale: 1 });
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      canvas.height = viewport.height;
      canvas.width = viewport.width;

      await page.render({
        canvasContext: context,
        viewport: viewport,
      }).promise;

      return canvas.toDataURL();
    };

    loadPdf();
  }, [pdfUrl]);

  return (
    <div className="certificate-images">
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Page ${index + 1}`} />
      ))}
    </div>
  );
};

export default PDFAsImages;
