const mainView = document.querySelector('#main-content');

const renderView = (htmlToRender) => {
  mainView.innerHTML = htmlToRender;
};

export const renderHome = () => {
  const html = `<main
    class="text-center d-flex flex-column h-100 justify-content-center pt-5"
  >
    <section class="mt-auto pt-5">
      <h1 class="m-0 h1 lh-l" style="font-size: 3em">Hi,</h1>
      <h1 class="m-0 h1 lh-l" style="font-size: 3em">
        I'm <span class="text-primary fst-italic">Kenny</span>.
      </h1>
      <p class="display-5 mb-5">This is my portfolio.</p>
      <a
        href="#"
        type="button"
        class="btn btn-outline-primary w-50 mx-auto"
      >
        View Projects
      </a>
    </section>
    <section class="mt-auto mb-5 d-flex justify-content-center gap-2">
      <i class="bi bi-envelope fs-4 display-1 my-auto"></i>
      <p class="fs-4 display-1 my-auto">hello@pompoko.io</p>
    </section>
  </main>`;
  renderView(html);
};

export const renderAbout = () => {
  const html = `<main
  class="mx-auto text-center d-flex flex-column h-100 justify-content-center align-items-center pt-5 p-4"
  style="max-width: 500px"
>
  <img
    class="rounded-circle mb-2 mt-4 w-75"
    style="max-width: 200px"
    src="./assets/img/NewMeCropped2.jpg"
    alt="Picture of me"
  />

  <h2 class="display-4 mb-2">About Me</h2>
  <p class="fs-6 px-1">
    A <span class="text-primary fst-italic">front-end developer</span> who
    began self-taught studying learning web development and software
    engineering. At Arizona State University, I'm an undergrad Software
    Engineering undergraduate.
  </p>
</main>`;
  renderView(html);
};
