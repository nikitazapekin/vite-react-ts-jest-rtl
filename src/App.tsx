import Header from './components/Header';
import List from './components/List';
import { ErrorBoundary } from './components/ErrorBoundary';
import './global.scss';
import './normalize.scss';
import ErrorComponent from './components/ErrorComponent';
import useSearch from './hooks/useSearch';

const App = () => {
	const { handleInputChange, handleClick, isFetching, users, handleNext, handlePrev, query } = useSearch();

	return (
		<>
			<ErrorBoundary>
				<div className="container">
					<Header handleClick={handleClick} handleInputChange={handleInputChange} />

					<List
						handleNext={handleNext}
						handlePrev={handlePrev}
						users={users}
						isFetching={isFetching}
						typedValue={query}
					/>
					<ErrorBoundary>
						<ErrorComponent />
					</ErrorBoundary>
				</div>














        <div className="container my-5">
            <form>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Email Address
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className="form-control"
                    />
                </div>
            </form>
        </div>
			</ErrorBoundary>
		</>
	);
};

export default App;

//https://jestjs.io/ru/docs/tutorial-react
//npm install --save-dev react-test-renderer
//npm install --save-dev jest babel-jest @babel/preset-env @babel/preset-react react-test-renderer
//npm install --save-dev @babel/preset-typescript @babel/core @babel/preset-env babel-jest


//npm install --save-dev @testing-library/react @testing-library/dom
//npm install --save-dev @testing-library/react @testing-library/dom @types/react @types/react-dom
/*module.exports = {
    presets: [
      '@babel/preset-env',
      ['@babel/preset-react', {runtime: 'automatic'}],
    ],
  };
*/
// babel.config.js

/*
module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',  
    '@babel/preset-typescript' 
  ],
};

 */

/*
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ]
  ]
};
*/
//




/*

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
*/