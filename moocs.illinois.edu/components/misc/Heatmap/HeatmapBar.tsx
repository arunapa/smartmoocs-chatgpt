import IHeatmapProps from "./IHeatmapBarProps";

/**
 * Converts an array of heat values into their corresponding color indexes. The
 * color index is computed between 0 and 255 so that each value corresponds to
 * some level of RGB color between 0 and 255. This method is immutable.
 * 
 * Note: This will be known as the Kassma equation.
 * 
 * @param heats The array of heat values.
 * @returns An array of their corresponding heat values.
 */
const calculateColors = (heats: number[]): number[] => {
    const MAX_VALUE = 255;
    let max = Math.max(...heats);
    const exponentiate = (newValue: number, exp: number = 3) => Math.pow((1 + newValue), exp) * newValue;

    return [...heats].map(heat => {
        let newValue = exponentiate(heat / max) / exponentiate(max);
        return MAX_VALUE - Math.floor(newValue * MAX_VALUE);
    });
}

/**
 * Generates a linear heat map bar based on an array of heat values.
 */
const Heatmap = ({heats, height = "0.8em", width = "100%", ...rest}: IHeatmapProps) => {
    const offsetPercent = Math.ceil(100 / heats.length);
    let heatValues: number[] = [];
    for (const heat of heats) heatValues.push(heat.heat);
    const colors = calculateColors(heatValues);

    return (
        <svg width={width} height={height} aria-label="Heatmap bar" {...rest}>
            <defs>
                <linearGradient id="gradient">
                    {colors.map((color, index) => (
                        <stop 
                            key={`stop-${index}`}
                            offset={`${offsetPercent * (index + 1)}%`}
                            stopColor={`rgb(255, ${color}, ${color})`}
                        />
                    ))}
                </linearGradient>
            </defs>
            <rect
                fill="url(#gradient)"
                width={width}
                height={height}
            />
        </svg>
    )
}

export default Heatmap;