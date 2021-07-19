import { useEffect, useState } from "react";
import { database } from "../config";

const useStudentsDetails = () => {
  const [studenDetails, setStudenDetails] = useState([]);

  const updateStudentdetails = async (updatedUserData) => {
    try {
      const dbRef = `StudentDetails/${updatedUserData?.id}`;
      await database.ref(dbRef).set(updatedUserData);
    } catch (error) {}
  };

  const deleteStudentdetails = async (key) => {
    try {
      const dbRef = `StudentDetails/${key}`;
      await database.ref(dbRef).remove();
    } catch (error) {}
  };
  useEffect(() => {
    database.ref(`StudentDetails/`).on("value", (snap) => {
      const arr = [];
      if (snap.exists()) {
        let slno = 1;
        const obj = snap.val();

        for (const uid in obj) {
          arr.push({
            ...obj[uid],
            slno: slno++,
            departement: obj[uid]?.branchName?.departement,
            college: obj[uid]?.collegeName?.college,
            course: obj[uid]?.degreeName?.course,
            id: uid,
            uid,
          });
        }
      }
      setStudenDetails(arr);
    });
  }, []);
  return { studenDetails, deleteStudentdetails, updateStudentdetails };
};

export default useStudentsDetails;
