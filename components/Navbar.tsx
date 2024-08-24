"use client"

import { useEffect, useState, forwardRef } from "react";
import Link from "next/link"
import { Menu } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { services } from "@/components/Services";

export function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    // Use dynamic import for SmoothScroll
    import('smooth-scroll').then((SmoothScroll) => {
      const scroll = new SmoothScroll.default('a[href*="#"]', {
        speed: 800,
        speedAsDuration: true,
        easing: 'easeInOutCubic'
      });

      return () => {
        scroll.destroy();
      };
    });
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (href) {
      const targetElement = document.querySelector(href);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <span className="text-2xl md:text-3xl font-bold">Helios</span>
        </Link>
        
        {/* Mobile Menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="lg:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            {/* Wrap the content in a fragment */}
            <>
              <div className="w-full mt-8">
                <NavigationMenu orientation="vertical">
                  <NavigationMenuList className="flex-col items-start space-y-4">
                    {['services', 'portfolio', 'about', 'contact'].map((item) => (
                      <NavigationMenuItem key={item} className="w-full">
                        <Link href={`#${item}`} legacyBehavior passHref>
                          <NavigationMenuLink 
                            className={cn(navigationMenuTriggerStyle(), "w-full justify-start")} 
                            onClick={handleLinkClick}
                          >
                            {item.charAt(0).toUpperCase() + item.slice(1)}
                          </NavigationMenuLink>
                        </Link>
                      </NavigationMenuItem>
                    ))}
                  </NavigationMenuList>
                </NavigationMenu>
              </div>
            </>
          </SheetContent>
        </Sheet>

        {/* Desktop Menu */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Services</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[100px] gap-3 p-4 md:w-[150px]  lg:w-[250px]">
                  {services.map((service) => (
                    <ListItem
                      key={service.title}
                      href="#services"
                      onClick={handleLinkClick}
                    >
                      {service.title}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            {['portfolio', 'about', 'contact'].map((item) => (
              <NavigationMenuItem key={item}>
                <Link href={`#${item}`} legacyBehavior passHref>
                  <NavigationMenuLink 
                    className={navigationMenuTriggerStyle()}
                    onClick={handleLinkClick}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  )
}

const ListItem = forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void }
>(({ className, title, children, onClick, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          onClick={onClick}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"