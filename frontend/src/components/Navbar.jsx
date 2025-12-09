import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/eduna-logo.png";
import ProfileIcon from "../assets/icons/Icon Leaderboard 1.svg";

const Navbar = ({ openLogin, openRegister, isLoggedIn  }) => {
  const [open, setOpen] = useState(false);

  // BASE CLASS FOR LINKS
  const baseClass =
    "relative text-[20px] font-medium text-black transition-opacity hover:opacity-70 \
     after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[3px] after:w-full \
     after:rounded-md after:bg-gradient-to-r after:from-[#246afe] after:via-[#9747ff] after:to-[#ffba08] \
     after:opacity-0 after:transition-opacity after:duration-300 hover:after:opacity-100";

  // ACTIVE CLASS (SHOW UNDERLINE IMMEDIATELY)
  const activeClass = "text-[#246afe] after:opacity-100";

  return (
    <nav className="fixed top-0 left-0 w-full h-[100px] bg-white shadow-[0_4px_12px_rgba(0,0,0,0.05)] px-8 lg:px-20 flex justify-between items-center z-[1000] font-satoshi">
      {/* LOGO */}
      <div className="flex items-center">
        <img src={logo} alt="eduna logo" className="h-[80px] object-contain" />
      </div>

      {/* DESKTOP NAV */}
      <ul className="hidden lg:flex items-center gap-[50px]">
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? `${baseClass} ${activeClass}` : baseClass
            }
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/explore"
            className={() =>
              window.location.pathname.startsWith("/explore") ||
              window.location.pathname.startsWith("/museum-raja-ali-haji")
                ? `${baseClass} ${activeClass}` : baseClass
            }
          >
            Explore
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/challenge"
            className={({ isActive }) =>
              isActive ? `${baseClass} ${activeClass}` : baseClass
            }
          >
            Challenge
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/community"
            className={() =>
              window.location.pathname.startsWith("/community") ||
              window.location.pathname.startsWith("/review-museum-raja-ali-haji") ||
              window.location.pathname.startsWith("/submit-review")
                ? `${baseClass} ${activeClass}` : baseClass
            }
          >
            Community
          </NavLink>
        </li>
      </ul>

      {/* DESKTOP BUTTONS */}
            <div className="hidden lg:flex items-center gap-6">
        {isLoggedIn ? (
          <NavLink to="/profile">
            <button className="rounded-full p-1 border border-[#2266ff] hover:bg-[#2266ff]/10 transition">
              <img
                src={ProfileIcon}
                alt="Profile"
                className="w-9 h-9 object-contain"
              />
            </button>
          </NavLink>
        ) : (
          <>
            <button
              onClick={openLogin}
              className="border border-[#2266ff] text-[#2266ff] rounded-[10px] px-6 py-2 text-[18px] font-medium hover:bg-[#2266ff] hover:text-white transition"
            >
              Login
            </button>
            <button
              onClick={openRegister}
              className="bg-[#2266ff] text-white rounded-[10px] px-6 py-2 text-[18px] font-medium hover:bg-[#004be0] transition"
            >
              Sign Up
            </button>
          </>
        )}
      </div>

      {/* MOBILE MENU BUTTON */}
      <button
        className="lg:hidden flex flex-col gap-1.5"
        onClick={() => setOpen(!open)}
      >
        <span className="w-7 h-[3px] bg-black rounded"></span>
        <span className="w-7 h-[3px] bg-black rounded"></span>
        <span className="w-7 h-[3px] bg-black rounded"></span>
      </button>

      {/* MOBILE NAV */}
      {open && (
        <div className="absolute top-[100px] left-0 w-full bg-white shadow-lg lg:hidden p-6 flex flex-col gap-6 z-[999]">
          <NavLink
            to="/"
            end
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              isActive ? `${baseClass} ${activeClass}` : baseClass
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/explore"
            onClick={() => setOpen(false)}
            className={() =>
              window.location.pathname.startsWith("/explore") ||
              window.location.pathname.startsWith("/museum-raja-ali-haji")
                ? `${baseClass} ${activeClass}`
                : baseClass
            }
          >
            Explore
          </NavLink>

          <NavLink
            to="/challenge"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              isActive ? `${baseClass} ${activeClass}` : baseClass
            }
          >
            Challenge
          </NavLink>

          <NavLink
            to="/community"
            onClick={() => setOpen(false)}
            className={() =>
              window.location.pathname.startsWith("/community") ||
              window.location.pathname.startsWith("/review-museum-raja-ali-haji") ||
              window.location.pathname.startsWith("/submit-review")
                ? `${baseClass} ${activeClass}`
                : baseClass
            }
          >
            Community
          </NavLink>

          <div className="flex flex-col gap-4 pt-4">
            {isLoggedIn ? (
              <NavLink to="/profile" onClick={() => setOpen(false)}>
                <button className="border border-[#2266ff] text-[#2266ff] rounded-[10px] px-6 py-2 text-[18px] font-medium hover:bg-[#2266ff] hover:text-white transition w-full flex items-center justify-center gap-2">
                  <img
                    src={ProfileIcon}
                    alt="Profile"
                    className="w-7 h-7 object-contain"
                  />
                  <span>Profile</span>
                </button>
              </NavLink>
            ) : (
              <>
                <button
                  onClick={() => {
                    openLogin();
                    setOpen(false);
                  }}
                  className="border border-[#2266ff] text-[#2266ff] rounded-[10px] px-6 py-2 text-[18px] font-medium hover:bg-[#2266ff] hover:text-white transition w-full"
                >
                  Login
                </button>

                <button
                  onClick={() => {
                    openRegister();
                    setOpen(false);
                  }}
                  className="bg-[#2266ff] text-white rounded-[10px] px-6 py-2 text-[18px] font-medium hover:bg-[#004be0] transition w-full"
                >
                  Sign Up
                </button>
              </>
            )}
          </div>
          </div>
      )}
    </nav>
  );
};

export default Navbar;