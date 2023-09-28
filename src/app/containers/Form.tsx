"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { FormEventHandler } from "react";

const Form = () => {
  const params = useSearchParams();
  const router = useRouter();

  const handleFormSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    // get item in form, and set to searchParams
    e.preventDefault();
    const string = e.currentTarget.item.value;

    // split string to array by \n
    const itemArray = string.split("\n");
    const newSearchParams = new URLSearchParams();
    itemArray.forEach((i: string) => {
      newSearchParams.append("items", i);
    });

    router.push("/?" + newSearchParams.toString());
  };

  return (
    <div className="mx-auto max-w-lg">
      <h1 className="text-center font-bold text-3xl">翻卡抽抽</h1>
      <form onSubmit={handleFormSubmit} className="flex flex-col gap-3">
        <label htmlFor="item">選項</label>
        <textarea
          id="item"
          name="item"
          placeholder={`選項1
選項2
選項3`}
          className="h-80 text-gray-300 rounded-lg bg-slate-500 p-3"
        ></textarea>
        <p className="text-gray-400">＊每個選項之間請使用換行分隔</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">
          確定
        </button>
      </form>
    </div>
  );
};

export default Form;
