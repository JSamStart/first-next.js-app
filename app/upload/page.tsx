"use client";
import React, { useState } from "react";
import { CldUploadWidget, CldImage } from "next-cloudinary";

interface CloudnaryResult {
    public_id: string;
}

const UploadPage = () => {
    const [publicId, setPublicId] = useState("");
    return (
        <>
            {publicId && <CldImage src={publicId} width={270} height={180} alt="ddd" />}
            <CldUploadWidget
                uploadPreset="x5q8cngq"
                onSuccess={(result, widget) => {
                    const info = result.info as CloudnaryResult;
                    setPublicId(info.public_id);
                }}
                options={{ maxFiles: 5 }}
            >
                {({ open }) => (
                    <button className="btn btn-primary" onClick={() => open()}>
                        Upload
                    </button>
                )}
            </CldUploadWidget>
        </>
    );
};

export default UploadPage;
