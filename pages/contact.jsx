import React from "react";
import ContainerBlock from "../components/ContainerBlock";

export default function contact() {
  return (
    <ContainerBlock>
      <div className="max-w-fill mx-auto h-48 bg-gradient-to-b from-[#3b444b] to-[#232b2b]" />

      <div className="flex items-center justify-center bg-[#232b2b] pb-20">
        <p className="text-4xl font-mono text-white"> Give us a call at (614) 268-1070 to schedule an appointment!</p>
      </div>


      <div className="text-4xl font-cursive text-white bg-[#232b2b] flex items-center justify-center pb-20">
         
      </div>

      <div className="text-white bg-[#232b2b] flex items-center justify-center pb-8">
        <p className="text-5xl font-cursive text-white ">Our location:</p>
      </div>

      <div className="flex items-center justify-center bg-[#232b2b]">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3055.8720472628906!2d-83.01262792419378!3d40.011305571507684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88388ea3e0ff1bf5%3A0x1a304be8d3b45b5a!2sCampus%20Cuts!5e0!3m2!1sen!2sus!4v1705695799213!5m2!1sen!2sus" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>

      <div className="max-w-fill mx-auto h-48 bg-gradient-to-b from-[#232b2b] to-[#3b444b]" />

    </ContainerBlock>
  );
}
