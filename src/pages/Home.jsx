import { useEffect, useState } from "react";
import Jumbo from "../components/Jumbo";
import ShortAbout from "../components/ShortAbout";
import FeaturedWork from "../components/FeaturedWork";
import HomeCTAs from "../components/HomeCTAs";

export default function Home() {
  const [count, setCount] = useState("");

  useEffect(() => {
    document.title = "Rodvin — Full stack developer";
    const url = import.meta.env.VITE_COUNTER_URL;
    if (!url) return;
    fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ siteUrl: "https://rodvin.com" }) })
      .then(r => r.json())
      .then(data => setCount(String(data[0]?.visits ?? "")))
      .catch(() => {});
  }, []);

  return (
    <>
      <Jumbo count={count} />
      <ShortAbout />
      <FeaturedWork />
      <HomeCTAs />
    </>
  );
}
