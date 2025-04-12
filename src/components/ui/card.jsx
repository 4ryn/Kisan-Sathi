// src/components/ui/card.jsx
import React from "react";

export const Card = ({ children }) => (
  <div className="bg-white shadow-md rounded-xl p-6 m-4 max-w-3xl mx-auto">
    {children}
  </div>
);

export const CardContent = ({ children }) => (
  <div className="text-gray-800">{children}</div>
);
