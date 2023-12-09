"use client";

import { usePathname } from "next/navigation";

function NextAuth({}) {
  const pathname = usePathname();

  return (
    <div>
      Authentication Page(
      {pathname === "/auth" || pathname === "/auth/"
        ? "Catch-all Segments"
        : "Optional Catch-all Segments"}
      )
    </div>
  );
}

export default NextAuth;
