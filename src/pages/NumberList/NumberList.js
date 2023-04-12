const cropList = ['Carrot', 'Beans', 'Watermellon','Tomato','Banana'];
const amountList = ['12kg', '25kg', '10kg','18kg','35kg'];
const idList = ['001', '002', '005','123','312'];
const ratingList = ['4.3', '3.3', '2.8','33.7','4.9'];
const priceList = ['21000lkr', '43000lkr', '12000lkr','10123lkr','31042lkr'];
const farmerIdList = ['005', '009', '125','543','201'];


function List1() {

  const renderListOfCropNames = (names) => {
    return names.map(name => <li>{name}</li>)
  }


  const renderListOfCropAmounts = (amounts) => {
    return amounts.map(amount => <li>{amount}</li>)
  }

  const renderListOfCropIds = (ids) => {
    return ids.map(id => <li>{id}</li>)
  }


  const renderListOfCropPrices = (prices) => {
    return prices.map(price => <li>{price}</li>)
  }

  const renderListOfCropRatings = (ratings) => {
    return ratings.map(rating => <li>{rating}</li>)
  }

  const renderListOfFarmerId = (farmerids) => {
    return farmerids.map(farmerid => <li>{farmerid}</li>)
  }

 

  return (
    <div>
      <ul>
        <li>{renderListOfCropNames(cropList)}</li>
        <li>{renderListOfCropAmounts(amountList)}</li>
        <li>{renderListOfCropIds(idList)}</li>
        <li>{renderListOfCropPrices(cropList)}</li>
        <li>{renderListOfCropRatings(amountList)}</li>
        <li>{renderListOfFarmerId(idList)}</li>
      </ul>
    </div>
  );
}

export default List1;