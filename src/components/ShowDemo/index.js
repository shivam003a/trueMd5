import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

function ShowDemo() {
    return (
        <>
            <Dialog>
                <DialogTrigger asChild>
                    <span className='px-4 py-2 bg-blue-200 font-poppins text-md font-light rounded-4xl cursor-pointer'>
                        Watch Demo
                    </span>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Demo</DialogTitle>
                    </DialogHeader>

                    <div className="w-full">
                        <video className="aspect-video" controls muted controlsList="nodownload" disablePictureInPicture>
                            <source src="/assets/Demo_trueMD5.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default ShowDemo