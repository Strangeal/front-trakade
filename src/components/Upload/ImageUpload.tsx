import React, { useRef } from "react";
import { Toast } from "primereact/toast";
import { FileUpload } from "primereact/fileupload";

type Props = {};

const ImageUpload = (props: Props) => {
  const toast = useRef<Toast>(null);

  // const onUpload = () => {
  //   toast.current.show({
  //     severity: "info",
  //     summary: "Success",
  //     detail: "File Uploaded",
  //   });
  // };

  const chooseOptions = {
    icon: "pi pi-fw pi-images w-full",
    iconOnly: true,
    className: "custom-choose-btn p-button-outlined w-full h-20",
  };

  return (
    <div className="mt-2">
      <Toast ref={toast}></Toast>
      <FileUpload
        className="w-full"
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

export default ImageUpload;
