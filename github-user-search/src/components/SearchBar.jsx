import React, { useState } from "react";

export default function SearchBar({ onSearch }) {
    const [q, setQ] = useState("");

    const submit = (e) => {
        e.preventDefault();
        const trimmed = q.trim();
        if (trimmed) onSearch(trimmed);
    };

    return (
        <form onSubmit={submit} style={{ display: "flex", gap: 8, justifyContent: "center", marginTop: 12 }}>
            <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search GitHub users (e.g. torvalds)"
                style={{ padding: "8px 10px", minWidth: 280, borderRadius: 6, border: "1px solid #ddd" }}
            />
            <button type="submit" style={{ padding: "8px 12px", borderRadius: 6 }}>Search</button>
        </form>
    );
}
