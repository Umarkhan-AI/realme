import React from "react";
import Reactdom from "react-dom" ;
import './App.css'
import {Link} from "./link" ;
import { H1, H4  } from "./headings";
import { Button } from "./Button";
import { Para } from "./para";

const rootDiv = document.getElementById("root") ;
 
 
Reactdom.createRoot(rootDiv).render(
  <div>
    {/* Navbar */}
   <div className="navbar">
    <H1 name ="realme"/>
  <Link name = "realme smartphone" />
  <Link name = "narzo smartphone" />
  <Link name = "Audio" />
  <Link name = "Accessories" />
   </div>
   {/* Navbar */}
   {/* body */}
   <div>
       <img height={"350px"} width={"100%"} src="https://image01.realme.net/general/20241212/17339677184375522816ea05448759b75ff71ccb7f35a.jpg.webp" alt="" />
     <br /><br />
       <H1  name ="SmartPhones"/>

       <div className="main">
        <div className="m-1">
          <div className="m-1-1">
            <Button />
            <H1 name ="realme C75"/>
            <Para name="Dhulai Horai Hai" />
          </div>
          <div className="m-1-2">
            <img width={"100%"} src="https://image01.realme.net/general/20241212/1733967866096fa2982967549485db8c3259a0f9a1fe7.png.webp" alt="" />
          </div>
        </div>
        <div className="m-2">
        <div className="m-2-1">
        <Button />
            <H1 name ="realme 13 + 5G"/>
            <Para name="Speed to victory" />
        </div>
        <div className="m-2-2">
        <img width={"100%"} src="https://image01.realme.net/general/20241108/1731062061605d960daec82634da8ae53a2b5bba2b081.png.webp" alt="" />

        </div>
        </div>
       </div>

       <div className="main">
        <div className="m-1">
          <div className="m-1-1">
            <Button />
            <H1 name ="realme C75"/>
            <Para name="Dhulai Horai Hai" />
          </div>
          <div className="m-1-2">
            <img width={"100%"} src="https://image01.realme.net/general/20241212/1733967866096fa2982967549485db8c3259a0f9a1fe7.png.webp" alt="" />
          </div>
        </div>
        <div className="m-2">
        <div className="m-2-1">
        <Button />
            <H1 name ="realme 13 + 5G"/>
            <Para name="Speed to victory" />
        </div>
        <div className="m-2-2">
        <img width={"100%"} src="https://image01.realme.net/general/20241108/1731062061605d960daec82634da8ae53a2b5bba2b081.png.webp" alt="" />

        </div>
        </div>
       </div>
        <div className="main">
        <div className="m-1">
          <div className="m-1-1">
            <Button />
            <H1 name ="realme C75"/>
            <Para name="Dhulai Horai Hai" />
          </div>
          <div className="m-1-2">
            <img width={"100%"} src="https://image01.realme.net/general/20241212/1733967866096fa2982967549485db8c3259a0f9a1fe7.png.webp" alt="" />
          </div>
        </div>
        <div className="m-2">
        <div className="m-2-1">
        <Button />
            <H1 name ="realme 13 + 5G"/>
            <Para name="Speed to victory" />
        </div>
        <div className="m-2-2">
        <img width={"100%"} src="https://image01.realme.net/general/20241108/1731062061605d960daec82634da8ae53a2b5bba2b081.png.webp" alt="" />

        </div>
        </div>
       </div> 
       <div className="main">
        <div className="m-1">
          <div className="m-1-1">
            <Button />
            <H1 name ="realme C75"/>
            <Para name="Dhulai Horai Hai" />
          </div>
          <div className="m-1-2">
            <img width={"100%"} src="https://image01.realme.net/general/20241212/1733967866096fa2982967549485db8c3259a0f9a1fe7.png.webp" alt="" />
          </div>
        </div>
        <div className="m-2">
        <div className="m-2-1">
        <Button />
            <H1 name ="realme 13 + 5G"/>
            <Para name="Speed to victory" />
        </div>
        <div className="m-2-2">
        <img width={"100%"} src="https://image01.realme.net/general/20241108/1731062061605d960daec82634da8ae53a2b5bba2b081.png.webp" alt="" />

        </div>
        </div>
       </div> 
       <div className="main">
        <div className="m-1">
          <div className="m-1-1">
            <Button />
            <H1 name ="realme C75"/>
            <Para name="Dhulai Horai Hai" />
          </div>
          <div className="m-1-2">
            <img width={"100%"} src="https://image01.realme.net/general/20241212/1733967866096fa2982967549485db8c3259a0f9a1fe7.png.webp" alt="" />
          </div>
        </div>
        <div className="m-2">
        <div className="m-2-1">
        <Button />
            <H1 name ="realme 13 + 5G"/>
            <Para name="Speed to victory" />
        </div>
        <div className="m-2-2">
        <img width={"100%"} src="https://image01.realme.net/general/20241108/1731062061605d960daec82634da8ae53a2b5bba2b081.png.webp" alt="" />

        </div>
        </div>
       </div> 
<br /><br />
       <H1  name ="Accessories"/>

       <div className="main">
        <div className="m-1">
          <div className="m-1-1">
            <Button />
            <H1 name ="realme Buds"/>
            <Para name="Listen in full color" />
            <h5>Rs.4,999</h5>
          </div>
          <div className="m-1-2">
            <img width={"100%"} src="https://image01.realme.net/general/20240628/1719540050662f1db6cdfd9104e5896203287689d7d2d.png.webp" alt="" />
          </div>
        </div>
        <div className="m-2">
        <div className="m-2-1">
        <Button />
            <H1 name ="realme Buds Q"/>
            <Para name="Music Never Ends" />
             
            <h5>Rs.4,999</h5>
        </div>
        <div className="m-2-2">
        <img width={"100%"} src="https://image01.realme.net/general/20201111/1605080175371.jpg.webp" alt="" />

        </div>
        </div>
       </div> 
      
   </div>
   {/* body */}

   {/* footer */}

 
<div className="footer">
      <div className="f-1">
         <H4  name="Recommended"/>
         <p>realme C75</p>
         <p>realme 13+ 5G</p>
         <p>realme Note 60</p>
         <p>realme C61</p>
         <p>realme C65</p>
         <p>realme 12</p>
         <p>realme 12+ 5G</p>
      </div>
      <div className="f-2">
      <H4  name="Support"/>
      <p>FAQ</p>
      <p>Troubleshooting</p>
      </div>
      <div className="f-3">
      <H4  name="About realme"/>
      <p>Our Brand</p>
      <p>Newsroom</p>
      </div>
      <div className="f-4">
      <H4  name="Contact realme"/>
      <p>Whatsapp</p>
      <p>service.pk@realme</p>
      </div>
      <div className="f-5">
      <H4  name="04238048018"/>
      <p>09:30 - 18:00， MON - SAT <br />Exclude Holidays</p>
      </div>
</div>

 
     
   {/* footer */}
















  </div>
  
)