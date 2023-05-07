const mongoose = require("mongoose")

const buyerSchema = new mongoose.Schema({
	user_id: {
      type: mongoose.Schema.Types.ObjectId
    },
	orders: [{
		business_name: String,
		product_name: String,
		description: String,
		price: Number,
		quantity: Number,
		address: String,
		completed: {
			type: Boolean,
		default: false
		}
	}],
	wishlist: [{
		product_name: String,
		price: Number,
		quantity: Number
	}]
})

module.exports = mongoose.model("Buyer", buyerSchema)