import InputField from "../Ui/Inputs/InputField";
import { useForm } from "react-hook-form";
import "../../assets/Styles/_Products.scss";

const CreateProduct = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = data => console.log(data);

  return (
    <div className="create_Product">
      <form className="product-form" onSubmit={handleSubmit(onSubmit)}>
        <h2>Create Product</h2>

        <InputField
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

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateProduct;
