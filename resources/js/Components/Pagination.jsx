import { Link } from "@inertiajs/react";
import React from "react";

function Pagination({ links }) {
    return (
        <nav className="text-center mt-4">
            {links.map((link, index) => (
                <Link
                preserveScroll
                key={link.label}
                href={link.url || "#"}
                    dangerouslySetInnerHTML={{ __html: link.label }}
                    className={
                        "inline-block py-2 px-3 rounded-lg text-gray-700 text-xs " +
                        (link.active ? " bg-gray-950 " : "")+(!link.url ? " !text-gray-500 cursor-not-allowed " : "hover:bg-gray-950")
                    }
                ></Link>
            ))}
        </nav>
    );
}

export default Pagination;
