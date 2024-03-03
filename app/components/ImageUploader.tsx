"use client";

import { UploadButton, UploadDropzone } from "@/utils/uploadthing";
import { Divide } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
 
export default function ImageUploader() {
  const [imageUrl, setImageUrl] = useState([])

  return (
    <main className="flex flex-col items-center justify-between p-1">
      <UploadDropzone
      appearance={{
        container: {
          uploadIcon: {
            color: "blue"
          }
        }
      }
      }
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          console.log("Files: ", res);

          // setImageUrl(res[0].url)
        }}
        onUploadError={(error: Error) => {
          alert(`ERROR! ${error.message}`);
        }}
      />

      {imageUrl.length > 0 && <div>
       {/* <Image src={imageUrl as} width={540} height={20} alt="asd"/> */}
      </div>}
    </main>
  );
}