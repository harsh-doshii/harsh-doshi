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
                        a dual degree course with my B.E. focused in Computer Science. 
                    </p>
                </div>
            </div>
            <div className="inline align-middle mx-auto -mt-10 px-8 md:w-1/2">
                    {/* <Image
                    src={hand}
                    /> */}
                    <Animated />
                </div>
            {/* <div class="w-full lg:w-1/2 px-8">
                <ul class="space-y-12">
                    <li class="flex -mx-4">
                        <div class="px-4">
                            <span class="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold font-heading rounded-full bg-blue-50 text-blue-600">
                                1
                            </span>
                        </div>
                        <div class="px-4">
                            <h3 class="my-4 text-xl font-semibold dark:text-white font-fancy">
                               Comprehensive Financial Planning Services
                            </h3>
                            <p class="text-gray-500 dark:text-gray-300 leading-loose">
                            The Financialist is an Unbiased Financial Advisory service located in Mumbai. <br />No-commission. No-Brokerage.<br />We provide fee-only wealth advice –financial planning, investment advice, tax planning, insurance planning, and estate planning.
                            </p>
                        </div>
                    </li>
                    <li class="flex -mx-4">
                        <div class="px-4">
                            <span class="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold font-heading rounded-full bg-blue-50 text-blue-600">
                                2
                            </span>
                        </div>
                        <div class="px-4">
                            <h3 class="my-4 text-xl font-semibold dark:text-white font-fancy">
                                Eminenet Financial Advisory
                            </h3>
                            <p class="text-gray-500 dark:text-gray-300 leading-loose">
                            Our Qualified Finance Professionals use proven investment strategies to achieve the returns you need at selected risk tolerance. We focus on creating a roadmap of your journey to wealth creation.

Your goals are personal and your financial advice should be too.
                            </p>
                        </div>
                    </li>
                    <li class="flex -mx-4">
                        <div class="px-4">
                            <span class="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold font-heading rounded-full bg-blue-50 text-blue-600">
                                3
                            </span>
                        </div>
                        <div class="px-4">
                            <h3 class="my-4 text-xl font-semibold dark:text-white font-fancy">
                                Goal Based Financial Planning
                            </h3>
                            <p class="text-gray-500 dark:text-gray-300 leading-loose">
                            At The Financialist, a dedicated financial consultant reviews your risk profiling test and defines your risk appetite. Afterwards, your financial health is also diagnosed, and finally, your goals are analyzed.

Based on this process, we formulate an ideal asset allocation, which will help diversify in multiple asset classes as per your Risk Appetite.   
                            </p>
                        </div>
                    </li>
                    <li class="flex -mx-4">
                        <div class="px-4">
                            <span class="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold font-heading rounded-full bg-blue-50 text-blue-600">
                                4
                            </span>
                        </div>
                        <div class="px-4">
                            <h3 class="my-4 text-xl font-semibold dark:text-white font-fancy">
                                Financial Literacy
                            </h3>
                            <p class="text-gray-500 dark:text-gray-300 leading-loose">
                            A better understanding of financial markets will enable you to make informed and effective decisions with all your financial matters.

We make sure that our clients understand the ‘why’ of what we are doing.

It helps you make confident investments.
                            </p>
                        </div>
                    </li>
                </ul>
                </div> */}
        </div>
        </div> 
        </section>
    )
}

export default Features
