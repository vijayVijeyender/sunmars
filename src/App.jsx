import { Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
import { AppProviders } from "./providers";
import Applayout from "./Components/applayout/Applayout.component";
import { Home } from "./Pages/Home/Home.page";
import { About } from "./Pages/About/About.page";
import { Contact } from "./Pages/Contact/Contact.page";

function App() {
  return (
    <>
      <AppProviders>
      <Applayout>
        <Suspense >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </Applayout>
    </AppProviders>
    </>
  )
}

export default App
