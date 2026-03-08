import type { LucideIcon } from "lucide-react";
import { Link } from "react-router";

export type NavigationItemProps = {
    Label: string;
    LinksTo: string;
    Icon: LucideIcon;
    Active: boolean;
}

export default function NavigationItem(props: NavigationItemProps) {
    const { Label, LinksTo, Icon, Active } = props;

    return <Link to={LinksTo} className={`w-full flex items-center gap-2.5 px-[18px] py-[9px] text-left border-l-2 transition-colors duration-120 ${Active ? 'bg-bg-active border-accent-green' : 'border-transparent hover:bg-bg-hover'}`}>
        <Icon size={13} strokeWidth={1.5} className={Active ? 'text-accent-green' : 'text-text-dim'} />
        <span className={`text-base font-sans ${Active ? 'text-text-secondary font-medium' : 'text-text-ghost'}`}>{Label}</span>
    </Link>
}