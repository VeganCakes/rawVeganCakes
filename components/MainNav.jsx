import { siteConfig } from "../config/site";
import Link from "next/link";
import Image from "next/image";
import logo from "../images/cakeMeHappyNewLogo.svg";
import { Dropdown } from "@nextui-org/react";
import "../styles/style.css";
import { ShoppingBag } from "lucide-react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useShoppingCart } from "use-shopping-cart";
import { useState } from "react";

export function MainNav({ setShowDropDownMenu }) {
  const links = siteConfig.header;
  const { cartCount } = useShoppingCart();

  return (
    //mainNav-wrapper,
    <div className="flex justify-center md:justify-between w-screen items-center md:mt-1">
      <div className="shrink-0">
        <Link href="/">
          <Image
            src={logo}
            width={168}
            height={55}
            className="w-40 aspect-[74/24] object-contain object-center  lg:w-48"
            alt="logo"
          />
        </Link>
      </div>

      <div className="">
        {/*mainNav-ul */}
        <ul className="flex text-base justify-end items-center m-0 md:mt-[1rem] mt-[.5rem] gap-x-4 md:gap-x-3 lg:gap-x-5">
          {links.map((link) => (
            <li className="hidden md:flex  " key={link.name}>
              {link.category ? (
                <Dropdown>
                  <Dropdown.Trigger>
                    <Dropdown.Button
                      className="dropdown-button font-bold !px-0 lg:!px-2"
                      id="dropdown-button"
                      style={{
                        fontWeight: "bold",
                        color: "#666666",
                        background: "transparent",
                      }}
                    >
                      <span
                        style={{
                          fontWeight: "bold",
                          color: "#666666",
                        }}
                        className="!text-[15px] lg:!text-base"
                      >
                        {link.name}
                      </span>
                    </Dropdown.Button>
                  </Dropdown.Trigger>
                  <Dropdown.Menu aria-label="Static Actions">
                    {link.category.map((category) => (
                      <Dropdown.Item
                        key={category.name}
                        style={{ color: "#AC8067" }}
                      >
                        <Link
                          href={`/products/${category.slug}`}
                          id="drop-links"
                        >
                          {category.name}
                        </Link>
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              ) : (
                <Link className={`mainNav-link !text-[15px] lg:!text-base`}   href={link.href}>
                  {link.name}
                </Link>
              )}
            </li>
          ))}

          <li className="flex">
            <Link href="/cart" className="flex">
              <ShoppingBag height={26} width={26} />
              <span className="cart-quantity">{cartCount}</span>
              <span className="sr-only">Cart</span>
            </Link>
          </li>
          <li className="block md:hidden">
            <button
              onClick={() => setShowDropDownMenu((prev) => !prev)}
              title={"Open Navmenu"}
              className="flex"
            >
              <GiHamburgerMenu color="rgb(102, 102, 102)" size={30} />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
