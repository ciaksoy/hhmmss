export default function(fromSeconds: number, format: string): string {
    const hours = Math.floor(fromSeconds / 3600);
    let minutes = Math.floor((fromSeconds % 3600) / 60);
    let seconds = Math.floor(fromSeconds % 60);

    if (!format.includes("HH") && hours > 0) {
        minutes += hours * 60;
    }

    if (!format.includes("MM") && minutes > 0) {
        seconds += minutes * 60;
    }

    const replacements: { [key: string]: string } = {
        HH: hours.toString().padStart(2, "0"),
        MM: minutes.toString().padStart(2, "0"),
        SS: seconds.toString().padStart(2, "0"),
    };

    format = format.replace(/\((HH|MM|SS)[^)]*\)/g, (match, p1) => {
        return replacements[p1] === "00" ? "" : match.replace(p1, replacements[p1]).replace(/[()]/g, "");
    });

    return format.replace(/HH|MM|SS/g, (match) => replacements[match]);
}
