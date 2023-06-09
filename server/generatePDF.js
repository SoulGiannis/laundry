// const PDFDocument = require('pdfkit');


// function buildPDF(dataCallBack,endCallBack) {
    
//     const doc = new PDFDocument();
//     doc.on('data', dataCallBack);
//     doc.on('end', endCallBack);
//     doc.fontSize(25).text('Sample text for PDF');
//     doc.end();
// }
// module.exports = { buildPDF } 
const PDFDocument = require('pdfkit');
const fs = require('fs');

function generatePDF(users) {
  const doc = new PDFDocument();
  const stream = fs.createWriteStream('user-details.pdf');

  doc.pipe(stream);
  doc.fontSize(20).text('Rajeshwari Laundry Bill', { align: 'center' });

  let total = 0;
  let eachTotal = 0;
  users.forEach((user) => {
    doc.moveDown();
    doc.fontSize(16).text(`Item Name: ${user.username}`);
    doc.moveDown();
    doc.fontSize(16).text(`Quantity (kg): ${user.quantity}`);
    doc.moveDown();
    doc.fontSize(16).text(`Price (Rupee): ${user.price}`);
    eachTotal = user.quantity * user.price;
    total += eachTotal;
  });

  doc.moveDown();
  doc.fontSize(16).text(`Total (Rupee): ${eachTotal}`);

  doc.end();

  return new Promise((resolve, reject) => {
    stream.on('finish', () => {
      resolve(total); // resolve the total
    });

    stream.on('error', (err) => {
      reject(err);
    });
  });
}
  

module.exports = generatePDF;
