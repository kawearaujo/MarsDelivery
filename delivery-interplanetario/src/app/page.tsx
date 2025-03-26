"use client"
// import AddressForm from "@/components/AddressPlanetForm";
import Menu from "@/components/Menu";
import Mars from "@/components/Mars";
import Earth from "@/components/Earth";
import image from "@/terraMarte.png";
import fundo from "@/fundoo.png";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="base">
        
        <div className="p-10 h-full bg-creme rounded-md bg-[url('../fundooo.png')] bg-cover bg-bottom bg-">
          
          <Menu />
          <div className="sm:block md:flex lg:flex  w-full justify-center ">
            <div className="sm:block md:block lg:flex  h-[50vh] overflow-hidden">
              <Link href="/view">
                <div className="flex align-middle justify-center">
                  <Mars />
                  <Earth />
                </div>
              </Link>
            </div>
          </div>
            <div className="text-center p-5">
                <div>
                  <span className="text-4xl font-bold font-Montserrat">TECNOLOGIA SEM FRONTEIRAS</span>
                </div>
                  
                <span className="text-3xl font-Montserrat" >Entrega sem limites!</span>
            </div>
          
        </div>
      </div>
    </>
  );
}
