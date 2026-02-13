import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

import {useState} from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
 const [longUrl,setLongUrl] = useState();
 const navigate = useNavigate()

 const handleShorten = (e) =>{
    e.preventDefault()
    if(longUrl) navigate(`/auth?createNew=${longUrl}`);
 };

  return (
    <div className="flex flex-col items-center justify-center text-center px-4">

      {/* Heading */}
      <h2 className="my-10 sm:my-16
                     text-4xl sm:text-6xl
                     text-white
                     font-extrabold
                     max-w-4xl">
        The only URL Shortener <br />
        you’ll ever need!
      </h2>

      {/* Form */}
      <form 
      onSubmit={handleShorten}
      className="flex flex-col sm:flex-row
                       items-center
                       w-full md:w-1/2
                       gap-3">

         <Input
        type= "url"
        placeholder="Paste your long URL here..."
        onChange = {(e)=>setLongUrl(e.target.value)}
        className = "h-full flex-1 py-4 px-4"
        
        />
<Button
  type="submit"
  className=" h-12 w-full sm:w-auto bg-gradient-to-r from-indigo-500 to-purple-600
             hover:scale-105 transition-all duration-200
             shadow-lg"
>
  Shorten!
</Button>
      </form>

      {/* Banner */}
      <img
        src="banner.jpg"
        alt="banner"
        className="w-full max-w-4xl my-12"
      />

     <Accordion type="multiple" 
     className="w-full md:px-11 text-left self-stretch">
 

        <AccordionItem value="item-1">
            <AccordionTrigger> 
              How Linkora Turns Long Links Into Smart Short URLs
                
                 </AccordionTrigger>
                 <AccordionContent>

                    Paste a long URL and Linkora instantly creates a compact,
shareable link. When someone visits the short link,
they’re seamlessly redirected to the original page.

                 </AccordionContent>
        </AccordionItem>


        <AccordionItem value="item-2">
            <AccordionTrigger> 
             Do I need an account to use the app?
                
                 </AccordionTrigger>
                 <AccordionContent>

                    Yes,Creating an account allows you to manage your URLs,
                    view analytics,and customize your short URLs.

                 </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
            <AccordionTrigger> 
             What analytics are available for my shortenend URls?
                
                 </AccordionTrigger>
                 <AccordionContent>

                    You can view the number of clicks,geolocations data of the clicks and device types(mobile/desktop)
                    for each of your shortened URLs.

                 </AccordionContent>
        </AccordionItem>
      </Accordion>

    </div>
  );
};

export default LandingPage;
