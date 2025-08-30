import logo from '../assets/logo/interiorLogo.webp';
const Navbar = () => {
  return (
    <nav className="bg-lime-700 p-3 text-white flex justify-evenly">
      <img src={logo} alt="interiorLogo" className="h-14 w-14 mr-2 border-2 rounded-full" />
      <ul className="flex space-x-4 mt-2">
        <li className="font-bold cursor-pointer pt-2">Home</li>
        <li className="font-bold cursor-pointer pt-2">About</li>
        <li className="font-bold cursor-pointer pt-2">Services</li>
        <li className="font-bold cursor-pointer pt-2">Contact</li>
        <li className="font-bold cursor-pointer pt-2">MyWork</li>
      </ul>
    </nav>
  );
}

export default Navbar;