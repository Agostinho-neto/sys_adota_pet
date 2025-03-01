export default function TextInput({
  labelDescription = 'Descrição do label',
  inputValue = 'Valor padrão do input',
  onInputChange = null,
  id = 'id_do_input_text',
  autoFocus = false,
  textType = null,
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
        type={textType}
        value={inputValue}
        onChange={handleInputChange}
      ></input>
    </label>
  );
}
