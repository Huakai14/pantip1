"use client"
import React, { useState } from "react";
import {SearchIcon} from "./SearchIcon.jsx";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Input, Link, Button} from "@nextui-org/react";
const NavbarComp = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = [
      "หน้าแรก",
      "My Feed",
      "Pantip Pick",
      "Pantip Hitz",
      "Explore",
      "แลกพอยต์",
      "กิจกรรมพันทิป",
    ];
    
  return (
    <Navbar className="bg-purple-900" onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className=""
        />
        <NavbarBrand>
          <p className="font-bold text-inherit text-white">Pantip</p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify="end">
        <Input
          classNames={{
            base: "max-w-full sm:max-w-[10rem] h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper: "h-full font-normal text-default-500",
          }}
          placeholder="Type to search..."
          size="sm"
          startContent={<SearchIcon size={18} />}
          type="search"
        />
        <NavbarItem className="hidden lg:flex">
          <Link href="#" className="text-white">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} className="text-white" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 5 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full flex justify-center items-center"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}

export default NavbarComp