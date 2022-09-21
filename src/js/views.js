const mainView = document.querySelector('#main-content');

const renderView = (htmlToRender) => {
  mainView.innerHTML = htmlToRender;
};

export const renderHome = () => {
  const html = `
  <main
        class="text-center d-flex flex-column justify-content-center overflow-hidden h-100"
      >
        <section class="mt-auto">
          <p
            class="m-0 h1 lh-l animate__animated animate__fadeIn"
            style="font-size: 3em"
          >
            Hi,
          </p>
          <h1
            class="m-0 h1 lh-l animate__animated animate__fadeIn"
            style="font-size: 3em"
          >
            I'm <span class="text-info fst-italic">Kenny</span>.
          </h1>
          <p
            class="display-5 mb-5 animate__animated animate__fadeIn"
          >
            This is my portfolio.
          </p>
        </section>
        <div
          class="animate__animated animate__fadeIn"
        >
          <p
            class="mt-1 px-3 fw-lighter lead text-uppercase text-white-50"
            style="letter-spacing: 3px"
          >
            Software Engineer // Web Developer
          </p>
        </div>

        <section
          class="mt-auto animate__animated animate__fadeIn"
        >
          <p class="fs-3 display-2 mb-5 pb-5">
            <i class="bi bi-envelope fs-3 display-2 me-2"></i>hello@pompoko.io
          </p>
          <ul class="list-unstyled">
            <li class="d-inline-block me-2">
              <a
                href="https://github.com/PomPoko-lab"
                target="_blank"
                rel="noopener noreferrer"
                ><i class="bi bi-github text-muted fs-5"></i
              ></a>
            </li>
           <li class="d-inline-block">
              <a
                href="https://www.linkedin.com/in/kenny-c-8aa364236/"
                target="_blank"
                rel="noopener noreferrer"
                ><i class="bi bi-linkedin text-muted fs-5"></i
              ></a>
            </li>
          </ul>
        </section>
      </main>
  `;
  renderView(html);
};

export const renderAbout = () => {
  const html = `
  <main class="mt-5 animate__animated animate__fadeIn">
  <div class="row mx-auto">
    <section class="col-12 mb-3 row m-0 p-0">
      <section class="col-12 col-md-6 d-flex flex-column">
        <img
          class="rounded-circle w-75 d-inline-block align-self-center align-self-sm-start mb-2 shadow-sm"
          style="max-width: 200px"
          src="./assets/img/NewMeCropped2.jpg"
          alt="Picture of me"
        />

        <h2 class="display-3 mb-0 ">Kenny Cao</h2>
        <p class="fs-3 fw-light text-info">Software Engineer</p>
        <p class="fs-6 text-white-50">Hello! I'm Kenny, a dog-loving, racoon-loving, business owner who enjoys gaming and programming. 
          I'm a
          <span class="fst-italic">Software engineer</span>
          who began self-taught studying learning web development and
          software engineering. Pursuing a Software Engineer degree at
          Arizona State University.
        </p>
      </section>
      <section class="col mt-auto">
        <p class="mb-1 fs-6 text-white-50">
          <i class="bi bi-geo-alt-fill me-2 text-success"></i>Pearland, TX
        </p>
        <p class="mb-1 fs-6 text-white-50">
          <i class="bi bi-link-45deg me-2 text-success"></i>https://pompoko.io/
        </p>
        <p class="mb-1 fs-6 text-white-50">
          <i class="bi bi-github me-2 text-success"></i>https://github.com/PomPoko-lab/
        </p>
        <p class="fs-6 text-white-50"><i class="bi bi-envelope me-2 text-success"></i>hello@pompoko.io</pc>
      </section>
    </section>
    <section class="col-12">
      <h3 class="display-5 mb-2">Core Skills</h3>
      <h4 class="fs-3 fw-light text-info">Programming Languages</h4>
      <p class="fs-5 fst-italic text-white-50">JavaScript, TypeScript, Java</p>
      <h4 class="fs-3 fw-light text-info">Frameworks and Databases</h4>
      <p class="fs-5 fst-italic text-white-50">
        React, NodeJS, Redux, ChakraUI, Bootstrap, TailwindUI, Express,
        MongoDB, Firebase
      </p>
      <h4 class="fs-3 fw-light text-info">Tools</h4>
      <p class="fs-5 fst-italic text-white-50">
        Visual Studio Code, Github, NPM, Adobe Photoshop
      </p>
    </section>
  </div>
</main>
`;
  renderView(html);
};

export const renderProjects = () => {
  const html = `
  <main class="mx-auto text-center pt-5 p-4 animate__animated animate__fadeIn">
        <h2 class="display-4 mb-5">Featured Projects</h2>
        <div class="row">
          <div class="col-12 col-md-6 p-0 overflow-hidden">
          <a href="https://github.com/PomPoko-lab/pompoko-lab.github.io"
          target="_blank"
          rel="noopener noreferrer">
            <img
              src="./assets/img/PortfolioNotResized.jpg"
              alt="Portfolio Project"
              class="img-fluid img-project"
            /></a>
          </div>
          <div class="col-12 col-md-6 p-0 overflow-hidden">
          <a href="https://github.com/PomPoko-lab/TanukiBot-Node"
          target="_blank"
          rel="noopener noreferrer">
            <img
              src="./assets/img/Discordbot.jpg"
              alt="Portfolio Project"
              class="img-fluid img-project h-100"
              style="object-position: left"
            /></a>
          </div>
          <div class="col-12 col-md-6 p-0 overflow-hidden">
          <a href="https://github.com/PomPoko-lab/restaurant-page"
          target="_blank"
          rel="noopener noreferrer">
            <img
              src="./assets/img/restaurant-pageNotResized.jpg"
              alt="Portfolio Project"
              class="img-fluid img-project h-100"
              style="object-position: top"
            /></a>
          </div>
          <div class="col-12 col-md-6 p-0 overflow-hidden">
          <a href="https://github.com/PomPoko-lab/lost-ark-tools"
          target="_blank"
          rel="noopener noreferrer">
            <img
              src="./assets/img/lostarktools.jpg"
              alt="Portfolio Project"
              class="img-fluid img-project h-100"
              style="object-position: left"
            /></a>
          </div>
        </div>
      </main>
`;
  renderView(html);
};
