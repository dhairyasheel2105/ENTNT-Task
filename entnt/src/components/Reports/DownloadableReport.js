import React from 'react';
import { saveAs } from 'file-saver';

const DownloadableReport = () => {
  const handleDownload = () => {
    const blob = new Blob(["Hello, this is your report!"], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "report.txt");
  };

  return (
    <div>
      <h2>Downloadable Report</h2>
      <button onClick={handleDownload}>Download Report</button>
    </div>
  );
};

export default DownloadableReport;
