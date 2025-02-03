import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { BookOpen, Bookmark, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Feature108 = ({
  badge = "BOOKMART.COM",
  heading = "A Collection of Books and Features for Book Lovers",
  description = "Join us to build a community of book lovers and readers. We have a collection of books and features that will make you fall in love with reading.",

  tabs = [
    {
      value: "tab-1",
      icon: <BookOpen className="h-auto w-4 shrink-0" />,
      label: "Extensive Library",
      content: {
        badge: "Diverse Collection",
        title: "Explore a World of Books",
        description:
          "Discover our vast collection of books spanning various genres. From classic literature to contemporary bestsellers, we have something for every reader.",
        buttonText: "Browse Books",
        imageSrc: "https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg",
        imageAlt: "Library shelves filled with books",
      },
    },
    {
      value: "tab-2",
      icon: <Bookmark className="h-auto w-4 shrink-0" />,
      label: "Personalized Recommendations",
      content: {
        badge: "Tailored for You",
        title: "Find Your Next Favorite Read",
        description:
          "Our advanced recommendation system analyzes your reading preferences to suggest books you'll love. Uncover hidden gems and expand your literary horizons.",
        buttonText: "Get Recommendations",
        imageSrc: "https://www.londonlibrary.co.uk/images/20210408113322.JPG",
        imageAlt: "Person reading a book with suggested titles nearby",
      },
    },
    {
      value: "tab-3",
      icon: <Users className="h-auto w-4 shrink-0" />,
      label: "Book Clubs",
      content: {
        badge: "Community Reading",
        title: "Connect with Fellow Readers",
        description:
          "Join our vibrant book clubs to discuss your favorite reads, share insights, and make new friends. Engage in lively conversations about literature.",
        buttonText: "Join a Club",
        imageSrc: "https://www.russellbooks.com/wp-content/uploads/2024/11/general-vintage-dkkdk.jpg",
        imageAlt: "Group of people discussing a book",
      },
    },
  ]
}) => {
  return (
    (<section className="py-32 flex justify-center items-center">
      <div>
        <div className="container flex flex-col items-center gap-4 text-center">
          <Badge variant="outline">{badge}</Badge>
          <h1 className="max-w-2xl text-3xl font-semibold md:text-4xl">
            {heading}
          </h1>
          <p className="text-muted-foreground">{description}</p>
        </div>
        <div>
          <Tabs defaultValue={tabs[0].value} className="mt-8">
            <TabsList
              className="container flex flex-col items-center justify-center gap-4 sm:flex-row md:gap-10">
              {tabs.map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-muted-foreground data-[state=active]:bg-muted data-[state=active]:text-primary">
                  {tab.icon} {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
            <div
              className="container mt-8 max-w-screen-xl rounded-2xl bg-muted/70 p-6 lg:p-16">
              {tabs.map((tab) => (
                <TabsContent
                  key={tab.value}
                  value={tab.value}
                  className="grid place-items-center gap-20 lg:grid-cols-2 lg:gap-10">
                  <div className="flex flex-col gap-5">
                    <Badge variant="outline" className="w-fit bg-background">
                      {tab.content.badge}
                    </Badge>
                    <h3 className="text-3xl font-semibold lg:text-5xl">
                      {tab.content.title}
                    </h3>
                    <p className="text-muted-foreground lg:text-lg">
                      {tab.content.description}
                    </p>
                    <Button className="mt-2.5 w-fit gap-2" size="lg">
                      {tab.content.buttonText}
                    </Button>
                  </div>
                  <img
                    src={tab.content.imageSrc}
                    alt={tab.content.imageAlt}
                    className="rounded-xl" />
                </TabsContent>
              ))}
            </div>
          </Tabs>
        </div>
      </div>
    </section>)
  );
};

export { Feature108 };

