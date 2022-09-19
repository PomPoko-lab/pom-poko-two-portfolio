const mainView = document.querySelector('#main-content');

const renderView = (htmlToRender) => {
  mainView.innerHTML = htmlToRender;
};

export const renderHome = () => {
  const html = `
  <main
        class="text-center d-flex flex-column justify-content-center overflow-hidden h-100 animate__animated animate__fadeIn"
      >
        <section class="mt-auto">
          <p
            class="m-0 h1 lh-l"
            style="font-size: 3em"
          >
            Hi,
          </p>
          <h1
            class="m-0 h1 lh-l"
            style="font-size: 3em"
          >
            I'm <span class="text-primary fst-italic">Kenny</span>.
          </h1>
          <p
            class="display-5 mb-5"
          >
            This is my portfolio.
          </p>
        </section>
        <p
          class="mt-1 px-3 fw-lighter lead text-uppercase"
          style="letter-spacing: 3px"
        >
          Software Engineer // Web Developer
        </p>
        <section
          class="mt-auto mb-5 pb-5 d-flex justify-content-center gap-2"
        >
          <i class="bi bi-envelope fs-4 display-1 my-auto mb-5"></i>
          <p class="fs-4 display-1 my-auto mb-5">hello@pompoko.io</p>
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

        <h2 class="display-3 mb-0">Kenny Cao</h2>
        <p class="fs-3 fw-light">Front End Engineer</p>
        <p class="fs-5">Hello! I'm Kenny, a dog-loving, racoon-loving, business owner who enjoys gaming and programming. 
          I'm a
          <span class="text-primary fst-italic">front-end engineer</span>
          who began self-taught studying learning web development and
          software engineering. Pursuing a Software Engineer degree at
          Arizona State University.
        </p>
      </section>
      <section class="col mt-auto">
        <p class="mb-1 fs-6">
          <i class="bi bi-geo-alt-fill me-2 text-success"></i>Pearland, TX
        </p>
        <p class="mb-1 fs-6">
          <i class="bi bi-link-45deg me-2 text-success"></i>https://pompoko.io/
        </p>
        <p class="mb-1 fs-6">
          <i class="bi bi-github me-2 text-success"></i>https://github.com/PomPoko-lab/
        </p>
        <p class="fs-6"><i class="bi bi-envelope me-2 text-success"></i>hello@pompoko.io</pc>
      </section>
    </section>
    <section class="col-12">
      <h3 class="display-5 mb-2">Core Skills</h3>
      <h4 class="fs-3 fw-light">Programming Languages</h4>
      <p class="fs-5 fst-italic">JavaScript, TypeScript, Java</p>
      <h4 class="fs-3 fw-light">Frameworks and Databases</h4>
      <p class="fs-5 fst-italic">
        React, NodeJS, Redux, ChakraUI, Bootstrap, TailwindUI, Express,
        MongoDB, Firebase
      </p>
      <h4 class="fs-3 fw-light">Tools</h4>
      <p class="fs-5 fst-italic">
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
            <img
              src="./assets/img/PortfolioNotResized.jpg"
              alt="Portfolio Project"
              class="img-fluid img-project"
            />
          </div>
          <div class="col-12 col-md-6 p-0 overflow-hidden">
            <img
              src="./assets/img/Discordbot.jpg"
              alt="Portfolio Project"
              class="img-fluid img-project h-100"
              style="object-position: left"
            />
          </div>
          <div class="col-12 col-md-6 p-0 overflow-hidden">
            <img
              src="./assets/img/restaurant-pageNotResized.jpg"
              alt="Portfolio Project"
              class="img-fluid img-project h-100"
              style="object-position: top"
            />
          </div>
          <div class="col-12 col-md-6 p-0 overflow-hidden">
            <img
              src="./assets/img/lostarktools.jpg"
              alt="Portfolio Project"
              class="img-fluid img-project h-100"
              style="object-position: left"
            />
          </div>
        </div>
      </main>
`;
  renderView(html);
};
