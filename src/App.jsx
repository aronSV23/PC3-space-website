import { Navigate, Route, Routes } from 'react-router-dom';
import data from '../public/data/data.json';
import { CrewDetails } from './components/CrewDetails/CrewDetails';
import { DestinationDetails } from './components/DestinationDetails/DestinationDetails';
import { Header } from './components/Header/Header';
import { TechnologyDetails } from './components/TechnologyDetails/TechnologyDetails';
import { Crew } from './pages/Crew';
import { Destination } from './pages/Destination';
import { Home } from './pages/Home';
import { Technology } from './pages/Technology';


function App() {
  return (
    <>
      <main className='relative bg-SpaceDark min-h-screen w-screen'>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<Destination />}>
            <Route index element={<Navigate to="moon" />} />
            {data.destinations.map(destination => (
              <Route
                key={destination.id}
                path={destination.name.toLowerCase()}
                element={<DestinationDetails destination={destination} />}
              />
            ))}
          </Route>
          <Route path="/crew" element={<Crew />}>
            <Route index element={<Navigate to="douglas-hurley" />} />
            {data.crew.map(crewMember => (
              <Route
                key={crewMember.id}
                path={crewMember.name.toLowerCase().replace(' ', '-')}
                element={<CrewDetails crewMember={crewMember} />}
              />
            ))}
          </Route>
          <Route path="/technology" element={<Technology />}>
            <Route index element={<Navigate to="launch-vehicle" />} />
            {data.technology.map(technology => (
              <Route
                key={technology.id}
                path={technology.name.toLowerCase().replace(' ', '-')}
                element={<TechnologyDetails technology={technology} />}
              />
            ))}
          </Route>
        </Routes>
      </main>
    </>
  );
}

export default App;

