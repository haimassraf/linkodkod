import { Outlet } from "react-router"

const LandingPage = () => {
  return (<>
    <main>
      <h1>Welcome to Linkodkod Project</h1>
      <Outlet />
    </main>
  </>
  )
}

export default LandingPage