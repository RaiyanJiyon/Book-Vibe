const getToReadList = () => {
    const storedListStr = localStorage.getItem('read-list');
    return storedListStr ? JSON.parse(storedListStr) : [];
};

const addToReadList = (id) => {
    const storedList = getToReadList();

    if (storedList.includes(id)) {
        console.log('Already in Read Book');
        return;
    }

    storedList.push(id);
    localStorage.setItem('read-list', JSON.stringify(storedList));
};

const getToWishList = () => {
    const storedListStr = localStorage.getItem('wish-list');
    return storedListStr ? JSON.parse(storedListStr) : [];
};

const addToWishList = (id) => {
    const storedList = getToWishList();

    if (storedList.includes(id)) {
        console.log('Already added in Wish List');
        return;
    }

    storedList.push(id);
    localStorage.setItem('wish-list', JSON.stringify(storedList));
};

export { addToReadList, addToWishList }