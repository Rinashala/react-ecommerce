import React from 'react'

function ProductsPagination({ setCurrentPage, currentPage, numberOfPages }) {
    return (
        <div className="flex justify-center gap-4 mt-8">
            {Array.from({ length: numberOfPages }).map((_, i) => (
                <span
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`text-white px-4 py-2 rounded-lg cursor-pointer ${currentPage === i + 1 ? "bg-pink-600" : "bg-pink-400  hover:bg-pink-600 transition"}`}
                >
                    {i + 1}
                </span>
            ))}
        </div>
    )
}

export default ProductsPagination