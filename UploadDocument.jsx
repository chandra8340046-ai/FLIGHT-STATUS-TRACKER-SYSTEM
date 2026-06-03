import React from "react";
import Layout from "./Layout";

function UploadDocument() {
  return (
    <Layout>
      <h1>Upload Documents</h1>

      <div className="upload-box">
        <h3>Drag & Drop Files Here</h3>
        <br />
        <input type="file" />
      </div>
    </Layout>
  );
}

export default UploadDocument;