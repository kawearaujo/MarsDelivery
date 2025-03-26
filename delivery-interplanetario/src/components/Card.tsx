"use client"
import { useState,useEffect} from "react";
import terra from "@/planeta-terra.png"
import marte from "@/marte.png"

export default function Card(props:{dados: any ,index:number,planeta:string, passarDados: (planeta: string, endereco: any) => void }){
let srcPlanet:string;
  if (props.planeta=="Terra"){
    srcPlanet=terra.src;
  }else{
    srcPlanet=marte.src;
  }
  const handleClick = () => {
    
    props.passarDados(props.planeta, props.dados); // Envia o planeta e dados para o pai
  };



  return (
    <><button onClick={handleClick}>
      <div key={props.index}  className="border border-azul2 h-40 md:h-40 p-3 rounded-md m-4 mx-6 hover:border-azul0">
            <div className="">
                <div>
                  {/* Topo */}
                    <div className="flex">
                      
                       <img src={srcPlanet} alt="" /> 
                       <span className="w-full text-center font-bold font-Montserrat">{props.planeta}</span>
                    </div>
                    <div className="flex flex-col text-left px-4">
                      {props.planeta=="Terra"?
                      <span className="font-Montserrat">•Rua: {props.dados.rua}, Nº: {props.dados.numero}, Bairro: {props.dados.bairro}, {props.dados.cidade}/{props.dados.estado}</span>
                      :<span className="font-Montserrat">•Numero do lote: {props.dados.lote}</span>}
                      <span className="font-Montserrat"> •{props.dados.telefone}</span>
                    </div>
                    <div>
                      {/* <span className="font-Montserrat-300">{props.dados.nome}</span> */}
                    </div>
                </div>

            </div>
      </div></button>
    </>
  );
}
{/* 
  
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
</svg>

 w-[20rem]  p-2 shadow-lg rounded-lg overflow-hidden bg-violet-100
 
 
 */}