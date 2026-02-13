delete index.css
delte app.css

//starting m app.jsx ko esa rakho 
import './App.css'

function App() {
  
}

export default App

4-install shadcn ui
5 add tailwind and its configuration shadcn installation m vite m jakar dikhega
6-npm install tailwindcss @tailwindcss/vite
7 npx shadcn@latest init
8 Linkora@2026
9 supabase m project create kara then api key and url paste kara 
10 ab fir src mai db folder bnaya and supabase file bnayi and supabase m react select karke supabase ki utils copy kara 
11 install kro ye @supabase/supabase-js

12 np
m i react-router-dom


15 ye create kra src mai layouts folder mai app-layout.js file create kari wha 

const AppLayout = () => {
  return (
    <div>
      
      <main>

        {/*Header */}
        {/*body */}
      </main>

      {/*footer */}
    </div>
  )
}

export default AppLayout;


16 
fir app.jsx mai ye likho import { createBrowserRouter} from "react-router-dom"
import './App.css'
import AppLayout from "./layouts/app-layout"

const router = createBrowserRouter([

  element:<AppLayout/>,
  children:[
    {
    path: '/',
    element:<LandingPage/>
    }
  ]
])
function App() {
  return <div className = "text-2xl">this is rimjhim</div>
}

export default App

and src mai pages folder bnao and usme landing,js ,auth.jsx ,link.jsx,redirect-link.jsx,dashboard.jsx file bnao and rafce se likho

17)
hmamne app.jsx mai ye likha 
import { createBrowserRouter,RouterProvider} from "react-router-dom"
import './App.css'
import AppLayout from "./layouts/app-layout"
import Auth from "./pages/auth";
import Link from "./pages/link"
import RedirectLink from "./pages/redirect.link";
import Dashboard from "./pages/dashboard";
import LandingPage from "./pages/landing"
const router = createBrowserRouter([
  {
  path: "/", 
  element:<AppLayout/>,
  children:[
    {
    path: '/',
    element:<LandingPage/>
    },

     {
    path: '/dashboard',
    element:<Dashboard/>
    },

     {
    path: '/auth',
    element:<Auth/>
    },

     {
    path: '/link/:id',
    element:<Link/>
    },

     {
    path: '/:id',
    element:<RedirectLink/>
    }
  ]
}
])
function App() {
  return <RouterProvider  router= {router}/>
}

export default App
abhi bhi kuch visible nhi hoga kyokii render nhi kiya appa-layout file mai tohh waha 
main tag mai <Outlet/> add kro 


import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      
      <main>

        {/*Header */}
        <Outlet/>
        {/*body */}
      </main>

      {/*footer */}
    </div>
  )
}

export default AppLayout;

17 fir src mai components folder mai header.jsx file bnani hai 
usme import React from 'react'

const Header = () => {
  return (
    <nav>
<Link>
<img src = "/logo.png" className = "h-16" alt="Linkora logo"/>

</Link>

    </nav>
  )
}

export default Header
and ab ek cheez innstall krni hai 
npx shadcn@latest add button


18 
fir ye import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

const Header = () => {

  const navigate = useNavigate();

  return (
    <nav className="flex justify-between items-center p-4">

      <Link to="/">
        <img src="/logo.png" className="h-16" alt="Linkora logo"/>
      </Link>

      <div>
        <Button onClick={() => navigate("/auth")}>
          Login
        </Button>
      </div>

    </nav>
  );
};

export default Header;

es header ko render karo app-layout mai 

19 fir ye npx shadcn@latest add dropdown-menu

20
import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

const Header = () => {

  const navigate = useNavigate();
  const user = false;

  return (
    <nav className="flex justify-between items-center p-4">

      <Link to="/">
        <img src="/logo.png" className="h-16" alt="Linkora logo"/>
      </Link>

      <div>
        {!user ? 
        <Button onClick={() => navigate("/auth")}>
          Login
        </Button>
        :(
            <DropdownMenu>
  <DropdownMenuTrigger>
    Open
  </DropdownMenuTrigger>

  <DropdownMenuContent>

    <DropdownMenuLabel>
      My Account
    </DropdownMenuLabel>

    <DropdownMenuSeparator />

    <DropdownMenuItem>
      Profile
    </DropdownMenuItem>

    <DropdownMenuItem>
      Dashboard
    </DropdownMenuItem>

    <DropdownMenuItem>
      Billing
    </DropdownMenuItem>

    <DropdownMenuItem>
      Team
    </DropdownMenuItem>
    <DropdownMenuItem>
     Subscription
    </DropdownMenuItem>

    
  </DropdownMenuContent>
</DropdownMenu>

        )
}
      </div>

    </nav>
  );
};

export default Header;
21)npx shadcn@latest add avatar

22
import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

import { Avatar, AvatarImage, AvatarFallback } 
from "@/components/ui/avatar";
import { Link2Icon,LogOut } from "lucide-react";


const Header = () => {

  const navigate = useNavigate();
//   const user = false;
const user = true;


  return (
    <nav className="flex justify-between items-center p-4">

      <Link to="/">
        <img src="/logo.png" className="h-16" alt="Linkora logo"/>
      </Link>

      <div>
        {!user ? 
        <Button onClick={() => navigate("/auth")}>
          Login
        </Button>
        :(
            <DropdownMenu>
  <DropdownMenuTrigger className = "w-10 rounded-full overflow-hidden">
    

    <Avatar>

        <AvatarImage src = "https://github.com/shadcn.png"/>
        <AvatarFallback>RV</AvatarFallback>
    </Avatar>
  </DropdownMenuTrigger>

  <DropdownMenuContent>

    

    

    <DropdownMenuItem>
      Rimjhim Verma
    </DropdownMenuItem>

<DropdownMenuSeparator></DropdownMenuSeparator>
    

  

    <DropdownMenuItem>
        <Link2Icon className="mr-2 h-4 w-4"/>
    My Links
    </DropdownMenuItem>
    <DropdownMenuItem className= "text-red-400">
        <LogOut className = "mr-2 h-4 w-4"/>
     <span>
        Logout
     </span>
    </DropdownMenuItem>

    
  </DropdownMenuContent>
</DropdownMenu>

        )
}
      </div>

    </nav>
  );
};

export default Header;

23.  npx shadcn@latest add accordion

24 npx shadcn@latest add input






 


