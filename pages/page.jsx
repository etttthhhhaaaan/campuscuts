import React from "react";
import ContainerBlock from "../components/ContainerBlock";
import Contact from "../components/Contact";

export default function AddTopic() {
  return (
    <ContainerBlock title="Add Topic">
    <div className="max-w-3xl mx-auto p-4">
      <form className="mb-8 flex flex-col gap-3"> 
        <input className = "border border-slate-500 px-8 py-2" type = "text" placeholder = "Topic Title" />
        <input className = "border border-slate-500 px-8 py-2" type = "text" placeholder = "Topic Title" />

        <button className = "bg-green-600 font-bold text-white py-3 px-6 w-fit"> Add Topic </button>
      </form>
      </div>
    </ContainerBlock>
    
    
  );
}
