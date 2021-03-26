import Dropzone from 'react-dropzone';
import React, { useState } from 'react';

import { useUploadController } from '../../controller/ImageUpload/UploadController';
import './styles.scss';

const DropzoneScreen = ({ nameFile }) => {
    const { handleUpload, getUpload } = useUploadController();
    const [isDragActive, setIsDragActive] = useState(false);
    const [isDropAccept, setIsDropAccept] = useState(false);
    const [isDropReject, setIsDropReject] = useState(false);


    const ListPreview = ({ file, index }) => {
        return (
            <div className='imageDiv' key={file}>
                <img src={file}
                    alt={file}
                    className='imageDropped'
                    height={80}
                    width={80} />
            </div>
        )
    }


    return (
        <div className="baseStyle">
            <Dropzone
                onDragEnter={() => setIsDragActive(true)}
                onDropRejected={() => setIsDropReject(true)}
                onDropAccepted={() => setIsDropAccept(true)}
                onDrop={file => handleUpload.handleUploadImage(file, nameFile)}
                noDrag={false}
                accept="image/*, application/pdf, .pdf"
                maxFiles={1}
            >
                {({ getRootProps, getInputProps }) => {
                    return (
                        <section {...getRootProps()} className="uploadZone">
                            <div >
                            </div>
                        </section>
                    )
                }}
            </Dropzone>
            <div className="imageList">
                {getUpload.imagePreview.map((file, index)=> (<ListPreview file={file} index={index} />))}   
            </div>
        </div>
    )
}

export default DropzoneScreen;