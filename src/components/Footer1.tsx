import React from "react";

const footerData = {
  logo: "path-to-urbn-logo.png",
  description:
    "Urbn is your one-stop real estate marketplace, offering a seamless way to buy, rent, or sell properties. Explore listings, find your perfect home, or get expert advice from trusted agents.",
  address: "101 E 129th St, East Chicago, IN 46312, US",
  sections: [
    {
      title: "Company",
      links: [
        { label: "Proprty for Sell", href: "/properties" },
        { label: "Property for Rent", href: "/mortgages" },
        { label: "Proprty for Buy", href: "/agents" },
        { label: "Our Agents", href: "/agents" },
      ],
    },
    {
      title: "Use cases",
      links: [
        { label: "Pricing plans", href: "/rentals" },
        { label: "Line of Credit", href: "/rental-guide" },
        { label: "Installments", href: "/apply" },
        { label: "Buy Now PPay Later", href: "/apply" },
      ],
    },
    {
      title: "Contact",
      links: [
        { label: "urbnrealestate@gmail.com", href: "/sell" },
        { label: "1-333-345-6868", href: "/home-value" },
        { label: "Instagram", href: "/agents" },
        { label: "Twitter", href: "/agents" },
      ],
    },
  ],
};

const Footer1 = () => {
  return (
    <footer className="max-w-7xl mx-auto border border-lightened-green rounded-lg text-gray-700 py-6 mb-8">
      <div className=" flex">
        <div className="flex-1 p-4">
          {/* Logo Section */}
          <div className="mb-6">
            <img
              src={footerData.logo}
              alt="Urbn Logo"
              className="mx-auto w-32"
            />
          </div>

          {/* Description Section */}
          <div className="mb-8">
            <p className="text- mb-4">{footerData.description}</p>
            <address>{footerData?.address}</address>
          </div>
        </div>

        {/* Header Links Section */}
        <div className="flex flex-1  justify-around space-x-8">
          {footerData.sections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <a href={link.href} className="hover:underline">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer1;
