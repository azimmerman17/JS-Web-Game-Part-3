
function  newImage(url) {
    let image = document.createElement('img');
    image.src = url;
    document.body.append(image);
    return image;
};

function newItem(url, left, bottom) {
   let item = newImage(url, left, bottom);
    item.addEventListener('dblclick',  function(){
        item.remove();
        addInventory(url)
    });
    return item
};

function addInventory(url) {
    let inventoryItem = document.createElement('img');
        inventoryItem.src = url;
        inventory.append(inventoryItem);
}

function move(element) {
    element.style.position = 'fixed';

    function moveToCoordinates(left, bottom) {
        element.style.bottom = bottom + 'px';
        element.style.left = left + 'px';
    }
    return {
        to: moveToCoordinates
    }
}

function newInventory(){
    inventory = document.createElement('div');
    inventory.style.position = 'fixed';
    inventory.style.bottom = '0px';
    inventory.style.left = '0px';
    inventory.style.width = '100%';
    inventory.style.height = '100px';
    inventory.style.display = 'flex';
    inventory.style.flexDirection = 'row';
    inventory.style.alignItems = 'center';
    inventory.style.justifyContent = 'space-evenly';
    inventory.style.border = '2px solid black';
    inventory.style.backgroundColor = 'brown';
    document.body.append(inventory);
    return inventory;
};

function bkgd(url,left, bottom, width,height) {
    for (let h = 0; h < height; h++) {
        for (let w=0; w < width; w++) {
            let object = move(newImage(url)).to(left + w * 100, bottom + h *100); 
       }
    };
};

// Background Images
if(window.innerHeight*.6 > 500) {
    grassHieght = window.innerHeight*.6;
} else {grassHieght = 500};
skyHeight = window.innerHeight - grassHieght;

bkgd('assets/grass.png', 0,0, window.innerWidth/100, grassHieght/100);
bkgd('assets/sky.png', 0, grassHieght, window.innerWidth/100, skyHeight/100 );


// adding inventory bar
let inventory;
newInventory();

// adding images and items
move(newImage('assets/green-character.gif')).to(100,250);
move(newImage('assets/pine-tree.png')).to(450,200);
move(newImage('assets/tree.png')).to(200, 300);
move(newImage('assets/pillar.png')).to(350, 100);
move(newImage('assets/crate.png')).to(150, 200);
move(newImage('assets/well.png')).to(500, 425);

move(newItem('assets/sword.png')).to(500, 405);
move(newItem('assets/shield.png')).to(165, 185);
move(newItem('assets/staff.png')).to(600, 105);