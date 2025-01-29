"use client"

import { useState } from "react"
import ApiComponent from "./data/ApiComponent"
import CosmeticsComponent from "./data/CosmeticsComp"
import SurgicalComponent from "./data/SurgicalComp"
import MedicineComponent from "./data/MedicineComp"
import NutraGeneralComponent from "./data/NutraComp"
import OncologyComp from "./data/OncologyComp"

const categories = [
  { name: "API", component: ApiComponent },
  { name: "Cosmetics", component: CosmeticsComponent },
  { name: "Surgical", component: SurgicalComponent },
  { name: "Formulation", component: MedicineComponent },
  { name: "Nutra General", component: NutraGeneralComponent },
  { name: "Oncology", component: OncologyComp } 
]

export default function Productpage() {
  const [activeCategory, setActiveCategory] = useState("API")

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={`px-4 py-2 rounded-md font-medium transition-colors ${
                activeCategory === category.name ? "bg-blue-600 text-white" : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        <div className="bg-white rounded-lg p-6">
          {activeCategory ? (
            categories.find((c) => c.name === activeCategory)?.component()
          ) : (
            <p className="text-center text-gray-500">Select a category to display content</p>
          )}
        </div>
      </div>
    </div>
  )
}

