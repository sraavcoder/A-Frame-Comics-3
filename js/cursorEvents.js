AFRAME.registerComponent("click_events",{
    schema:{
        selectedItemId:{type:"string", default:""}
    },
    init: function(){
        this.handleMouseEnterEvent();
        this.handleMouseLeaveEvents();  
    },
    handleMouseEnterEvent: function(){
        console.log("leave")    
        this.el.addEventListener("mouseenter",()=>{
            const id = this.el.getAttribute("id");
            const placeId = ["spider-man", "joker", "pokemon", "thanos"]
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
    })