// create a context provider for my app that gathers all the responses to the form questions
// needs to gather the responses from the form and page 2 
// needs to generate datapoints for the charts
// needs to generate the text for the chatbot initial prompts

import { createContext, useState } from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [userInput, setUserInput] = useState("");
  const [botResponse, setBotResponse] = useState("");
  const [botHistory, setBotHistory] = useState("");
  const [botHistoryArray, setBotHistoryArray] = useState([]);
  const [botResponseArray, setBotResponseArray] = useState([]);
  const [userInputArray, setUserInputArray] = useState([]);
  const [userInputHistory, setUserInputHistory] = useState("");

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setBotResponse(userInput);
    setUserInput("");
  }

  // 


