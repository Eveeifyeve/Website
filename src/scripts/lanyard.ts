


function statusColors(status: string, bg: boolean, border: boolean): string | null {
    switch (status) {
        case "online":
            if (bg) {
                return "bg-green-500";
            }
            if (border) {
                return "border-green-500";
            }
            break;
        case "idle":
            if (bg) {
                return "bg-yellow-500";
            }
            if (border) {
                return "border-yellow-500";
            }
            break;
        case "dnd":
            if (bg) {
                return "bg-red-500";
            }
            if (border) {
                return "border-red-500";
            }
            break;
        case "offline":
            if (bg) {
                return "bg-zinc-500";
            }
            if (border) {
                return "border-zinc-500";
            }
            break;
        default:
            return null;
    }
    return null;
}


export { statusColors };