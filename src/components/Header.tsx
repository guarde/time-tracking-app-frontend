export default function Header() {
    return <header className="h-header min-h-header flex shrink-0 bg-bg-surface border-b border-border font-mono">
        <div className="w-sidebar min-w-sidebar shrink-0 flex items-center px-[18px] border-r border-border">
            <div>
                <p className="text-lg font-sans font-semibold text-text-primary tracking-brand">TimeDev</p>
                <p className="text-xs text-text-whisper tracking-wide mt-px">v1.0.0</p>
            </div>
        </div>

        <div className="flex-1 flex items-center justify-end px-7">
            <div className="flex items-center gap-4">
                <span className="text-xs text-text-placeholder tracking-wider">
                    {new Date().toLocaleDateString("en-GB", {
                        weekday: "short",
                        day: "numeric",
                        month: "short"
                    }).toUpperCase()}
                </span>
            </div>
        </div>
    </header>
}