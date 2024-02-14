"use client";

import { useAuth, useUser } from "@clerk/nextjs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignIn, faSignOut } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const { isLoaded, isSignedIn } = useUser();
  const { signOut } = useAuth();
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl">Autolog</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-gray-300">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-gray-300">
                Contact
              </a>
            </li>
            {isLoaded && isSignedIn ? (
              <li className="cursor-pointer">
                <button onClick={() => signOut()}>
                  <FontAwesomeIcon icon={faSignOut} />
                </button>
              </li>
            ) : (
              <li className="cursor-pointer">
                <FontAwesomeIcon icon={faSignIn} />
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
