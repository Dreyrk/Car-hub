"use client";

import { useState } from "react";
import Image from "next/image";
import { CarProps } from "../types";

interface CarCardProps {
  car: CarProps;
}

export default function CarCard({ car }: CarCardProps) {
  return (
    <div>
      <h1>car</h1>
    </div>
  );
}
