import "../styles/Product.scss"

const Product = ({ item }) => {
  if (!item) return <div>Loading...</div>

  // creator_banner_url, creator_icon_url, creator_name, creator_subscriber_count

  return <>{item.name}</>
}

export default Product
