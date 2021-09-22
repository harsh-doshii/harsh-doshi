import Image from 'next/image'
import logo from '../images/Logo_Main-1.png'
import { MenuIcon } from '@heroicons/react/solid'

function Header() {
    return (
        <header className="sticky top-0 z-50 grid grid-cols-2 bg-white shadow-md py-5 px-5 md:px-10">
            {/* logo */}
            <div className='relative flex items-center h-10 cursor-auto my-auto'>
                <Image
                src={logo}
                layout = "fill"
                objectFit = "contain"
                objectPosition="left"
                />
            </div>
            {/* nav */}
            <div className='flex items-center space-x-4 justify-end'>
                <p className='hidden md:inline px-5 hover:cursor-pointer font-fancy'>Home</p>
                <p className='hidden md:inline px-5 hover:cursor-pointer font-fancy'>Brochure</p>
                <p className='hidden md:inline px-5 hover:cursor-pointer font-fancy'>Blog</p>
                <MenuIcon className='md:hidden h-8'/>
            </div>
        </header>
    )
}

export default Header
