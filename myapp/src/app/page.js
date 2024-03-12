"use client";

import Counter from "@/app/component/Counter";
import Form from "@/app/component/Form";

export default function Home() {
  return (
    <>
      <Counter title='안녕' />
        <br /><hr /><br />
        <Form />
    </>
  );
}
