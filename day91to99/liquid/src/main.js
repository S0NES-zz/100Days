const { to, set, from, fromTo } = gsap;

const getVar = (key, elem = document.documentElement) =>
  getComputedStyle(elem).getPropertyValue(key);

document.querySelectorAll(".switch").forEach((elem) => {
  let svg = elem.querySelector("svg"),
    input = elem.querySelector("input");
  input.addEventListener("pointerenter", (e) => {
    if (elem.animated || input.checked) {
      return;
    }
    to(input, {
      "--input-background": getVar("--c-default-dark"),
      duration: 0.2,
    });
  });
  input.addEventListener("pointerleave", (e) => {
    if (elem.animated || input.checked) {
      return;
    }
    to(input, {
      "--input-background": getVar("--c-default"),
      duration: 0.2,
    });
  });
  input.addEventListener("change", (e) => {
    let checked = input.checked;
    let hide = checked ? "default" : "dot",
      show = checked ? "dot" : "default";
    fromTo(
      svg,
      {
        "--default-s": checked ? 1 : 0,
        "--default-x": checked ? "0px" : "8px",
        "--dot-s": checked ? 0 : 1,
        "--dot-x": checked ? "-8px" : "0px",
      },
      {
        ["--" + hide + "-s"]: 0,
        ["--" + hide + "-x"]: checked ? "8px" : "-8px",
        duration: 0.25,
        delay: 0.15,
      }
    );
    fromTo(
      input,
      {
        "--input-background": getVar(checked ? "--c-default" : "--c-active"),
      },
      {
        "--input-background": getVar(checked ? "--c-active" : "--c-default"),
        duration: 0.35,
        clearProps: true,
      }
    );
    to(svg, {
      keyframes: [
        {
          ["--" + show + "-x"]: checked ? "2px" : "-2px",
          ["--" + show + "-s"]: 1,
          duration: 0.25,
        },
        {
          ["--" + show + "-x"]: "0px",
          duration: 0.2,
          clearProps: true,
        },
      ],
    });
  });
});
