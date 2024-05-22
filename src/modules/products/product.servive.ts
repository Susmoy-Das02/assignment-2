import { SProduct } from "./product.interface";
import { Product } from "./product.model";

const createProduct = async (payLoad: SProduct) => {
  const result = await Product.create(payLoad);
  return result;
};
const getAllProducts = async () => {
  const result = await Product.find();
  return result;
};

const getSingleProduct = async (productId: string) => {
  const product = await Product.findById(productId);
  return product;
};

const searchProducts = async (searchTerm: string): Promise<SProduct[]> => {
  const products = await Product.find({
    $or: [
      { name: { $regex: searchTerm, $options: "i" } },
      { description: { $regex: searchTerm, $options: "i" } },
    ],
  });
  return products;
};

const deleteProduct = async (productId: string) => {
  const result = await Product.findByIdAndDelete(productId);
  return result;
};

const updateProduct = async (
  productId: string,
  updatedProductData: SProduct
): Promise<SProduct | null> => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      updatedProductData,
      { new: true }
    );

    return updatedProduct;
  } catch (error) {
    throw new Error("Error updating product: " + error);
  }
};

export const ProductService = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  searchProducts,
  deleteProduct,
  updateProduct,
};
