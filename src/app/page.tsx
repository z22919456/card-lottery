"use client";

import Image from "next/image";
import Card from "./containers/Card";
import { FormEventHandler } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import Form from "./containers/Form";

export default function Home() {
  const items = useSearchParams().getAll("items");

  if (items.length === 0) {
    return <Form />;
  }

  return (
    <div className="">
      <Link href="/" className="">
        {" "}
        {"<-"}
      </Link>
      <div className="container grid gap-10 p-10 grid-cols-3 md:grid-cols-4 m-auto">
        {items.map((item, index) => (
          <Card key={index} number={index + 1} string={item} />
        ))}
      </div>
    </div>
  );
}
