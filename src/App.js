import React from 'react'
import Home from './max/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import OldTown from './max/OldTown';
import Flow from './max/Flow';
import Blog from './max/Blog';

export const App = () => {
  return (
    

<BrowserRouter>
<Routes>
  <Route >
    <Route index element={<Home />} />
    <Route path="flow" element={<Flow />} />
    <Route path="blog" element={<Blog />} />
    <Route path="oldTown" element={<OldTown />} />
  </Route>
</Routes>
</BrowserRouter>
  )
}

export default App
