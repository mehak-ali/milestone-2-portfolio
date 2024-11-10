import React from 'react'

const Skills = () => {
  return (
    
    <div id='Skills' className='container pt-32'>
        <div className='grid md:grid-cols-2 gap-20 items-center'>
            <div data-aos="zoom-in-up">
                <h2 className='text-4xl md:text-5xl'>Technologies I Work With</h2>
       <p className='text-blue-700 pt-2 font-bold text-2xl'>With a strong foundation in front-end development, I am skilled in HTML, CSS, JavaScript, and TypeScript. I specialize in creating visually appealing, responsive, and user-friendly interfaces, utilizing HTML and CSS for structure and styling. My proficiency in JavaScript allows me to develop interactive, dynamic websites, while TypeScript enables me to write cleaner, more reliable code with enhanced type safety. By combining these technologies, I am able to build high-quality web applications that prioritize both functionality and user experience.
</p>
  </div>
  <div>
  <div className='grid grid-cols-2 text-lime-700 text-3xl sm:text-4xl'>
    <div className='space-y-2 font-semibold'>
      <h2>Typescript</h2>
      <h2>React.js</h2>
      <h2>Next.js</h2>
    </div>
    <div className='space-y-2 font-semibold'>
      <h2>Html</h2>
      <h2>CSS</h2>
      <h2>Tailwind.Css</h2>
    </div>
  </div>
     </div>
      </div>
    </div>
  )
}

export default Skills
