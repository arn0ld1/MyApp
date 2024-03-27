import PublicFooter from "../PublicPortal/PublicFooter";

import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../PublicPortal/OIP.jpeg";

const navigation = [
  { name: "Home", href: "/landing", current: true },
  { name: "Info Page", href: "/linkpage", current: false },
  { name: "About", href: "/about", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Nav() {
  return (
    <Disclosure as="nav" className="bg-blue-900 text-white">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <img className="h-8 w-auto" src={logo} alt="Your Company" />
                </div>
              </div>
              <div className="hidden sm:flex sm:items-center sm:space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current ? "bg-blue-800" : "hover:bg-blue-700",
                      "text-white px-3 py-2 rounded-md text-sm font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="-mr-2 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current ? "bg-blue-800" : "hover:bg-blue-700",
                    "block px-3 py-2 rounded-md text-base font-medium text-white text-center"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

const About = () => {
  return (
    <>
      <Nav />
      <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Services provided by the E-sheria system
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              The E-sheria system is a digital platform aimed at streamlining
              court processes, making them more accessible, efficient, and
              transparent. Our platform leverages cutting-edge technology to
              provide a seamless experience for all stakeholders in the judicial
              system.
            </p>
            <p className="mt-4 text-lg text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              nostrum eligendi delectus harum et ratione amet, maiores, odit in
              maxime magni accusantium obcaecati vel facere voluptatum
              aspernatur quaerat temporibus? Fuga voluptatibus nesciunt
              cupiditate, sed nulla suscipit odit praesentium eius. Quia ducimus
              doloremque in odit rerum, sunt illo sint quisquam aperiam ullam
              sed optio voluptatibus hic vero pariatur aliquid possimus nemo
              tenetur at cum, esse dicta voluptatem enim? Reiciendis ratione
              distinctio similique, provident sequi in autem error adipisci
              quibusdam cupiditate saepe odit et sapiente animi, beatae deserunt
              recusandae alias porro, rerum consequuntur consequatur aliquid a
              suscipit? Accusantium eos perferendis distinctio modi?
            </p>
            <div className="mt-10">
              <p className="text-xl font-semibold text-gray-900">
                Key Features:
              </p>
              <ul className="mt-4 text-lg text-gray-600 list-disc list-inside">
                <li>Case Management System</li>
                <li>Electronic Document Filing</li>
                <li>Judicial Analytics</li>
                <li>Virtual Hearings</li>
                <li>Secure Data Storage</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <PublicFooter />
    </>
  );
};

export default About;
