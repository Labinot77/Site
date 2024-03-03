import { Home, PresentationIcon, Settings } from "lucide-react"

export const NavbarLinks = [
  {
    name: "Dashboard",
    href: "/dashboard"
  }
]

export const navItems = [
  {
    name: 'My Tickets', 
    href: "mytickets", 
    icon: Home,
  },
  {
    name: 'Profiles', 
    href: "profiles", 
    icon: PresentationIcon,
  },
  {
    name: 'Settings', 
    href: "settings",
     icon: Settings,
  },
  // {
  //   name: 'Billing', 
  //   href: "/dashboard/billing", 
  //   icon: CreditCard,
  // }
]

export const SideBar = [
  {
    name: "My Profile",
    href: "/myprofile"
  },
  {
    name: "My Tickets",
    href: "/mytickets"
  },
  {
    name: "Communities",
    href: "/communities"
  },
  {
    name: "Settings",
    href: "/settings"
  }
]