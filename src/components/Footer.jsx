import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full bg-[#000] relative py-7">
            <div className="max-w-screen-2xl mx-auto flex lg:flex-row flex-col">
                <div className="lg:w-1/2 w-full py-5 px-5 lg:px-0 z-10">
                    <div className="flex  items-center gap-2">                        
                        <h2 className="text-3xl lexend-deca-semibold text-white">Qeske Maastricht</h2>
                    </div>
                    <div className="mt-8 flex gap-5">
                        <a href="https://www.facebook.com/qeske.maastricht/">
                            <h2 className="text-white text-4xl"><i className="ri-facebook-box-fill"></i></h2>
                        </a>
                        <a href="https://www.linkedin.com/company/qeske/">
                            <h2 className="text-white text-4xl"><i className="ri-linkedin-box-fill"></i></h2>
                        </a>
                    </div>
                    <div className="mt-3">
                        <h3 className="text-zinc-400">
                            François de Veyestraat 8B <br/>
                            6221 AB Maastricht
                        </h3>
                    </div>
                </div>
                <div className="lg:w-1/2 w-full p-5 flex lg:flex-row flex-col gap-30 justify-end z-10">
                    <div className="">
                        <h2 className="text-white lexend-deca-semibold text-lg mb-4 uppercase">How we help</h2>
                        <div>
                            <h3 className="text-white josefin-semibold text-base">Membership?</h3>
                            <h3 className="text-zinc-300">community@qeskemaastricht.nl</h3>
                        </div>
                        <div className="mt-5">
                            <h3 className="text-white josefin-semibold text-base">Reach the board</h3>
                            <h3 className="text-zinc-300">info@qeskemaastricht.nl</h3>
                        </div>
                    </div>
                    <div className="uppercase">
                        <h2 className="text-white lexend-deca-semibold text-lg mb-4">Company</h2>
                        <h3 className="text-zinc-300">.Work-space</h3>
                        <h3 className="text-zinc-300">.Location</h3>
                        <h3 className="text-zinc-300">.Contact</h3>
                    </div>

                </div>
            </div>
            
            <div className="w-full p-2 mt-2">
                <div className="max-w-screen-2xl mx-auto flex lg:flex-row flex-col justify-between items-center">
                    <div className="text-zinc-400">
                        <h3>&copy;2025 Qeske.All rights reserved.</h3>
                    </div>
                    <div className="flex gap-5 text-zinc-400">
                        <h3>Privacy Policy</h3>
                        <h3>Terms & Condition</h3>
                    </div>
                </div>
            </div>
        </footer>
  )
}

export default Footer