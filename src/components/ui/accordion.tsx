import * as React from "react"
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"

interface AccordionItemProps {
  value: string
  children: React.ReactNode
  className?: string
  open?: boolean
  onToggle?: () => void
}

function AccordionItem({ children, className, open, onToggle }: AccordionItemProps) {
  return (
    <div
      className={cn("border-b", className)}
      data-state={open ? "open" : "closed"}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<any>, { open, onToggle })
        }
        return child
      })}
    </div>
  )
}

function AccordionTrigger({ children, className, open, onToggle }: {
  children: React.ReactNode; className?: string; open?: boolean; onToggle?: () => void
}) {
  return (
    <button
      type="button"
      className={cn(
        "flex flex-1 w-full items-center justify-between py-4 font-medium transition-all hover:underline text-left",
        className
      )}
      onClick={onToggle}
      aria-expanded={open}
    >
      {children}
      <ChevronDown
        className={cn("h-4 w-4 shrink-0 transition-transform duration-200", open && "rotate-180")}
      />
    </button>
  )
}

function AccordionContent({ children, className, open }: {
  children: React.ReactNode; className?: string; open?: boolean
}) {
  return (
    <div
      className={cn(
        "overflow-hidden text-sm transition-all",
        open ? "max-h-96 pb-4" : "max-h-0"
      )}
      style={{ transition: "max-height 0.3s ease" }}
    >
      <div className={className}>{children}</div>
    </div>
  )
}

interface AccordionProps {
  type?: "single" | "multiple"
  collapsible?: boolean
  className?: string
  children: React.ReactNode
}

function Accordion({ type = "single", collapsible = true, className, children }: AccordionProps) {
  const [openItems, setOpenItems] = React.useState<string[]>([])

  const toggle = (value: string) => {
    if (type === "single") {
      setOpenItems(prev => (collapsible && prev.includes(value)) ? [] : [value])
    } else {
      setOpenItems(prev =>
        prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value]
      )
    }
  }

  return (
    <div className={cn("w-full", className)}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          const value = (child.props as any).value
          return React.cloneElement(child as React.ReactElement<any>, {
            open: openItems.includes(value),
            onToggle: () => toggle(value),
          })
        }
        return child
      })}
    </div>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
