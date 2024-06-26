/* eslint-disable react/prop-types */
const InputComponent = ({
  value,
  name,
  labelText,
  placeholderText,
  handleChange,
}) => {
  return (
    <div className="mb-9 ">
      <label className=" roboto-slab-regular">{labelText}</label>
      <textarea
        className="p-3 text-xs px-3 bg-blueBlack roboto-slab-light w-full rounded-lg  flex-col items-center block mt-3"
        type="textarea"
        placeholder={placeholderText}
        cols={50}
        name={name}
        onChange={handleChange}
        value={value}
      />
    </div>
  );
};
export default InputComponent;
