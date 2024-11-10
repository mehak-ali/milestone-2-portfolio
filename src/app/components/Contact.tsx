import React from 'react'
import { MdMarkEmailUnread } from "react-icons/md";
import { BsTelephoneOutbound } from "react-icons/bs";
const Contact = () => {
  return (
    <div id='Contact' className='pt-32 container'>
        <div className='grid md:grid-cols-2 gap-10'>
            <div className='space-y-8'>
                <h2 className='text-5xl' data-aos="zoom-in-up"  >Get In Touch</h2>
                <p className='text-gray-700 text-[18px] pt-2 font-medium'>Drop me a line, Give me a call, or send me a message by submiting a foam</p>
                <div className='flex gap-3 items-center'>
                <MdMarkEmailUnread size={30} data-aos="zoom-in-up" /> Mehakmemon12345678@gmail.com
                </div>
                <div className='flex gap-3 items-center'>
                <BsTelephoneOutbound size={30} data-aos="zoom-in-up "/> 03162440970

                 </div>
              
                </div>
                </div>
                <div className='space-y-8'>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor='name'>Name</label>
                        <input type='text'
                        className='h-[40px] bg-transparent border border-black'
                        id='name'>
                        </input>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor='email'>Email</label>
                        <input type='text'
                        className='h-[40px] bg-transparent border border-black'
                        id='email'>
                        </input>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor='message'>Message</label>
                        <textarea 
                        className= 'bg-transparent border border-black'
                        id='message' rows={8}>
                        </textarea>
                    </div>
                    <button className='bg-accent p-2 px-6 bg-lime-400'>send</button>
                </div>
                 </div>
      
    
  )
}

export default Contact
