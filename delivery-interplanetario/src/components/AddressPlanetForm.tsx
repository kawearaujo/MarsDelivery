"use client";
import { useState, useEffect } from "react";

interface CadastroEnderecoProps {
  onChangePlaneta: (planeta: string) => void;
}

export default function AddressPlanetForm() {
  const [planeta, setPlaneta] = useState("Terra");
  
  const [formData, setFormData] = useState({
    local:"",
    nome: "",
    telefone: "",
    email: "",
    rua: "",
    numero: "",
    bairro: "",
    cidade: "",
    estado: "",
    lote: "",
  });

  const [enderecos, setEnderecos] = useState<{ planeta: string; dados: any }[]>([]);

  useEffect(() => {
    const dadosSalvos = JSON.parse(localStorage.getItem("enderecos") || "[]");
    setEnderecos(dadosSalvos);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Criando o objeto a ser salvo
    const novoEndereco = {
      planeta,
      dados: planeta === "Terra"
        ? {
            nome: formData.nome,
            telefone: formData.telefone,
            email: formData.email,
            local:formData.local,
            rua: formData.rua,
            numero: formData.numero,
            bairro: formData.bairro,
            cidade: formData.cidade,
            estado: formData.estado,
          }
        : {
            nome: formData.nome,
            telefone: formData.telefone,
            email: formData.email,
            local:formData.local,
            lote: formData.lote,
          },
    };

    // Atualiza o localStorage
    const enderecosAtualizados = [...enderecos, novoEndereco];
    localStorage.setItem("enderecos", JSON.stringify(enderecosAtualizados));
    setEnderecos(enderecosAtualizados);

    // Limpa o formulário
    setFormData({
      nome: "",
      telefone: "",
      email: "",
      local:"",
      rua: "",
      numero: "",
      bairro: "",
      cidade: "",
      estado: "",
      lote: "",
    });
  };

  return (
    <div className="max-w-xl sm:w-[100vw] md:w-[80vw] mx-auto sm:p-2 md:p-2 lg:p-6  rounded-lg shadow-lg ">
      <h2 className="text-2xl font-bold mb-4">Cadastro de Endereço</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Selecionar Planeta */}
        <label className="block font-semibold">
          Planeta:
          <select name="planeta" value={planeta} onChange={(e) => setPlaneta(e.target.value)} className="block w-full p-2 mt-1 border rounded">
            <option value="Terra">Terra</option>
            <option value="Marte">Marte</option>
          </select>
        </label>

        {/* Campos Comuns */}
        <div className="flex justify-between gap-4">
          <div className="w-full">
            <label className="block font-semibold">Nome Completo:</label>
            <input type="text" name="nome" value={formData.nome} onChange={handleChange} placeholder="Nome" className="w-full p-2 border rounded" required />
          </div>
          <div>
            <label className="block font-semibold">Local:</label>
            <input type="text" name="local" value={formData.local} onChange={handleChange} placeholder="Local" className="w-full p-2 border rounded" required />
          </div>

        </div>
        <div className="flex justify-between gap-4">
          <div className="w-full">
            <label className="block font-semibold">Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="E-mail" className="w-full p-2 border rounded" required />
          </div>
          <div>
            <label className="block font-semibold">Telefone:</label>
            <input type="tel" name="telefone" value={formData.telefone} onChange={handleChange} placeholder="Telefone" className="w-full p-2 border rounded" required />
          </div>
        </div>

        

        {/* Campos da Terra */}
        {planeta === "Terra" && (
          <>
            <div className="flex justify-between gap-4">
              <div>
                <label className="block font-semibold">Rua:</label>
                <input type="text" name="rua" value={formData.rua} onChange={handleChange} placeholder="Rua" className="w-full p-2 border rounded" required />

              </div>
              <div>
                <label className="block font-semibold">Numero:</label>
                <input type="text" name="numero" value={formData.numero} onChange={handleChange} placeholder="Número" className="w-full p-2 border rounded" required />

              </div>
              <div>
                <label className="block font-semibold">Bairro:</label>
                <input type="text" name="bairro" value={formData.bairro} onChange={handleChange} placeholder="Bairro" className="w-full p-2 border rounded" required />

              </div>
            </div>
            <div className="flex justify-between gap-4">
              <div className="w-full">
                <label className="block font-semibold">Cidade:</label>
                <input type="text" name="cidade" value={formData.cidade} onChange={handleChange} placeholder="Cidade" className="w-full p-2 border rounded" required />

              </div>
              <div className="w-full">
                <label className="block font-semibold">Estado:</label>
                <input type="text" name="estado" value={formData.estado} onChange={handleChange} placeholder="Estado" className="w-full p-2 border rounded" required />

              </div>

            </div>
            
          </>
        )}

        {/* Campos de Marte */}
        {planeta === "Marte" && (
          <div>
            <label className="block font-semibold ">Numero do lote:</label>
            <input type="text" name="lote" value={formData.lote} onChange={handleChange} placeholder="Número do Lote (4 dígitos)" className="w-full p-2 border rounded" pattern="\d{4}" maxLength={4} required />
          </div>
        )}
        <input type="hidden" name="planeta" value={planeta} />
        <div className="flex gap-6 mt-10 justify-center">
        {/* <button type="reset" className="w-full bg-gray-500 text-white p-2 rounded hover:bg-gray-700 transition">
          Cancelar
        </button> */}
        <button type="submit" className="w-[60%] bg-laranja  text-white p-2 rounded hover:bg-laranja1 transition ">
          Cadastrar Endereço
        </button>

        </div>
      </form>

      {/* Exibir Endereços Cadastrados */}
      {/* <div className="mt-6">
        <h3 className="text-xl font-semibold">Endereços Cadastrados</h3>
        <ul className="mt-2 space-y-2">
          {enderecos.map((item, index) => (
            <li key={index} className="p-3 bg-white border rounded shadow-sm">
              🌍 <strong>{item.planeta}</strong>: {JSON.stringify(item.dados)}
            </li>
          ))}
        </ul>
      </div> */}
    </div>
  );
}