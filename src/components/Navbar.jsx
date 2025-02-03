
import { Home, User, Briefcase, FileText } from 'lucide-react'
import { NavBar } from "@/components/ui/tubelight-navbar"

const Navbar = () => {
    const navItems = [
        { name: 'Home', url: '/', icon: Home },
        { name: 'About', url: '/dashboard', icon: User },
        { name: 'All Books', url: '/projects', icon: Briefcase },
        { name: 'Cart', url: '/resume', icon: FileText }
      ]
  return (<NavBar items={navItems} />)
};

export default Navbar;
