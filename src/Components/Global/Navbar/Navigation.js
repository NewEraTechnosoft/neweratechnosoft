import {  useState } from "react";
import { Dialog, Popover } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { logoIcon } from "../../../Assets";
import { Link } from "react-router-dom";
import ModelHireUs from "../ModelHireUs/ModelHireUs";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [ model, setModel ] = useState(false)

  return (
    <header className="bg-white shadow-md">
      <nav
        className=" mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link to={"/"} className="-m-1.5 p-1.5">
            <img
              className="h-12 w-auto"
              src={logoIcon}
              alt="New Era Technosoft"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Link
            to={"/"}
            className=" text-lg font-semibold leading-6 text-neweraBlue text-decoration-none hover:text-neweraOrange duration-300"
          >
            Home
          </Link>
          <Link
            to={"/about-us"}
            className="text-lg font-semibold leading-6 text-neweraBlue text-decoration-none hover:text-neweraOrange duration-300"
          >
            About Us
          </Link>
          <Link
            to={"/services"}
            className="text-lg font-semibold leading-6 text-neweraBlue text-decoration-none hover:text-neweraOrange duration-300"
          >
            Services
          </Link>
          <Link
            to={"/products"}
            className="text-lg font-semibold leading-6 text-neweraBlue text-decoration-none hover:text-neweraOrange duration-300"
          >
            Products
          </Link>
          <button
            onClick={() => setModel(true)}
            className="text-lg font-semibold leading-6 text-neweraBlue text-decoration-none hover:text-neweraOrange duration-300"
          >
            Contact Us
          </button>
        </Popover.Group>
        
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to={"/"} className="-m-1.5 p-1.5">
              <img
                className="h-12 w-auto"
                src={logoIcon}
                alt="New Era Technosoft"
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  to={"/"}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-neweraBlue text-decoration-none hover:bg-gray-50 hover:text-neweraOrange"
                >
                  Home
                </Link>
                <Link
                  to={"/about-us"}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-neweraBlue text-decoration-none hover:bg-gray-50 hover:text-neweraOrange"
                >
                  About
                </Link>
                <Link
                  to={"/services"}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-neweraBlue text-decoration-none hover:bg-gray-50 hover:text-neweraOrange"
                >
                  Services
                </Link>
                <Link
                  to={"/products"}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-neweraBlue text-decoration-none hover:bg-gray-50 hover:text-neweraOrange"
                >
                  Products
                </Link>
                <button
                onClick={() => setModel(true)}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-neweraBlue text-decoration-none hover:bg-gray-50 hover:text-neweraOrange"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
      <ModelHireUs model={model} setmodel={setModel}/>
    </header>
  );
};

export default Navigation;
