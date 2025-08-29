import Head from 'next/head'
import { useEffect, useMemo, useState } from 'react'
import { supabase } from '../lib/supabaseClient'

const CHARACTERS = [
  { id: 'naruto', name: 'Naruto Uzumaki', quote: 'Believe it!', colors: { base: '#FFB300', accent: '#FF6F00', glow: '#FFD54F' } },
  { id: 'luffy', name: 'Monkey D. Luffy', quote: "I'm gonna be King of the Pirates!", colors: { base: '#E53935', accent: '#1E88E5', glow: '#FFCDD2' } },
  { id: 'goku', name: 'Son Goku', quote: 'I am the hope of the universe!', colors: { base: '#F57C00', accent: '#0D47A1', glow: '#FFE0B2' } }
]

export default function Home() {
  const [user, setUser] = useState<any>(null)
  const [selected, setSelected] = useState(0)
  const current = useMemo(()=> CHARACTERS[selected % CHARACTERS.length], [selected])

  useEffect(()=>{
    // set theme vars
    const { base, accent, glow } = current.colors
    document.documentElement.style.setProperty('--theme-base', base)
    document.documentElement.style.setProperty('--theme-accent', accent)
    document.documentElement.style.setProperty('--theme-glow', glow)
  }, [current])

  useEffect(()=>{
    // check demo user in localStorage
    const stored = localStorage.getItem('anime_user')
    if (stored) setUser(JSON.parse(stored))
  },[])

  const handleLogin = (e: any) => {
    e.preventDefault()
    const username = e.target.username.value
    const password = e.target.password.value
    if (!username || !password) return alert('Enter username+password')
    // demo: store locally. Replace with Supabase Auth in production.
    const u = { username }
    localStorage.setItem('anime_user', JSON.stringify(u))
    setUser(u)
  }

  const logout = ()=> { localStorage.removeItem('anime_user'); setUser(null) }

  return (
    <>
      <Head>
        <title>Anime Portal Demo</title>
      </Head>
      <div style={{minHeight:'100vh', padding:24}}>
        <header style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:16}}>
          <h1 style={{fontSize:20, fontWeight:800}}>Anime Portal — Demo</h1>
          <div>
            {user ? <button className='button' onClick={logout}>Logout</button> :
            <form onSubmit={handleLogin} style={{display:'inline-flex', gap:8}}>
              <input name='username' placeholder='username' style={{padding:8, borderRadius:8, border:0}} />
              <input name='password' placeholder='password' type='password' style={{padding:8, borderRadius:8, border:0}} />
              <button className='button' type='submit'>Login</button>
            </form>}
          </div>
        </header>

        <main style={{display:'grid', gridTemplateColumns:'1fr 320px', gap:20}}>
          <section className='card'>
            <h2 style={{marginTop:0}}>Heroes Wheel</h2>
            <div style={{display:'flex', gap:8, alignItems:'center'}}>
              <button onClick={()=>setSelected((s)=>Math.max(0,s-1))} className='button'>◀</button>
              <div style={{flex:1, minHeight:160, display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column'}}>
                <div style={{fontWeight:800, fontSize:18}}>{current.name}</div>
                <div style={{opacity:0.8, marginTop:8}}>“{current.quote}”</div>
              </div>
              <button onClick={()=>setSelected((s)=>s+1)} className='button'>▶</button>
            </div>
            <div style={{marginTop:12}}>
              <p style={{margin:0, opacity:0.85}}>This demo uses local storage for auth and a mock dataset. We'll replace this with Supabase and Stripe in the full build.</p>
            </div>
          </section>

          <aside>
            <div className='card'>
              <h3 style={{marginTop:0}}>Rankings (live demo)</h3>
              <ul>
                <li>Naruto — 98.3</li>
                <li>Luffy — 94.6</li>
                <li>Goku — 92.1</li>
              </ul>
            </div>

            <div className='card' style={{marginTop:12}}>
              <h3 style={{marginTop:0}}>Support</h3>
              <p style={{margin:0}}>Stripe checkout is stubbed. Configure Stripe keys in environment and use /api/create-checkout-session.</p>
            </div>
          </aside>
        </main>

        <footer style={{marginTop:24, opacity:0.7, fontSize:13}}>Scaffold ready to deploy. See README in project root for next steps.</footer>
      </div>
    </>
  )
}
