const colors = [
    "#89ab9686", // green
    "#78a8c8",   // blue
    "#e7c3807e", // yellow
    "#d071717e"  // red
];

const text = "Dance With Me";
const coloredText = text.split("").map((eachLetter, i) => (
    <span key={i} style={{ color: colors[i % colors.length] }}>
        {eachLetter}
    </span>
));

export default function SongTitle() {
    return (
        <h1>{coloredText}</h1>
    )
}