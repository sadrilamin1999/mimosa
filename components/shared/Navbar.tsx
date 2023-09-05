import Link from "next/link";
import { buttonVariants } from "../ui/Button";
const Navbar = () => {
  return (
    <header className="h-20 border-b border-gray flex items-center bg-white/80 backdrop-blur-lg fixed top-0 left-0 right-0 z-[100]">
      <div className="wrapper grid grid-cols-3 gap-20 items-center">
        {/* LEFT NAV */}
        <nav>
          <ul className="flex gap-5">
            <li>
              <Link className="link-item" href="/#packages">
                Packages
              </Link>
            </li>
            <li>
              <Link className="link-item" href="/">
                Link2
              </Link>
            </li>
            <li>
              <Link className="link-item" href="/">
                Link3
              </Link>
            </li>
          </ul>
        </nav>
        {/* MID NAV */}
        <nav>
          <ul className="flex justify-center">
            <li>
              <Link className="text-4xl lowercase font-bold text-pink" href="/">
                Mimosa
              </Link>
            </li>
          </ul>
        </nav>
        {/* RIGHT NAV */}
        <nav>
          <ul className="flex gap-5 justify-end items-center">
            <li>
              <Link className="link-item" href="/">
                Link4
              </Link>
            </li>
            <li>
              <Link className="link-item" href="/">
                Link5
              </Link>
            </li>
            <li>
              <Link
                className={buttonVariants({ variant: "ocean" })}
                href="/user/sign-in"
              >
                Sign in
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
