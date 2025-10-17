import { useState } from "react";

export default function usePaginated(data = [], itemsPerPage = 5){
    const [currentPage, setCurrentPage] = useState(1);
    const maxPage = Math.ceil(data.length / itemsPerPage);

    const currentData = () => {
        const start = (currentPage - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        return data.slice(start, end);
    }

    const prev = () => setCurrentPage((prev) => Math.max(prev - 1), 1);
    const next = () => setCurrentPage((prev) => Math.min(prev + 1), maxPage);

    return {prev, next, currentData, currentPage, maxPage};
}