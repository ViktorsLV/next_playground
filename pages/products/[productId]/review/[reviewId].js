import { useRouter } from "next/router";

function Review() {
  const router = useRouter()
  const reviewId = router.query.reviewId
  const productId = router.query.productId

  return (
  <>
    <h1>Product Details {productId}</h1>
    <h1>Review ID: {reviewId}</h1>
  </>
  );
}

export default Review;
