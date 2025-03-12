import { FC } from "react";

export const Dropdown: FC<{ label: string; elements: string[], value: string, onChange:  (e: React.ChangeEvent<HTMLSelectElement>) => void; }> = ({ label, elements, value, onChange }) => {
    return (
        <div className="relative text-left">
            <label htmlFor="dropdown" className=" text-lg font-medium text-gray-700 mb-2">
                {label}
            </label>
            <select
                id="dropdown"
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                onChange={onChange}
            >
                {elements.map((element, index) => (
                    <option key={index} value={element}>
                        {element}
                    </option>
                ))}
            </select>
        </div>
    );
};
