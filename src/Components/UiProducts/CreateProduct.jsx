import InputField from "../Ui/Inputs/InputField";
import { useForm } from "react-hook-form";
import "../../assets/Styles/_Products.scss";
import { CreateProducts } from "../../services/productService";
import { useCreateProduct } from "../../hooks/getProuduct";

// create product component
const CreateProduct = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const { mutate, isPending, isSuccess, error } = useCreateProduct();

  const onSubmit = data => {
    mutate(data, {
      onSuccess: () => {
        reset();
      }
    });
  };

  return (
    <div className="create_Product">
      <form className="product-form" onSubmit={handleSubmit(onSubmit)}>
        <InputField
          placeholder="Title"
          label="Title"
          name="title"
          {...register("title", { required: "Title required" })}
        />
        {errors.title &&
          <p className="error_field">
            {errors.title.message}
          </p>}

        <InputField
          label="Description"
          name="description"
          placeholder="Description"
          {...register("description", { required: "Description required" })}
        />
        {errors.description &&
          <p className="error_field">
            {errors.description.message}
          </p>}

        <InputField
          label="Price"
          name="price"
          placeholder="Price"
          {...register("price", { required: "Price required" })}
        />
        {errors.price &&
          <p className="error_field">
            {errors.price.message}
          </p>}

        <InputField
          label="Quantity"
          name="quantity"
          type="number"
          placeholder="Quantity"
          {...register("quantity", { required: "Quantity required" })}
        />
        {errors.quantity &&
          <p className="error_field">
            {errors.quantity.message}
          </p>}

        <InputField
          label="Category"
          name="category"
          placeholder="Category"
          {...register("category", { required: "Category required" })}
        />
        {errors.category &&
          <p className="error_field">
            {errors.category.message}
          </p>}

        <button type="submit" disabled={isPending}>
          {isPending ? "Loading..." : "Create Product"}
        </button>
        {isSuccess && <p>Product created successfully</p>}
        {error && <p>Something went wrong</p>}
      </form>
    </div>
  );
};

export default CreateProduct;
