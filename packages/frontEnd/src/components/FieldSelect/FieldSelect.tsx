import { ComponentProps } from "react";

export interface FieldSelectProps extends ComponentProps<"select"> {
    label: string;
    placeholder: string;
    options: { value: string; label: string }[];
    errors?: string;
};

export function FieldSelect({ label, placeholder, options, errors, ...props }: FieldSelectProps, ref: any) {
    return (
        <div className="">
            {label && <label className="block text-sm text-[#8E8E8E]  font-semibold">{label}</label>}
            <select
                ref={ref}
                {...props}
                className="w-full border h-[50px] p-4 rounded-xl outline-none text-sm border-[#AFAFAF] text-[#535353]"
            >
                <option value="" disabled>{placeholder}</option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            {errors && <span className="text-[#FC3117] text-xs">{errors}</span>}
        </div>
    );
}
