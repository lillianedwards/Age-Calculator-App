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
      setInvalidDays("Required input");
      invalid = true;
    } else if (days > numberOfDays[String(months)] || days > 31) {
      setInvalidDays("Must be a valid day.");
      flagInvalid = true;
    } else {
      setInvalidDays("")
    }

    if (!months) {
      setInvalidMonths("Required input");
      invalid = true;
    } else if (months > 12) {
      setInvalidMonths("Must be a valid month");
      invalid = true;
    } else if (months === 2) {
      if ((leapYear(years) && days > 29) || (!leapYear(years) && days > 28)) {
        setInvalidDays("Must be a valid day.");
        invalid = true;
      }
    } else {
      setInvalidMonths("");
    }

    const currentDate = new Date();

    if (!years) {
      setInvalidYears("Required input");
      invalid = true;
    } else if (years > currentDate.getFullYear()) {
      setInvalidYears("Must be in the past.");
      invalid = true;
    } else {
      setInvalidYears("");
    }

    const birthday = new Date(`${years}-${months}-${days}`);

    if (birthday > currentDate) {
      setInvalidDays("Must be in the past.");
      setInvalidMonths("Must be in the past.");
      setInvalidYears("Must be in the past.");
      invalid = true;
    }

    if (invalid === true) return;


    let resultYears = currentDate.getFullYear() - birthday.getFullYear();
    let resultMonths = currentDate.getMonth() - birthday.getMonth();
    let resultDays = currentDate.getDate() - birthday.getDate();

    if (resultDays < 0) {
      resultMonths--;
      const lastMonthDays = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
      resultDays += lastMonthDays;
    }

    if (resultMonths < 0) {
      resultYears--;
      resultMonths += 12;
    }

    setInvalidDays(false);
    setInvalidMonths(false);
    setInvalidYears(false);

    setResultYears(resultYears);
    setResultMonths(resultMonths);
    setResultDays(resultDays);

  }
// ensures that the "Day" input field in the age calculator form is updated based on user input, but it also includes checks to handle specific cases, such as ignoring the input if a period (.) is entered and ensuring that the state is updated with a valid numeric value. 

  const handleDays = (e) => {
    if (e.nativeEvent.data === ".") return;
    let value = e.target.value;
    setDays(() => (isNaN(value) ? days : Number(value)));
  }

  const handleMonths = (e) => {
    if (e.nativeEvent.data === ".") return;
    let value = e.target.value;
    setMonths(() => (isNan(value) ? months : Number(value)));
  }

  const handleYears = (e) => {
    if (e.nativeEvent.data === ".") return;
    let value = e.target.value;
    setYears(() => (isNan(value) ? years : Number(value)));
  }

  return (
    <div>
      
    </div>
  )
}

export default Form