AFRAME.registerComponent("comics", {
    init: function () {
      this.placesContainer = this.el;
      this.createCards();
    },
  
    createCards: function () {
      const thumbNailsRef = [
        {
          id: "spider-man",
          title: "Spider Man",
          url: "./Assets/Spider-Man/image.jpg",
        },
        {
          id: "joker",
          title: "Joker",
          url: "./Assets/Joker/image.jpg",
        },
  
        {
          id: "pokemon",
          title: "Pokemon",
          url: "./Assets/Pokemon/image.jpg",
        },
        {
          id: "thanos",
          title: "Thanos",
          url: "./Assets/Thanos/image.jpg",
        },
      ];
      let prevoiusXPosition = -75;
  
      for (var item of thumbNailsRef) {
        const posX = prevoiusXPosition + 30;
        const posY = 5;
        const posZ = -40;
        const position = { x: posX, y: posY, z: posZ };
        prevoiusXPosition = posX;

        const borderEl = this.createBorder(position, item.id);

        const thumbNail = this.createThumbNail(item);
        borderEl.appendChild(thumbNail);

        const titleEl = this.createTitleEl(position, item);
        borderEl.appendChild(titleEl);
  
        this.placesContainer.appendChild(borderEl);
      }
    },
    createBorder: function (position, id) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("id", id);
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("geometry", {
        primitive: "plane",
        width: 22,
        height: 30,
      });
      entityEl.setAttribute("position", position);
      entityEl.setAttribute("material", {
        color: "#DA0037",
        opacity: 1,
      });
  
      entityEl.setAttribute("click_events", {});
  
      return entityEl;
    },
    createThumbNail: function (item) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("geometry", {
        primitive: "plane",
        width: 20,
        height: 28,
      });
      entityEl.setAttribute("material", { src: item.url });
      entityEl.setAttribute("position",{x:0,y:0,z:0.1})
      return entityEl;
    },
    createTitleEl: function (position, item) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("text", {
        font: "exo2bold",
        align: "center",
        width: 70,
        color: "#444444",
        value: item.title,
      });
      const elPosition = position;
      elPosition.y = -31;
      entityEl.setAttribute("position", elPosition);
      entityEl.setAttribute("visible", true);
      
      return entityEl;
    },
  });