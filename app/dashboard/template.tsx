"use client";

import React, { Suspense } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div>Template</div>
      {children}
    </div>
  );
}
