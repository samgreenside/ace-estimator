
'use client'
import { useState } from 'react'
const steps = ['Project Setup','Structures & Areas','Takeoff','System & Materials','Labor Builder','Crew & Productivity','Equipment','Summary']
export default function Wizard(){
  const [step,setStep]=useState(0)
  return (
    <div className="card p-6">
      <div className="flex gap-2 flex-wrap mb-4">
        {steps.map((s,i)=>(
          <button key={s}
            className={`badge ${i===step?"step-active":""}`}
            onClick={()=>setStep(i)}>{i+1}. {s}</button>
        ))}
      </div>
      <div className="min-h-[200px]">
        Step {step+1} — {steps[step]} (placeholder)
      </div>
      <div className="flex justify-between mt-4">
        <button className="btn" onClick={()=>setStep(Math.max(0,step-1))}>Back</button>
        <button className="btn btn-primary" onClick={()=>setStep(Math.min(steps.length-1,step+1))}>Next</button>
      </div>
    </div>
  )
}
