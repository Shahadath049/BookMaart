import { BookOpen } from "lucide-react";

const Footer2 = ({
  logo = {
    src: "./public/assets/book.ico",
    alt: "blocks for Bookshelf",
    title: "BOOKMART.COM",
    url: "#",
  },

  tagline = "Books made easy.",

  menuItems = [
    {
      title: "Product",
      links: [
        { text: "Overview", url: "#" },
        { text: "Pricing", url: "#" },
        { text: "Marketplace", url: "#" },
        { text: "Features", url: "#" },
        { text: "Integrations", url: "#" },
        { text: "Pricing", url: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { text: "About", url: "#" },
        { text: "Team", url: "#" },
        { text: "Blog", url: "#" },
        { text: "Careers", url: "#" },
        { text: "Contact", url: "#" },
        { text: "Privacy", url: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { text: "Help", url: "#" },
        { text: "Sales", url: "#" },
        { text: "Advertise", url: "#" },
      ],
    },
    {
      title: "Social",
      links: [
        { text: "Twitter", url: "#" },
        { text: "Instagram", url: "#" },
        { text: "LinkedIn", url: "#" },
      ],
    },
  ],

  copyright = "© 2024 Copyright. All rights reserved.",

  bottomLinks = [
    { text: "Terms and Conditions", url: "#" },
    { text: "Privacy Policy", url: "#" },
  ],
}) => {
  return (
    <section className="py-16 px-8 md:py-32 md:px-40">
      <div className="container mx-auto">
        <footer>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-6">
            <div className="col-span-2 mb-8 lg:mb-0">
              <div className="flex flex-col items-center gap-2 lg:flex-row lg:justify-start">
                <a href="https://shadcnblocks.com">
                  <BookOpen size={32} />
                </a>
                <p className="text-xl font-semibold mt-2 lg:mt-0">
                  {logo.title}
                </p>
              </div>
              <p className="mt-4 font-bold text-center lg:text-left">
                {tagline}
              </p>
            </div>
            {menuItems.map((section, sectionIdx) => (
              <div
                key={sectionIdx}
                className="text-left md:text-left md:pl-16 lg:text-left lg:pl-0"
              >
                <h3 className="mb-4 font-bold">{section.title}</h3>
                <ul className="space-y-4 text-muted-foreground">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="font-medium hover:text-primary"
                    >
                      <a href={link.url}>{link.text}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-24 flex flex-col justify-between gap-4 border-t pt-8 text-sm font-medium text-muted-foreground md:flex-row md:items-center">
            <p className="text-center md:text-left">{copyright}</p>
            <ul className="flex justify-center gap-4 md:justify-start">
              {bottomLinks.map((link, linkIdx) => (
                <li key={linkIdx} className="underline hover:text-primary">
                  <a href={link.url}>{link.text}</a>
                </li>
              ))}
            </ul>
          </div>
        </footer>
      </div>
    </section>
  );
};

export { Footer2 };
