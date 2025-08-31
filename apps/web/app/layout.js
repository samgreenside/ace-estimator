
export const metadata = { title: 'ACE Quickstart (JS)', description: 'Advanced Coatings Estimator' }
export default function RootLayout({ children }) {
  return (<html lang="en"><body style={{background:'#0b1d1d',color:'#e8f0ef',fontFamily:'ui-sans-serif'}}>
    <div style={{maxWidth:960,margin:'0 auto',padding:'24px'}}>{children}</div>
  </body></html>)
}
