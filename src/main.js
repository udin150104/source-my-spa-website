import App from './App';
import './assets/styles.css';
import Home from './views/Home';
import About from './views/About';
import NotFound from './views/NotFound';
import Portofolio from './views/Portofolio';
import InfomationPage from './views/InfomationPage';
import Blogs from './views/Blogs';

const app = new App();

app.addRoute('/', new Home());
app.addRoute('/about', new About());
app.addRoute('/portofolio', new Portofolio());
app.addRoute('/blogs', new Blogs());
app.addRoute('/informasi', new InfomationPage());
app.addRoute('/404', new NotFound());

app.start();