import Styles from './DropDown.module.css'
import React, { useState } from "react";

function Dropdown() {
    // Definindo o estado para o item selecionado
    const [selectedOption, setSelectedOption] = useState("");
  
    // Função para lidar com a mudança na seleção
    const handleSelectChange = (event) => {
      setSelectedOption(event.target.value);
    };
  
    return (
      <div className={Styles.Dropdown}>
        <h3>Escolha uma opção:</h3>
        {/* Dropdown */}
        <select value={selectedOption} onChange={handleSelectChange}>
          <option value="" disabled>Selecione uma opção</option>
          <option value="opcao1">Opção 1</option>
          <option value="opcao2">Opção 2</option>
          <option value="opcao3">Opção 3</option>
        </select>
  
        {/* Exibe a opção selecionada */}
        {selectedOption && <p>Você selecionou: {selectedOption}</p>}
      </div>
    );
  }
  
  export default Dropdown;