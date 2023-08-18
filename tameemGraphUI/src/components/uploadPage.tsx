import React, { useState } from 'react';
import BackButton from './backButton'; 
import './styles/uploadPage.css'; 

const UploadPage: React.FC = () => {
  const [jsonData, setJsonData] = useState<any>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        try {
          const parsedData = JSON.parse(reader.result as string);
          setJsonData(parsedData);
        } catch (error) {
          console.error('Error parsing JSON:', error);
        }
      };
      reader.readAsText(file);
    }
  };

  const renderJSONItem = (data: any, key: string | number, depth: number) => {
    const indent = depth * 20; 

    if (typeof data === 'object') {
      return (
        <div key={key} className="json-item" style={{ marginLeft: `${indent}px` }}>
          <details>
            <summary>{key}</summary>
            {Object.keys(data).map((subKey) =>
              renderJSONItem(data[subKey], subKey, depth + 1)
            )}
          </details>
        </div>
      );
    } else {
      return (
        <div key={key} className="json-item" style={{ marginLeft: `${indent}px` }}>
          {`${key}: ${data}`}
        </div>
      );
    }
  };

  return (
    <div className="upload-page">
      <h2>Upload your JSON file here</h2>
      <input type="file" accept=".json" onChange={handleFileUpload} />
      {jsonData && (
        <div className="json-container">
          {Object.keys(jsonData).map((key) =>
            renderJSONItem(jsonData[key], key, 0)
          )}
        </div>
      )}
      <div><BackButton to="/" /> </div>
    </div>
  );
}

export default UploadPage;
