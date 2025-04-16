function FileInfo({ file, originalMD5 }) {

    const formatBytes = (bytes) => {
        if (!bytes) return '0 Bytes';
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        const i = Math.floor(Math.log(bytes) / Math.log(1024));
        return `${(bytes / Math.pow(1024, i)).toFixed(2)} ${sizes[i]}`;
    };
    
    return (
        <>
            <div>
                <p className='font-poppins text-black text-xs'>Name</p>
                <p className='font-poppins text-cs-gray text-sm'>{file?.name}</p>
            </div>
            <div>
                <p className='font-poppins text-black text-xs'>Size</p>
                <p className='font-poppins text-cs-gray text-sm'>{formatBytes(file?.size)}</p>
            </div>
            <div>
                <p className='font-poppins text-black text-xs'>Type</p>
                <p className='font-poppins text-cs-gray text-sm'>{file?.type}</p>
            </div>
            <div>
                <p className='font-poppins text-black text-xs'>Extension</p>
                <p className='font-poppins text-cs-gray text-sm'>{file?.name.split(".").pop()}</p>
            </div>
            <div>
                <p className='font-poppins text-black text-xs'>Modified Date</p>
                <p className='font-poppins text-cs-gray text-sm'>{new Date(file?.lastModified)?.toLocaleString()}</p>
            </div>
            {
                originalMD5 && <div>
                <p className='font-poppins text-black text-xs'>originalMD5</p>
                <p className='font-poppins text-cs-gray text-sm'>{originalMD5?.trim()?.toLowerCase()}</p>
            </div>
            }
        </>
    )
}

export default FileInfo