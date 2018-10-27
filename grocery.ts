class Grocery {
    groceryName: string;
    quantity: number;
    price: any;
}

function groceryItem(item) {
    return "<b>Grocery Item:</b> " + item.groceryName + " <b>Amount:</b> " + item.quantity + " <b>Price:</b>  " + item.price;
}

var groceries: Grocery[] = [
    {"groceryName": "Bread", "quantity": 3, "price": 7.87},
    {"groceryName": "Eggs", "quantity": 6, "price": 3.00},
    {"groceryName": "Mik", "quantity": 11, "price": 6.98}
];

var final = '';
for (var i = 0; i < groceries.length; i++) {
    var final = final + groceryItem(groceries[i]) + "<br />";
};

document.body.innerHTML = final



