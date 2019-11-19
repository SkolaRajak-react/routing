import ProductList from  './ProductList'
import withSearch from '../../HOCs/Search'
import withHOC from '../../HOCs/Basic'

const ProductListWithSearch = withHOC(withSearch(ProductList))

export default ProductListWithSearch