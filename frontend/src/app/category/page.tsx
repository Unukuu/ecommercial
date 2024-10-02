"use client";
import { Checkbox } from "@/components/ui/checkbox";

const Category = () => {
  return (
    <div className="container m-auto">
      <div>
        <div>
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Accept terms and conditions
            </label>
          </div>
        </div>
        <div></div>
      </div>
      <div></div>
    </div>
  );
};
export default Category;
