import SidebarLeft from "../components/SidebarLeft"
import Dashboard from "../components/Dashboard"
import type { AppProps } from "next/app"
import "../styles/globals.css"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      {/* Sidebar - 30% */}
      <div style={{ width: '30vw', minWidth: '250px' }}>
        <SidebarLeft />
      </div>
      
      {  }
      <main style={{ 
        flex: 1, 
        padding: '20px',
        width: '70vw'
      }}>
        <Dashboard /> {}
        <Component {...pageProps} />
      </main>
    </div>
  )
}

export default MyApp