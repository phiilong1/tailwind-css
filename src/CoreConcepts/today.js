

function Today() {
    return (
        <div class="max-w-md mx-auto space-y-4">
    <h2 class="text-lg font-bold text-black">Today</h2>

    <div class="flex items-center space-x-3">
        <label class="flex items-center space-x-2 peer">
            <input type="checkbox" checked class="w-4 h-4 text-pink-500 border-gray-300 rounded focus:ring-pink-500" />
            <span class="text-gray-500 line-through peer-checked:text-gray-400">Create a to-do list</span>
        </label>
        <button class="text-gray-500 hover:text-gray-700 peer-checked:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
    </div>

    <div class="flex items-center space-x-3">
        <label class="flex items-center space-x-2 peer hover:bg-gray-300">
            <input type="checkbox" class="w-4 h-4 text-gray-500 border-gray-300 rounded focus:ring-gray-500" />
            <span class="text-black ">Check off first item</span>
        </label>
        <button class="text-gray-500 hover:text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
    </div>

    <div class="flex items-center space-x-3">
        <label class="flex items-center space-x-2 peer">
            <input type="checkbox" class="w-4 h-4 text-gray-500 border-gray-300 rounded focus:ring-gray-500" />
            <span class="text-black">Investigate race condition</span>
        </label>
        <button class="text-gray-500 hover:text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
    </div>
    <label class="block">
  <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-2xl font-medium text-slate-700">
    Email
  </span>
  <input type="email" name="email" class="mt-2 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none
   focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="you@example.com" />
    </label>

    <blockquote className="text-2xl font-semibold italic text-center text-slate-900">
        When you look
        <span className="before:block before:absolute before:-inset-1 before:bg-pink-500 relative inline-block">
            <span className="relative text-white">annoyed</span>
        </span>
        all the time, people think that you're busy
    </blockquote>

    <label className="relative block ">
        <span className="sr-only">Search</span>
        <span className="absolute inset-y-0 left-0 flex items-center pl-12">
            <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
        </span>
        <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border-slate-300 rounded-md py-2 pl-9
        pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-1 sm:text-xl" placeholder="Search for anything.." type="text" name="search"></input>
    </label>


    <form className="flex items-center space-x-6">
  <div className="shrink-0">
    <img className="h-24 w-24 object-cover rounded-full" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80" alt="Current profile photo" />
  </div>
  <label className="block">
    <span className="sr-only">Choose profile photo</span>
    <input type="file" className="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100
    "/>
  </label>



</form>
 <div className="py-8 px-8 max-w-xl mx-auto space-y-4 bg-white rounded-2xl shadow-xl sm:py-4 sm:space-y-4 border-x-2 selection:bg-sky-300 selection:text-sky-900">
        <h2 className="text-2xl">Ingredients</h2>
        <ul role="list" class="marker:text-sky-400 list-disc pl-5 space-y-3 text-slate-500 text-xl">
          <li>5 cups chopped Porcini mushrooms</li>
          <li>1/2 cup of olive oil</li>
          <li>3lb of celery</li>
        </ul>
 </div>

 <div className="w-full rounded-2xl bg-white p-10 shadow-xl border border-x-2">
    <h2 className="text-xl font-semibold text-sky-400">You have 1 new message</h2>
    <div className="flex mt-4 gap-6">
        <div className="h-20 w-20 rounded-lg items-center justify-center text-purple-600">
            Alex
        </div>
        <div className="flex flex-col justify-center">
        <h3 className="font-bold text-lg"> Feb 22</h3>
        <p className="text-lg"> if you like what we do, please tell your friends and share.</p>
    </div>
    </div>
    <div className="mt-8 text-center space-x-4 ">
        <button className="rounded-full border-2 border-gray-500 px-4 py-2 hover:bg-sky-300">Twitter</button>
        <button className="rounded-full border-2 border-gray-500 px-4 py-2 hover:bg-sky-300">Facebook</button>
    </div>
 </div>
</div>
    );
}

export default Today;