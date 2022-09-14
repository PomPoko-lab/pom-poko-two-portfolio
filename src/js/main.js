import '../scss/styles.scss';
import * as views from './views';
import * as selectors from './selectors';

selectors.btnHome.addEventListener('click', views.renderHome);
selectors.btnAbout.addEventListener('click', views.renderAbout);
selectors.btnProjects.addEventListener('click', views.renderProjects);
