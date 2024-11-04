import nhanvien from '../img/ahihi.jpg'
function Womanface() {
    return ( 
        <div className='py-8 px-8 max-w-sm mx-auto space-y-2 bg-white rounded-xl shadow-lg sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:gap-x-12'>
          <img className='block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0' src={nhanvien} alt="Woman's face"/>
          <div className='text-center space-y-2 sm:text-left'>
            <div className='space-y-0.5'>
                <p className='text-lg text-black font-semibold'>
                    Erin Lindford
                </p>
                <p className='text-slate-500 font-medium'>Product Engineer</p>
            </div>
            <button className='bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 text-white font-bold py-2 px-4 rounded-xl'>Message</button>
          </div>
        </div>
    );
}

export default Womanface;