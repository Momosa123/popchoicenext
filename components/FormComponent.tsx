"use client";

import React, { useState } from "react";

const FormComponent = () => {
  const [query, setInput] = useState("");
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = { query };
    const res = await fetch("/api/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log(res);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInput(value);
  };
  console.log(query);

  return (
    <form onSubmit={handleSubmit} className="width-full flex">
      <input
        value={query}
        onChange={handleChange}
        className="grow py-2.5 px-2 z-10  rounded-full text-stone-500	"
        type="text"
      />
      <button className="py-2.5 z-10 px-6 absolute rounded-full right-7 bg-gradient-to-r from-blue-500 to-cyan-500">
        Search
      </button>
    </form>
  );
};
export default FormComponent;
