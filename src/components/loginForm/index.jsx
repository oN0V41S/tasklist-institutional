import "./style.css";

export const LoginForm = ({children,formTitle,formButton,onSubmit}) => {

  return (
    <form className="formLogin md:w-[35vw] m-auto md:mt-0 mt-[120px]">
      <h1>{formTitle}</h1>
      {children}
      <button type="button" onClick={onSubmit}>{formButton}</button>
    </form>
  );
};

export const InputField = ({type,placeholder,value,children,onChange}) => {
  return (
    <div className="input-field">
      <input
        type={type}
        placeholder={placeholder}
        required
        value={value}
        onChange={onChange}
      />
      {children}
    </div>
  );
};