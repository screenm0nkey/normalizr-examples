import { Schema, arrayOf, normalize } from 'normalizr';
import _product from './product.json';
import _products from './products.json';


const article = new Schema('plarticles');
const user = new Schema('plusers');

// the definition isn't required. remove it and see what happens.
// it just allows a depper configuration of the data to be flattened
article.define({
  author: user,
  car : {
    publisher : user
  },
  contributors: arrayOf(user)
});

export default {
  getProduct() {
    const response = normalize(_product, article);
    return [response, _product];
  },

  getProducts() {
    var response = normalize(_products, {
      articles: arrayOf(article)
    });
    return [response, _products];
  }
}

/*

* */
