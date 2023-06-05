import React, { useEffect, useState } from 'react';
import './App.scss';

import { Route, Routes } from 'react-router-dom';
import Layout from '../features/layout/Layout';
import News from '../features/page/News/NewsList';
import Address from '../features/page/Address.tsx/AddressList';
import { useAppDispatch } from '../store/store';
import { getAddressesDate } from '../features/addressSlice';

function App(): JSX.Element {
  const [search, setSearch] = useState('');
  console.log(search, '<---');
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAddressesDate(search));
  }, [dispatch, search]);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<News />} />
          <Route path="address" element={<Address setSearch={setSearch} />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
