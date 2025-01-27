import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import spinner from '../assets/spinner.gif';
const Loader = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const {pathname} = useLocation()
   
    useEffect(() => {
        setLoading(true)
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, [pathname]);

    if (loading) {
        return (
            <div className="flex items-center bg-white justify-center w-full h-screen">
                <div className="">
                  <img src={spinner} alt="" className="" />  
                </div>
            </div>
        );
    }

    return <div>{children}</div>;
};

export default Loader;
