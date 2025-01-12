import React from 'react';
import { Route, Routes } from 'react-router-dom'

import { HomePage } from '../pages/HomePage/HomePage.tsx'
import {Contact} from '../pages/Contato/Contact.tsx'
import {About} from '../pages/About/About.tsx'

function Router()
{
    return(
        <Routes>
            <Route path="/" element={<HomePage/>}></Route>
            <Route path="/sobre" element={<About/>}></Route>
            <Route path="/contato" element={<Contact/>}></Route>
        </Routes>
    )
}