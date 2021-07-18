import { useEffect, useState } from "react";

const useCourse = () => {
  const [courseNameList, setCourseNameList] = useState([]);
  useEffect(() => {
    setCourseNameList([
      {
        course: "B.Arch",
      },
      {
        course: "BCA",
      },
      {
        course: "B.Sc.",
      },
      {
        course: "BPharma",
      },
      {
        course: "BDS",
      },
      {
        course: "Animation",
      },
      {
        course: "BPT",
      },
      {
        course: "BA/B.Sc.",
      },
      {
        course: "BE/B.Tech",
      },
    ]);
  }, []);
  return { courseNameList };
};

export default useCourse;
