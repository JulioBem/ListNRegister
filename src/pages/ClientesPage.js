// pages/ClientesPage.js
import React, { useState } from "react";
import FormularioCadastro from "../components/FormularioCadastro";
import ListaClientes from "../components/ListaClientes";
import SearchBar from "../components/SearchBar";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import ClientInfoModal from "../components/ClientInfoModal";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 22px;
`;

const ClientesPage = () => {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isClientInfoModalOpen, setIsClientInfoModalOpen] = useState(false);
  const [currentClientView, setCurrentClientView] = useState({});
  console.log(
    "🚀 ~ ClientesPage ~ isClientInfoModalOpen:",
    isClientInfoModalOpen
  );

  const openRegisterModal = () => {
    setIsRegisterModalOpen(true);
  };

  const closeRegisterModal = () => {
    setIsRegisterModalOpen(false);
  };

  const openClientInfoModal = (cliente) => {
    setCurrentClientView(cliente);
    setIsClientInfoModalOpen(true);
  };

  const closeClientInfoModal = () => {
    setIsClientInfoModalOpen(false);
  };

  return (
    <PageContainer>
      <NavBar />

      <SearchBar creationTarget={"Cliente"} openModal={openRegisterModal} />
      <ListaClientes
        openModal={openClientInfoModal}
        closeModal={closeClientInfoModal}
        isOpen={isClientInfoModalOpen}
      />
      <FormularioCadastro
        isOpen={isRegisterModalOpen}
        closeModal={closeRegisterModal}
      />
      <ClientInfoModal
        isOpen={isClientInfoModalOpen}
        closeModal={closeClientInfoModal}
        cliente={currentClientView}
      />
    </PageContainer>
  );
};

export default ClientesPage;
