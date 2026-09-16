import { useState } from "react";
import { FORMS } from "../../../data/data";
import FormCard from "./FormCard";

export default function LogRidePetrol() {

  const handleChange = (event, setValues) => {
    const { name, value } = event.target;
    setValues(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const [ride, setRide] = useState({
    date: new Date().toISOString().split("T")[0],
    time: new Date().toLocaleTimeString('en-IN', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    }),
    odometer: ""
  })

  const [petrol, setPetrol] = useState({
    date: new Date().toISOString().split("T")[0],
    odometer: "",
    amount: "",
    pricePerLitre: 115.81
  })

  function addRide() {
    console.log("Ride added", ride);
  }


  function addPetrol() {
    console.log("Petrol added", petrol);
  }

  const formData = {
    ride: {
      values: ride,
      onChange: (event) => handleChange(event, setRide),
      onSubmit: addRide
    },

    petrol: {
      values: petrol,
      onChange: (event) => handleChange(event, setPetrol),
      onSubmit: addPetrol
    }
  };

  return (
    <div className="form-grid">
      {FORMS.map((form) => (
        <FormCard key={form.id}
          form={form}
          values={formData[form.id].values}
          onChange={formData[form.id].onChange}
          onSubmit={formData[form.id].onSubmit}
        />
      ))}
    </div>
  );
}
