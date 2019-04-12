let cart=[];

let $cart=document.querySelector('.cart .items');
let $count=document.querySelector('.count');
let $total=document.querySelector('.total-cost');

function viewCart(){
    let input =``;
    let total=0;
    let count=0;

    for(let i=0;i<cart.length;i++){
        input +=`
        <li class="item">
             <div class="quantity">${cart[i].quantity}</div>
             <img src="${cart[i].image}"/>
             <div class="details">
                <div class="title">${cart[i].name}</div>
                <div class="price">$${cart[i].price}</div>
             </div>
             <div class="btn-delete" onClick="removeItem(${cart[i].id})">
                 <div class="fa fa-trash"></div>
            </div>
        </li> `;
        total+=cart[i].price*cart[i].quantity;
        count+=cart[i].quantity;

    }
    $cart.innerHTML=input;
    $count.innerHTML=count;
    $total.innerHTML="$"+total;
}
function addToCart(id,name,price,image){
    let quantity=1;
    for(let i=0;i<cart.length;i++){
        if(cart[i].id==id){
            cart[i].quantity++;
            viewCart();
            return;
        }
    }
    cart.push({id:id,name:name,price:price,image:image,quantity:quantity});
    viewCart();
}
function removeItem(id){
    let temp=[];
    for(let i=0;i<cart.length;i++){
        if(cart[i].id!=id){
            temp.push(cart[i]);
        }
    }
    cart=temp;
    viewCart();

}
viewCart();