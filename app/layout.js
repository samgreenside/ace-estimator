
import "./globals.css";
export const metadata = { title: "ACE", description: "Advanced Coatings Estimator" };
export default function RootLayout({ children }){
  return (
    <html lang="en">
      <body className="min-h-screen">
        <div className="max-w-[1200px] mx-auto p-6">{children}</div>
      </body>
    </html>
  );
}
