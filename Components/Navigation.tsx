"use client"
import { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import { FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi';

interface Route {
    id: number;
    route: string;
    path: string;
    underMaintenance: boolean;
}

export const Navigation = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [hoveredId, setHoveredId] = useState<number | null>(null); // Track hovered link id
    const path = useRouter();
    const animation = useAnimation();

    const handleShow = (bool: boolean) => {
        setOpen(bool);
    }
    
    useEffect(() => {
        if (open) {
            animation.start(i => ({
                translateY: [0, -10, 0],
                transition: { delay: i * 0.05, duration: 0.5 },
            }));
        } else {
            animation.start({ translateY: 0 });
        }
    }, [open, animation]);

    const routes: string[] = ["Home", "About us", "Case Studies", "Portfolio", "Dashboard"];
    const routeLayout: Route[] = [
        {
            id: 1,
            route: routes[0],
            path: '/',
            underMaintenance: false
        },
        {
            id: 2,
            route: routes[1],
            path: '/about',
            underMaintenance: false
        },
        {
            id: 3,
            route: routes[2],
            path: '/Case-studies',
            underMaintenance: false
        },
        {
            id: 4,
            route: routes[3],
            path: '/portfolio',
            underMaintenance: false
        },
        {
            id: 5,
            route: routes[4],
            path: '/dashboard',
            underMaintenance: false
        },
    ];

    const UserItemsLayout: React.FC = () => {
        return (
            <div className="flex-none">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                />
                            </svg>
                            <span className="badge badge-sm indicator-item">8</span>
                        </div>
                    </div>
                    <div
                        tabIndex={0}
                        className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
                    >
                        <div className="card-body">
                            <span className="text-lg font-bold">8 Items</span>
                            <span className="text-info">Subtotal: $999</span>
                            <div className="card-actions">
                                <button className="btn btn-primary btn-block">View cart</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <motion.img
                                alt="Tailwind CSS Navbar component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                            />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                    >
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        );
    }

    const [navbarScroll, setActive] = useState<boolean>(false);
    // const hovered = `${hoveredId === route.id ? 'text-[#00fa21ca]' : ''}`
    
    return (
        <>
            <motion.div 
                className="navbar justify-between bg-transparent fixed top-0 z-[999]"
            >
                <motion.div
                    className='fixed bg-neutral-100 top-0 w-[120%] h-24'
                    initial={{ y: '-100%', x: '-10%' }}
                    animate={{ y: open ? 0 : '-100%'}}
                >

                </motion.div>
                <div className="flex-1 px-1 z-50">
                    <Link href="/" className='w-[10rem]'>
                        <motion.img src='https://cdn-images.imagevenue.com/11/83/ff/ME18ZVHX_o.png'/>
                    </Link>
                </div>
                <div className="flex-none">
                    <label className="btn bg-transparent border-none btn-square swap swap-rotate hover:bg-transparent">
                        {!open ? (
                            <input type="checkbox" onClick={() => handleShow(true)} />
                        ) : (
                            <input type="checkbox" onClick={() => handleShow(false)} />
                        )}
                        <svg className="swap-off fill-neutral-950 z-50 size-12" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
                        <svg className="swap-on fill-neutral-950 z-50 size-12" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg>
                    </label>
                </div>

                {/* <UserItemsLayout /> */}
            </motion.div>

            <motion.div
                initial={{ x: '100%', opacity: 0 }}
                animate={{ x: open ? 0 : '100%', opacity: open ? 1 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 40 }}
                className="bg-gradient-to-br from-neutral-50 via-blue-50 to-blue-50 h-[100%] sm:w-[28rem] w-[18rem] fixed right-0 z-[900] flex flex-col py-2 px-2 justify-between items-center"
            >
                <ul className="flex flex-col justify-center items-center list-none text-xl font-thin w-[100%]">
                    <div className="h-[100%] flex flex-col justify-evenly items-center min-w-[100%] md:gap-20 gap-16 text-neutral-950 mt-24">
                        {routeLayout.map((route, index) => (
                            <motion.li
                                key={route.id}
                                className={`
                                    lg:text-5xl md:text-4xl text-3xl font-black w-full uppercase ease-linear
                                `}
                                style={{ lineHeight: '1.8rem', width: '100%' }}
                                initial={{ rotateX: 0, scale: 1 }}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                onMouseEnter={() => setHoveredId(route.id)}
                                onMouseLeave={() => setHoveredId(null)}
                            >
                                <Link href={route.path} className='flex flex-col gap-2'>
                                   {route.route}
                                    <motion.span 
                                        className="inline-block h-1 bg-blue-500 mx-[.13rem]"
                                        initial={{ width: hoveredId === route.id ? '6rem' : '3rem' }}  // Initial width
                                        animate={{ width: hoveredId === route.id ? '6rem' : '3rem' }}  // Expanded width on hover
                                        transition={{ type: "spring", stiffness: 300, damping: 20 }}  // Smooth animation
                                    ></motion.span>
                                </Link>
                            </motion.li>
                        ))}
                    </div>
                </ul>
                <div className='w-full h-[4rem] flex justify-between items-center border-t'>
                    <div className='md:text-lg text-sm font-medium w-full'>
                        <p>Flowgrid Team</p> copyrights &copy; 2024
                    </div>

                    <div className='flex w-full justify-end gap-8'>
                        <FiInstagram className='size-8 text-blue-700 cursor-pointer'/>
                        <FiFacebook className='size-8 text-blue-700 cursor-pointer' />
                        <FiTwitter className='size-8 text-blue-700 cursor-pointer' />
                    </div>

                </div>
            </motion.div>
        </>
    );
}
