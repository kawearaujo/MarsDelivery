"use client"/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import Menu from "@/components/Menu";
import Card from "@/components/Card";


export default function Visualizar() {
  const [enderecos, setEnderecos] = useState<{ planeta: string; dados: any }[]>([]);
  const [dadosDoCard, setDadosDoCard] = useState<any>(null);
  const receberEndereco = (planeta: string, endereco: any) => {

    setDadosDoCard({ planeta, endereco });
    console.log(dadosDoCard)
  };
  useEffect(() => {
    const dadosSalvos = JSON.parse(localStorage.getItem("enderecos") || "[]");
    setEnderecos(dadosSalvos);
  }, []);
  
  return (
    <>
      <div className="base">
        <div className="p-10 h-full bg-creme rounded-md">
          <Menu />
          <div className="w-full justify-center  ">
            {/* <div className=""><AddressForm /></div> */}
            {/* Exibir Endereços Cadastrados */}
            <div className="mt-6">
              <h3 className="text-xl font-semibold">Endereços Cadastrados</h3>
              <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 overflow-y-auto h-[70vh] md:h-[70vh] lg:h-[60vh] shadow-xl">
                {enderecos.length === 0 ? (
                    <p className="text-gray-500 text-center">Nenhum endereço cadastrado.</p>
                  ) : (
                enderecos.map((item, index) => (
                  
                  <Card passarDados={receberEndereco} key={index} planeta={item.planeta} dados={item.dados} index={index}></Card>
                  // Card(item.dados,index)
                  // <li key={index} className="p-3 bg-white border rounded shadow-sm">
                  //   🌍 <strong>{item.planeta}</strong>: {JSON.stringify(item.dados)}
                  // </li>
                )))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
