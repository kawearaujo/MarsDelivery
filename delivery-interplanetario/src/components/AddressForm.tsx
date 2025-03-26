"use client"
import { useState, useRef } from "react";


export default function AddressForm() {
    const [address, setAddress] = useState("");
   
    const handleSave = () => {
    if (address.length === 4 && !isNaN(Number(address))) {
      localStorage.setItem(`address-${Date.now()}`, address);
      setAddress("");
    } else {
      alert("O endereço deve ter 4 dígitos numéricos.");
    }
  };

  return (
    <div className="sm:items-center md:items-left py-6 border-r border-gray-200">
      <div className="sm:w-full md:w-full lg:w-[50vw] ">
        <div className=" flex p-2 rounded-lg ">
           
           <form className="" onSubmit={handleSave}>
            <label >Nome Completo: *</label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="insira 4 digitos"
              className="pl-2 pr-2 w-full border border-gray-200 rounded-lg"
              maxLength={4}
            />
            
            <button type="submit" className="w-30 m-4 border border-violeta2">
              Cadastrar
            </button>
            
          </form>
        </div>
      </div>
    </div>
  );
}