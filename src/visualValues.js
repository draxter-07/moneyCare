export const colorDarkGreen = "rgb(0, 200, 150)";
export const colorSoftGreen = "rgb(110, 200, 150)";
export const colorDarkBlue = "rgb(50, 80, 200)";

export const fontSizeLarge = "100px";
export const fontSizeMediumLarge = "28px";
export const fontSizeMedium = "17px";

export const fastTransition = "0.4s";
export const mediumTransition = "1s";

export const backChangeTime = "3s";

export const webkitStyle = `
::-webkit-scrollbar{
    width: 12px;
    height: 12px;
}

::-webkit-scrollbar-track{
    background: rgb(255, 255, 255);
}

::-webkit-scrollbar-thumb{
    background-color: ${colorDarkGreen};
    border-radius: 20px;
    border: 4px solid rgb(255, 255, 255);
}

::-webkit-scrollbar-button{
    height: 0px;
    padding: none;
    margin: none;
}`