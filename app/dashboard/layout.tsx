"use client";

import React, { useState } from "react";
import Template from "./template";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [cnt, setCnt] = useState(0);
  return (
    <div>
      <div>Dashboard Layout | Count: {cnt}</div>
      <button onClick={() => setCnt(cnt + 1)}>click</button>
      {children}
    </div>
  );
};

export default DashboardLayout;
