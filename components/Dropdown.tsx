"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import "./Dropdown.css";

interface DropdownProps {
  title: string;
  items: { name: string; href: string }[];
  onItemClick?: () => void;
}

export default function Dropdown({
  title,
  items,
  onItemClick,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="dropdown" ref={dropdownRef}>
      <button
        className="dropdown-toggle"
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsOpen(true)}
      >
        {title}
        <span className={`dropdown-arrow ${isOpen ? "open" : ""}`}>▼</span>
      </button>
      {isOpen && (
        <div className="dropdown-menu" onMouseLeave={() => setIsOpen(false)}>
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="dropdown-item"
              onClick={() => {
                setIsOpen(false);
                onItemClick?.();
              }}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
