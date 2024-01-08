import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  Dropdown,
  DropdownDivider,
  DropdownItem,
  Label,
} from "semantic-ui-react";

export default function CartSummary() {
  const { cartItems } = useSelector(state => state.cart);
  return (
    <div>
      <Dropdown item text="My Carts">
        <Dropdown.Menu>
          {cartItems.map(cartItem => (
            <DropdownItem key={cartItem.product.id}>
              {cartItem.product.productName}
              <Label>{cartItem.quantity}</Label>
            </DropdownItem>
          ))}
          <DropdownDivider />
          <DropdownItem as={NavLink} to="/cart">
            Go to Cart
          </DropdownItem>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
