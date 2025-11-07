import SidebarLeft from "../components/SidebarLeft"
import type { AppProps } from "next/app"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <SidebarLeft />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp