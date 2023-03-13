import React from 'react';
import './Inicio.module.scss';

export default function Inicio() {
  return (
    <div className="container">
      <h1>Avaliação técnica prática frontend</h1>
      <h2>Atividade:</h2>
      <p>desenvolver uma aplicação CRUD utilizando react com redux. A aplicação será integrada com a API Fake Store, que simula requisições a um servidor backend. Dessa forma, as informações de usuários não serão salvas no backend, mas serão simuladas pela API.</p>
      <h2>Requisitos</h2>
      <ul>
        <li>ReactJS: biblioteca JavaScript para criação de interfaces de usuário</li>
        <li>Redux: gerenciador de estado para armazenar e gerenciar dados da aplicação</li>
        <li>Typescript: linguagem de programação que adiciona tipagem estática ao JavaScript</li>
      </ul>
      <h2>Telas</h2>
      <ul>
        <li>Lista de usuários: página que exibe a lista de usuários cadastrados</li>
        <li>Cadastro de usuário: página para cadastrar um novo usuário</li>
        <li>Edição de usuário: página para editar um usuário já cadastrado</li>
        <li>Deletar usuário: função para remover um usuário da lista</li>
      </ul>
      <p>Com a integração da API e o uso do Redux para gerenciamento de estado, a aplicação terá um fluxo de dados consistente e organizado, permitindo uma melhor escalabilidade e manutenção da aplicação. Além disso, o Typescript trará mais segurança e robustez ao código, evitando erros comuns de tipagem e tornando o código mais legível.</p>
    </div>
  );
}
