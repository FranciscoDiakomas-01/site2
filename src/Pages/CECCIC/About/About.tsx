import React from "react";
import { motion } from "framer-motion";
import "./About.css";
import banner1 from '../../../images/bannerUm.jpeg'
import banner2 from "../../../images/WhatsApp Image 2025-04-14 at 09.31.15.jpeg";
import banner3 from "../../../images/WhatsApp Image 2025-04-14 at 09.31.14.jpeg";

import banner4 from "../../../images/WhatsApp Image 2025-04-14 at 09.31.23.jpeg";
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const AboutSection: React.FC = () => {
  return (
    <div>
      <div className="container">
        <div className="text">
          <div className="titles">
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
            >
              O que esperar?
            </motion.h1>
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
            >
              A Cimeira Internacional
            </motion.h2>
          </div>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            A Europa e África, trabalharam num espírito de parceria para
            encontrar soluções comuns para os desafios de interesse mútuo.
            Junta-se a nós sobre alevanca da potencialidades lusófonas em
            aprender facilmente o Inglês e Participar na Tomada das Decisões
            para abertura do Mercado de Emprego para a CPLP).
          </motion.p>
        </div>
        <motion.div
          className="image"
          variants={slideInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          style={{
            position: "relative",
          }}
        >
          <img
            src={banner2}
            id="banner1"
            className="special"
            style={{
              width: "200px",
              height: "250px",
              objectFit: "cover",
              border: "solid 1px #fff",
              padding: "10px",
              marginTop: "-100px",
            }}
          />
          <img
            src={banner1}
            id="banner2"
            style={{
              width: "200px",
              height: "250px",
              objectFit: "cover",
              padding: "10px",
              border: "solid 1px #fff",
              marginTop: "100px",
              marginLeft: "20px",
            }}
          />
        </motion.div>
      </div>

      <div className="stats-section">
        <motion.h3
          className="ceccic-title"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          Ceccic
        </motion.h3>
        <div className="stats-content">
          <div className="stats-text">
            <motion.h2
              className="bordered"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              style={{
                fontSize: "50px",
              }}
            >
              11 Palestrantes
            </motion.h2>
            <motion.h2
              className="bordered"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              style={{
                fontSize: "50px",
              }}
            >
              2x Networking e Indústria
            </motion.h2>
          </div>
          <motion.div
            className="image1"
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            style={{
              position: "relative",
            }}
          >
            {" "}
            <img
              src={banner3}
              id="banner1"
              style={{
                width: "200px",
                height: "250px",
                objectFit: "cover",
                padding: "10px",
                position: "absolute",
                marginLeft: "-140px",
                zIndex: "1",
                border: "solid 1px #000",
              }}
            />
            <img
              src={banner4}
              id="banner1"
              style={{
                width: "200px",
                height: "250px",
                objectFit: "cover",
                padding: "10px",
                zIndex: "2",
                position: "relative",
                marginTop: "90px",
                border: "solid 1px #000",
              }}
            />
          </motion.div>
        </div>
      </div>

      <div className="stats-section2">
        <motion.h3
          className="ceccic-title2"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          Ceccic
        </motion.h3>
        <div className="stats-content2">
          <div className="stats-text2">
            <motion.h2
              className="bordered2"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
            >
              4 Dias de motivação
            </motion.h2>
          </div>
          <motion.div
            className="image2"
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <img
              src={banner2}
              id="banner1"
              style={{
                width: "200px",
                height: "250px",
                objectFit: "cover",
                padding: "10px",
                position: "absolute",
                marginLeft: "-240px",
                zIndex: "1",
                border: "solid 1px #fff",
              }}
            />
            <img
              src={banner1}
              style={{
                width: "200px",
                height: "250px",
                objectFit: "cover",
                padding: "10px",
                zIndex: "2",
                position: "relative",
                marginTop: "90px",
                border: "solid 1px #fff",
              }}
            />
          </motion.div>
        </div>
      </div>

      <div className="stats-section3">
        <motion.h3
          className="ceccic-title3"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          Ceccic
        </motion.h3>
        <div className="stats-content3">
          <div className="stats-text3">
            <motion.h2
              className="bordered3"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
            >
              5 Topicos modernos
            </motion.h2>
          </div>
          <motion.div
            className="image3"
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            {" "}
            <img
              src={banner3}
              id="banner1"
              style={{
                width: "200px",
                height: "250px",
                objectFit: "cover",
                padding: "10px",
                position: "absolute",
                marginLeft: "-150px",
                zIndex: "1",
                border: "solid 1px #000",
              }}
            />
            <img
              src={banner4}
              style={{
                width: "200px",
                height: "250px",
                objectFit: "cover",
                padding: "10px",
                zIndex: "2",
                position: "relative",
                marginTop: "90px",
                border: "solid 1px #000",
              }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
