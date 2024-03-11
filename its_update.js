async function updateMenu(){
    //rileva quanti elementi ha il menu e cancella tutto
    var menu = document.getElementById("menu-menu-its");
    var elements = menu.childElementCount;
    menu.innerHTML = "";
    //console.log(elements);

    //ottieni i dati dal json online
	var response = await fetch("https://raw.githubusercontent.com/dariusk/corpora/master/data/technology/programming_languages_popular.json");
    var newmenuitems = await response.json();

    //cancella i titoli attuali e sostituisci con quelli del json
    var newitems = newmenuitems.programming_languages_popular.slice(0, elements);
    //console.log(menu.childElementCount);

    //per ogni elemento sostituisci l'elemento della lista
    newitems.forEach((element) => {
        console.log(element);
        menu.innerHTML = menu.innerHTML +
            `<li id="nav-menu-item-27800" class="menu-item menu-item-type-post_type menu-item-object-page  narrow">
                <a href="https://it.wikipedia.org/wiki/${element}" target= “_blank”>
                    <span class="item_outer">
                        <span class="item_text">${element}
                        </span>
                    </span>
                </a>
            </li>
            `
    });
    
    document.getElementsByClassName("eltdf-normal-logo")[0].src = "https://upload.wikimedia.org/wikipedia/commons/a/a0/W3Schools_logo.svg";
}

updateMenu()