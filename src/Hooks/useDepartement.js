import { useEffect, useState } from "react";

const useDepartement = () => {
  const [DepartementNameList, setDepartementNameList] = useState([]);
  useEffect(() => {
    setDepartementNameList([
      {
        departement: "Aeronautical Engineering",
      },
      {
        departement: "Automobile Engineering",
      },
      {
        departement: "Civil Engineering",
      },
      {
        departement: "Computer Science and Engineering",
      },
      {
        departement: "Biotechnology Engineering",
      },
      {
        departement: "Electrical and Electronics Engineering",
      },
      {
        departement: "Electronics and Communication Engineering",
      },
      {
        departement: "Automation and Robotics",
      },
      {
        departement: "Petroleum Engineering",
      },
      {
        departement: "Instrumentation Engineering",
      },
      {
        departement: "Ceramic Engineering",
      },
      {
        departement: "Chemical Engineering",
      },
      {
        departement: "Structural Engineering",
      },
      {
        departement: "Robotics Engineering",
      },
      {
        departement: "Smart Manufacturing & Automation",
      },
    ]);
  }, []);
  return { DepartementNameList };
};

export default useDepartement;
