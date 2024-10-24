import Image from "next/image";


export default function Home() {
  return (
    <div className="bg-[url('/images/wallhaven-zx66lo_1920x1080.png bg-no-repeat bg-cover')] h-[2000px]">
      <h1 className="pt-[15] m-[10] bg-[#414141] text-[100px]     ">
        hello World
      </h1>

      <h2 className="h-22 bg-secondary">
        Why
      </h2>
    </div>
  );
}
