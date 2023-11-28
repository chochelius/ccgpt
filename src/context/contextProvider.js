// create a context provider for my app that gathers all the responses to the form questions

impor { createContext, useState } from "react";

export const FormContext = createContext();

export const FormProvider = (props) => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    date: "",
    time: "",
    guests: "",
    message: "",
  });

  return (
    <FormContext.Provider value={[formValues, setFormValues]}>
      {props.children}
    </FormContext.Provider>
  );
};


