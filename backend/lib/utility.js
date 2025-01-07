const getDiscountPrice = (price, discount) => {
  return +(price - price * (discount / 100)).toFixed(2);
};

module.exports = {
  getDiscountPrice,
};
