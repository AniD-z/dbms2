import React from "react";
import "./About.css";
import Infocards from "../Infocards/Infocards";

export default function About() {
  return (
    <section className="about-section ">
      <div className="about-container ">
        <div className="about-title title ff-tc "> About</div>
        <div className="about-info flex flex-col justify-evenly ">
          <div className="info-text text-white text-[24px]">
            <p>
              {" "}
              The Schemaverse is a space-based strategy game implemented entirely within a PostgreSQL database. Compete against other players using raw SQL commands to command your fleet. Or, if your PL/pgSQL-foo is strong, wield it to write AI and have your fleet command itself!
            </p>
            <p>
              Get ready to immerse yourself in the world of gaming like never
              before, connect with other passionate gamers, and have the time of
              your life at SV!
            </p>
          </div>
          <div className="hero-cards w-full">
            <div className="info-container flex flex-wrap h-full flex-col justify-evenly ">
              <Infocards
                name="gaming"
                clr="black"
                gif="/pics/gif1.gif"
                bg="bg-white"
                // bg="white"
              />

              <Infocards
                name="gamification"
                clr="white"
                gif="/pics/gif2.gif"
                bg="bg-black"
                // bg="black"
              />

              <Infocards
                name="game dev"
                clr="black"
                gif="/pics/gif4.gif"
                bg="bg-[#ece1d6]"
                // bg="#ece1d6"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
