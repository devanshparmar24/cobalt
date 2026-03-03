import Link from "next/link";
import Logo from "./Logo";
import Button from "../ui/Button";
import {ScrollToContact} from "../ui/ScrollToContact";

export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-[72px] h-16 sm:h-[72px] md:h-[80px] flex items-center justify-between">

        {/* Logo */}
        <Logo className="h-7 sm:h-8 md:h-9" />

        {/* Right side */}
        <div className="flex items-center gap-4 sm:gap-6 md:gap-10">

          <Link
            href="#"
            className="text-sm text-white/70 hover:text-white transition-colors"
          >
            Blog
          </Link>

          <Button children={"Join the waitlist"} onClick = {ScrollToContact} />
        </div>

      </div>
    </header>
  );
}