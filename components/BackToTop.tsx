"use client";
import { useEffect, useState } from "react";
export default function BackToTop(){
  const [show,setShow]=useState(false);
  useEffect(()=>{ const onScroll=()=>setShow(window.scrollY>500); window.addEventListener('scroll',onScroll,{passive:true}); return ()=>window.removeEventListener('scroll',onScroll);},[]);
  if(!show) return null;
  return <button aria-label="Back to top" onClick={()=>window.scrollTo({top:0,behavior:'smooth'})} className="fixed bottom-5 right-5 z-50 rounded-full border border-border bg-bg px-4 py-2 text-sm text-text shadow-card">Top</button>
}
