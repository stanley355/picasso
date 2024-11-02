
export  const parseDatacontentKeys= (datacontent: Record<string, string | number>) => {
    return {
        labelKey: "label",
        valueKeys: Object.keys(datacontent).filter((key)=> key !== "label")
    }
}