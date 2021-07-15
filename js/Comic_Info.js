AFRAME.registerComponent("info-banner", {
    schema: {
      itemId: { default: "", type: "string" },
    },
    update: function () {
      this.createBanner();
    },
    createBanner: function () {
      postersInfo = {
        spiderman: {
          banner_url: "./Assets/SpiderMan/info.jpg",
          title: "Spider-Man",
          released_year: "1963",
          description:
            "The Amazing Spider-Man is an American comic book series published by Marvel Comics, featuring the fictional superhero Spider-Man as its main protagonist. Being in the mainstream continuity of the franchise, it began publication in 1963 as a bimonthly periodical (as Amazing Fantasy had been) and was published continuously, with a brief interruption in 1995.",
        },
        joker: {
          banner_url: "./Assets/Joker/info.jpg",
          title: "Joker",
          released_year: "1940",
          description:
            "The Joker is a supervillain and the archenemy of Batman. He was first introduced in Batman #1 (Spring 1940) but faded into obscurity in the 1950s as a harmless prankster, starting in the early 1970s he was re-introduced as a more legitimate threat. The Joker is a master criminal with a clown-like appearance, and is considered one of the most infamous criminals within Gotham City.",
        },
        pokemon: {
          banner_url: "./Assets/Pokemon/info.jpg",
          title: "Pokemon",
          released_year: "1997",
          description:
            "Pokémon the Movie: I Choose You! is a 2017 Japanese animated adventure film and the 20th film in the Pokémon anime series created by Satoshi Tajiri and produced by OLM. Loosely adapted from the anime's pilot episode of the same name, it was directed by Kunihiko Yuyama and written by Shoji Yonemura. The film stars the voices of Rica Matsumoto, Ikue Ōtani, Unshō Ishizuka, etc..",
        },
        thanos: {
          banner_url: "./Assets/Thanos/info.jpg",
          title: "Thanos",
          released_year: "1991",
          description:
            "The Infinity Gauntlet is an American comic book storyline published by Marvel Comics. In addition to an eponymous, six-issue limited series written by Jim Starlin and pencilled by George Pérez and Ron Lim, crossover chapters appeared in related comic books. Since its initial serialization from July to December 1991, the series has been reprinted in various formats and editions.",
        },
      };
      const { itemId } = this.data;
  
      const fadeBackgroundEl = document.querySelector("#fadeBackground");
  
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("id", `${itemId}-banner`);
  
      entityEl.setAttribute("geometry", {
        primitive: "plane",
        width: 0.9,
        height: 1,
      });
  
      entityEl.setAttribute("material", { color: "#000" });
      entityEl.setAttribute("position", { x: 0, y: 0.1, z: -1 });
  
      const item = postersInfo[itemId];
  
      const imageEl = this.createImageEl(item);
      const titleEl = this.createTitleEl(item);
      const descriptionEl = this.createDescriptionEl(item);
  
      entityEl.appendChild(imageEl);
      entityEl.appendChild(titleEl);
      entityEl.appendChild(descriptionEl);
  
      fadeBackgroundEl.appendChild(entityEl);
    },
    createImageEl: function (item) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("geometry", {
        primitive: "plane",
        width: 0.82,
        height: 0.3,
      });
      entityEl.setAttribute("material", { src: item.banner_url });
      entityEl.setAttribute("position", { x: 0, y: 0.3, z: 0.05 });
      return entityEl;
    },
    createTitleEl: function (item) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("text", {
        shader: "msdf",
        anchor: "left",
        font: "https://cdn.aframe.io/examples/ui/Viga-Regular.json",
        width: 1.2,
        height: 2,
        color: "#fff",
        value: `${item.title} (${item.released_year})`,
      });
      entityEl.setAttribute("position", { x: -0.4, y: 0.02, z: 0.05 });
      return entityEl;
    },
    createDescriptionEl: function (item) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("text", {
        shader: "msdf",
        anchor: "left",
        font: "https://cdn.aframe.io/examples/ui/Viga-Regular.json",
        width: 0.75,
        height: 2,
        color: "#fff",
        wrapCount: "40",
        value: item.description,
      });
      entityEl.setAttribute("position", { x: -0.4, y: -0.24, z: 0.05 });
      return entityEl;
    },
  });
  