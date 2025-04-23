"use client"
import { useState, useEffect } from "react";
import styles from "./page.module.css";
import { useSearchParams } from "next/navigation";

// COMPONENTS
import Sidebar from "@/components/sidebar/Sidebar";

// PAGES
import Inicio from "./inicio/Inicio";
import Proyectos from "./proyectos/Proyectos";
import Proyecto from "./proyecto/Proyecto";

export default function App() {
    const searchParams = useSearchParams();

    const [activePage, setActivePage] = useState<string>();
    const [id, setId] = useState<string>();

    useEffect(() => {
        const id = searchParams.get("id");
        setId(id || "");
    }, [searchParams]);

    return (
        <div className={styles.container}>
            <Sidebar onPageChange={setActivePage} />

            {activePage?.toLowerCase() === "inicio" && <Inicio />}
            {activePage?.toLowerCase() === "proyectos" && !id && <Proyectos />}
            {activePage?.toLowerCase() === "proyectos" && id && <Proyecto id={id}/>}
        </div>
    );
}