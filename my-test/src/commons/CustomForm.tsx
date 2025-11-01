import React, { useState } from "react";
import dayjs from "dayjs";

export interface FieldConfig {
  name: string;
  label: string;
  type: "text" | "textarea" | "select" | "date";
  required?: boolean;
  options?: { label: string; value: any }[]; //string[];
  fieldProps?: React.InputHTMLAttributes<HTMLInputElement> &
    React.TextareaHTMLAttributes<HTMLTextAreaElement> &
    React.SelectHTMLAttributes<HTMLSelectElement>;
}

export interface ButtonConfig {
  label: string;
  type?: "primary" | "default" | "danger";
  onClick?: (formValues: Record<string, any>) => void;
}

export interface CustomFormProps {
  formData: Record<string, any>;
  fields: FieldConfig[];
  buttons?: ButtonConfig[];
  title?: string;
  colCount?: number;
  styles?: React.CSSProperties;
  className?: string;
}

const CustomForm: React.FC<CustomFormProps> = ({
  formData,
  fields,
  buttons = [],
  title,
  colCount = 2,
  styles,
  className = "",
}) => {
  const [values, setValues] = useState(formData);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (name: string, value: any) => {
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    fields.forEach((f) => {
      if (f.required && !values[f.name]) {
        newErrors[f.name] = "Bắt buộc nhập";
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleButtonClick = (btn: ButtonConfig) => {
    if (btn.onClick) {
      if (validate()) btn.onClick(values);
    }
  };

  const gridTemplate = `repeat(${colCount}, 1fr)`;

  return (
    <div
      className={`border p-4 rounded-md bg-white ${className}`}
      style={styles}
    >
      <h3 className="font-bold text-green-700 mb-3">{title}</h3>
      <div className="grid gap-4" style={{ gridTemplateColumns: gridTemplate }}>
        {fields.map((field) => (
          <div key={field.name} className="flex flex-col">
            <label className="font-semibold mb-1 text-left">
              {field.label}{" "}
              {field.required && <span className="text-red-500">*</span>}
            </label>
            {field.type === "text" && (
              <input
                {...field.fieldProps}
                type="text"
                className={`border rounded p-2 ${field.fieldProps?.className??""}`}
                value={values[field.name] ?? ""}
                onChange={(e) => handleChange(field.name, e.target.value)}
              />
            )}
            {field.type === "textarea" && (
              <textarea
                {...field.fieldProps}
                className={`border rounded p-2 resize-none ${
                  field.fieldProps?.className ?? ""
                }`}
                value={values[field.name] ?? ""}
                onChange={(e) => handleChange(field.name, e.target.value)}
              />
            )}
            {field.type === "select" && (
              <select
                {...field.fieldProps}
                className={`border rounded p-2 ${field.fieldProps?.className ?? ""}`}
                value={values[field.name] ?? ""}
                onChange={(e) => handleChange(field.name, e.target.value)}
              >
                <option value="">-- Chọn --</option>
                {field.options?.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            )}
            {field.type === "date" && (
              <input
                {...field.fieldProps}
                type="date"
                className={`border rounded p-2 ${field.fieldProps?.className ?? ""}`}
                value={
                  values[field.name]
                    ? dayjs(values[field.name]).format("YYYY-MM-DD")
                    : ""
                }
                onChange={(e) => handleChange(field.name, e.target.value)}
              />
            )}
            {errors[field.name] && (
              <span className="text-red-500 text-sm mt-1">
                {errors[field.name]}
              </span>
            )}
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="mt-4 flex gap-3">
        {buttons.map((btn, idx) => (
          <button
            key={idx}
            className={`px-4 py-2 rounded ${
              btn.type === "primary"
                ? "bg-green-600 text-white"
                : btn.type === "danger"
                ? "bg-red-500 text-white"
                : "bg-gray-200"
            }`}
            onClick={() => handleButtonClick(btn)}
          >
            {btn.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CustomForm;
