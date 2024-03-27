import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const features = [
  {
    name: "Cloud Storage of Data",
    description:
      "Data is stored in the cloud hence ensuring no data is lost during the filling process.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Authorized access only",
    description:
      "Only authorized personnel handle case details and information.",
    icon: LockClosedIcon,
  },
  {
    name: "Efficiency in court proceedings",
    description:
      "All court activities are further streamlined in-order to ensure justice is conveyed when needed.",
    icon: ArrowPathIcon,
  },
  {
    name: "Advanced security",
    description:
      "Through the use of the latest security measures data security is assured.",
    icon: FingerPrintIcon,
  },
];

export default function Features() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            Handle cases faster
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to view case progress and manage cases.
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            The Case Management Module within the e-court system serves as a
            comprehensive tool for streamlining and organizing legal
            proceedings. It provides a centralized platform where court
            administrators, legal practitioners, and stakeholders can
            efficiently manage cases from initiation to resolution. <br />
            Through intuitive user interfaces and automated workflows, the Case
            Management Module enhances transparency, accessibility, and
            efficiency in the judicial process. It empowers users to track case
            progress, exchange information securely, and collaborate seamlessly,
            ultimately facilitating fair and timely resolution of legal matters.
            With its robust features and user-friendly design, the Case
            Management Module plays a pivotal role in modernizing and optimizing
            court operations for the benefit of all involved parties.
          </p>
          
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/log-in"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Court Portal
            </Link>
          </div>
      </div>
    </div>
  );
}
