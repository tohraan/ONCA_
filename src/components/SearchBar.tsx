
import React, { useState } from 'react';

interface SearchBarProps {
    placeholder?: string;
    onSearch: (query: string) => void;
    icon?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
    placeholder = 'Search...',
    onSearch,
    icon = 'search',
}) => {
    const [query, setQuery] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSearch(query);
    };

    return (
        <form onSubmit={handleSubmit} className="relative flex-1">
            <span className="material-icons-round absolute left-4 top-1/2 -translate-y-1/2 text-beige-400">
                {icon}
            </span>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={placeholder}
                className="w-full pl-12 pr-4 py-3 bg-white border border-beige-200 rounded-input text-beige-900 placeholder-beige-400 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
            />
        </form>
    );
};

export default SearchBar;
