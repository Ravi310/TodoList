let btnClick = document.getElementById("btnClick");

btnClick.addEventListener("click", function () {
    let name = document.getElementById("name").value;
    if (name == "") {
        document.getElementById("error").innerHTML = "Give the value";
    }
    else{
        document.getElementById("error").innerHTML = "";
        let box=document.getElementById("box");
        let li=document.createElement("li");
        li.innerText=name;

        let position=box.firstElementChild;
        
        if(position==null){
            box.appendChild(li);
        }
        else{
            box.insertBefore(li,position);
        }

        let a=document.createElement("button");
        a.innerText="x";
        a.className="remove";
        li.appendChild(a);

        let b =document.createElement("button");
        b.innerText="v";
        b.className="done";
        li.appendChild(b);

        let c=document.createElement("button");
        c.innerText="*";
        c.className="edit";
        li.appendChild(c);
    }

    document.getElementById("name").value="";
    // name="";

    let remove=document.querySelector(".remove");
    remove.addEventListener("click",function(e){
        let li=e.target.parentNode;
        box.removeChild(li);
    });

    let done=document.querySelector(".done");
    done.addEventListener("click",function(e){
        let li=e.target.parentNode;
        li.style.textDecoration="line-through";
    });

    let edit=document.querySelector(".edit");
    edit.addEventListener("click",function(e){
        let li=e.target.parentNode;
        box.removeChild(li);
        document.getElementById("name").value=li.innerText.slice(0,-3);
    });

    
});

