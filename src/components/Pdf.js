// // import { useState } from 'react';
// // import { Document, Page } from 'react-pdf';
// // import pdfFile from './202101140_Jahnvee_Patel.pdf';

// // function Pdfresume() {
// //   const [numPages, setNumPages] = useState();
// //   const [pageNumber, setPageNumber] = useState(1);

// //   function onDocumentLoadSuccess({ numPages }){
// //     setNumPages(numPages);
// //   }

// //   return (
// //     <div>
// //       <Document file={pdfFile} onLoadSuccess={onDocumentLoadSuccess}>
// //         <Page pageNumber={pageNumber} renderTextLayer={false} renderAnnotationLayer={false} />
// //       </Document>
// //       <p>
// //         Page {pageNumber} of {numPages}
// //       </p>
// //     </div>
// //   );
// // }
// // export default Pdfresume;




// import React from 'react';
// import './styles/Resume.css';
// import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
// import pdfFile from './202101140_Jahnvee_Patel.pdf'; // Correctly import the PDF file
// // import DocViewer, { PDFRenderer } from 'react-doc-viewer';

// const Resume = () => {
//   let docs = [
//     { uri: pdfFile, fileType: "pdf", fileName: "Resume Jahnvee Patel" }
//   ];

//   return (
//     <>
//       <div id='Resume-section'>
//         <div className="resume">
//           <h1>My formal Introduction..</h1>
//           <DocViewer documents={docs} pluginRenderers={[PDFRenderer]} style={{ height: 1000, width: 1000 }} />
//         </div>
//       </div>
//     </>
//   );
// }

// export default Resume;
