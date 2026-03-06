import { useEffect } from "react";
import Resume from "../components/Resume";

export default function ResumePage() {
  useEffect(() => { document.title = "Resume — Rodvin"; }, []);
  return <Resume />;
}
