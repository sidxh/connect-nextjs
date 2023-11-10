import Domains from "@/components/Domains";
import React from "react";
import Image from "next/image";
import LNM from "../../../public/lnm.jpg";

export default function ExploreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <section className="max-w-[1400px] text-center mx-auto">
        {children}
      </section>
  );
}


{/* <Image
src={LNM}
alt=""
className="mt-[3rem] bg-[#949494] rounded-[5rem] w-[1200px] h-[35rem] mx-auto"
/>
<div className="bg-[#ffffff] h-[3.5rem] w-[50%] rounded-[1rem] absolute top-[95%] left-[25%]">
{" "}
</div>
<Domains /> */}
