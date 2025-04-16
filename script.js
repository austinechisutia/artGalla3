  const wrapper = document.querySelector(".js-second-color");
  const wrapper1 = document.querySelector(".js-second-color1");


  for (let y = 0; y < window.innerHeight; y += 200) {
    const circle = document.createElement("div");
    circle.classList.add("second-color");
    circle.style.top = `${y}vh`;
    wrapper.appendChild(circle);
  }

  for (let y = 0; y < window.innerHeight; y += 200) {
    const circle = document.createElement("div");
    circle.classList.add("second-color1");
    circle.style.top = `${y}vh`;
    wrapper1.appendChild(circle);
  }
