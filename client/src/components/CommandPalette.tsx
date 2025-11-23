import { useEffect, useState } from "react";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { useLocation } from "wouter";
import { Search, FileText, Briefcase, DollarSign, Users } from "lucide-react";

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [, setLocation] = useLocation();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const commands = [
    {
      category: "Pages",
      items: [
        {
          id: "home",
          label: "Home",
          icon: Search,
          action: () => {
            setLocation("/");
            setOpen(false);
          },
        },
        {
          id: "about",
          label: "About Us",
          icon: Users,
          action: () => {
            setLocation("/about");
            setOpen(false);
          },
        },
        {
          id: "work",
          label: "Our Work",
          icon: Briefcase,
          action: () => {
            setLocation("/work");
            setOpen(false);
          },
        },
        {
          id: "pricing",
          label: "Pricing",
          icon: DollarSign,
          action: () => {
            setLocation("/pricing");
            setOpen(false);
          },
        },
      ],
    },
    {
      category: "Services",
      items: [
        {
          id: "branding",
          label: "Brand Identity Design",
          icon: Briefcase,
          action: () => {
            setLocation("/work");
            setOpen(false);
          },
        },
        {
          id: "logo",
          label: "Logo Design",
          icon: Briefcase,
          action: () => {
            setLocation("/work");
            setOpen(false);
          },
        },
        {
          id: "strategy",
          label: "Creative Strategy",
          icon: FileText,
          action: () => {
            setLocation("/about");
            setOpen(false);
          },
        },
      ],
    },
    {
      category: "Actions",
      items: [
        {
          id: "contact",
          label: "Get in Touch",
          icon: Search,
          action: () => {
            setLocation("/?section=contact");
            setOpen(false);
          },
        },
      ],
    },
  ];

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput
        placeholder="Search pages, services, or take an action..."
        data-testid="input-command-palette"
      />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        {commands.map((group) => (
          <CommandGroup key={group.category} heading={group.category}>
            {group.items.map((item) => {
              const Icon = item.icon;
              return (
                <CommandItem
                  key={item.id}
                  value={item.label}
                  onSelect={item.action}
                  data-testid={`command-${item.id}`}
                >
                  <Icon className="mr-2 h-4 w-4" />
                  <span>{item.label}</span>
                </CommandItem>
              );
            })}
          </CommandGroup>
        ))}
      </CommandList>
      <div className="border-t border-white/10 px-2 py-2 text-xs text-white/50">
        Press{" "}
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-white/20 bg-white/5 px-1.5 font-mono text-[10px] font-medium opacity-100">
          <span className="text-xs">⌘</span>K
        </kbd>{" "}
        to toggle
      </div>
    </CommandDialog>
  );
}
