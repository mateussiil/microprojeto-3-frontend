import { useState } from 'react';
import api from '../../service/api'

export const useUploadController = () => {

  const [imagePreview, setImagePreview] = useState([])
  const [Files, setFiles] = useState([])
  const [name, setName] = useState("")


  const handleUploadImage = async (Files, nameFile) => {
    const uploadedFilesImages = [];

    await Promise.all(
      Files = Files.map((file) => {

        let fileType = file.type.split('/')[1];
        let name = `${nameFile}.${fileType}`;

        const formattedFile = new File([file], name, {
          type: file.type,
          lastModified: file.lastModifed,
        });

        setImagePreview(imagePreview.concat(URL.createObjectURL(file)));

        uploadedFilesImages.push(formattedFile);

        return formattedFile
      })
    );
    setFiles(Files)
    setName(nameFile)
  };

  const processUploadFileImage = async () => {
    const uploadedFilesImages = [];
    if (!!Files) {

      await Promise.all(
        Files.map((file) => {
          let fileName = file.name.split('.')[0]+'.jpeg';

          const formattedFile = new File([file], fileName, {
            type: file.type,
            lastModified: file.lastModifed,
          });

          uploadedFilesImages.push(formattedFile);
        })
      );
    }

    if (!!uploadedFilesImages) {

      uploadedFilesImages.forEach((file) => {
        const data = new FormData();
        data.append('file', file);
        api.post('/upload', data, {
          headers: {
            "Content-Type": "multipart/form-data"
          },
        }).then(response => {
        }).catch(err => { })
      })
    }

  };

  return {
    getUpload:{
      imagePreview
    },
    handleUpload: {
      handleUploadImage,
      processUploadFileImage,
    }
  }
};