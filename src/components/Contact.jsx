import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8 mt-4">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Contact</p>
          <p className="py-6">Submit the form below to get in touch</p>
        </div>
        
        <div className="flex justify-center items-center">
          <form action="https://getform.io/f/zazkqpxb" method="POST" className="flex flex-col w-full md:w-1/2">
            <input type="text" name="name" placeholder="Add your name here" className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus focus:outline-none"/>
            <input type="text" name="email" placeholder="Add your e-mail address" className="p-2 bg-transparent border-2 rounded-md text-white focus focus:outline-none"/>
            <textarea name="message" placeholder="Enter your message here" rows="10" className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-non" />

            <button
            className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-105 duration-500 "
            >Let's get in touch</button>

          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
