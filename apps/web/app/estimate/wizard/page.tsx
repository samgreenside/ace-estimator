
'use client'
import { useState } from 'react'
const steps = ['Project Setup','Structures & Areas','Takeoff','System & Materials','Labor Builder','Crew & Productivity','Equipment','Summary']
export default function Wizard(){
  const [step,setStep]=useState(0)
  return (<div>
    <h2 style={{fontSize:22,fontWeight:600}}>Wizard</h2>
    <div style={{display:'flex',gap:8,flexWrap:'wrap',margin:'8px 0 16px'}}>
      {steps.map((s,i)=>(<span key={s} style={{padding:'6px 10px',borderRadius:999,border:'1px solid #335',background:i===step?'#d5b23d':'#0f2a2a',color:i===step?'#000':'#bcd'}}>{i+1}. {s}</span>))}
    </div>
    <div style={{border:'1px solid #234',borderRadius:12,padding:16,minHeight:180}}>
      Step {step+1} — {steps[step]} (demo shell)
    </div>
    <div style={{display:'flex',justifyContent:'space-between',marginTop:16}}>
      <button onClick={()=>setStep(Math.max(0,step-1))}>Back</button>
      <button onClick={()=>setStep(Math.min(steps.length-1,step+1))}>Next</button>
    </div>
  </div>)
}
