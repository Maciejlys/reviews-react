import React from "react";

interface TitleProps {}

export const Title: React.FC<TitleProps> = () => {
  return (
    <section className="title">
      <h2>Our reviews</h2>
      <div className="underline"></div>
    </section>
  );
};
