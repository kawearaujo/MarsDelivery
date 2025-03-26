"use client"

import { useState } from "react";
import Link from "next/link";
export default function Menu() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <nav className="pb-4 border-b border-gray-600 mb-4">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-bold sm:text-center md:text-left font-Montserrat">X-Wing</h2>
            <h4 className="text-azul1 font-bold font-Montserrat hidden md:block">Delivery 24h</h4>
          </div>
        </Link>

        {/* Botão Hambúrguer (aparece apenas no mobile) */}
        <button
          onClick={() => setMenuAberto(!menuAberto)}
          className="md:hidden p-2 text-azul2"
        >
          {menuAberto ? 
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
        
          : 
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
        
          }
        </button>

        {/* Menu - Esconde no mobile e aparece no desktop */}
        <ul className="hidden md:flex gap-4">
          <li>
            <Link href="/" className="hover:text-white hover:bg-laranja p-1 rounded-md transition">
              Início
            </Link>
          </li>
          <li>
            <Link href="/add" className="hover:text-white hover:bg-laranja p-1 rounded-md transition">
              Cadastrar
            </Link>
          </li>
          <li>
            <Link href="/view" className="hover:text-white hover:bg-laranja p-1 rounded-md transition">
              Visualizar
            </Link>
          </li>
        </ul>
      </div>

      {/* Menu Responsivo - aparece apenas no mobile quando aberto */}
      {menuAberto && (
        <ul className="flex flex-col items-center gap-4 mt-4 md:hidden bg-gray-800 p-4 rounded-md fixed  w-[70%]">
          <li>
            <Link href="/" className="text-white hover:bg-laranja p-2 rounded-md block w-full text-center" onClick={() => setMenuAberto(false)}>
              Início
            </Link>
          </li>
          <li>
            <Link href="/add" className="text-white hover:bg-laranja p-2 rounded-md block w-full text-center" onClick={() => setMenuAberto(false)}>
              Cadastrar
            </Link>
          </li>
          <li>
            <Link href="/view" className="text-white hover:bg-laranja p-2 rounded-md block w-full text-center" onClick={() => setMenuAberto(false)}>
              Visualizar
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}