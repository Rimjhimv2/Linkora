
// import { Outlet } from "react-router-dom";
// import Header from "../components/header"; 

// const AppLayout = () => {
//   return (
//     <div>
//        <Header />
//       <main className = "min-h-screen container">
        
//         {/*Header */}
//         <Outlet/>
//         {/*body */}
//       </main>

// <div className="p-10 text-center bg-gray-800 mt-10">
//   © {new Date().getFullYear()} Linkora — Built with ❤️ by Rimjhim Verma
// </div>

//       {/*footer */}
//     </div>
//   )
// }

// export default AppLayout;


import { Outlet } from "react-router-dom";
import Header from "../components/header";

const AppLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">

      <Header />

      <main className="flex-1 flex justify-center px-4">
        <div className="w-full max-w-5xl">
          <Outlet />
        </div>
      </main>

      <footer className="p-8 text-center bg-gray-800">
        © {new Date().getFullYear()} Linkora — Built with ❤️ by Rimjhim Verma
      </footer>

    </div>
  );
};

export default AppLayout;
