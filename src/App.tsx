import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import "./index.css";

import React, { useRef } from "react";
import { Toast } from "primereact/toast";
import { FileUpload } from "primereact/fileupload";
import { Button } from "primereact/button";
import { Tooltip } from "primereact/tooltip";
import styled from "styled-components";

const MiDiv = styled.div`
  background-color: black;
`;

export const App = () => {
  const toast = useRef(null);

  const headerTemplate = (options: any) => {
    const { className, chooseButton, uploadButton, cancelButton } = options;

    return (
      <div className={className} style={{backgroundColor: 'transparent', display: 'flex', justifyContent: 'space-between'}}>
        <div>
            {chooseButton}
            {uploadButton}
        </div>
          {cancelButton}
      </div>
    );
  };

  const onTemplateRemove = (file:any, callback:any) => {
    callback();
  };

  const itemTemplate = (file: any, props: any) => {
    return (
      <div className="flex align-items-center flex-wrap rehola" style={{color: "#000000"}}>
        <div className="flex align-items-center" style={{ width: "80%" , margin: "20px 1px 20px 22px"}}>
          <i className="pi pi-fw pi-images"></i>
          <span className="flex flex-column text-left ml-3">
            {file.name}
          </span>
        </div>
        <Button
          type="button"
          icon="pi pi-times"
          className="p-button p-component p-button-secondary p-button-text ml-auto"
          onClick={() => onTemplateRemove(file, props.onRemove)} 
          style={{
            color: "#000000",
            left: "-8%",
            margin: "0px 10px 0px 0px",
          }}
        />
      </div>
    );
  };

  const emptyTemplate = () => {
    return (
      <div className="flex align-items-center flex-column rehola2" style={{color: "#000000"}}>
        <i
          className="pi pi-image mt-3 p-5 miClase"
          style={{
            fontSize: "5em",
            borderRadius: "50%",
            backgroundColor: "var(--surface-b)",
            color: "var(--surface-d)"
          }}
        ></i>
        <span
          style={{ fontSize: "1.2em", color: "var(--text-color-secondary)" }}
          className="my-5"
        >
          Drag and Drop Image Here
        </span>
      </div>
    );
  };

  const chooseOptions = {label: 'Choose', icon: 'pi pi-fw pi-images', className: 'p-button p-component p-button-secondary p-button-text', style:{color: "#000000"}};
  const uploadOptions = {label: 'Upload', icon: 'pi pi-fw pi-cloud-upload', className: 'p-button p-component p-button-secondary p-button-text', style:{color: "#000000"}};
  const cancelOptions = {label: 'Cancel', icon: 'pi pi-times', className: 'p-button p-component p-button-secondary p-button-text', style:{color: "#000000"}};

  return (
    <div>
      <Toast ref={toast}></Toast>

      <Tooltip target=".custom-choose-btn" content="Choose" position="bottom" />
      <Tooltip target=".custom-upload-btn" content="Upload" position="bottom" />
      <Tooltip target=".custom-cancel-btn" content="Clear" position="bottom" />

      <div className="rectangle1">
        <FileUpload
          name="demo[]"
          url="./upload"
          accept="image/*"
          mode="advanced"
          headerTemplate={headerTemplate}
          itemTemplate={itemTemplate}
          emptyTemplate={emptyTemplate}
          chooseOptions={chooseOptions}
          uploadOptions={uploadOptions}
          cancelOptions={cancelOptions}
        />
      </div>
    </div>
  );
};

export default App;
