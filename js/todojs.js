
    let section;
    
    let article0;

    let article1;
    
    let article2;

    let creatediv;

    let createp;

    let button1;

    let button2;

    let parent;

    let buttonx;

    let buttonclick;

    let stuff;
    
    let mathrandom;

    let sectionid;

    let button;

    let done;

    let mainstuff;

    let parentelement;

    // arrays

    let articles = [article0, article1, article2]

    // definite

    let ndef = 0;

    let n = 0;

    let sectionstart = 1;

    let newtitle = document.getElementById("newtitle");

    const inserisci = document.getElementById("inserisci");

    const pulisci = document.getElementById("pulisci");

    const title1 = document.getElementById("title-p-1");

    const main = document.getElementById("main-with-stuff");

    const title = document.querySelectorAll(".title-p");

    let buttond = document.querySelectorAll(".stuff-done");
    
    const cancel = document.querySelectorAll(".button-x");

    const refresh = document.getElementById("#header-refresh-button")

    
    // functions

    // ID SECTION ID
    function idfunction(){
        if (n == ndef){
            ndef = ++n;
        }

        else{}

        return ndef;
    }

    // INSERISCI
    function prima(){

        if (newtitle.value == ""){}

        else{

            button1 = undefined;

            section = document.createElement("section"); /* section */
            section.id = idfunction(ndef); /* section id */
            section.classList = "main-section"; /* section class */
            section.addEventListener("click", rimuoviTask);
            

            articles[0] = document.createElement("article"); /* create article 1 */
            articles[0].classList = "stuff-title";
            articles[0].id = ndef + "title";
            createp = document.createElement("p"); /* create p */
            createp.className = "title-p";

            articles[1] = document.createElement("article");
            articles[1].classList= "stuff-done " + "buttons-space"; /* create article 2 */
            articles[1].id = ndef + "buttond";
            button1 = document.createElement("button");
            button1.id = ndef + "buttond"
            button1.className= "button-done " + "buttons";
            button1.innerText= "Fatto";
            

            articles[2] = document.createElement("article");
            articles[2].className ="stuff-cancel " + "buttons-space"; /* create article 3 */
            articles[2].id = ndef + "buttonx";
            button2 = document.createElement("button");
            button2.id = ndef + "buttonx"
            button2.className= "button-x " + "buttons";
            button2.innerText= "Cancella";

            main.append(section); /* append section */

            section.append(articles[0]); /* append */
            articles[0].append(createp);
            section.append(articles[1]);
            articles[1].append(button1);
            section.append(articles[2]);
            articles[2].append(button2);
            
            createp.innerText = newtitle.value;
            
            newtitle.value = "";

            button1 = button1.id;

            color();

            
        }
    };

    // INVIO
    newtitle.addEventListener("keyup", premiInvio); 
    function premiInvio(e){
        if (e.keyCode == 13){
            prima();
        }

        else{}
    };

    // EVENT LISTENER: REFRESH
    refresh.addEventListener("click", color());

    // COLORING SECTION 2
    function color(){
        if(section.id % 2 == 0){
            section.className = "main-section2";
        }
    }
    

    // PULISCI TUTTO
    pulisci.onclick = function(){ 

        main.innerHTML = "";

    };

    // RIMUOVI TASK
    function rimuoviTask(e, parentelement){

        parentelement = e.target.parentElement.parentElement;

        if(e.target.classList.includes("button-done")){
            parentelement.remove();
        }

        else if(e.target.classList.includes("button-x")){
            parentelement.remove();
        }
    }
    
    // CANCELLA TASK
    function xbutton(){ // xbutton
        console.log("cancellato");
    }


    