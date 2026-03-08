import type { LucideIcon } from "lucide-react";
import { Link } from "react-router";

export type DockItemProps = {
    LinksTo: string;
    Icon: LucideIcon;
}

export default function DockItem(props: DockItemProps) {
    const { LinksTo, Icon } = props;

    return <Link to={LinksTo} className="text-text-whisper hover:text-text-faint transition-colors duration-150 p-1 rounded">
        <Icon size={14} strokeWidth={1.5} />
    </Link>
}