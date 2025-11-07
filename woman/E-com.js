let icon = document.querySelector(".icon");
let ul = document.querySelector("ul");

icon.addEventListener("click", () => {
    ul.classList.toggle("showData");
    console.log("class List", ul.classList);    
});

//navbar
let Shops = document.getElementById("Shops");
let Reviews = document.getElementById("Reviews");
let Blogs = document.getElementById("Blogs");
let Contacts = document.getElementById("Contacts");

Shops.addEventListener("click", () => {
    Shops.style.color="rgb(32, 181, 181)";
    Reviews.style.color="white";
    Blogs.style.color="white";
    Contacts.style.color="white";
})



Reviews.addEventListener("click", () => {
    Shops.style.color="white";
    Reviews.style.color="rgb(32, 181, 181)";
    Blogs.style.color="white";
    Contacts.style.color="white";
})



Blogs.addEventListener("click", () =>{
    Shops.style.color="white";
    Reviews.style.color="white";
    Blogs.style.color="rgb(32, 181, 181)";
    Contacts.style.color="white";
})



Contacts.addEventListener("click",()=>{
    Shops.style.color="white";
    Reviews.style.color="white";
    Blogs.style.color="white";
    Contacts.style.color="rgb(32, 181, 181)";
})


let Crd = document.querySelectorAll(".Crd");
let itemPage = document.querySelector(".itemPage")
let container = document.querySelector(".container");
let itemImg = document.getElementById("itemImg");
let buyBtn = document.getElementById("buyBtn");
console.log(Crd);



Crd.forEach(function(curValue){
    curValue.addEventListener("click", function(){
        itemPage.style.display="flex";
        container.style.display="none";

        let imgSrc =curValue.firstElementChild.src ;
        itemImg.src=imgSrc;
        
        buyBtn.addEventListener("click", function () {
            document.querySelector(".buyPage").style.display="block"
            document.querySelector(".buyText").innerHTML = `
            <h3>Enter Details:</h3>
            <input type="text" placeholder="Enter Your Name" id="name"><br>
            <input type="text" placeholder="Enter Your Address"><br>
            <input type="text" placeholder="Enter Your Mobile Number"><br>
            <h3>Payment Option:</h3>
            <select>
              <option value="Google-pay">Google Pay</option>
              <option value="Phone-pay">Phone Pay</option>
              <option value="Bharat-pay">Bharat Pay</option>
              <option value="Cash-on-Delivery">Cash on Delivery</option>
            </select><br>

          `;
          let buyText = document.getElementById("buyText");
           let button = document.createElement("button");
           button.innerText="submit";

           let addToCartBtn = document.getElementById("AddToCart");
           let quantityBtn = document.getElementById("Quantity"); 


           //button.classList("submitBtn");
           buyText.appendChild(button);
           
           document.getElementById('AddToCart').addEventListener('click',function(){
            alert('product added to cart!');
           });
           button.addEventListener("click",function(){
           let name = document.getElementById("name");
           if(name.value == "" && address.value == "" && Number.value == ""){
            alert("please Enter the Details");
            } 
            else{
                alert("Your order is confirm");
                document.querySelector(".buyPage").style.display="none";
            }
            
           })


            let cross = document.querySelector(".cross");
            cross.addEventListener("click",function(){
                document.querySelector(".buyPage").style.display="none";
            })
        
           
        })


    })

})

//connect

function connect(){
    let names = document.getElementById("names");
    let number = document.getElementById("number");
    if(name.value == "" && number.value == ""){
        alert("please Enter your Details");
    }
    else{
        alert("Thanks for fill Details");
    }
}

//Add To Cart
    document.querySelector('.add-to-cart-btn').addEventListener('click', function () {
        alert("product is added to cart!");
        // Function to update cart count in UI
function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    document.getElementById("cart-count").textContent = cart.length;
}

// Function to add item to cart
function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    alert("Your product is added to cart!");
}

// Load cart count on page load
document.addEventListener("DOMContentLoaded", updateCartCount);
    });


    

//const SearchInput = document.querySelector('.search-ba input');
//SearchInput.addEventListener("input", (Event) =>{
   // console.log('User is searching for:${event.target.value}');
//})



