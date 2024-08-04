import React from "react";
import { History } from "lucide-react";

const ChartItems = () => {
  return (
    <div className="flex justify-between px-4 pt-4">
      <h4 className="uppercase font-bold text-md">Round #698979</h4>

      <div className="flex items-center gap-2 border rounded-lg p-1">
        <History className="size-6" />
        <h4 className="font-bold text-md">History</h4>
      </div>
    </div>
  );
};

export default ChartItems;
