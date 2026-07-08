// import * as React from "react";
// import { cn } from "@/lib/utils";
// import { ChevronDown } from "lucide-react";

// interface AccordionItemProps {
//   value: string;
//   children: React.ReactNode;
//   className?: string;
//   open?: boolean;
//   onToggle?: () => void;
// }

// function AccordionItem({
//   children,
//   className,
//   open,
//   onToggle,
// }: AccordionItemProps) {
//   return (
//     <div
//       className={cn("border-b", className)}
//       data-state={open ? "open" : "closed"}
//     >
//       {React.Children.map(children, (child) => {
//         if (React.isValidElement<{ value?: string }>(child)) {
//           return React.cloneElement(child, { open, onToggle });
//         }
//         return child;
//       })}
//     </div>
//   );
// }

// function AccordionTrigger({
//   children,
//   className,
//   open,
//   onToggle,
// }: {
//   children: React.ReactNode;
//   className?: string;
//   open?: boolean;
//   onToggle?: () => void;
// }) {
//   return (
//     <button
//       type="button"
//       className={cn(
//         "flex flex-1 w-full items-center justify-between py-4 font-medium transition-all hover:underline text-left",
//         className,
//       )}
//       onClick={onToggle}
//       aria-expanded={open}
//     >
//       {children}
//       <ChevronDown
//         className={cn(
//           "h-4 w-4 shrink-0 transition-transform duration-200",
//           open && "rotate-180",
//         )}
//       />
//     </button>
//   );
// }

// function AccordionContent({
//   children,
//   className,
//   open,
// }: {
//   children: React.ReactNode;
//   className?: string;
//   open?: boolean;
// }) {
//   return (
//     <div
//       className={cn(
//         "overflow-hidden text-sm transition-all",
//         open ? "max-h-96 pb-4" : "max-h-0",
//       )}
//       style={{ transition: "max-height 0.3s ease" }}
//     >
//       <div className={className}>{children}</div>
//     </div>
//   );
// }

// interface AccordionProps {
//   type?: "single" | "multiple";
//   collapsible?: boolean;
//   className?: string;
//   children: React.ReactNode;
// }

// function Accordion({
//   type = "single",
//   collapsible = true,
//   className,
//   children,
// }: AccordionProps) {
//   const [openItems, setOpenItems] = React.useState<string[]>([]);

//   const toggle = (value: string) => {
//     if (type === "single") {
//       setOpenItems((prev) =>
//         collapsible && prev.includes(value) ? [] : [value],
//       );
//     } else {
//       setOpenItems((prev) =>
//         prev.includes(value)
//           ? prev.filter((v) => v !== value)
//           : [...prev, value],
//       );
//     }
//   };

//   return (
//     <div className={cn("w-full", className)}>
//       {React.Children.map(children, (child) => {
//         if (React.isValidElement<{ value?: string }>(child)) {
//           const value = child.props.value ?? "";
//           return React.cloneElement(child, {
//             open: openItems.includes(value),
//             onToggle: () => toggle(value),
//           });
//         }
//         return child;
//       })}
//     </div>
//   );
// }

// export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionContextType {
  multiple: boolean;
  openItems: string[];
  toggleItem: (value: string) => void;
}

const AccordionContext = React.createContext<AccordionContextType | null>(null);

interface AccordionProps {
  children: React.ReactNode;
  className?: string;
  multiple?: boolean;
  defaultValue?: string[];
}

function Accordion({
  children,
  className,
  multiple = false,
  defaultValue = [],
}: AccordionProps) {
  const [openItems, setOpenItems] = React.useState<string[]>(defaultValue);

  const toggleItem = (value: string) => {
    if (multiple) {
      setOpenItems((prev) =>
        prev.includes(value)
          ? prev.filter((v) => v !== value)
          : [...prev, value],
      );
    } else {
      setOpenItems((prev) => (prev.includes(value) ? [] : [value]));
    }
  };

  return (
    <AccordionContext.Provider
      value={{
        multiple,
        openItems,
        toggleItem,
      }}
    >
      <div className={cn("w-full", className)}>{children}</div>
    </AccordionContext.Provider>
  );
}

interface AccordionItemProps {
  value: string;
  children: React.ReactNode;
  className?: string;
}

function AccordionItem({ value, children, className }: AccordionItemProps) {
  const ctx = React.useContext(AccordionContext);

  if (!ctx) {
    throw new Error("AccordionItem must be inside Accordion");
  }

  const open = ctx.openItems.includes(value);

  return (
    <div
      className={cn("border-b border-border", className)}
      data-state={open ? "open" : "closed"}
    >
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return child;

        return React.cloneElement(child as React.ReactElement<any>, {
          open,
          onToggle: () => ctx.toggleItem(value),
        });
      })}
    </div>
  );
}

interface TriggerProps {
  children: React.ReactNode;
  className?: string;
  open?: boolean;
  onToggle?: () => void;
}

function AccordionTrigger({
  children,
  className,
  open,
  onToggle,
}: TriggerProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-expanded={open}
      className={cn(
        "flex w-full items-center justify-between py-4 text-left font-medium transition-all hover:underline",
        className,
      )}
    >
      {children}

      <ChevronDown
        className={cn(
          "h-4 w-4 transition-transform duration-200",
          open && "rotate-180",
        )}
      />
    </button>
  );
}

interface ContentProps {
  children: React.ReactNode;
  className?: string;
  open?: boolean;
}

function AccordionContent({ children, className, open }: ContentProps) {
  return (
    <div
      className={cn(
        "grid transition-all duration-300",
        open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
      )}
    >
      <div className="overflow-hidden">
        <div className={cn("pb-4 text-sm", className)}>{children}</div>
      </div>
    </div>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
