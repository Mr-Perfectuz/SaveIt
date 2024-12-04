import React from "react";

const Page = async ({ params }: SearchParamProps) => {
  const type = ((await params)?.type as string) || "";
  return (
    <div className="page-container">
      <section className="w-full">
        <h1 className="capitilize h1">{type}</h1>
      </section>
    </div>
  );
};

export default Page;
