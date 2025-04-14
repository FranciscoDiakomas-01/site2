import React, { useState, useEffect } from "react";
import "./Palestrantes.css";
import "../../CECCIC/animations.css";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { FaUser, FaPhone, FaUsers } from "react-icons/fa";
import Sauré_Baldé from "../../../images/WhatsApp Image 2025-04-14 at 09.31.17.jpeg";
import PhD_Jean_Karim_Coly from "../../../images/WhatsApp Image 2025-04-14 at 09.31.09 (1).jpeg";
import Ph_D_João_Salm from "../../../images/WhatsApp Image 2025-04-14 at 09.31.09 (2).jpeg";
import Patricia_Lobo from "../../../images/WhatsApp Image 2025-04-14 at 09.31.09 (3).jpeg";
import João_Kanda from "../../../images/WhatsApp Image 2025-04-14 at 09.31.09.jpeg";
import Janealle_Neri from "../../../images/WhatsApp Image 2025-04-14 at 09.31.10 (1).jpeg";
import Eng_Horacio_Pina_Prata from "../../../images/WhatsApp Image 2025-04-14 at 09.31.11 (1).jpeg";
import Dra_Alice_dos_Anjos from "../../../images/WhatsApp Image 2025-04-14 at 09.31.12.jpeg";
import Dra_Catarina_Munguambe from "../../../images/WhatsApp Image 2025-04-14 at 09.31.13 (1).jpeg";
import Barbara_Andrade from "../../../images/WhatsApp Image 2025-04-14 at 09.31.14.jpeg";
import Sr_Jefferson_Olivereira from "../../../images/WhatsApp Image 2025-04-14 at 09.31.15.jpeg";
import Comendador_José_Ferreira from "../../../images/WhatsApp Image 2025-04-14 at 09.31.16.jpeg";
import im2 from "../../../images/WhatsApp Image 2025-04-14 at 09.31.17.jpeg";
import im23 from "../../../images/WhatsApp Image 2025-04-14 at 09.31.18.jpeg";
import im24 from "../../../images/WhatsApp Image 2025-04-14 at 09.31.23.jpeg";

// Dados dos palestrantes
const palestrantes = [
  {
    id: 1,
    nome: "Sauré Baldé",
    cargo: "Presidente da Assembleia Nacional",
    instituicao: "Guiné-Bissau",
    imagem: Sauré_Baldé,
  },
  {
    id: 2,
    nome: "PhD. Jean Karim Coly",
    cargo: "Especialista em Cooperação Internacional",
    instituicao: "Instituto de Relações Internacionais",
    imagem: PhD_Jean_Karim_Coly,
  },
  {
    id: 3,
    nome: "Ph.D. João Salm",
    cargo: "Consultor de Desenvolvimento Sustentável",
    instituicao: "ONG Global Impact",
    imagem: Ph_D_João_Salm,
  },
  {
    id: 4,
    nome: "Patricia Lobo",
    cargo: "Pesquisadora em Economia Global",
    instituicao: "Centro de Estudos Econômicos",
    imagem: Patricia_Lobo,
  },
  {
    id: 5,
    nome: "João Kanda",
    cargo: "Especialista em Políticas Públicas",
    instituicao: "Instituto de Governança",
    imagem: João_Kanda,
  },
  {
    id: 6,
    nome: "Janealle Neri",
    cargo: "Especialista em Direito Internacional",
    instituicao: "Universidade de Lisboa",
    imagem: Janealle_Neri,
  },
  {
    id: 7,
    nome: "Eng. Horacio Pina Prata",
    cargo: "Engenheiro Civil",
    instituicao: "Empresa de Construção",
    imagem: Eng_Horacio_Pina_Prata,
  },
  {
    id: 8,
    nome: "Dra. Alice dos Anjos",
    cargo: "Médica",
    instituicao: "Hospital Central",
    imagem: Dra_Alice_dos_Anjos,
  },
  {
    id: 9,
    nome: "Dra. Catarina Munguambe",
    cargo: "Pesquisadora",
    instituicao: "Instituto de Pesquisa",
    imagem: Dra_Catarina_Munguambe,
  },
  {
    id: 10,
    nome: "Barbara Andrade",
    cargo: "Especialista em Comunicação",
    instituicao: "Agência de Comunicação",
    imagem: Barbara_Andrade,
  },
  {
    id: 11,
    nome: "Sr. Jefferson Olivereira",
    cargo: "Consultor",
    instituicao: "Empresa de Consultoria",
    imagem: Sr_Jefferson_Olivereira,
  },
  {
    id: 12,
    nome: "Comendador José Ferreira",
    cargo: "Presidente do CECCIC",
    instituicao: "CECCIC",
    imagem: Comendador_José_Ferreira,
  },
  {
    id: 12,
    nome: "Comendador José Ferreira",
    cargo: "Presidente do CECCIC",
    instituicao: "CECCIC",
    imagem: im2,
  },
  {
    id: 12,
    nome: "Comendador José Ferreira",
    cargo: "Presidente do CECCIC",
    instituicao: "CECCIC",
    imagem: im23,
  },
  {
    id: 12,
    nome: "Comendador José Ferreira",
    cargo: "Presidente do CECCIC",
    instituicao: "CECCIC",
    imagem: im24,
  },
];

const Palestrantes: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [formData, setFormData] = useState({
    nome: "",
    sobrenome: "",
    modalidade: "presencial",
    numInscritos: "1",
    telefone: "",
  });

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % palestrantes.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + palestrantes.length) % palestrantes.length
    );
  };

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isAutoPlaying) {
      interval = setInterval(nextSlide, 5000); // Muda a cada 5 segundos
    }
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isAutoPlaying]);

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const body = {
      name: formData.nome,
      lastname: formData.sobrenome,
      telefone: formData.telefone,
      peoples: formData.numInscritos,
    };
    const response = await fetch("http://localhost:8080/inscrito", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    if (data.error) {
      alert(data.error);
    } else {
      const id = data as { id: number }[];
      console.log(id[0].id);
      alert(`Código da Inscrição ${id[0].id}`);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="palestrantes-container">
      <div className="palestrantes-header">
        <h1>Nossos Palestrantes</h1>
        <p>
          Conheça os especialistas que participarão da Cimeira Internacional
        </p>
      </div>

      <div
        className="carousel-containerPP"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <button className="carousel-button prev" onClick={prevSlide}>
          <HiChevronLeft />
        </button>

        <div className="carousel-wrapperPP">
          {palestrantes.map((palestrante, index) => (
            <div
              key={palestrante.id}
              className={`carousel-slide ${
                index === currentIndex ? "active" : ""
              }`}
            >
              <div className="palestrante-card">
                <div className="palestrante-imagem">
                  <img src={palestrante.imagem} alt={palestrante.nome} />
<<<<<<< HEAD
                </div>{" "}
                <div className="palestrante-info">
                  <strong className="palestrante-nome ">
                    {palestrante.nome}
                  </strong>
                  <p className="palestrante-instituicao">
                    {palestrante.instituicao}
                  </p>
                  <p className="palestrante-cargo">{palestrante.cargo}</p>
=======
>>>>>>> 35ad08511e1fc5f74ef3688334b5aea0ba705061
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="carousel-button next" onClick={nextSlide}>
          <HiChevronRight />
        </button>
      </div>

      <div className="carousel-indicators">
        {palestrantes.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>

      <div className="inscricao-section" id="inscrever">
        <div className="inscricao-content">
          <div className="inscricao-promo">
            <h2>Participe da Cimeira Internacional</h2>
            <p className="preco">Apenas 75€</p>
            <ul className="beneficios">
              <li>✓ Acesso a todas as palestras</li>
              <li>✓ Material didático exclusivo</li>
              <li>✓ Certificado de participação</li>
              <li>✓ Networking com especialistas</li>
            </ul>
            <p className="vagas">
              Vagas limitadas! Garanta sua participação agora.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="inscricao-form">
            <h3>Faça sua Inscrição</h3>

            <div className="form-group">
              <FaUser className="form-icon" />
              <input
                type="text"
                name="nome"
                placeholder="Nome"
                value={formData.nome}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <FaUser className="form-icon" />
              <input
                type="text"
                name="sobrenome"
                placeholder="Sobrenome"
                value={formData.sobrenome}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <FaUsers className="form-icon" />
              <input
                type="number"
                name="numInscritos"
                min="1"
                placeholder="Número de participantes"
                value={formData.numInscritos}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <FaPhone className="form-icon" />
              <input
                type="tel"
                name="telefone"
                placeholder="Telefone"
                value={formData.telefone}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="submit-button">
              Inscrever-se Agora
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Palestrantes;
