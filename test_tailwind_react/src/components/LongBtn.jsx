

const LongBtn = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
        <div className="relative group">
            <div 
            className="absolute rounded-lg -inset-0.5 blur opacity-75 bg-gradient-to-r from-pink-600 to-purple-600 group-hover:opacity-100 transtion duration-1000 group-hover:duration-200 animate-tilt"></div>
            <button
            className="relative flex items-center py-4 leading-none bg-gray-800 divide-x divide-gray-600 rounded-lg px-7"
            >   
                <span className="flex items-center space-x-5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="text-pink-600 size-6 -rotate-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                    </svg>

                    <span className="pr-6 text-gray-100">Labs Release 2021</span>
                </span>
                <span className="pl-6 text-indigo-400 transition duration-200 group-hover:text-gray-100">See whats new &rarr;</span>
            </button>
            
        </div>
    </div>
  )
}

export default LongBtn


// https://www.youtube.com/watch?v=5W6kEP65AH4