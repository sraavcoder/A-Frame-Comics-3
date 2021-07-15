AFRAME.registerComponent("click_events",{
    schema:{
        selectedItemId:{type:"string", default:""},
    },
    init: function(){
        this.handleMouseEnterEvent();
        this.handleMouseLeaveEvents();  
    },
    update: function () {
        const fadeBackgroundEl = document.querySelector("#fadeBackground");
        c = fadeBackgroundEl.children;
        if (c.length > 0) {
          var i;
          for (i = 0; i <= c.length; i++) {
            fadeBackgroundEl.removeChild(c[i]);
          }
        } else {
          this.handleMouseClickEvent();
        }
      },
    handleMouseEnterEvent: function(){
        console.log("leave")    
        this.el.addEventListener("mouseenter",()=>{
            const id = this.el.getAttribute("id");
            const placeId = ["spiderman", "joker", "pokemon", "thanos"]
            if(placeId.includes(id)){   
                const placeContainer = document.querySelector("#places-container")
                placeContainer.setAttribute("click_events",{
                    selectedItemId:id
                })
                this.el.setAttribute("material",{
                    color:"#0096e8",
                    opacity: 1
                })
            }   
        })
    }, 
    handleMouseLeaveEvents: function(){
        console.log("leave")
        this.el.addEventListener("mouseleave", () => {
            const { selectedItemId } = this.data;
            if (selectedItemId) {
              const el = document.querySelector(`#${selectedItemId}`);
              const id = el.getAttribute("id");
              if (id == selectedItemId) {
                el.setAttribute("material", {
                  color: "#DA0037",
                  opacity: 1,
                });
              }
            }
          });
        },
    handleMouseClickEvent: function(){
        this.el.addEventListener("click", ()=>{
            const { selectedItemId } = this.data;
            const fadeBackgroundEl = document.querySelector("#fadeBackground");
            const titleEl = document.querySelector("#app-title");
            const cursorEl = document.querySelector("#camera-cursor");

            if (selectedItemId) {
              fadeBackgroundEl.setAttribute("visible", true);
              fadeBackgroundEl.setAttribute("info-banner", {
                itemId: selectedItemId,
              });
              titleEl.setAttribute("visible", false);
              cursorEl.setAttribute("position", { x: 0, y: 0, z: -1 });
              cursorEl.setAttribute("geometry", {
                radiusInner: 0.03,
                radiusOuter: 0.04,
              });
            } else {
              fadeBackgroundEl.setAttribute("visible", false);
              titleEl.setAttribute("visible", true);
              cursorEl.setAttribute("position", { x: 0, y: 0, z: -3 });
              cursorEl.setAttribute("geometry", {
                radiusInner: 0.08,
                radiusOuter: 0.12,
              });
            }
        })
        }
    })