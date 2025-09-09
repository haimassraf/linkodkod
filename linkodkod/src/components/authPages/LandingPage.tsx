import { Outlet } from "react-router"

const LandingPage = () => {
  return (<>
    <h1>Welcome to Linkodkod Project</h1>
    <main>
      <Outlet />
    </main>
  </>
  )
}

export default LandingPage