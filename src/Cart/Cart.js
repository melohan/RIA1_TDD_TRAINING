/**
 * @file      Cart.js
 * @brief     This class is designed to manage a cart.
 * @author    Created by Nicolas.GLASSEY
 * @version   25-05-2020 - original (dedicated to ProjWebBdd)
 * @version   13-02-2022 - updated (dedicated to RIA1)
 * @version   08-03-2022 - update
 */

"use strict";

const EmptyCartException = require("./EmptyCartException.js");
const UpdateCartException = require("./UpdateCartException.js");

module.exports = class Cart {

    //region private attributes
    #items = null;

    //endregion private attributes

    /**
     * @brief This method constructs a Cart Object
     * @param items : CartItem[] of cartItems
     */
    constructor(items = null) {
        this.#items = items;
    }

    /**
     * @brief This property returns the list of CartItems presents in the Cart.
     * @exception EmptyCartException is thrown if the Cart is empty
     */
    get items() {
        if (this.#items === null)
            throw new EmptyCartException("Cart has no items");
        return this.#items;
    }

    /**
     * @brief This property returns the total of the Cart.
     * @exception EmptyCartException is thrown if the Cart is empty
     * @return {number} : the total in CHF
     */
    get totalPrice() {
        let total = 0.;
        this.items.forEach(item => total += item.total);
        return total;
    }

    /**
     * @brief This method returns the number of CartItems present in the Cart
     * @param distinct : boolean a distinct constraint
     * @returns {number} : number of CartItems
     */
    count(distinct = false) {
        let total = 0;
        this.items.forEach(item => {
            total += distinct ? 1 : item.quantity;
        });
        return total;
    }

    /**
     * @brief This method compare the current cart content and update the items:
     *        Add new CartItem
     *        Update the quantity of an existing CartItem
     *        Remove an existing item if the new quantity to set is 0
     * @param items
     */
    updateCart(items) {

        if (items === null)
            throw new UpdateCartException();

        if (this.#items === null) {
            // if our items was empty we assign it the given items
            this.#items = items;
        } else {
            // if it wasn't empty we have to compare and update our items list.
            let toKeep = items.filter((a) => this.#items.includes(a));
            let toAdd = items.filter((a) => !this.#items.includes(a));
            this.#items = toKeep;
            this.#items = this.#items.concat(toAdd);
        }

    }

    //endregion public methods

    //region private methods
    #exists(cartItemToFind) {
        throw new Error();
    }

    #updateQuantity(cartItemToUpdate) {
        throw new Error();
    }

    #removeCartItem(cartItemToRemove) {
        throw new Error();
    }

    //endregion private methods
}