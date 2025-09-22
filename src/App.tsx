import { Mail, MoveRightIcon, User2 } from 'lucide-react';
import loopera from './assets/loopera-logo.svg';
import telegramLink from './assets/telegram-link.svg'
import twitterLink from './assets/twitter-link.svg';
import React, { useState } from "react";
import { db } from "./firebaseConfig";
import { serverTimestamp, doc, setDoc } from "firebase/firestore";

function App() {
  type UserInfo = {
    name: string;
    email: string;
  };

  const [user, setUser] = useState<UserInfo>({
    name: "",
    email: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const normalizedEmail = user.email.trim().toLowerCase();
      const docId = encodeURIComponent(normalizedEmail); // safe docId

      // Attempt to create document with email-based id.
      // If the doc already exists this will be an update and firebase rules deny updates -> permission error
      await setDoc(doc(db, "waitlist", docId), {
        name: user.name,
        email: normalizedEmail,
        createdAt: serverTimestamp(),
      });

      setMessage("Congratulations you’re on the waitlist!");
      setUser({ name: "", email: "" });
    } catch (err: any) {
      console.error("Firestore write error:", err);

      // If the write was rejected because the doc exists (update denied), it'll be treated  as "already registered".
      // Firestore client returns a permission-denied error for denied writes.
      if (err?.code === "permission-denied") {
        setMessage("User already registered.");
      } else {
        setMessage("Something went wrong, please try again.");
      }
    } finally {
      setLoading(false);
    }
  };
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


        <form onSubmit={handleSubmit} className='flex flex-col w-full md:w-[400px] gap-5'>
          <label htmlFor="name"  >
            <User2 />
            <input value={user.name} required onChange={(e) => setUser({ ...user, name: e.target.value })}type="text" placeholder='Full name...'/>
          </label>

          <label htmlFor="email">
            <Mail />
            <input value={user.email} required onChange={(e) => setUser({ ...user, email: e.target.value })} type="email" placeholder='Add email address'/>
          </label>
          <button type='submit' disabled={loading} className='btn flex justify-center gap-5'>
            {loading ? "Joining..." : "Join Waitlist"}
            {loading ? '' : <MoveRightIcon />}
          </button>
          {message && <p className='w-full text-sm'>{message}</p>}
        </form>


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
