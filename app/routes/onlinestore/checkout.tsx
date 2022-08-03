import type {
    LinksFunction,
} from "@remix-run/cloudflare";
import { Link } from "@remix-run/react";
import { myItems } from "~/components/data";
import { ItemCard } from "~/components/itemcard";

import stylesUrl from "~/styles/checkout.css";

export const links: LinksFunction = () => {
    return [{ rel: "stylesheet", href: stylesUrl, }];
};

export default function Index() {
    return (
      <div className="container">
        <header>
            <div className="mainNav">
            <Link to="/onlinestore">Logo</Link>
            <div className="searchContainer">
            <input type="text" placeholder="Search..." name="search" />
            <button type="submit">Submit</button>
            </div>
            <Link to="/onlinestore/checkout">Checkout</Link>
            </div>
            <div className="categoryNav">
            <Link to="/onlinestore">Home</Link>
            <Link to="/onlinestore/deals">Deals</Link>
            <Link to="/onlinestore/tech">Tech</Link>
            <Link to="/onlinestore/health">Health</Link>
            <Link to="/onlinestore/household">Household Goods</Link>
            <Link to="/onlinestore/furniture">Furniture</Link>
            <Link to="/onlinestore/clothes">Clothes</Link>
            <Link to="/onlinestore/outdoors">Outdoors</Link>
            <Link to="/onlinestore/pets">Pets</Link>
            <Link to="/onlinestore/food">Food</Link>
            </div>
        </header>
<main>
<div className="row">
  <div className="col-75">
    <div className="content">
      <form action="/action_page.php">

        <div className="row">
          <div className="col-50">
            <h3>Billing Address</h3>
            <label><i className="fa fa-user"></i> Full Name</label>
            <input type="text" id="fname" name="firstname" placeholder="John M. Doe" />
            <label><i className="fa fa-envelope"></i> Email</label>
            <input type="text" id="email" name="email" placeholder="john@example.com" />
            <label><i className="fa fa-address-card-o"></i> Address</label>
            <input type="text" id="adr" name="address" placeholder="542 W. 15th Street" />
            <label><i className="fa fa-institution"></i> City</label>
            <input type="text" id="city" name="city" placeholder="New York" />

            <div className="row">
              <div className="col-50">
                <label>State</label>
                <input type="text" id="state" name="state" placeholder="NY" />
              </div>
              <div className="col-50">
                <label>Zip</label>
                <input type="text" id="zip" name="zip" placeholder="10001" />
              </div>
            </div>
          </div>

          <div className="col-50">
            <h3>Payment</h3>
            <label>Accepted Cards</label>
            <div className="icon-container">
              <i className="fa fa-cc-visa" style={{color:"navy;"}}></i>
              <i className="fa fa-cc-amex" style={{color:"blue;"}}></i>
              <i className="fa fa-cc-mastercard" style={{color: "red;"}}></i>
              <i className="fa fa-cc-discover" style={{color:"orange;"}}></i>
            </div>
            <label>Name on Card</label>
            <input type="text" id="cname" name="cardname" placeholder="John More Doe" />
            <label>Credit card number</label>
            <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444" />
            <label>Exp Month</label>
            <input type="text" id="expmonth" name="expmonth" placeholder="September" />

            <div className="row">
              <div className="col-50">
                <label>Exp Year</label>
                <input type="text" id="expyear" name="expyear" placeholder="2018" />
              </div>
              <div className="col-50">
                <label>CVV</label>
                <input type="text" id="cvv" name="cvv" placeholder="352" />
              </div>
            </div>
          </div>

        </div>
        <label>
          <input type="checkbox" name="sameadr" /> Shipping address same as billing
        </label>
        <input type="submit" value="Continue to checkout" className="btn" />
      </form>
    </div>
  </div>

  <div className="col-25">
    <div className="content">
      <h4>Cart
        <span className="price" style={{color:"black"}}>
          <i className="fa fa-shopping-cart"></i>
          <b>4</b>
        </span>
      </h4>
      <p><a href="#">Product 1</a> <span className="price">$15</span></p>
      <p><a href="#">Product 2</a> <span className="price">$5</span></p>
      <p><a href="#">Product 3</a> <span className="price">$8</span></p>
      <p><a href="#">Product 4</a> <span className="price">$2</span></p>
      <hr />
      <p>Total <span className="price" style={{color:"black"}}><b>$30</b></span></p>
    </div>
  </div>
</div>
</main>
        <footer>
            <div className="footerLinks">
                <p>Facebook Twitter Instagram Icon Spots - Everything on this page is demo only.</p>
            </div>
        </footer>
      </div>
      );
  };