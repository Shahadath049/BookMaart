export const getStoredBookId = () => {
    const storedId = localStorage.getItem("read-stored-book-id");
    if (!storedId) {
        return [];
    }
    return JSON.parse(storedId);
};

export const setStoredBookId = (id) => {
    const storedList = getStoredBookId();
    if (storedList && storedList.includes(id)) {
        return;
    }
    localStorage.setItem("read-stored-book-id", JSON.stringify([...storedList, id]));
};
