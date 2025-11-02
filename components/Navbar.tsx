import Link from "next/link"
import NavItems from "./NavItems"
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs"

const Navbar = () => {
  return (
    <nav className="navbar flex justify-between items-center px-6 py-3">
      <Link href="/">
        <div className="flex items-center gap-2.5 cursor-pointer">
          <img
            src="/images/logo.svg"
            alt="Logo"
            width={46}
            height={44}
          />
        </div>
      </Link>

      <div className="flex items-center gap-8">
        <NavItems />

        <SignedOut>
          <SignInButton>
            <button className="btn-signin" >Sign In</button>
          </SignInButton>
        </SignedOut>

        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  )
}

export default Navbar
