"use client"


import { generateTextAction } from "@/app/actions/aiActions";
import { useState } from "react";
import ReactMarkdown from "react-markdown";


export default function Home() {

  const [prompt, setPrompt] = useState<string>("")
  const [output, setOutput] = useState<string>("")

  const handleSendPrompt = async() => {

    const response = await generateTextAction(prompt);
    setOutput(response);
  }

  return (
    <main className="flex w-screen h-screen flex-col items-center justify-between px-5 md:px-24 py-6">
        <div className="fixed top-10 w-full  flex h-10/12 mb-10 px-10 sm:px-20 mx-auto">
          {
              output && (
                <div className="pb-20 w-full wrap-break-word h-full scrollbar-thumb-gray-700 overflow-auto">
                  <h1 className="text-2xl font-bold mb-3">AI Response: </h1>
                  <ReactMarkdown>{output}</ReactMarkdown>
                </div>
              )
          }
        </div>
      <div className="fixed bottom-6 w-full px-20 mx-auto justify-center">

        

        {/* <form
        
        className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center sm:gap-2 dark:text-gray-100"
      >
        <div>
          <input
            className="block w-full md:min-w-[600] rounded-lg border border-gray-200 px-3 py-2 leading-6 placeholder-gray-500 focus:border-gray-500 focus:ring-3 focus:ring-gray-500/50 dark:border-gray-600 dark:bg-gray-800 dark:placeholder-gray-400 dark:focus:border-gray-500"
            type="email"
            id="email"
            name="email"
            placeholder="Type here ..."
          />
        </div>
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-700 bg-gray-700 px-4 py-2 leading-6 font-semibold text-white hover:border-gray-600 hover:bg-gray-600 hover:text-white focus:ring-3 focus:ring-gray-400/50 active:border-gray-700 active:bg-gray-700 dark:focus:ring-gray-400/90"
        >
          Send
        </button>
      </form> */}
      
 
    
    <div className="relative">
        
        <input 
          type="search" 
          id="search"
          value={prompt}
          onChange={(e) => {setPrompt(e.target.value)}} 
          className="block w-full md:min-w-[600] rounded-lg border border-gray-200 px-3 py-2 leading-6 placeholder-gray-500 focus:border-gray-500 focus:ring-3 focus:ring-gray-500/50 dark:border-gray-600 dark:bg-gray-800 dark:placeholder-gray-400 dark:focus:border-gray-500" placeholder="Type here..." />
        <button 
          type="button"
          onClick={handleSendPrompt}
          className="absolute inset-e-1.5 bottom-1.5 text-white bg-gray-900 hover:bg-gray-600 box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-semibold leading-5 rounded-lg  px-3 py-1.5 focus:outline-none transition-colors duration-300 cursor-pointer">Send</button>
    </div>


      </div>
    </main>
  );
}
