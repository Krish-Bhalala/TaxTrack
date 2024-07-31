const content = document.querySelector(".content");

function createCard(description,image){
    if(image === undefined){
        image = "https://picsum.photos/250/300";
    }
    const card = document.createElement("div");
    const card_content = document.createElement("div");
    const text = document.createTextNode(description);
    card.classList.add("cards");
    card_content.classList.add("card-content");
    card.style.backgroundImage = `url(${image})`;
    card_content.appendChild(text);
    card.appendChild(card_content);
    return card;
}

function appendCard(card){
    if(card === undefined){
        console.log("empty card");
    }else{
        content.appendChild(card);
    }
}

const a = createCard("this","https://picsum.photos/400");
appendCard(a);