import Link from "next/link";
import { buttonVariants } from "../ui/Button";
const Navbar = () => {
  return (
    <header className="fixed left-0 right-0 top-0 z-[100] flex h-20 items-center border-b border-gray bg-white/80 backdrop-blur-lg">
      <div className="wrapper grid grid-cols-3 items-center gap-20">
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
              <Link className="text-4xl font-bold lowercase text-pink" href="/">
                Mimosa
              </Link>
            </li>
          </ul>
        </nav>
        {/* RIGHT NAV */}
        <nav>
          <ul className="flex items-center justify-end gap-5">
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
