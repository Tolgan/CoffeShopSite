//load
window.addEventListener("load",function(){ui.preloader() })
//toggle
document.querySelector(".navbaricon").addEventListener("click",()=>{ ui.navbartoggler()    } )
//video control
const switcherbutton=document.querySelector(".video_switch")
switcherbutton.addEventListener("click",()=>{ui.switcher()     })

//FORM SUBMIT
document.querySelector(".myform").addEventListener("submit",(event)=>{event.preventDefault()
    const name=document.querySelector(".name").value
    const lastname=document.querySelector(".lastname").value    
    const email=document.querySelector(".email").value    
   let value=ui.submitter(name,lastname,email)
if(value){ui.feedback("You are in List","success");

let some=new Member(name,lastname,email)
console.log(some)
ui.newmember(some)
ui.clear()
} 
else{ui.feedback("some values empty","error") }
})
//ZOOM ACTION
document.querySelectorAll(".fa-search").forEach(item=>item.addEventListener("click",()=>{
const img=item.previousElementSibling ;  
const modalimg=document.querySelector(".specificimg")
modalimg.style.backgroundImage=`url(${img.src})`
let zoomdiv=document.querySelector(".zoom")
zoomdiv.classList.add("zoom-show")

  } ))
//CLOSE ZOOM
let zoomdiv=document.querySelector(".zoom") ;document.querySelector(".fa-window-close").addEventListener("click",()=>{
      zoomdiv.classList.remove("zoom-show") })  


///////////////////////////////////////////////// UI PART//////////////////////////////
 function Ui(){     }

 Ui.prototype.preloader=()=>{ document.querySelector(".preloader").style.display="none"}
 Ui.prototype.navbartoggler=()=>{  document.querySelector(".nav").classList.toggle("navbaricon_click")   }

 //VIDEO PAUSE OR PLAY /////
 Ui.prototype.switcher=()=>{ const button=document.querySelector(".video_switch_btn") ;
const video=document.querySelector(".cofevid_video")
 if(!button.classList.contains("selector")){button.classList.add("selector"); video.pause()
} else {button.classList.remove("selector"); video.play() } }


//FORM SUBMIT
Ui.prototype.submitter=(name,lastname,email)=>{
      if(name==="" || lastname==="" || email===""  ){ result=false  }
else{result=true} return result }

Ui.prototype.feedback=(text,type)=>{ const feed=document.querySelector(".feedback") 
if(type==="success")
{; feed.classList.add("success") ;feed.innerHTML=text
  ui.remover("success")  }
 else if(type==="error")  {
const feed=document.querySelector(".feedback"); feed.classList.add("error") ;
feed.innerHTML=text; ui.remover("error")
 }  }
Ui.prototype.remover=(type)=>{const feed=document.querySelector(".feedback");
setTimeout(()=>{feed.classList.remove(type)},3000)    }
const ui=new Ui()
//Member
 Ui.prototype.newmember=(member)=>{  
const newdiv=document.createElement("div");
 newdiv.classList.add("person");
 newdiv.innerHTML=`<img src="./videos/indir.jpg" alt="person" class="dummyimg"/>
 <h4>${member.name}</h4>
 <h4>${member.lastname}</h4>`
document.querySelector(".users").appendChild(newdiv)
;           }
Ui.prototype.clear=()=>{   document.querySelector(".name").value=""
document.querySelector(".lastname").value =""   
document.querySelector(".email").value = ""     }


//
function Member(name,lastname,email){this.name=name, this.lastname=lastname,this.email=email     }