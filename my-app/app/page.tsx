import Banner from "@/components/Banner";
import CardSlider from "@/components/CardSlider";

import { cardSilderData } from "@/data/cardSlide";
import React from "react";

export default function Home() {
  return (
    <main>
      <Banner />
      {cardSilderData.map((data, i) => (
        <CardSlider key={i} title={data.title} productList={data.items} />
      ))}
    </main>
  );
}
