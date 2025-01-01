import { SignedOut,SignInButton,SignedIn,UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
    <SignedOut>
        <SignInButton mode="modal" />
        <button className="bg-red-500">
          sign in
        </button>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
    </div>
  );
}
