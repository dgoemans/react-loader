export default class ColorHelper
{
    static lerpColor(a, b, amount) 
    { 
        
        var ah = parseInt(a.replace(/#/g, ''), 16),
            ar = ah >> 16, ag = ah >> 8 & 0xff, ab = ah & 0xff,
            bh = parseInt(b.replace(/#/g, ''), 16),
            br = bh >> 16, bg = bh >> 8 & 0xff, bb = bh & 0xff,
            rr = ar + amount * (br - ar),
            rg = ag + amount * (bg - ag),
            rb = ab + amount * (bb - ab);
    
        return '#' + ((1 << 24) + (rr << 16) + (rg << 8) + rb | 0).toString(16).slice(1);
    }

    static getLerpedColorAtProgress(percent, colors)
    {
        let progress = percent/100*colors.length;
        
        let currentColorIndex = Math.floor(progress) % colors.length;

        let nextColorIndex = (currentColorIndex + 1) % colors.length;

        return ColorHelper.lerpColor(colors[currentColorIndex], colors[nextColorIndex], progress % 1);
    }
};