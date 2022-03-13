/**
 * @file      Cart.js
 * @brief     This class is designed to manage a cart.
 * @author    Created by Nicolas.GLASSEY
 * @version   25-05-2020 - original (dedicated to ProjWebBdd)
 * @version   13-02-2022 - updated (dedicated to RIA1)
 */

"use strict";
const EmptyCartException = require("./exceptions/EmptyCartException.js");

module.exports = class Cart {

    //region private attributes
    #items = null;

    //endregion private attributes

    /**
     * @brief This method constructs a Cart Object
     * @param items : list of cartItems
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
     */
    get totalPrice() {
        let total = 0.;
        this.items.forEach(item => total += item.total);
        return total;
    }

    //endregion public methods

    //region private methods
    //endregion private methods
}
