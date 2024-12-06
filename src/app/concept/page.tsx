'use client'

import { useState } from "react";
import PneusModal from "./pneus-modal";
import Content from "./content";
import Scripts from "../components/scripts";

let key = "";

export default function Concept() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = () => setIsModalOpen(false);

  function open(value: string) {
    setIsModalOpen(true);
    key = value;
  }

  return (
    <>
    <body>
        <header>
          <Scripts></Scripts>
        </header>
        <div>
          <Content open={open} lockOverflow={isModalOpen}></Content>
        </div>
        <div>
            <PneusModal isOpen={isModalOpen} onClose={closeModal} dataKey={key}></PneusModal>
        </div>
      </body>
    </>
  );
}
