import { useContext } from "react";
import { HolidayContext } from "../context/HolidayContextInstance";

export function useHolidayContext() {
    const context = useContext(HolidayContext);

    if (!context) {
        throw new Error('useHolidayContext must be used within a HolidayProvider');
    }

    return context;
}