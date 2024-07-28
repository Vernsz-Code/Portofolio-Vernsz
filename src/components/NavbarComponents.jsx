import React, { useState } from "react";
import { Select, SelectItem } from "@nextui-org/react";
import {
  Image,
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  Button,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";
import vernszLogo from "/images/vernszLogo.png";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

function NavbarComponents() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const menuItems = [
    {
      name: "Home",
      path: "home",
    },
    {
      name: "Project",
      path: "project",
    },
    {
      name: "Reward",
      path: "reward",
    },
    {
      name: "About",
      path: "about",
    },
  ];

  const [SelectedLanguage, setSelectedLanguage] = useState("en-US");

  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(SelectedLanguage);
  }, [SelectedLanguage]);

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className=" bg sm:border-b-2"
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <Image src={vernszLogo} width={50} height={50} />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <NavbarBrand>
          <Image src={vernszLogo} width={70} height={70} />
        </NavbarBrand>
        <NavbarItem>
          <Link
            color="foreground"
            className=" hover:text-blue-500"
            href="#home"
          >
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            className=" hover:text-blue-500"
            href="#project"
          >
            Project
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            className=" hover:text-blue-500"
            href="#reward"
          >
            Reward
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            className=" hover:text-blue-500"
            href="#about"
          >
            <Button color="primary" variant="shadow">
              About
            </Button>
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 3
                  ? "prrimary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              href={`#${item.path}`}
              size="lg"
              onPress={() => {
                setIsMenuOpen(false);
              }}
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

export default NavbarComponents;
