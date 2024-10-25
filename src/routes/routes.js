import Inicio from './layout';
import CatList from './components/Adopta';
import DogList from './components/Participar';

const routes = [
  { name: "Gatos", path: "/gatos", component: CatList },
  { name: "Perros", path: "/perros", component: DogList },
  { name: "Perros", path: "/", component: Inicio }
];

export default routes;
