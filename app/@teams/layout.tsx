"use client";

import { useSelectedLayoutSegment } from "next/navigation";
import React from "react";

interface Props {
  children: React.ReactNode;
}

function TeamsLayout({ children }: Props) {
  const segment = useSelectedLayoutSegment("children");
  console.log(segment);

  return (
    <div>
      <div>Teams Layout</div>
      <div>{children}</div>
    </div>
  );
}

export default TeamsLayout;
