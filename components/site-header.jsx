"use client";
import { useState } from "react";
import Link from "next/link";
import { MainNav } from "./MainNav.jsx";
import "../styles/style.css";
import { siteConfig } from "../config/site";
import { usePathname } from "next/navigation";

export function SiteHeader() {
  const links = siteConfig.header;
  const pathName = usePathname();
  const [showDropDownMenu, setShowDropDownMenu] = useState(false);
  const [showCategoryMenu, setShowCategoryMenu] = useState(false);

  return (
    <>
      {pathName !== "/homepage" ? (
        <header className="header mx-auto">
          <div className="menu-bar md:mt-6 md:mb-2 mt-4 mb-1">
            <MainNav
              className="flex justify-between md:pt-1"
              setShowDropDownMenu={setShowDropDownMenu}
            />
          </div>

          {showDropDownMenu && (
            <div className="absolute top-[85px] px-5 w-full flex flex-col z-50 md:hidden shadow-2xl">
              <div
                className="flex justify-center items-center w-full h-10 bg-slate-50 hover:bg-[#bcda90] text-[#AC8067]"
                onClick={() => {
                  setShowCategoryMenu(!showCategoryMenu);
                }}
              >
                <button>Shop&darr;</button>
              </div>
              {showCategoryMenu && (
                <div className="flex flex-col">
                  {links.map(
                    (link) =>
                      link.category &&
                      link.category.map((category) => (
                        <div
                          key={category.name}
                          className="flex justify-center items-center w-full h-10 bg-slate-50 hover:bg-[#bcda90]"
                        >
                          <Link
                            href={`/products/${category.slug}`}
                            onClick={() => setShowDropDownMenu(false)}
                            className="text-[#AC8067]"
                          >
                            {category.name}
                          </Link>
                        </div>
                      ))
                  )}
                </div>
              )}
              {links.map(
                (link) =>
                  link.name !== "Shop" && (
                    <div
                      key={link.name}
                      className="flex justify-center items-center w-full h-10 bg-slate-50 hover:bg-[#bcda90]"
                    >
                      <Link
                        className="text-[#AC8067]"
                        href={link.href}
                        onClick={() => setShowDropDownMenu(false)}
                      >
                        {link.name}
                      </Link>
                    </div>
                  )
              )}
            </div>
          )}
        </header>
      ) : (
        <header className="sm:!w-[90%] lg:!w-[80%] header !mx-auto">
          <div className="menu-bar md:!mt-2 md:mb-2 mt-4 mb-1">
            <MainNav
              className="flex justify-between md:pt-1"
              setShowDropDownMenu={setShowDropDownMenu}
            />
          </div>

          {/* Drop Down for Mobile Only */}
          {showDropDownMenu && (
            <div className="absolute top-[85px] px-5 w-full flex flex-col z-50 md:hidden shadow-2xl">
              <div
                className="flex justify-center items-center w-full h-10 bg-slate-50 hover:bg-[#bcda90] text-[#AC8067]"
                onClick={() => {
                  setShowCategoryMenu(!showCategoryMenu);
                }}
              >
                <button>Shop&darr;</button>
              </div>
              {showCategoryMenu && (
                <div className="flex flex-col">
                  {links.map(
                    (link) =>
                      link.category &&
                      link.category.map((category) => (
                        <div
                          key={category.name}
                          className="flex justify-center items-center w-full h-10 bg-slate-50 hover:bg-[#bcda90]"
                        >
                          <Link
                            href={`/products/${category.slug}`}
                            onClick={() => setShowDropDownMenu(false)}
                            className="text-[#AC8067]"
                          >
                            {category.name}
                          </Link>
                        </div>
                      ))
                  )}
                </div>
              )}
              {links.map(
                (link) =>
                  link.name !== "Shop" && (
                    <div
                      key={link.name}
                      className="flex justify-center items-center w-full h-10 bg-slate-50 hover:bg-[#bcda90]"
                    >
                      <Link
                        className="text-[#AC8067]"
                        href={link.href}
                        onClick={() => setShowDropDownMenu(false)}
                      >
                        {link.name}
                      </Link>
                    </div>
                  )
              )}
            </div>
          )}
        </header>
      )}
    </>
  );
}
