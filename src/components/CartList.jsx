import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getStoredBookId } from "@/utilities/addToDb";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import Dcard from "./Dcard";

const CartList = () => {
  const [selectedBooks, setSelectedBooks] = useState([]);
  const allBooks = useLoaderData();
  useEffect(() => {
    const storedList = getStoredBookId();
    const storedBooksId = storedList.map((id) => parseInt(id));
    const storedBooks = allBooks.filter((book) =>
      storedBooksId.includes(book.bookId)
    );
    setSelectedBooks(storedBooks);
  }, []);

  return (
    <div>
      <Tabs defaultValue="tab-1">
        <TabsList className="relative h-auto w-full gap-0.5 bg-transparent p-0 before:absolute before:inset-x-0 before:bottom-0 before:h-px before:bg-border">
          <TabsTrigger
            value="tab-1"
            className="overflow-hidden rounded-b-none border-x border-t border-border bg-muted py-2 data-[state=active]:z-10 data-[state=active]:shadow-none"
          >
            {`Cart (${selectedBooks.length})`}
          </TabsTrigger>
          <TabsTrigger
            value="tab-2"
            className="overflow-hidden rounded-b-none border-x border-t border-border bg-muted py-2 data-[state=active]:z-10 data-[state=active]:shadow-none"
          >
            Tab 2
          </TabsTrigger>
        </TabsList>
        <TabsContent className=" container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 justify-items-center"  value="tab-1">
          
          {selectedBooks.map((book) => (
            <Dcard selectedBook={book} key={book.bookId}></Dcard>
          ))}
        </TabsContent>
        <TabsContent value="tab-2">
          <p className="p-4 text-center text-xs text-muted-foreground">
            Content for Tab 2
          </p>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CartList;
