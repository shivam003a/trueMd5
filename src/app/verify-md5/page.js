'use client'
import DragAnDrop from '@/components/DragAndDrop';
import React, { useState, useRef } from 'react'
import SparkMD5 from 'spark-md5';
import Link from "next/link"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

import { FaCheckCircle } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { MdContentCopy } from "react-icons/md";
import { LuClipboardCopy } from "react-icons/lu";

import FileInfo from '@/components/FileInfo';


function VerifyMd5() {
    const [file, setFile] = useState(null);
    const [originialMD5, setOriginalMD5] = useState("")
    const [match, setMatch] = useState(null);
    const [progress, setProgress] = useState(0);
    const [fileHash, setFileHash] = useState('');
    const [open, setOpen] = useState(false)
    const [isShown, setIsShown] = useState(false)

    const inputRef = useRef(null)


    const CHUNK_SIZE = 1024 * 1024 * 10;

    const handleFileChange = (e) => {
        if (e === "Compare") {
            setMatch(originialMD5 === fileHash)
            setOpen(true)
        } else {
            if (!file) return;
            if (!originialMD5) return;

            const chunkCount = Math.ceil(file.size / CHUNK_SIZE);
            let currentChunk = 0;
            const spark = new SparkMD5.ArrayBuffer();
            const fileReader = new FileReader();

            const loadNext = () => {
                const start = currentChunk * CHUNK_SIZE;
                const end = Math.min(start + CHUNK_SIZE, file.size);
                fileReader.readAsArrayBuffer(file.slice(start, end));
            };

            fileReader.onload = (e) => {
                if (!e.target?.result) return;
                spark.append(e.target.result);
                currentChunk++;
                setProgress(Math.floor((currentChunk / chunkCount) * 100));

                if (currentChunk < chunkCount) {
                    loadNext();
                } else {
                    const md5 = spark.end();
                    setFileHash(md5);
                    setProgress(100);
                }
            };
            fileReader.onerror = () => {
                console.error('File reading failed');
            };

            loadNext();
        }
    };

    function verifyAnotherFile() {
        setFile(null);
        setOriginalMD5("")
        setMatch(null);
        setProgress(0);
        setFileHash('');
        setOpen(false)
        if (inputRef.current) {
            inputRef.current.value = '';
        }
    }

    function copyFileHash(e) {
        if (fileHash) {
            setIsShown(true)
            navigator.clipboard.writeText(fileHash)
        }
        setTimeout(() => {
            setIsShown(false)
        }, [500])
    }

    async function copyFromClipboard() {
        try {
            const text = await navigator.clipboard.readText();
            setOriginalMD5(text);
        } catch (err) {
            console.error("Failed to read clipboard contents: ", err);
        }
    }

    return (
        <>
            <div className='max-w-[1200px] mx-auto'>
                <div className='mt-3'></div>
                <Link href="/" className='font-honk text-4xl py-4 ml-2'>trueMD5</Link>

                <div className='flex flex-col md:flex-row gap-1 items-stretch mt-6'>
                    <div className='flex-1/2 md:flex-2/3 p-2'>
                        <div className='flex flex-col gap-2 mb-5'>
                            <Label
                                htmlFor="file"
                                className="font-poppins text-black text-sm"
                            >Upload File</Label>
                            <DragAnDrop
                                file={file}
                                setFile={setFile}
                                inputRef={inputRef}
                            />
                        </div>

                        <div className='flex flex-col gap-2 mb-5 relative'>
                            <Label
                                htmlFor="originalMD5"
                                className="font-poppins text-black text-sm"
                            >Original MD5</Label>
                            <Input
                                type="text"
                                placeholder="Original MD5 hash"
                                className="border-2 border-gray-300 focus:border-0"
                                value={originialMD5}
                                onChange={(e) => setOriginalMD5(e?.target?.value)}
                            />
                            <div className='absolute bottom-[6px] right-2 cursor-pointer' onClick={copyFromClipboard}>
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger><LuClipboardCopy /></TooltipTrigger>
                                        <TooltipContent>
                                            <p>Copy From Clipboard</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>

                            </div>
                        </div>

                        {
                            fileHash && <div className='flex flex-col gap-2 mb-5 relative'>
                                <Label
                                    htmlFor="originalMD5"
                                    className="font-poppins text-black text-sm"
                                >Calculated MD5</Label>
                                <Input
                                    type="text"
                                    placeholder="Original MD5 hash"
                                    className="border-2 border-gray-300 focus:border-0"
                                    value={fileHash}
                                    readOnly
                                />
                                <div className='absolute bottom-[6px] right-2 cursor-pointer' onClick={copyFileHash}>
                                    <p className='absolute bg-blue-200 rounded-lg px-2 py-1 text-xs bottom-4 -right-4' style={{ display: isShown ? "block" : "none" }}>Copied!</p>
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger><MdContentCopy /></TooltipTrigger>
                                            <TooltipContent>
                                                <p>Copy To Clipboard</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>

                                </div>
                            </div>
                        }

                        {progress > 0 && progress <= 100 &&
                            <div className='flex flex-col gap-2 mb-5'>
                                <Label
                                    htmlFor="originalMD5"
                                    className="font-poppins text-black text-sm"
                                >Progress</Label>
                                {(
                                    <Progress value={progress}></Progress>
                                )}
                            </div>
                        }

                        <div className='flex flex-col gap-2'>
                            <Button className="bg-cs-blue cursor-pointer" onClick={() => handleFileChange(progress === 100 ? "Compare" : 'Verify')}>{progress === 0 ? "Verify" : (progress === 100 ? "Compare" : "Hashing...")}</Button>
                            <Button onClick={verifyAnotherFile}>Reset</Button>
                        </div>
                    </div>

                    <div className='border-r border-gray-300 self-stretch mx-2'></div>

                    <div className='flex-1/2 md:flex-1/3 p-2 flex flex-col gap-3'>
                        <p className='text-black font-normal'>File Info</p>
                        {
                            file ? (
                                <FileInfo file={file} originalMD5={originialMD5} />
                            ) : (<div className='text-cs-gray text-sm'>No FIle Uploaded</div>)
                        }
                    </div>
                </div>
            </div>

            {
                <Dialog open={open} onOpenChange={verifyAnotherFile}>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle>Check File Integrity</DialogTitle>
                        </DialogHeader>
                        <div className="flex gap-4 py-4 justify-center">
                            {
                                match ? (
                                    <div className='flex gap-2 flex-col justify-center items-center'>
                                        <FaCheckCircle size={64} color='#bfdd50' />
                                        <p className='text-lg'>Hashes match!</p>
                                    </div>
                                ) : (
                                    <div className='flex gap-2 flex-col justify-center items-center'>
                                        <div className='bg-[#F08080] rounded-full p-4'>
                                            <ImCross size={48} color='#FFFFFF' />
                                        </div>
                                        <p className='text-lg'>Hashes do not match</p>
                                    </div>
                                )
                            }
                        </div>
                        <DialogFooter>
                            <Button type="submit" onClick={verifyAnotherFile}>Verify Another File</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            }


        </>
    )
}

export default VerifyMd5