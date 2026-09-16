function FormInput({ field, value, onChange }) {
  return (
    <div className="fg">
      <label>{field.label}</label>
      <input
        name={field.name}
        type={field.type}
        placeholder={field.placeholder}
        value={value}
        onChange={onChange} />
    </div>
  );
}

export default function FormCard({ form, values, onChange, onSubmit }) {
  return (
    <div className="form-card">
      <h3>{form.title}</h3>
      {form.fields.map((field) => (
        <FormInput key={field.name} field={field} value={values[field.name]} onChange={onChange} />
      ))}
      <button className="btn btn-accent btn-full" onClick={onSubmit}>{form.buttonText}</button>
    </div>
  );
}