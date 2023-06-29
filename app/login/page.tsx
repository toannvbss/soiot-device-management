'use client';

export default function Login() {
  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-50'>
      <div className='w-10/12 sm:w-5/12 md:w-4/12 xl:w-3/12 px-10 py-3.5 bg-white drop-shadow-md'>
        <div className='text-center mb-6 text-sm font-bold text-gray-150'>
          <h3>SOIOT SYSTEM</h3>
        </div>
        <form>
          <div className='mb-3 text-xs'>
            <input className="w-full px-3 py-2 bg-orange-150 rounded-sm text-xs" type="text" placeholder="User name"/>
          </div >
          <div className='mb-3 text-xs'>
            <input className="w-full px-3 py-2 bg-orange-150 rounded-sm text-xs" type="text" placeholder="Password"/>
          </div>
          <div className='flex items-center justify-center mt-5'>
            <button className='px-4 py-2 mr-2 rounded bg-orange-350 hover:bg-orange-450 text-xs font-bold text-white drop-shadow-md'>LOGIN</button>
            <a href="/signup" className='text-xs font-medium text-sky-500'>or create new account?</a>
          </div>
        </form>
      </div>
    </div>
  );
}
