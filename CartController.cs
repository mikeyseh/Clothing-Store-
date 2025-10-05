using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using Newtonsoft.Json;

public class CartController : Controller
{
    [HttpPost("api/cart/add")]
    public IActionResult AddToCart([FromBody] Product product)
    {
        // Simulate adding product to a session or database
        var cart = HttpContext.Session.GetString("cart");
        var cartList = string.IsNullOrEmpty(cart) ? new List<Product>() : JsonConvert.DeserializeObject<List<Product>>(cart);

        cartList.Add(product);
        HttpContext.Session.SetString("cart", JsonConvert.SerializeObject(cartList));

        return Ok(new { message = "Product added to cart", cartCount = cartList.Count });
    }

    [HttpGet("api/cart")]
    public IActionResult GetCart()
    {
        var cart = HttpContext.Session.GetString("cart");
        var cartList = string.IsNullOrEmpty(cart) ? new List<Product>() : JsonConvert.DeserializeObject<List<Product>>(cart);

        return Ok(cartList);
    }

    // You would also want to implement removing items from the cart
}

public class Product
{
    public int Id { get; set; }
    public string Name { get; set; }
    public double Price { get; set; }
}
