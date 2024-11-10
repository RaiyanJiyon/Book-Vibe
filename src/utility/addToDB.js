import { toast } from "react-toastify";


const getToReadList = () => {
    const storedListStr = localStorage.getItem('read-list');
    return storedListStr ? JSON.parse(storedListStr) : [];
};

const addToReadList = (id) => {
    const storedList = getToReadList();

    if (storedList.includes(id)) {
        toast.error('Already in Read Books', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        return;
    }

    storedList.push(id);
    toast.success('Added in Read Books', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });

    localStorage.setItem('read-list', JSON.stringify(storedList));
};

const getToWishList = () => {
    const storedListStr = localStorage.getItem('wish-list');
    return storedListStr ? JSON.parse(storedListStr) : [];
};

const addToWishList = (id) => {
    const storedWishList = getToWishList();
    const storedReadList = getToReadList();

    if (storedReadList.includes(id)) {
        toast.warn('This book is already in your Read Books list, so it cannot be added to the Wishlist.', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        return
    }

    if (storedWishList.includes(id)) {
        toast.error('Already in Wishlist Books', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        return;
    }

    storedWishList.push(id);
    toast.success('Added in Wishlist Books', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });

    localStorage.setItem('wish-list', JSON.stringify(storedWishList));
};

export { addToReadList, addToWishList, getToReadList, getToWishList }