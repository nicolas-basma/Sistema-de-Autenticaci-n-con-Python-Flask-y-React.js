import React, { useState, useEffect } from "react";

//formulario para toda la aplicacion
const useForm = (inicializate = {}) => {
  const [form, setForm] = useState(inicializate);

  const handleForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return { form, handleForm };
};

export default useForm;
