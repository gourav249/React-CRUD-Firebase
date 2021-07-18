import { useEffect, useState } from "react";
import { database } from "../config";

const useStudentsDetails = () => {
  const [studenDetails, setStudenDetails] = useState([]);
  useEffect(() => {
    database.ref(`StudentDetails/`).on("value", (snap) => {
      if (snap.exists()) {
        const arr = [];
        let slno = 1;
        const obj = snap.val();

        for (const uid in obj) {
          arr.push({
            ...obj[uid],
            slno: slno++,
            branchName: obj[uid]?.branchName?.departement,
            collegeName: obj[uid]?.collegeName?.college,
            degreeName: obj[uid]?.degreeName?.course,
            id: uid,
            uid,
          });
        }
        setStudenDetails(arr);
      }
    });
  }, []);
  return { studenDetails };
};

export default useStudentsDetails;
