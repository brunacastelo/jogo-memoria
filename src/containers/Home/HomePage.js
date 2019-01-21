import React from "react";
import { Dashboard, DashboardMenu, DashboardButton } from "../components";

const HomePage = () => {
  return (
    <Dashboard>
      <DashboardMenu title="Jogo de Memória">
        <DashboardButton to="/game">INICIAR JOGO</DashboardButton>
      </DashboardMenu>
    </Dashboard>
  );
};

export default HomePage;
