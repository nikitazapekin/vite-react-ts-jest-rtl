import ReactDOM from 'react-dom/client';

import AppRoutes from './utils/routes.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(<AppRoutes />);

/*
@fortawesome/react-fontawesome
 n (imported by C:/Users/wotbl/Vite-test-setup/src/hooks/useSearch.ts)
  @fortawesome/free-solid-svg-icons



<Routes>
	   <Route path='/' element={<MainPage />} />
	   <Route
		 path='/*'
		 element={
		   <>
			 <Routes>
			   <Route path='/not-found' element={<MainPage />} />
			 
			 </Routes>
		   </>
		 }
	   />
	 </Routes>
<App />
  <Router>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route
            path='/*'
            element={
              <>
                <Routes>
                  <Route path='/about' element={<AboutPage />} />
                  <Route path='/restaurant' element={<RestaurantPage />} />
                  <Route path='/sign_in' element={<SignInPage />} />
                  <Route path='/personal/:id' element={<PersonalPage />} />
                  <Route path='/yourOffers/:id' element={<PersonalFormOffersPage />} />
                </Routes>
              </>
            }
          />
        </Routes>
        </Router> 
		*/
