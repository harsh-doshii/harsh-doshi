import React from 'react'

function Features2() {
    const handleClick = () => {
        console.log("clicked");
      };
    return (
        <div>
            
<div class="container mx-auto px-6 p-6 bg-white dark:bg-gray-800 mt-4" id="Features2">
    <div class="mb-16 text-center">
        <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white font-fancy sm:text-4xl">
            My Research Interests
        </p>
        <ul className="mt-5">
            <li className="py-3">1. Natural Language Processing</li>
            <li className="py-3">2. Artificial Intelligence</li>
            <li className="py-3">3. Computational Linguistics</li>
            <li className="py-3">4. Data Science</li>
        </ul>
    </div>
    
</div>
        </div>
    )
}

export default Features2
