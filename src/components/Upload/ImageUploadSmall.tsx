import { FileUpload } from "primereact/fileupload";
import { Toast } from "primereact/toast";
import React, { useRef } from "react";

type Props = {};

const ImageUploadSmall = (props: Props) => {
  const toast = useRef<Toast>(null);

  const chooseOptions = {
    icon: "pi pi-fw pi-images w-full",
    iconOnly: true,
    className: "custom-choose-btn p-button-outlined w-48 h-16",
  };

  return (
    <div className="my-5">
      <Toast ref={toast}></Toast>
      <FileUpload
        className="w-full flex justify-center"
        mode="basic"
        name="demo[]"
        url="/api/upload"
        accept="image/*"
        maxFileSize={1000000}
        // onUpload={onUpload}
        auto
        chooseOptions={chooseOptions}
      />
    </div>
  );
};

export default ImageUploadSmall;
