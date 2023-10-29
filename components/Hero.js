import Image from 'next/image'
import hand from '../images/hand4.png'
function Hero() {
    return (
    <div class="relative">
    <div class="bg-white dark:bg-gray-800  items-center align-middle">
    <div class="text-center w-full mx-auto py-6 px-4 sm:px-6 lg:py-10 lg:px-8 z-20">
        <h2 class="font-fancy text-black dark:text-white text-3xl md:text-5xl">
            <span class="block">
                Hi, I'm Harsh Doshi
            </span>
        </h2>
        <p class="md:text-xl mt-4 max-w-80 mx-auto text-indigo-500 font-fancy">
        Software Engineer at Salesforce | CS Undergrad from BITS Pilani
        </p>
    </div>
</div>
        </div>
    )
}

export default Hero
