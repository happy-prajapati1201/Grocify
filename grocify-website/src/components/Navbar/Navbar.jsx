import React, { useContext, useEffect, useState } from 'react'
import { GoHeartFill } from "react-icons/go";
import { HiShoppingBag } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import { TbMenu2 , TbMenu3 } from "react-icons/tb";
import { Link, useNavigate } from 'react-router-dom';
import products from '../ProductList/ProductList';
import { CartContext } from '../../context/CartContext';
import { AuthContext } from '../../context/AuthContext';

const Navbar = () => {

    const [showmenu ,setshowmenu]=useState(false);
    const [isScrolled,setIsScrolled]=useState(false);
    const [searchTerm,setSearchTerm]=useState('');
    const [suggestions,setSuggestions]=useState([]);
    const navigate = useNavigate();

    const togglemenu = () => {
        setshowmenu(!showmenu);
    }

    const handleSearchChange = (value) => {
        setSearchTerm(value);
        if (!value.trim()) {
            setSuggestions([]);
            return;
        }
        const query = value.toLowerCase();
        const matched = products
            .filter((item) => item.name.toLowerCase().includes(query))
            .slice(0, 6);
        setSuggestions(matched);
    }

    const handleSelectProduct = (product) => {
        setSearchTerm(product.name);
        setSuggestions([]);
        setshowmenu(false);
        navigate(`/product/${product.id}`);
    }

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (suggestions[0]) {
            handleSelectProduct(suggestions[0]);
        }
    }

    const handleSearchBlur = () => {
        setTimeout(() => setSuggestions([]), 120);
    }

    useEffect(() => {
        const handlescroll = () => {
            setIsScrolled(window.scrollY > 10)
        }

        window.addEventListener('scroll',handlescroll);
        return () => window.removeEventListener('scroll',handlescroll)
    })

    const { uniqueCount } = useContext(CartContext);
    const { isLoggedIn, user, logout } = useContext(AuthContext);

    return ( 
   <header className={` bg-white fixed top-0 right-0 left-0 z-50  ${isScrolled ? 'drop-shadow-[0_4px_25px_rgba(0,0,0,0.1)]' : ''} `}>
    <nav className='max-w-[1400px] mx-auto md:h-[14vh] h-[12vh] px-10 flex justify-between items-center'>
        {/* logo */}
        <Link to='/' className='text-3xl font-bold'>
            Gr<span className='text-orange-500 uppercase'>o</span>cify
        </Link>

        {/* desktop menu */}
        <ul className='md:flex items-center gap-x-15 hidden'>
            <li>
                <Link to='/' className='font-semibold text-orange-500 tracking-wider'>Home</Link>
            </li>
            <li>
                <Link to='/about' className='font-semibold text-zinc tracking-wider hover:text-orange-500'>About Us</Link>
            </li>
            <li>
                <Link to='/ourprocess' className='font-semibold text-zinc tracking-wider hover:text-orange-500'>Process</Link>
            </li>
            <li>
                <Link to='/contact' className='font-semibold text-zinc tracking-wider hover:text-orange-500'>Contact Us</Link>
            </li>
        </ul>

        {/* nav action */}
        <div className='flex items-center gap-x-5'>
            {/* input field */}
            <form onSubmit={handleSearchSubmit} className='md:flex p-2 border-2 border-orange-500 rounded-full hidden relative min-w-[280px]'>
                <input
                    type='text'
                    name='text'
                    id='text'
                    placeholder='Search products...'
                    autoComplete='off'
                    value={searchTerm}
                    onChange={(e) => handleSearchChange(e.target.value)}
                    onBlur={handleSearchBlur}
                    className='flex-1 h-[5vh] px-3 focus:outline-none'
                />
                <button type='submit' className='bg-linear-to-b from-red-600 to-orange-400 text-white w-10 h-10 flex justify-center items-center rounded-full text-2xl'> <IoSearch/> </button>

                {suggestions.length > 0 && (
                    <ul className='absolute top-full left-0 right-0 mt-2 bg-white border border-orange-200 rounded-xl shadow-lg overflow-hidden z-50 max-h-72 overflow-y-auto'>
                        {suggestions.map((item) => (
                            <li key={item.id}>
                                <button
                                    type='button'
                                    onMouseDown={() => handleSelectProduct(item)}
                                    className='w-full text-left px-4 py-3 hover:bg-orange-50 flex items-center gap-3'
                                >
                                    <span className='shrink-0 h-12 w-12 rounded-lg bg-zinc-100 flex items-center justify-center overflow-hidden'>
                                        <img src={item.image} alt={item.name} className='h-full w-full object-contain' />
                                    </span>
                                    <span className='flex-1 flex flex-col gap-0.5'>
                                        <span className='font-semibold text-zinc-800 leading-tight'>{item.name}</span>
                                        <span className='text-sm text-orange-600 leading-tight'>Rs {item.price}</span>
                                    </span>
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </form>
            <Link to='/favorites' className='relative text-zinc-800 text-2xl hover:text-red-500 transition-colors'>
                <GoHeartFill />
            </Link>
            <Link to='/buy' className='relative text-zinc-800 text-2xl hover:text-orange-500 transition-colors'>
                <HiShoppingBag />
                {uniqueCount > 0 && (
                    <span className='absolute -top-2 -right-2 bg-red-500 text-white text-[10px] leading-none px-2 py-1 rounded-full'>
                        {uniqueCount}
                    </span>
                )}
            </Link>

            {/* Auth buttons */}
            {!isLoggedIn ? (
                <div className='hidden md:flex gap-x-3'>
                    <Link to='/login' className='font-semibold text-orange-500 hover:text-orange-600 px-4 py-2 rounded-lg border-2 border-orange-500 transition'>
                        Login
                    </Link>
                    <Link to='/register' className='font-semibold text-white bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-lg transition'>
                        Register
                    </Link>
                </div>
            ) : (
                <div className='hidden md:flex items-center gap-x-3'>
                    <span className='font-semibold text-zinc-800'>Welcome, {user?.name}</span>
                    <button onClick={logout} className='font-semibold text-white bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg transition'>
                        Logout
                    </button>
                </div>
            )}

            {/* Hamburgger */}
            <a href='#' className='text-zinc-800 text-3xl md:hidden' onClick={togglemenu}>
                  {showmenu ? <TbMenu3 /> : <TbMenu2/> }
            </a>
        </div>

        {/* mobile menu */}
        <ul className={`flex flex-col gap-y-15 bg-orange-500/15 backdrop-blur-xl shadow-xl rounded-xl p-10 items-center gap-x-15 md:hidden absolute top-30 -left-full transform -translate-x-1/2 transition-all duration-500 ${showmenu ? 'left-1/2' : " "}`}>
            <li>
                <Link to='/' onClick={() => setshowmenu(false)} className='font-semibold text-orange-500 tracking-wider'>Home</Link>
            </li>
            <li>
                <Link to='/about' onClick={() => setshowmenu(false)} className='font-semibold text-zinc tracking-wider hover:text-orange-500'>About Us</Link>
            </li>
            <li>
                <Link to='/ourprocess' onClick={() => setshowmenu(false)} className='font-semibold text-zinc tracking-wider hover:text-orange-500'>Process</Link>
            </li>
            <li>
                <Link to='/contact' onClick={() => setshowmenu(false)} className='font-semibold text-zinc tracking-wider hover:text-orange-500'>Contact Us</Link>
            </li>

            {/* Mobile Auth buttons */}
            {!isLoggedIn ? (
                <div className='flex flex-col gap-2 w-full'>
                    <Link to='/login' onClick={() => setshowmenu(false)} className='w-full text-center font-semibold text-orange-500 hover:text-orange-600 px-4 py-2 rounded-lg border-2 border-orange-500 transition'>
                        Login
                    </Link>
                    <Link to='/register' onClick={() => setshowmenu(false)} className='w-full text-center font-semibold text-white bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-lg transition'>
                        Register
                    </Link>
                </div>
            ) : (
                <div className='flex flex-col gap-2 w-full items-center'>
                    <span className='font-semibold text-zinc-800'>Welcome, {user?.name}</span>
                    <button onClick={() => { logout(); setshowmenu(false); }} className='w-full font-semibold text-white bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg transition'>
                        Logout
                    </button>
                </div>
            )}

            <li className='w-full'>
                <form onSubmit={handleSearchSubmit} className='flex p-2 border-2 border-orange-500 rounded-full md:hidden relative w-full'>
                    <input
                        type='text'
                        name='text'
                        id='text-mobile'
                        placeholder='Search products...'
                        autoComplete='off'
                        value={searchTerm}
                        onChange={(e) => handleSearchChange(e.target.value)}
                        onBlur={handleSearchBlur}
                        className='flex-1 h-[5vh] px-3 focus:outline-none bg-transparent'
                    />
                    <button type='submit' className='bg-linear-to-b from-red-600 to-orange-400 text-white w-10 h-10 flex justify-center items-center rounded-full text-2xl'> <IoSearch/> </button>

                    {suggestions.length > 0 && (
                        <ul className='absolute top-full left-0 right-0 mt-2 bg-white border border-orange-200 rounded-xl shadow-lg overflow-hidden z-50 max-h-72 overflow-y-auto'>
                            {suggestions.map((item) => (
                                <li key={item.id}>
                                    <button
                                        type='button'
                                        onMouseDown={() => handleSelectProduct(item)}
                                        className='w-full text-left px-4 py-3 hover:bg-orange-50 flex items-center gap-3'
                                    >
                                        <span className='shrink-0 h-12 w-12 rounded-lg bg-zinc-100 flex items-center justify-center overflow-hidden'>
                                            <img src={item.image} alt={item.name} className='h-full w-full object-contain' />
                                        </span>
                                        <span className='flex-1 flex flex-col gap-0.5'>
                                            <span className='font-semibold text-zinc-800 leading-tight'>{item.name}</span>
                                            <span className='text-sm text-orange-600 leading-tight'>Rs {item.price}</span>
                                        </span>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    )}
                </form>
            </li>
        </ul>
    </nav>
   </header>
  )
}

export default Navbar
