
export default function Home(){
  return (
    <div className="card p-6">
      <h1 className="text-xl font-bold mb-2">ACE — Advanced Coatings Estimator</h1>
      <p className="text-ace-muted">Welcome! Click below to start a new estimate.</p>
      <a href="/estimate/wizard" className="btn btn-primary mt-4">Start Wizard</a>
    </div>
  )
}
