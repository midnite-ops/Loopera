import { Mail, MoveRightIcon, User2 } from 'lucide-react';
import loopera from './assets/loopera-logo.svg';
import telegramLink from './assets/telegram-link.svg'
import twitterLink from './assets/twitter-link.svg';
function App() {
  return (
    <section id='home' className='text-white flex justify-center items-center min-h-screen w-screen px-5 py-10'>
      <div className='md:mx-[5%] mx-0 flex flex-col items-center w-[100%] gap-10'>
        <div className='flex flex-col items-center justify-center gap-10'>
          <div>
            <img src={loopera} alt="Loopera logo" />
          </div>
          <div className='md:w-[94%] w-full flex flex-col items-center'>
            <h1 className='mb-[45px] w-full'>
              The wait is part of the <br /><span className='text-dAqua'>Journey</span>
            </h1>
            <p className='w-full md:w-auto'>
              Join the waitlist to secure early access to Loopera — a Web3-powered freelance and bounty marketplace built on trust, transparency, and community.
            </p>
          </div>
        </div>


        <div className='flex flex-col w-full md:w-[400px] gap-5'>
          <label htmlFor="name"  >
            <User2 />
            <input type="text" placeholder='Full name...'/>
          </label>

          <label htmlFor="email">
            <Mail />
            <input type="email" placeholder='Add email address'/>
          </label>
          <button className='btn flex justify-center gap-5'>
            Join the waitlist
             <MoveRightIcon />
          </button>
        </div>


        <div className='flex flex-col items-center w-full md:w-[550px] gap-10'>
          <p className='text-sm'>We're are building Loopera in public. Follow our journey. Connect with the community, and never miss an update.</p>
          <div className='flex gap-10'>
            <a href="">
              <img src={twitterLink} alt="a twitter link" />
            </a>
            <a href="">
              <img src={telegramLink} alt="a telegram link" />
            </a>
            
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default App
