import BestSelling from '@/components/best-selling/BestSelling'
import ProductDetails from '@/components/product-details/ProductDetails'


async function DyanamicProduct({params}:{params:Promise<{id:number}>}) {


  const {id} =await params
  return (
    <div>
        <ProductDetails cardId={id}/>

        <BestSelling/>
    </div>
  )
}

export default DyanamicProduct
