import React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import Logo from '../assets/internom_white.webp';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import './Navbar.css'

export const Navbar = () => {

  return (
    <div class="bg-slate-900 h-24 flex flex-col justify-between">
        <div class="flex justify-between ">
            <div class="text-white"><img src={Logo} class="h-8 my-3"/></div>
                <div class="text-white my-1">
                    <select id="slct" class="h-9 bg-gray-200 text-sm text-slate-600 rounded-tl rounded-bl my-1 w-20">
                            <option>Бүгд</option>
                            <option>Ном</option>
                            <option>Ном</option>
                            <option>Ном</option>
                            <option>Ном</option>
                            <option>Ном</option>
                    </select>
                    <input class="h-9 w-96" /><button class="bg-orange-300 h-9 w-9 text-black rounded-tr rounded-br"><SearchIcon /></button></div>
                <div class="flex">
                    <div class="text-white">
                        <a href="#">
                        <span class="block text-sm">Нэвтрэх</span>
                        <span class="block text-sm"><b>Профайл <KeyboardArrowDownIcon /></b></span>
                        </a>
                    </div>
                    <div class="text-white text-sm">
                        <div>
                            <div class="bg-orange-300 rounded-full h-5 w-5 text-center">
                                <span class="text-sm small-text">0</span>
                            </div>
                            <LocalGroceryStoreOutlinedIcon />
                        </div>
                        <span><b>Сагс</b></span>
                    </div>
                </div>
            </div>
            <div class="bg-white border h-10 flex flex-col justify-center">
                <div class="block">
                    <a href='#' class="text-xs font-bold text-bold px-3 py-2 hover:bg-slate-100 rounded">НОМ<KeyboardArrowDownIcon/></a>
                    <a href='#' class="text-xs font-bold text-bold px-3 py-2 hover:bg-slate-100 rounded">ENGLISH BOOKS<KeyboardArrowDownIcon/></a>
                    <a href='#' class="text-xs font-bold text-bold px-3 py-2 hover:bg-slate-100 rounded">ИНТЕРКИДС<KeyboardArrowDownIcon/></a>
                    <a href='#' class="text-xs font-bold text-bold px-3 py-2 hover:bg-slate-100 rounded">ЦАХИМ НОМ</a>
                    <a href='#' class="text-xs font-bold text-bold px-3 py-2 hover:bg-slate-100 rounded">АУДИО НОМ</a>
                    <a href='#' class="text-xs font-bold text-bold px-3 py-2 hover:bg-slate-100 rounded">БЕСТСЕЛЛЭР</a>
                </div>
            </div>
    </div>

        
  )
}
