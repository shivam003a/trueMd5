'use client'
import React, { useState } from 'react'

function DragAnDrop({ file, setFile, inputRef }) {
    const [isDragging, setIsDragging] = useState(false);
    

    function handleDragOver(e) {
        e.preventDefault();
        setIsDragging(true);
    }

    function handleDragLeave() {
        setIsDragging(false);
    }

    function handleDrop(e) {
        e.preventDefault();
        setIsDragging(false);
        const droppedFile = e?.dataTransfer?.files?.[0];
        if (droppedFile) setFile(droppedFile);
    }

    function handleClick() {
        inputRef?.current?.click()
    }

    return (
        <>
            <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                className={`w-full h-45 border-2 border-dashed rounded-lg flex items-center justify-center text-center transition ${isDragging ? 'border-cs-blue bg-blue-50' : 'border-gray-300'}`}
            >
                <p className="text-cs-gray font-poppins">
                    {file ?
                        (`Selected: ${file.name}`)
                        : (<>
                            Drag & drop a file here or
                            {' '}
                            <span
                                onClick={handleClick}
                                className="inline-block text-blue-600 underline cursor-pointer"
                            >Browse</span>
                            {' '}
                            to select
                        </>)}
                </p>
                <input
                    type="file"
                    className="hidden"
                    ref={inputRef}
                    onChange={(e) => setFile(e.target.files[0])}
                    id="file-upload"
                />
            </div>
        </>
    )
}

export default DragAnDrop