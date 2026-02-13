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
