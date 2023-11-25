import React, {useEffect, useState, useRef} from 'react';

function Form() {
  //Making sure the year calculator accounts for years with an extra day by dividing the year by 4, also helping accounting for number of days in February each year
  const leapYear = () => {
    return (year % 4 === 0 && year % 100 !==0) || year % 400 ===0;
  }

    //Assigning number of days in each month for validation purposes
  const numberOfDays = {
    1: 31,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31,
  };


  //Setting up states to be used for userinput validation and result calculation 
  const ageCalculation = () => {
    const [days, setDays] = useState("");
    const [months, setMonths] = useState("");
    const [years, setYears] = useState("");

    const [resultDays, setResultDays] = useState("__");
    const [resultMonths, setResultMonths] = useState("__");
    const [resultYears, setResultYears] = useState("__");

    const [invalidDays, setInvalidDays] = useState("");
    const [invalidMonths, setInvalidMonths] = useState("");
    const [invalidYears, setInvalidYears] = useState("");
  }

  //allowing the dayField value to be set to null initally
  const dayField = useRef(null);

  //useEffect will run after the intial render and place the cursor in the day field for smoother user experience and direction
  useEffect(() => {
    window.addEventListener("load", () => dayField.current.focus());
  }, [])

  const handleSubmit = (e) => {
    let invalid = false;
    e.preventDefault();

    if (!days) {
      
    }
  }


  return (
    <div>
      
    </div>
  )
}

export default Form