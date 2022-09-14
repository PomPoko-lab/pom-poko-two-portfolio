import '../scss/styles.scss';
import * as views from './views';
import * as selectors from './selectors';

const popoverTriggerList = document.querySelectorAll(
  '[data-bs-toggle="popover"]'
);
const popoverList = [...popoverTriggerList].map(
  (popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl)
);

// Render Home on root

selectors.btnHome.addEventListener('click', views.renderHome);
selectors.btnAbout.addEventListener('click', views.renderAbout);
// btnProjects.addEventListener('click', views.renderHome);
