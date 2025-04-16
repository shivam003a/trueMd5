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
                        <iframe
                            className="w-full aspect-video"
                            src="https://www.youtube.com/embed/1SGv_SvNY4o?si=4kLNDMtupBEUV5ZL"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen>
                        </iframe>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default ShowDemo