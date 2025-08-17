import Image from "next/image";
import logo from "@/public/Logo.png";

interface LogoProps {
  className?: string;
}

export default function Logo({ className }: LogoProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <Image src={logo} alt="Logo" className="h-28 lg:h-32 xl:h-36 w-auto" />
    </div>
  );
}
