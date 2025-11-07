import SidebarLeft from "../components/SidebarLeft/SidebarLeft"
import Dashboard from "../components/Dashboard/Dashboard"
import VehicleRegistry from '../components/VehicleRegistry/VehicleRegistry'
import MaintenanceRegistry from '../components/MaintenanceRegistry/MaintenanceRegistry'
import VehicleStatus from '../components/VehicleStatus/VehicleStatus'
import type { AppProps } from "next/app"
import "../styles/globals.css"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      {/* Sidebar - 30% */}
      <div style={{ width: '20vw', minWidth: '250px' }}>
        <SidebarLeft />
      </div>
      
      {  }
      <main style={{ 
        flex: 1, 
        padding: '10px',
        width: '70vw'
      }}>
        <Dashboard />
          <VehicleRegistry />
            <MaintenanceRegistry />
              <VehicleStatus />

        <Component {...pageProps} />
      </main>
    </div>
  )
}

export default MyApp