import Image from 'next/image'
import hand from '../images/hand4.png'
import Animated from './Animated'

function Features() {
    return (
        <section>
        <div class="container md:-mt-8 max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 bg-white dark:bg-gray-800">
            <div class="flex flex-wrap -mx-8">
                <div class="px-8 md:px-80">
                    <div class="mb-12 lg:mb-0 pb-12 lg:pb-0 border-b lg:border-b-0">
                        <p class=" leading-loose md:text-xl dark:text-gray-300 text-center font-fancy3">
                            Hi, I am Harsh Doshi and I am Pre-Final year undergrad student at BITS Pilani Goa Campus. I'm pusuing 
                            a dual degree course with my B.E. focused in Computer Science. I am an upcoming Software Engineering
                            Intern at Salesforce (Hyderabad, India) for Summer 2022.
                        </p>
                    </div>
                </div>
                <div className="inline align-middle mx-auto -mt-10 px-8 md:w-1/2">
                    {/* <Image
                    src={hand}
                    /> */}
                    <Animated />
                </div>
                <div class="mt-8 px-8 md:px-80">
                    <div class="mb-12 lg:mb-0 pb-12 lg:pb-0 border-b lg:border-b-0">
                        <p class=" leading-loose md:text-xl dark:text-gray-300 text-center font-fancy3">
                           I am a passionate Computer Science Engineer with a keen interest in research. 
                        </p>
                    </div>
                </div>
            </div>
        </div> 
        </section>
    )
}

export default Features
