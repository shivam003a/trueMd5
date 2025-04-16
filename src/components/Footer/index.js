import { FaInstagram, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import Link from 'next/link'

function Footer() {
    return (
        <footer className='max-w-[1200px] mx-auto flex flex-col items-center justify-center mb-8'>
            <p className='font-poppins text-sm'>&copy; {new Date().getFullYear()} trueMD5. All rights reserved.</p>
            <div className='flex mt-4 gap-5'>
                <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <FaInstagram size={22} color='#E1306C' />
                </Link>
                <Link href="https://x.com" target="_blank" rel="noopener noreferrer">
                    <FaTwitter size={22} color='#1DA1F2' />
                </Link>
                <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={22} color='#0077B5' />
                </Link>
                <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={22} color='#333333' />
                </Link>
            </div>
        </footer>
    );
}

export default Footer;