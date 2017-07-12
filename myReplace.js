const
    isCapitalized = str =>
        str.charAt(0).match(/[A-Z]/),
    capitalize = str =>
        str.charAt(0).toUpperCase()
            + str.slice(1)

module.exports = (str, before, after) =>
    str.replace(
        before,
        isCapitalized(before)
            ? capitalize(after)
            : after)
