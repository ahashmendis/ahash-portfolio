"use client";

import { BuilderComponent, builder } from "@builder.io/react";

builder.init("9e73f4b8d181459aa7e5fdb76d62b4a7");

export default function BuilderPage() {
  return (
    <main>
      <BuilderComponent model="page" />
    </main>
  );
}