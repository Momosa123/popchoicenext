/* eslint-disable react/no-unescaped-entities */
"use client";
import { useState } from "react";

import Header from "@/components/Header";
import InputComponent from "@/components/InputComponent";
import { ClipLoader } from "react-spinners";
import Response from "@/components/Response";
import Button from "@/components/Button";

const query = "Can you recommend a movie title";
const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};
const inputProps = [
  {
    name: "favoriteMovie",
    labeltext: "What's your favorite movie and why?",
    placeholderText:
      "The Shawshank Redemption Because it taught me to never give up hope no matter how hard life gets",
  },
  {
    name: "classicOrNew",
    labeltext: "Are you in the mood for something new or classic?",
    placeholderText: "I want to watch movies that were released after 1990",
  },
  {
    name: "funOrSerious",
    labeltext: "Do you wanna have fun or do you want something serious?",
    placeholderText: "I want to watch something stupid and fun",
  },
];

function App() {
  const [inputs, setInputs] = useState("");
  const [aiResponse, setAiResponse] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const handleChange = (index, value) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const dataToSend = { query, input: query + "\n" + inputs.join("\n") };
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      if (res.ok) {
        console.log("Reçu");
        const data = await res.json();
        setAiResponse(data);
      } else {
        console.error(
          "Something went wrong with the response:",
          res.statusText
        );
      }
    } catch (error) {
      console.error("An error occurred:", error);
    } finally {
      setIsLoading(false);
    }
  };

  console.log(aiResponse);
  if (isLoading)
    return (
      <ClipLoader
        color="blue"
        loading={isLoading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    );
  return (
    <div className=" mx-auto w-96">
      <Header />
      {Object.keys(aiResponse).length === 0 ? (
        <form className="w-80 mx-auto">
          {inputProps.map((inputProp, i) => (
            <InputComponent
              key={i}
              name={inputProp.name}
              labelText={inputProp.labeltext}
              placeholderText={inputProp.placeholderText}
              value={inputs[i]}
              handleChange={e => handleChange(i, e.target.value)}
            />
          ))}
          <Button handleClick={handleSubmit} text="Let's Go" />
        </form>
      ) : (
        <Response aiResponse={aiResponse} setAiResponse={setAiResponse} />
      )}
    </div>
  );
}

export default App;
