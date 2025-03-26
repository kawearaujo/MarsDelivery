"use client"
import AddressForm from "@/components/AddressPlanetForm";
import Menu from "@/components/Menu";
import image from "@/terraMarte.png";

export default function Cadastrar() {
  
  return (
    <>
      <div className="base ">
      <div className="p-10 h-full bg-creme rounded-md">
          <Menu />
          <div className="sm:block md:flex gap-4 w-full justify-center">
            <div className=""><AddressForm /></div>
            <div className="h-0 md:h-[70vh]">
              {/* <Planet /> */}
              <img className="h-0 md:h-full invisible md:visible object-cover  "  src={image.src} alt="" />
            </div>
          </div>
        </div>
      </div>
          
    </>
  );
}