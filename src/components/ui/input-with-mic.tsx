import * as React from "react"
import { cn } from "@/lib/utils"
import { Mic } from "lucide-react"

export interface InputWithMicProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  onMicClick?: () => void
}

const InputWithMic = React.forwardRef<HTMLInputElement, InputWithMicProps>(
  ({ className, type, onMicClick, ...props }, ref) => {
    return (
      <div className="relative">
        <input
          type={type}
          className={cn(
            "flex h-14 w-full rounded-lg border border-input bg-input/50 backdrop-blur-sm px-4 pr-12 py-3 text-base shadow-elegant transition-all duration-300 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-primary/50 focus-visible:shadow-glow disabled:cursor-not-allowed disabled:opacity-50 hover:bg-input/70",
            className
          )}
          ref={ref}
          {...props}
        />
        <button
          type="button"
          onClick={onMicClick}
          className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200 hover:scale-110"
          aria-label="Voice input"
        >
          <Mic className="h-5 w-5" />
        </button>
      </div>
    )
  }
)
InputWithMic.displayName = "InputWithMic"

export { InputWithMic }