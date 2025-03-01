export default function CheckboxInput({
  labelDescription = 'Descrição do label',
  inputValue = 'Valor padrão do input',
  onInputChange = null,
  id = 'id_do_input_checkbox',
  autoFocus = false,
}) {
  function handleInputChange({ currentTarget }) {
    if (onInputChange) {
      const newValue = currentTarget.value;
      onInputChange(newValue);
    }
  }

  return (
    <label className="ml-1" htmlFor={id}>
      {labelDescription}
      <input
        autoFocus={autoFocus}
        id={id}
        className="ml-3 my-2 border-2 border-black"
        type="checkbox"
        value={inputValue}
        onChange={handleInputChange}
      ></input>
    </label>
  );
}
