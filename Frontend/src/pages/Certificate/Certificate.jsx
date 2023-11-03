import React, { useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const Certificate = () => {
  const [userData] = useState({
    username: 'John Doe',
    courseName: 'Web Development',
    completionDate: 'November 3, 2023',
  });

  const handleDownloadCertificate = () => {
    const certificateElement = document.querySelector('.certificate');
    const { offsetWidth, offsetHeight } = certificateElement;

    // Calculate the PDF dimensions based on the content size
    const pdfWidth = offsetWidth;
    const pdfHeight = offsetHeight;

    html2canvas(certificateElement, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');

      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'mm',
        format: [pdfWidth, pdfHeight],
      });

      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);

      pdf.save('certificate.pdf');
    });
  };

  return (
    <div className="certificate p-8 bg-white rounded-lg shadow-lg text-center">
      <h2 className="text-2xl font-semibold text-dark">Certificate of Completion</h2>
      <p className="text-lg text-dark">This is to certify that</p>
      <h2 className="text-2xl font-semibold text-dark">{userData.username}</h2>
      <p className="text-lg text-dark">has successfully completed the course</p>
      <h2 className="text-2xl font-semibold text-dark">{userData.courseName}</h2>
      <p className="text-lg text-dark">on this day</p>
      <h2 className="text-2xl font-semibold text-dark">{userData.completionDate}</h2>
      <button
        className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
        onClick={handleDownloadCertificate}
      >
        Download Certificate
      </button>
    </div>
  );
};

export default Certificate;



