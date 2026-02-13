
import { Outlet } from "react-router-dom";
import Header from "../components/header"; 

const AppLayout = () => {
  return (
    <div>
       <Header />
      <main className = "min-h-screen container">
        
        {/*Header */}
        <Outlet/>
        {/*body */}
      </main>

<div className="p-10 text-center bg-gray-800 mt-10">
  © {new Date().getFullYear()} Linkora — Built with ❤️ by Rimjhim Verma
</div>

      {/*footer */}
    </div>
  )
}

export default AppLayout;