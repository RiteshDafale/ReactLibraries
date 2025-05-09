import { toast } from 'react-toastify';

export const  msg = () => {
    toast.info('Copied to Clipboard', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        // transition: "flip",
    });
}