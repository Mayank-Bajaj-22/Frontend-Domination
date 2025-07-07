var arr = [
    {product: "iphone", price: 120000},
    {product: "realme", price: 20000},
    {product: "airpods", price: 50000},
    {product: "munch", price: 5},
]

const ans = arr.filter(elem => elem.price>5);
console.log(ans)